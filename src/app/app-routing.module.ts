import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"home", canActivate:[AuthGuardGuard],component:HomeComponent},
  {path:"register", component:RegisterFormComponent},
  {path:"login", component:LoginComponent},
  {path:"movieDetails/:id" , component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
