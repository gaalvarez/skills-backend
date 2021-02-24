import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsModule } from './skills/skills.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [SkillsModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
