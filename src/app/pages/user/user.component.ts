import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'user',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>
      user works!
    </p>

    <router-outlet/>
  `,
  styles: ``
})
export class UserComponent {

}
