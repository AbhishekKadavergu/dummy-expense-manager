import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    age: ['']

  });

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    // TODO: Use EventEmitter with form value
    try {
      const USER = await this.auth.register(this.profileForm.value).toPromise()
      if(!USER){
        throw new Error('Registarion failed')
      }

      console.log(USER)
      
    } catch (error) {
      
    }
    console.warn(this.profileForm.value);
    // this.auth.login().subscribe(res=>{
    //   console.log(res)
    // })
  }

}
