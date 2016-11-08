import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LoginComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {

}
