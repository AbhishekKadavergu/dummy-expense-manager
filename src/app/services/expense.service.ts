import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  createExpURL = environment.apiURL+'/expenses'

  constructor(private http: HttpClient) { }

  createExpense(exp:any){
    return this.http.post(this.createExpURL, exp)
  }
}
