import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorsInerface } from 'src/app/shared/types/backendErrors.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { loginAction } from '../../store/actions/login-actions';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInerface | null>;
  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  register(): void {
    const request: LoginRequestInterface = {  user: this.loginForm.value };
    this.store.dispatch(loginAction({request}));
  }

}
