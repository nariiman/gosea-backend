import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.activityRepo.find({
      relations: ['destination'],
    });
  }

  async findByDestination(destinationId: number) {
    try {
      const activities = await this.activityRepo.find({
        where: { destinationId },
        relations: ['destination'],
      });
      return activities;
    } catch (error) {
      console.error('🔥 Error in findByDestination:', error.message || error);
      throw new NotFoundException('Failed to load activities');
    }
  }

  async getTypesByDestination(destinationId: number): Promise<string[]> {
    const rawTypes = await this.activityRepo
      .createQueryBuilder('activity')
      .select('DISTINCT activity.activity_type', 'type')
      .where('activity.destination_id = :destinationId', { destinationId })
      .andWhere('activity.activity_type IS NOT NULL')
      .getRawMany();

    return rawTypes.map((r) => r.type);
  }

  async findById(id: number): Promise<Activity | null> {
    return await this.activityRepo.findOne({
      where: { id },
      relations: ['destination'],
    });
  }
}
