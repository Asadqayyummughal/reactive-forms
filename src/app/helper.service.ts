import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    let url='https://jsonplaceholder.typicode.com/todos';
   return this.http.get(url)
    .pipe(
      catchError(
        (error:any)=>{
         console.log('error occured');
         return throwError(error)
        }
      )

    )
  }
}
