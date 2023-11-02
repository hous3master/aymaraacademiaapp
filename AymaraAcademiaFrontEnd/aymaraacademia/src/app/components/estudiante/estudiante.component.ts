import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-estudiante',
templateUrl: './estudiante.component.html',
styleUrls: ['./estudiante.component.css'],
})
export class EstudianteComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
