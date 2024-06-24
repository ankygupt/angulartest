import { Component, signal } from '@angular/core';
import { SharedDashboardComponent } from '../../../shared/dashboard/dashboard.component';
import { SharedNavbarComponent } from '../../../shared/navbar/navbar.component';
import { getUserType } from '../../../shared/storage';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [SharedDashboardComponent,SharedNavbarComponent],
  template: `
    <p>
      dashboard works!
    </p>
    <shared-navbar [userType]="userData"/>
    <shared-dashboard/>
  `,
  styles: ``
})
export class UserDashboardComponent {

  userData = signal<string>(getUserType()!)
}
