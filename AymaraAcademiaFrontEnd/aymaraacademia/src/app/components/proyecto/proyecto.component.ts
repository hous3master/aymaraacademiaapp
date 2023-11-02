import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-proyecto',
templateUrl: './proyecto.component.html',
styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
