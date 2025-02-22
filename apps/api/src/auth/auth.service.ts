import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Response } from 'express';
import { UserRepository } from '../database/user.repository';
import { SessionRepository } from '../database/session.repository';
import { AuthLoginDTO, AuthRegisterDTO } from './auth.dto';
import { UserEntity } from '../database/user.entity';
import { generate } from 'randomstring';
import {
  JWT_SECRET,
  USER_DEFAULT_CREDITS,
  USER_DEFAULT_DUCKETS,
  USER_DEFAULT_HOME_ROOM,
  USER_DEFAULT_LOOK,
  USER_DEFAULT_MOTTO,
  USER_DEFAULT_POINTS,
} from '../app.const';
import { Injectable } from '@nestjs/common';
import { AuthLoginResponse } from '@crabshell/admin-client';
import { UserDTO } from '../user/user.dto';
import { AuthRegisterResponse } from '@crabshell/public-client';

const JWT_EXPIRATION = '1h';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly sessionRepo: SessionRepository,
  ) {}

  async validateUser(username: string, password: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: { username },
      relations: ['rank'],
    });

    if (!user || !user.password) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return user;
  }

  async generateSSO(userId: number): Promise<string> {
    const gameSSO: string = 'crabshell_' + generate(30) + '_' + userId;
    await this.userRepo.update({ id: userId }, { gameSSO });
    return gameSSO;
  }

  async login(loginDto: AuthLoginDTO): Promise<AuthLoginResponse> {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    const session = await this.sessionRepo.create({ userID: user.id });
    const token = jwt.sign({ id: session.id, userId: user.id! }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION,
    });
    return { token, user: UserDTO.fromEntity(user) };
  }

  async register(registerDto: AuthRegisterDTO): Promise<AuthRegisterResponse> {
    const existingUser = await this.userRepo.findOne({
      where: [{ username: registerDto.username }, { email: registerDto.email }],
      relations: ['rank'],
    });

    if (existingUser) {
      throw new Error('Username or email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(registerDto.password, salt);
    const now = Math.floor(Date.now() / 1000);
    const gameSSO: string = 'crabshell_' + generate(50) + '_new';

    const user = await this.userRepo.create({
      username: registerDto.username,
      password: hashedPassword,
      email: registerDto.email,
      gender: 1,
      accountCreatedAt: now,
      lastOnlineAt: now,
      ipLast: '127.0.0.1',
      ipRegistered: '127.0.0.1',
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

    return this.login({
      username: user.username,
      password: registerDto.password,
    });
  }

  logout(res: Response): Response {
    res.clearCookie('sessionId');
    return res.json({ message: 'Logged out successfully' });
  }
}
