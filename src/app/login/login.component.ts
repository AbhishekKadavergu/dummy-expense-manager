import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    // TODO: Use EventEmitter with form value
    try {
      const USER = await this.auth.login(this.profileForm.value).toPromise()
      if(!USER){
        throw new Error('Login failed')
      }

      console.log(USER)
      localStorage.setItem('token', USER.token)
      this.router.navigateByUrl('expense')

      
    } catch (error) {
      
    }
    console.warn(this.profileForm.value);
    console.log(JSON.stringify(this.profileForm.value))
    // this.auth.login().subscribe(res=>{
    //   console.log(res)
    // })
  }

}
