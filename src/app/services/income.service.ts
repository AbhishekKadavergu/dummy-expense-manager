import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  createIncURL = environment.apiURL+'/incomes'

  constructor(private http: HttpClient) { }

  createIncome(income:any){
    return this.http.post(this.createIncURL, income)
  }


}
