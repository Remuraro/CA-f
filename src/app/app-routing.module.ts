import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
		path : '',
		pathMatch : 'full',
		component : LoginComponent
	},
  {
		path : 'login',
		pathMatch : 'full',
		component : LoginComponent
	},
  {
		path : 'register',
		pathMatch : 'full',
		component : RegisterComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
