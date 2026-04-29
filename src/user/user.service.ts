import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService){}
    async create(user){
        return this.prismaService.users.create({
            data:{
                name: user.name,
                email: user.email,
                password: user.password,
            }
        })
    }
}
