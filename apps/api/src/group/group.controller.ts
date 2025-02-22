import { Controller, Get, Param } from '@nestjs/common';
import { GroupDTO } from './group.dto';
import { GroupEntity } from '../database/group.entity';
import { GroupPipe } from './group.pipe';
import { GroupWire } from '@crabshell/public-client';
import { GroupRepository } from '../database/group.repository';

@Controller('groups')
export class GroupControllers {
  constructor(private readonly groupRepo: GroupRepository) {}

  @Get('newest')
  async newest(): Promise<GroupDTO[]> {
    const onlineUsers: GroupEntity[] = await this.groupRepo.find({
      order: {
        id: 'DESC',
      },
      take: 5,
      relations: ['members', 'members.user', 'members.user.rank'],
    });
    return onlineUsers.map(GroupDTO.fromEntity);
  }

  @Get('popular')
  async popular(): Promise<GroupDTO[]> {
    const onlineUsers: GroupEntity[] = await this.groupRepo.find({
      order: {
        id: 'DESC',
      },
      take: 5,
      relations: ['members', 'members.user', 'members.user.rank'],
    });
    return onlineUsers.map(GroupDTO.fromEntity);
  }

  @Get(':groupId')
  getById(@Param('groupId', GroupPipe) group: GroupEntity): GroupWire {
    return GroupDTO.fromEntity(group);
  }
}
