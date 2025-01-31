import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserRepository } from '../database/user.repository';
import { SessionRepository } from '../database/session.repository';
import { AuthLoginDTO, AuthRegisterDTO } from './auth.dto';
import { UserEntity } from '../database/user.entity';
import { FastifyReply } from 'fastify';
import { cookieConfig } from './auth.config';
import { generate } from 'randomstring';

import {
  USER_DEFAULT_CREDITS,
  USER_DEFAULT_DUCKETS,
  USER_DEFAULT_HOME_ROOM,
  USER_DEFAULT_LOOK,
  USER_DEFAULT_MOTTO,
  USER_DEFAULT_POINTS,
} from '../app.const';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sessionRepository: SessionRepository,
  ) {}

  async validateUser(username: string, password: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async login(
    loginDto: AuthLoginDTO,
    reply: FastifyReply,
  ): Promise<UserEntity> {
    const user = await this.validateUser(loginDto.username, loginDto.password);

    // Create session
    const session = await this.sessionRepository.create({
      userID: user.id,
    });

    // Set session cookie using the session ID
    reply.setCookie('sessionId', String(session.id), cookieConfig);

    return user;
  }

  async register(
    registerDto: AuthRegisterDTO,
    reply: FastifyReply,
  ): Promise<UserEntity> {
    const existingUser = await this.userRepository.findOne({
      where: [{ username: registerDto.username }, { email: registerDto.email }],
    });

    if (existingUser) {
      throw new UnauthorizedException('Username or email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(registerDto.password, salt);

    const now = Math.floor(Date.now() / 1000);

    const gameSSO: string = 'crabshell_' + generate(50) + '_' + 'new';

    const user = await this.userRepository.create({
      username: registerDto.username,
      password: hashedPassword,
      email: registerDto.email,
      gender: 1,
      accountCreatedAt: now,
      lastOnlineAt: now,
      ipLast: '127.0.0.1', // You should get this from request
      ipRegistered: '127.0.0.1', // You should get this from request
      onlineStatus: '0',
      rankID: 1,
      credits: USER_DEFAULT_CREDITS,
      vipPoints: USER_DEFAULT_POINTS,
      activityPoints: USER_DEFAULT_DUCKETS,
      look: USER_DEFAULT_LOOK,
      motto: USER_DEFAULT_MOTTO,
      homeRoomID: USER_DEFAULT_HOME_ROOM,
      gameSSO,
      machineAddress: generate(10),
    });

    return this.login(
      { username: user.username, password: registerDto.password },
      reply,
    );
  }

  async generateSSO(userId: number): Promise<string> {
    const gameSSO: string = 'crabshell_' + generate(50) + '_' + userId;
    await this.userRepository.update({ id: userId }, { gameSSO });
    return gameSSO;
  }

  async logout(sessionId: number, reply: FastifyReply) {
    await this.sessionRepository.delete({ id: sessionId });
    reply.clearCookie('sessionId');
    return { message: 'Logged out successfully' };
  }

  async validateSession(sessionId: number): Promise<UserEntity> {
    const session = await this.sessionRepository.findOne({
      where: { id: sessionId },
    });

    if (!session) {
      throw new UnauthorizedException('Invalid session');
    }

    const user = await this.userRepository.findOne({
      where: { id: session.userID },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }

  async getProfile(sessionId: number): Promise<UserEntity> {
    return this.validateSession(sessionId);
  }
}
