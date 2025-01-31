import { Controller, Get, Param } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDTO } from './group.dto';
import { GroupEntity } from '../database/group.entity';

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
}
