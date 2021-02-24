import { Injectable } from '@nestjs/common';

export interface ResponseReportModel {
  aprove: number;
  fail: number;
}

@Injectable()
export class ReportService {
  getResponseReport() {
    return { aprove: 30, fail: 70 };
  }
}
