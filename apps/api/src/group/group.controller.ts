import { Controller, Get, Param } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDTO } from './group.dto';
import { GroupEntity } from '../database/group.entity';
import { GroupPipe } from './group.pipe';
import { GroupWire } from '@crabshell/public-client';

@Controller('groups')
export class GroupControllers {
  constructor(private readonly groupService: GroupService) {}

  @Get('newest')
  async newest(): Promise<GroupDTO[]> {
    const onlineUsers: GroupEntity[] = await this.groupService.getNewest();
    return onlineUsers.map(GroupDTO.fromEntity);
  }

  @Get('popular')
  async popular(): Promise<GroupDTO[]> {
    const onlineUsers: GroupEntity[] = await this.groupService.getPopular();
    return onlineUsers.map(GroupDTO.fromEntity);
  }

  @Get(':groupId')
  getById(@Param('groupId', GroupPipe) group: GroupEntity): GroupWire {
    return GroupDTO.fromEntity(group);
  }
}
