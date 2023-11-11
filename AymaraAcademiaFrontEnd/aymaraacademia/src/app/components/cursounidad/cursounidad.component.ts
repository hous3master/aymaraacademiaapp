import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-cursounidad',
templateUrl: './cursounidad.component.html',
styleUrls: ['./cursounidad.component.css'],
})
export class CursounidadComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
