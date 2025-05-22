import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecurityContextComponent} from './components/security-context/security-context.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {OtpVerificationComponent} from './components/otp-verification/otp-verification.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path: '', redirectTo: '/security/context', pathMatch: 'full'},
  {path: 'context', component:SecurityContextComponent, children:[
      {path: '', redirectTo: '/security/context/home', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'otp-verification', component: OtpVerificationComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
