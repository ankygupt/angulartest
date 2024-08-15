import { Component, signal } from '@angular/core';
import { SharedDashboardComponent } from '../../../shared/dashboard/dashboard.component';
import { SharedNavbarComponent } from '../../../shared/navbar/navbar.component';
import { getUserType } from '../../../shared/storage';
import { HttpClient } from '@angular/common/http';
import { ApicallService } from '../../../apicall.service';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [SharedDashboardComponent,SharedNavbarComponent],
  templateUrl:'./dashboard.component.html',
  styles: ``,
  //providers:[HttpClient]
})
export class AdminDashboardComponent {
  userData = signal<string>(getUserType()!)

  constructor(private _api: ApicallService){

  }

  ngOnInit(): void{
      //this._api.call_get().subscribe((data)=>{console.log(data)},(err)=>{ console.log("logged error : ",err.status)});
      //this._api.call_get().subscribe((data)=>{console.log(data)},(err)=>{ console.log("logged error : ",err.status)});
      //this._api.call_get();
       this._api.call_get().subscribe((data)=>{console.log(data)},
       (err)=>{ console.log("abcS")});

    }




}
