import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-modulo',
templateUrl: './modulo.component.html',
styleUrls: ['./modulo.component.css'],
})
export class ModuloComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
