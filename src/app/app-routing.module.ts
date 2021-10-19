import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {
    path:'',redirectTo: 'login',pathMatch: 'full'
  },
  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'page1',component: Page1Component
  },
  {
    path: 'page2',component: Page2Component
  },
  {
    path: '**',redirectTo: 'login',pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
