import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
import { Preferencia } from './entities/preferencia.entity';
import { PersonaService } from '../persona/persona.service';


@Injectable()
export class PreferenciasService {
  constructor(private readonly PersonaService:PersonaService){}
  preferencias: Preferencia[] = [];
  create(createPreferenciaDto: CreatePreferenciaDto) {
    const persona = this.PersonaService.findOne(createPreferenciaDto.personaId);
    if(persona == undefined){
    throw new NotFoundException()
    }
    if(createPreferenciaDto.cuantasConversaciones > 10){
    throw new BadRequestException()
    }

    const newPreferencia = new Preferencia();
    newPreferencia.cuantasConversaciones = createPreferenciaDto.cuantasConversaciones;
    newPreferencia.personaId = createPreferenciaDto.personaId;
    newPreferencia.noMolestar = createPreferenciaDto.noMolestar;
    newPreferencia.quienPuedeHablar = createPreferenciaDto.quienPuedeHablar;
    this.preferencias.push(newPreferencia);
  }

  findAll() {
    return this.preferencias;
  }

  findOne(id: number) {
    const preferencia = this.preferencias.find(p => p.id == id);
    if (!preferencia) {
      throw new NotFoundException()
    }
    return preferencia;
  }

  update(id: number, updatePreferenciaDto: UpdatePreferenciaDto) {
    const preferencia = this.preferencias.find(p => p.id == id);
    if (!preferencia) {
      throw new NotFoundException()
    }
    if(UpdatePreferenciaDto.)
  }

  remove(id: number) {
    const preferencia = this.preferencias.find(p => p.id == id);
    if (!preferencia) {
      throw new NotFoundException()
    }
    this.preferencias = this.preferencias.filter(o => o.id != id);
  
  }
}
