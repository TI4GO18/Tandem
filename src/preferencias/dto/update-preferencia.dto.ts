import { PartialType } from '@nestjs/mapped-types';
import { CreatePreferenciaDto } from './create-preferencia.dto';

export class UpdatePreferenciaDto extends PartialType(CreatePreferenciaDto) {

    personaId: number;
    quienPuedeHablar: number;
    cuantasConversaciones: number;
    noMolestar: boolean
}
