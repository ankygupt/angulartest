import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LandingRouteEnum } from './landing.model';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,
    RouterLink,RouterModule,
    UpperCasePipe,TitleCasePipe],
  templateUrl: "./landing.component.html",
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  urls = [
    LandingRouteEnum.LANDING_ABOUT,
    LandingRouteEnum.LANDING_CONTACT,
    LandingRouteEnum.LANDING_LOGIN,
    LandingRouteEnum.LANDING_REGISTER
  ] 
}
