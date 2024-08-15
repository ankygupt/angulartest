import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'shared-dashboard',
  standalone: true,
  imports: [],
  template: `
    @if(userType() === 'user'){
      <h1>Dashboard for user</h1>
    }@else if(userType() === 'admin'){
      <h1>Dashboard for admin</h1>
    }@else{
      <h1>No use found</h1>
    }
  `,
  styles: ``
})
export class SharedDashboardComponent {
<<<<<<< HEAD
    userType = signal<string>('')
=======

  userType = input.required<string>()
>>>>>>> 02982ac6b31b5232df4c78f6bef0206fe3b3148a
}
