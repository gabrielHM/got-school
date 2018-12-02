import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Timeouts } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})


export class YoudownloadService {

  // 'https://lolyoutube.com/download/{mp3, mp4 or m4a}/YOUTUBE_VIDEO_ID/TIMESTAMP'
  apiurl = 'https://lolyoutube.com/download/';

  type = ['mp3', 'mp4'];
  timestamp = Date.now();

  constructor(private http:HttpClient) { }

  public getVideoLink(videoId){ 
    console.log(this.timestamp);

    var url = this.apiurl+this.type[1]+'/'+videoId+'/'+this.timestamp;
    console.log(url);
    return this.http.get(this.apiurl+this.type[1]+'/'+videoId+'/'+this.timestamp);
  }

}
