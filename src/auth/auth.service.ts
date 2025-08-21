import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { loginDTO, registerDTO } from 'src/auth/dtos/auth';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    async register(data: registerDTO) {
       const usuario_existente = await this.prisma.usuario.findUnique({
            where: { email: data.email }
        })

         if (usuario_existente){
            throw new UnauthorizedException('Usuário já existe')
        }

        const hashedSenha = await bcrypt.hash(data.senha, 10);
        const usuario = await this.prisma.usuario.create({
            data: {
                ...data,
                senha: hashedSenha,
            }
        });

        console.log({ data })
            return { 
                message: 'Usuário cadastrado com sucesso', 
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                isAdmin: usuario.isAdmin
            }

    }
    async login(data: loginDTO) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { email: data.email }
        })

        if(!usuario) {
            throw new UnauthorizedException("Credenciais inválidas")
        }

        const senhaValida = await bcrypt.compare(data.senha, usuario.senha)

        if(!senhaValida) {
            throw new UnauthorizedException('Credenciais inválidas')
        }

        const token_de_acesso = await this.jwtService.signAsync({ 
            id: usuario.id,
            nome: usuario.nome , 
            email: usuario.email,
            isAdmin: usuario.isAdmin
        })

        return { token_de_acesso }
    }
}