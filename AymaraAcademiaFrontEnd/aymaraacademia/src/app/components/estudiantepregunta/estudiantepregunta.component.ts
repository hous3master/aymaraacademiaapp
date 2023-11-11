import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-estudiantepregunta',
templateUrl: './estudiantepregunta.component.html',
styleUrls: ['./estudiantepregunta.component.css'],
})
export class EstudiantepreguntaComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
