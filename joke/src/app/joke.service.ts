import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  _url= "https://icanhazdadjoke.com/";

  constructor(private http:HttpClient) { }

  get() : Observable<any>{
    return this.http.get<any>(this._url,{headers:{'Accept':'application/json'}});
  }
}
