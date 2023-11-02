import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-alternativa',
templateUrl: './alternativa.component.html',
styleUrls: ['./alternativa.component.css'],
})
export class AlternativaComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
