import { Component, inject } from '@angular/core';
import {
  FormBuilder, FormControl,
  FormGroup, FormsModule, ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { getUserType, setUserType } from '../../../shared/storage';
import { Router } from '@angular/router';
import { PagesRoute, UserTypeRoute } from '../../../pages/pages.model';
@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: "./login.component.scss"
})
export class LoginComponent {

  private _fb = inject(FormBuilder);
  private _router = inject(Router)
  protected loginForm: FormGroup<ILoginForm> = this._fb.group({
    usertype: [UserTypeRoute.USER, Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required,
    Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)
    ])]
  })


  login(formData: FormGroup<ILoginForm>) {
    console.log('login')
    setUserType(formData.value.usertype)
    this._router.navigate([PagesRoute.DASHBOARD])
  }
}


export interface ILoginForm {
  usertype: FormControl,
  password: FormControl
}