import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SodaService {

  private baseUrl = 'http://localhost:8080/vending/soda';
  
  constructor(private http: HttpClient) { }

  soldSoda(id: number, value: any) {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }


  getSodaList(): Observable<any> 
  {
    return this.http.get(`${this.baseUrl}`);
  }

}