import { PartialType } from '@nestjs/mapped-types';
import { CreateNivelIdiomaDto } from './create-nivel-idioma.dto';

export class UpdateNivelIdiomaDto extends PartialType(CreateNivelIdiomaDto) {

    nivelSabe: number;
    nivelAprende: number;
    personaId: number;
    idiomaCodigo: string;
}
