import { Module } from '@nestjs/common';
import { BloqueosService } from './bloqueos.service';
import { BloqueosController } from './bloqueos.controller';
import { PersonaModule } from '../persona/persona.module';

@Module({
  imports: [PersonaModule],
  controllers: [BloqueosController],
  providers: [BloqueosService],
})
export class BloqueosModule {}
