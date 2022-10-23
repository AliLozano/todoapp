import { Component, OnInit } from '@angular/core';
import {UsersApiService} from "../../services/users-api.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../config/authentication.service";

interface UserCredentials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message = ""

  credentials: UserCredentials = { username: "", password: ""}

  constructor(private userApi: UsersApiService,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    const result = await this.userApi.login(this.credentials.username, this.credentials.password);
    if(!result) {
      this.message = "Usuario y/o contraseña incorrecto"
    } else {
      this.authenticationService.authenticate(result)
      await this.router.navigate(["tasks"])
    }
  }

}
