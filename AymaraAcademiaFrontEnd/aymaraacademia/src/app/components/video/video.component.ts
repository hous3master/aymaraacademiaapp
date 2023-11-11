import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-video',
templateUrl: './video.component.html',
styleUrls: ['./video.component.css'],
})
export class VideoComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
