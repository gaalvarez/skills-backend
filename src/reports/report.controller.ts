import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('reports')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get('responses')
  reportResponses() {
    return this.reportService.getResponseReport();
  }
}
