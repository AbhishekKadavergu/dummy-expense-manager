import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExpenseComponent } from './expenses/create-expense/create-expense.component';
import { CreateIncomeComponent } from './incomes/create-income/create-income.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'expense', component: CreateExpenseComponent},
  {path: 'income', component: CreateIncomeComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
