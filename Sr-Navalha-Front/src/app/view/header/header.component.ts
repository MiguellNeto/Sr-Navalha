import { Router } from '@angular/router';
import { MessageService } from './../../controllers/message.service';
import { LoginKeycloakService } from './../../controllers/loginKeykloac.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ads-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginKeycloakService, private message: MessageService, private route: Router) { }
  token: any = sessionStorage.getItem("access_token")
  nome: any = localStorage.getItem("name");
  tipo: any = localStorage.getItem("tipo");

  ngOnInit(): void {
    this.loginService.getIsAdmin()
    this.getToken()
    localStorage.setItem("access_token_ads04", this.token + "");
    if(this.estaLogado()){
      if(this.tipo =="cliente"){
        this.route.navigate(["/telaCliente"])
      }else if(this.tipo == "barbeiro"){
        this.route.navigate(["/telaBarbeiro"])
      }else{
        this.route.navigate(["/admin"])
      }
    }
  }

  login() {
    this.loginService.login();
  }

  getToken() {
    this.loginService.getToken();
  }

  sair() {
    this.loginService.logout()
    this.clearLocalStorage()
    setTimeout(() => {
      location.reload()
    }, 3000);
  }

  estaLogado(): boolean {
    return this.loginService.getIsLogged()
  }
  reloadPage() {
    location.reload()
  }
  clearLocalStorage() {
    localStorage.removeItem("preferred_username")
    localStorage.removeItem("loginEmail")
    localStorage.removeItem("access_token_ads04")
    localStorage.removeItem("name")
    localStorage.removeItem("tipo")
  }

}
