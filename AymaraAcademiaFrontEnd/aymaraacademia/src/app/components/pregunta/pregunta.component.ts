import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-pregunta',
templateUrl: './pregunta.component.html',
styleUrls: ['./pregunta.component.css'],
})
export class PreguntaComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
