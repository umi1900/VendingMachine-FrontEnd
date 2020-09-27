import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseUrl = 'http://localhost:8080/vending/report';

  constructor(private http: HttpClient) { }
  
  createReport(report: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, report);
  }
  getReportList(): Observable<any> 
  {
    return this.http.get(`${this.baseUrl}`);
  }

}