import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {TodoCardComponent} from "./pages/todo-card/todo-card.component";
import {CanActivateTeam} from "./config/AuthInterceptor";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tasks', component: TodoCardComponent, canActivate: [CanActivateTeam]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateTeam]
})
export class AppRoutingModule { }
