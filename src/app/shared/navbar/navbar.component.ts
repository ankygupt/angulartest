import { Component, Input, input, signal } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [],
  template: `
    @if(userType() === 'user'){
      <h1>Navbar for user</h1>
    }@else if(userType() === 'admin'){
      <h1>Navbar for admin</h1>
    }@else{
      <h1>No use found</h1>
    }
  `,
  styles: ``
})
export class SharedNavbarComponent {

  userType = input.required<string>()
  

}
