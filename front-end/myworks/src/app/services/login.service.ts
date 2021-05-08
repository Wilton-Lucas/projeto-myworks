import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import LoginModel from '../interfaces/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL: string = `http://localhost:3000`;

  constructor(private $http: HttpClient) { }


  autenticar(login: LoginModel): any {
    return this.$http.get('${URL}/login');

  }
}
