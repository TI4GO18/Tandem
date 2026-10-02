import {Injectable} from '@nestjs/common';
import { Pais } from './entities/pais.entity';
@Injectable()

export class PaisesService {

  paises:Pais [] = [ new Pais (1,"Argentina"), new Pais (2,"Brasil"), new Pais (3,"Alemania"), new Pais (4,"Italia"), new Pais (5,"Estados Unidos")]


findAll() {
    return this.paises;
  }}