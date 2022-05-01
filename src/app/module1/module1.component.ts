import {Component, OnInit} from '@angular/core';
import {Module1serviceService} from './service/module1service.service';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from '../sso.config';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {

  pede = 'LOL';
  peded;
  oauthService;

  constructor(service: Module1serviceService, oauthService: OAuthService) {
    this.peded = service.getCourses();
    this.oauthService = oauthService;
 //   this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get token() {
    const claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }

  ngOnInit(): void {
  }

}
