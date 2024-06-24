import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pages',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>
      pages works!
    </p>

    <router-outlet/>
  `,
  styles: ``
})
export class PagesComponent {

  ngOnInit(){
    console.log('page compo')
  }
}
