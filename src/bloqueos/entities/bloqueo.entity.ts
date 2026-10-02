import { Persona } from "../../persona/entities/persona.entity";

export class Bloqueo {
    id: number;
    bloqueante: Persona;
    bloqueado: Persona;
    seDesbloqueo: boolean;

}
