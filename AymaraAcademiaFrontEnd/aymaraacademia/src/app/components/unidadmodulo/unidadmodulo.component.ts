import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-unidadmodulo',
templateUrl: './unidadmodulo.component.html',
styleUrls: ['./unidadmodulo.component.css'],
})
export class UnidadmoduloComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
