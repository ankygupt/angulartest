import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'admin',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <router-outlet/>
  `,
  styles: ``
})
export class AdminComponent {

}
