import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  apiurl = 'https://math.ly/api/v1/arithmetic/simple.json?difficulty=intermediate'

  constructor(private http:HttpClient) { }

  public getExercice(){ 
    return this.http.get(this.apiurl);
  }
}
