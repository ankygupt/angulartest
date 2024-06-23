import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, 
  FormGroup, FormsModule, ReactiveFormsModule, 
  Validators } from '@angular/forms'
import { getUserType, setUserType } from '../../../shared/storage';
@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: "./login.component.scss"
})
export class LoginComponent {

  private _fb = inject(FormBuilder)

  protected loginForm: FormGroup<ILoginForm> = this._fb.group({
    usertype: ['user', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required,
    Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)
    ])]
  })


  login(formData: FormGroup<ILoginForm>) {
    console.log(formData.value)
    
    setUserType(formData.value.usertype)
    console.log(getUserType())
  }
}


export interface ILoginForm {
  usertype: FormControl,
  password: FormControl
}