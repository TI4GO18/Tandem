import { Persona } from "../../persona/entities/persona.entity";
 export enum TipoQuien{
    CUALQUIERA = 1,
    SOLOCOMPATIBLES = 2,
    NADIE = 3,
 }
export class Preferencia {
    id:number;
    personaId: number;
    quienPuedeHablar: TipoQuien;
    cuantasConversaciones: number = 5;
    noMolestar: boolean;
}
