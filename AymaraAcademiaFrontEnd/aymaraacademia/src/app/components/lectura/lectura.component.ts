import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-lectura',
templateUrl: './lectura.component.html',
styleUrls: ['./lectura.component.css'],
})
export class LecturaComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
