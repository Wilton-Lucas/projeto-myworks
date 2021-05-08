import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import LoginModel from '../../interfaces/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: LoginModel;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private loginService: LoginService) {
    this.login = { username: '', password: '' };
  }

  userLogado: boolean = false;

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(parametro => {
      if (parametro['id'])
        alert(parametro['id']);
    });



  }

  fazerLogin() {
    this.loginService.autenticar(this.login).subscribe((x: any) => { alert(x); });
  }



}
