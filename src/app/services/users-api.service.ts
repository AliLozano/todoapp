import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {environment} from "../../environments/environment";

export interface User {
  email: string;
  name: string;
  token: string;
}

export interface UserResponse {
  id: number;
  username: string;
  token: string,
}
@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private httpClient: HttpClient) { }

  async login(email: string, password: string): Promise<User | undefined> {

    const user = await firstValueFrom(this.httpClient.post<UserResponse | string>(`${environment.apiUrl}/api/users/login`, {
      username: email,
      password: password,
    }));

    if(user === '') {
      return undefined;
    } else {
      const currentUser = user as UserResponse
      return {
        email: "...",
        name: currentUser.username,
        token: currentUser.token,
      }
    }
  }

}
