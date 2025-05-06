import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from 'src/entities/Activity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepo: Repository<Activity>,
  ) {}

  findAll() {
    return this.activityRepo.find();
  }

  async findByDestination(destinationId: number) {
    try {
      return await this.activityRepo.find({
        where: { destinationId },
      });
    } catch (error) {
      console.error('🔥 Error in findByDestination:', error.message || error);
      throw error;
    }
  }
}
