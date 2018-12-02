import { Component, OnInit } from '@angular/core';
import { YoudownloadService } from 'src/app/core/http/youdownload.service'

@Component({
  selector: 'app-video-resources',
  templateUrl: './video-resources.component.html',
  styleUrls: ['./video-resources.component.scss']
})
export class VideoResourcesComponent implements OnInit {

  constructor(private youdownload: YoudownloadService) { }

  videoResponse = {};
  submitted = false;
  urlHtml = '';
  type = ['mp3', 'mp4'];
  videoID = ''
  timestamp = Date.now();
  apiurl = 'https://lolyoutube.com/download/';

  ngOnInit() {
  }

  getVideo = function () {
this.submitted= true;
    this.videoResponse = this.youdownload.getVideoLink('wcPtKlW78lU').subscribe(
      (data) => {console.log(data); this.urlHtml = data;},
      (err) => console.log(err.error.message),
      () => {}
    );  
  }

  submitId = function(videoId){
    this.submitted= true;
    this.urlHtml = this.apiurl+this.type[1]+'/'+videoId+'/'+this.timestamp;
  }

}
