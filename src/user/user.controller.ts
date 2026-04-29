import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Put,
  Delete,
  ParseIntPipe
} from '@nestjs/common';
import { CreateUserDTO } from './DTOs/create-user-dto';
import { UpdateUserDTO } from './DTOs/update-user-dto';
import { UpdatePatchUserDTO } from './DTOs/update-partial-user-dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return { body };
  }
  @Get()
  async read() {
    return { name: 'joao' };
  }
  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
  @Put(':id')
  async update(@Body() body: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'put',
      body,
      id,
    };
  }
  @Patch(':id')
  async updatePartial(@Body() body: UpdatePatchUserDTO, 
  @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'patch',
      body,
      id,
    };
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
