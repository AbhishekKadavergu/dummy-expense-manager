import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {

  profileForm = this.fb.group({
    amount: ['', Validators.required],
    category: ['', Validators.required],
    date: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private expSer: ExpenseService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    // TODO: Use EventEmitter with form value
    try {
      const EXPENSE = await this.expSer.createExpense(this.profileForm.value).toPromise()
      if(!EXPENSE){
        throw new Error('Registarion failed')
      }

      console.log(EXPENSE)
      
    } catch (error) {
      
    }
    console.warn(this.profileForm.value);
    // this.auth.login().subscribe(res=>{
    //   console.log(res)
    // })
  }

}
