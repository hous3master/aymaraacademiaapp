import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-unidad',
templateUrl: './unidad.component.html',
styleUrls: ['./unidad.component.css'],
})
export class UnidadComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
