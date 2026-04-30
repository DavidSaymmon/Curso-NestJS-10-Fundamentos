import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './DTOs/create-user-dto';
@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async create(user: CreateUserDTO) {
    return await this.prismaService.users.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }
}
