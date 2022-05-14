import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';
import { IncomeService } from 'src/app/services/income.service';
@Component({
  selector: 'app-create-income',
  templateUrl: './create-income.component.html',
  styleUrls: ['./create-income.component.css']
})
export class CreateIncomeComponent implements OnInit {
  profileForm = this.fb.group({
    amount: ['', Validators.required],
    category: ['', Validators.required],
    date: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private incSer: IncomeService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    // TODO: Use EventEmitter with form value
    try {
      const INCOME = await this.incSer.createIncome(this.profileForm.value).toPromise()
      if(!INCOME){
        throw new Error('Registarion failed')
      }

      console.log(INCOME)
      
    } catch (error) {
      
    }
    console.warn(this.profileForm.value);
    // this.auth.login().subscribe(res=>{
    //   console.log(res)
    // })
  }

}

