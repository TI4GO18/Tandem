import { Injectable } from '@nestjs/common';
import { CreateNivelIdiomaDto } from './dto/create-nivel-idioma.dto';
import { UpdateNivelIdiomaDto } from './dto/update-nivel-idioma.dto';

@Injectable()
export class NivelIdiomaService {
  create(createNivelIdiomaDto: CreateNivelIdiomaDto) {
    return 'This action adds a new nivelIdioma';
  }

  findAll() {
    return `This action returns all nivelIdioma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nivelIdioma`;
  }

  update(id: number, updateNivelIdiomaDto: UpdateNivelIdiomaDto) {
    return `This action updates a #${id} nivelIdioma`;
  }

  remove(id: number) {
    return `This action removes a #${id} nivelIdioma`;
  }
}
