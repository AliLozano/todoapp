import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../config/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get user() {
    return this.authenticationService.getUser()
  }

  async logout() {
    this.authenticationService.logout()
    await this.router.navigate(['/'])
  }

}
