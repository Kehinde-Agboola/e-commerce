import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpclient: HttpClient) {}
  private apiUrl: string = `https://dummyjson.com/products`;

  getAllProducts() {
    // return this.http.get<any[]>('https://dummyjson.com/products');
    let dataUrl: string = `${this.apiUrl}`;

    return this.httpclient.get(dataUrl).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: String = '';
    if (error.error instanceof ErrorEvent) {
      // Client Error

      errorMessage = `Error : ${error.error.message}`;
      console.log(errorMessage);
    } else {
      // server Error
      errorMessage = `Status : ${error.status} \n Message: ${error.message} `;
    }
    return throwError(errorMessage);
  }
}
// console.log(errorMessage)
