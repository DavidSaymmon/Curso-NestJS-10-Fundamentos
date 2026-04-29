import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './DTOs/create-user-dto';

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
  async readOne(@Param() id: string) {
    return { id };
  }
  @Put(':id')
  async update(@Body() body, @Param() params) {
    return {
      method: 'put',
      body,
      params,
    };
  }
  @Patch(':id')
  async updatePartial(@Body() body, @Param() params) {
    return {
      method: 'patch',
      body,
      params,
    };
  }
  @Delete(':id')
  async delete(@Param() params) {
    return {
      params,
    };
  }
}
