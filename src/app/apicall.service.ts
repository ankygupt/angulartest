import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { captureError } from 'rxjs/internal/util/errorContext';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private _http:HttpClient,private _route:Router) { }

  // call_get(){
  //   return this._http.get("https://reqres.in/api/unknown/23");
  // }
  // call_get():Observable<object>{
  //   return this._http.get("https://reqres.in/api/unknown/23");
  // }
  call_get(){
   let  headers={ 'Authorization' : 'Bearer akshu', 'My-Custom-Header': 'foobar' };
      return this._http.post( "https://reqres.in/api/", {
        "name": "morpheus",
        "job": "leader"
    }, {headers}).pipe(catchError((err,caugh) => {
      //caugh.subscribe((cv)=>console.log(cv)).unsubscribe();
      //console.log("error code: ",err.status);

      if(err.status==402){
        this._route.navigate(['/login']);
      }

      return  of("errors hai isme");
       // Use console.log(err) for detail
  }))
}


}
