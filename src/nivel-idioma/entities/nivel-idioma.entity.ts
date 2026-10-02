import { Persona } from "../../persona/entities/persona.entity";
import{ Idioma } from "../../idioma/entities/idioma.entity";

export class NivelIdioma {
    id: number;
    nivelSabe: number;
    nivelAprende: number;
    persona: Persona;
    idioma: Idioma;
}
