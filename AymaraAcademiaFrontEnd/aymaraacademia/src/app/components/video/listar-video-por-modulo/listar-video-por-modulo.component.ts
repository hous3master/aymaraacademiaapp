import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-listar-video-por-modulo',
  templateUrl: './listar-video-por-modulo.component.html',
  styleUrls: ['./listar-video-por-modulo.component.css'],
})
export class ListarVideoPorModuloComponent implements OnInit {
  @Input() idModulo: number = 0;
  videos: any[] = []; // replace with actual type of video object
  showTranscription = false; // Add this line

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    // Get all videos and then filter them by idModulo and print them on console
    this.videoService.list().subscribe((data) => {
      this.videos = data;
      this.videos = this.videos.filter((video) => {
        return video.modulo.idModulo == this.idModulo;
      });
      console.log(this.videos);
    });
  }
}
