import { Injectable } from '@nestjs/common';
import { CreateBloqueoDto } from './dto/create-bloqueo.dto';
import { UpdateBloqueoDto } from './dto/update-bloqueo.dto';
import { Bloqueo } from './entities/bloqueo.entity';
import { PersonaService } from '../persona/persona.service';

@Injectable()
export class BloqueosService {
  constructor(private readonly personaService: PersonaService) {}
  bloqueos: Bloqueo[] = []
  create(createBloqueoDto: CreateBloqueoDto) {
    const bloqueante = this.personaService.findOne(createBloqueoDto.bloqueanteId);
    const bloqueado = this.personaService.findOne(createBloqueoDto.bloqueadoId);
    const newBloqueo = new Bloqueo();
    newBloqueo.id = (this.bloqueos.length + 1);
    newBloqueo.bloqueante = bloqueante;
    newBloqueo.bloqueado = bloqueado;
    
  }

  findAll() {
    return `This action returns all bloqueos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloqueo`;
  }

  update(id: number, updateBloqueoDto: UpdateBloqueoDto) {
    return `This action updates a #${id} bloqueo`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloqueo`;
  }
}
