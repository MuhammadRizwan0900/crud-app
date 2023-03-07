import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  create(body: any): Promise<User[]> {
    return this.usersRepository.save(body);
  }
  update(id: number, body: any): Promise<User[]> {
    body.id = id;
    return this.usersRepository.save(body);
  }
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<any> {
    return await this.usersRepository.delete(id);
  }
}