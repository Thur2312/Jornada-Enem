import { Controller, Get, Param, Put, Delete, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findAll(@Request() req) {
    const usuarios = await this.prisma.usuario.findMany();
    return usuarios;
  }

  @Get(':id')
    async findOne(@Param('id') id: string, @Request() req) {
      const usuario = await this.prisma.usuario.findUnique({ where: { id: parseInt(id, 10) } });
      if (!usuario) {
        return { message: 'Usuário não encontrado' };
      }
      return usuario;
  }

  @Put(':id')
    async update(@Param('id') id: string, @Body() body, @Request() req) {
      if (body.hasOwnProperty('isAdmin')) {
        body.isAdmin = body.isAdmin === true || body.isAdmin === 'true';
      }
      if (req.user.id !== parseInt(id, 10) && !req.user.isAdmin) {
        throw new Error('Acesso negado: apenas o próprio usuário ou admin pode atualizar.');
      }
      if (body.senha) {
        const bcrypt = require('bcrypt');
        body.senha = await bcrypt.hash(body.senha, 10);
      }
      const usuarioAtualizado = await this.prisma.usuario.update({
        where: { id: parseInt(id, 10) },
        data: body,
      });
      return { message: `Usuário ${id} atualizado com sucesso`, usuario: usuarioAtualizado };
  }

  @Delete(':id')
    async remove(@Param('id') id: string, @Request() req) {
      if (req.user.id !== parseInt(id, 10) && !req.user.isAdmin) {
        throw new Error('Acesso negado: apenas o próprio usuário ou admin pode remover.');
      }
      await this.prisma.usuario.delete({ where: { id: parseInt(id, 10) } });
      return { message: `Usuário ${id} removido (protegido)`, user: req.user };
  }
}
