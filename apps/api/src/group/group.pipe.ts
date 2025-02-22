import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { GroupRepository } from '../database/group.repository';
import { GroupEntity } from '../database/group.entity';

@Injectable()
export class GroupPipe implements PipeTransform {
  constructor(private readonly groupRepo: GroupRepository) {}

  async transform(groupID: number): Promise<GroupEntity> {
    const group = await this.groupRepo.findOne({
      where: {
        id: groupID,
      },
      relations: ['members', 'members.user', 'members.user.rank'],
    });

    if (!group) {
      throw new NotFoundException('Group does not exist');
    }

    return group;
  }
}
