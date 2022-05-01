import {Component, OnInit} from '@angular/core';
import {Module1serviceService} from './module1/service/module1service.service';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularBeginner';

  oauthService;

  constructor(oauthService: OAuthService) {
    this.oauthService = oauthService;
    this.configureSingleSignOn();
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
    {
    }
  }
}
