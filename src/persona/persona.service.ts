import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import {PaisesService} from './paises.service';

@Injectable()
export class PersonaService {
  constructor( private readonly paisesService:PaisesService) {}
  personas: Persona[] = [];

  create(createPersonaDto: CreatePersonaDto) {
    const nombre = createPersonaDto.nombre;
    const apellido = createPersonaDto.apellido;
    const alias = createPersonaDto.alias;
    const paisDeResidencia = createPersonaDto.paisDeResidencia;
    const email = createPersonaDto.email;
    const estado = true;
    if(this.personas.filter(p => p.alias == alias).length > 0){
      throw new BadRequestException()
    }
    if(this.paisesService.findAll().find( p => p.nombre == createPersonaDto.paisDeResidencia) == undefined){
      throw new BadRequestException()
    }
    const newPersona = new Persona();
    newPersona.id = (this.personas.length + 1);
    newPersona.nombre = nombre;
    newPersona.apellido = apellido;
    newPersona.alias = alias;
    newPersona.paisDeResidencia = paisDeResidencia;
    newPersona.email = email;
    newPersona.estado = estado;
    this.personas.push(newPersona);
    return newPersona.id;
  }

  findAll() {
    return this.personas;
  }

  findOne(id: number) {
    const persona = this.personas.find(p => p.id == id);
    if (!persona) {
      throw new NotFoundException();
    }
    return persona;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const persona = this.personas.find(p => p.id == id);
    if (!persona) {
      throw new NotFoundException();
    }
    if(updatePersonaDto.nombre){
      persona.nombre = updatePersonaDto.nombre;
    }
    if(updatePersonaDto.apellido){
      persona.apellido = updatePersonaDto.apellido;
    }
    if(updatePersonaDto.alias){
      const alias = updatePersonaDto.alias;
      if (this.personas.filter(p => p.alias == alias).length > 0){
      throw new BadRequestException() }
      else{
      persona.alias = alias;
      }
    }
    if(updatePersonaDto.paisDeResidencia){
      if(this.paisesService.findAll().find( p => p.nombre == updatePersonaDto.paisDeResidencia) == undefined){
      throw new BadRequestException()
    }
      persona.paisDeResidencia = updatePersonaDto.paisDeResidencia;
    }
    if(updatePersonaDto.email){
      persona.email = updatePersonaDto.email;
    }
    if(updatePersonaDto.estado){
      persona.estado = updatePersonaDto.estado;
    }

    
  }

  remove(id: number) {
    const persona = this.personas.find(p => p.id == id);
    if (!persona) {
      throw new NotFoundException();
    }
    this.personas = this.personas.filter(p => p.id != id);

  }
}
