import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-preguntaalternativa',
templateUrl: './preguntaalternativa.component.html',
styleUrls: ['./preguntaalternativa.component.css'],
})
export class PreguntaalternativaComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
