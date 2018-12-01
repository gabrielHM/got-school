import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  // Key (Elementary Dictionary):
  // 83590883-ed21-449b-b3f1-46f5c60887b5
  // Key (Intermediate Dictionary):
  // 3012115b-9b25-4f88-a1ca-37a7bb234c24
  private elementaryDictionaryKey = '83590883-ed21-449b-b3f1-46f5c60887b5';
  private intermediateDictionaryKey = '3012115b-9b25-4f88-a1ca-37a7bb234c24';
  private elementaryApi = 'https://www.dictionaryapi.com/api/v3/references/sd2/json/'
  private IntermediateApi = 'https://www.dictionaryapi.com/api/v3/references/sd2/json/school?key='

  constructor(private http:HttpClient) { }

  public getDefinition(word){ 
      return this.http.get(this.elementaryApi+word+'?key='+this.elementaryDictionaryKey);
    }
}
