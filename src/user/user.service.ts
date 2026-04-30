import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './DTOs/create-user-dto';
import { UpdatePatchUserDTO } from './DTOs/update-partial-user-dto';
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
  async read() {
    return await this.prismaService.users.findMany({});
  }
  async readOne(id: number) {
    return await this.prismaService.users.findUnique({
      where: { id: id },
    });
  }
  async updatePartial(body: UpdatePatchUserDTO, id: number) {
    return await this.prismaService.users.update({
      where: { id: id },
      data: body,
    });
  }
  async delete(id: number) {
    return await this.prismaService.users.delete({
      where: { id: id },
    });
  }
}
