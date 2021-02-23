import { Controller, Get, Param } from '@nestjs/common';
import { QuizModel } from './skill.model';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @Get('/quizzes')
  getQuizListData(): QuizModel[] {
    return this.skillService.getQuizListData();
  }

  @Get('/quizzes/:id')
  getQuizQuestions(@Param('id') id: number): QuizModel {
    return this.skillService.getQuizQuestions(+id);
  }
}
