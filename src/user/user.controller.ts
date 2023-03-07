import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return await this.userService.update(+id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
