import { Injectable } from '@nestjs/common';
import { GroupRepository } from '../database/group.repository';
import { GroupEntity } from '../database/group.entity';

@Injectable()
export class GroupService {
  constructor(private readonly groupRepo: GroupRepository) {}

  async getNewest(): Promise<GroupEntity[]> {
    return this.groupRepo.find({
      order: {
        id: 'DESC',
      },
      take: 5,
    });
  }

  async getPopular(): Promise<GroupEntity[]> {
    return this.groupRepo.find({
      order: {
        id: 'DESC',
      },
      take: 5,
    });
  }
}
