import { ILogin } from '@/app/core/models';
import { AuthService } from '@/app/data/services/auth/auth.service';
import { AuthFacade } from '@/app/facades';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loadingLogin$!: Observable<boolean>;
  loginError$!: Observable<string | null>;

  loginForm!: FormGroup;

  private _authSrv: AuthService = Inject(AuthService);
  private _authFacadde: AuthFacade = Inject(AuthFacade);

  constructor() {
    this.loadingLogin$ = this._authFacadde.isLoading$;
    this.loginError$ = this._authFacadde.isError$;
    this._initForm();
  }

  private _initForm() {

    this.loginForm = new FormGroup({
      email: new FormControl('', { nonNullable: true, validators: [Validators.email, Validators.minLength(5)] }),
      password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(5)] }),
    });
  }

  onSubmitForm() {
    try {
      if (this.loginForm.invalid)
        throw new Error('Form is invalid');

      // this._authSrv.login(this.loginForm.getRawValue())
      //   .subscribe(() => console.log('success login'));

      const data: ILogin = { ...this.loginForm.getRawValue() };
      this._authFacadde.login(data);
      console.log(data);
    } catch (error) {
      console.error(error);

    }

  }

}
