import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-progreso',
templateUrl: './progreso.component.html',
styleUrls: ['./progreso.component.css'],
})
export class ProgresoComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
