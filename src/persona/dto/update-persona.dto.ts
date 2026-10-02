import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './create-persona.dto';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {

    nombre?: string;
    apellido?: string;
    alias?: string;  
    pasiDeResidencia?: string;
    email?: string;
    estado?: boolean;
}
