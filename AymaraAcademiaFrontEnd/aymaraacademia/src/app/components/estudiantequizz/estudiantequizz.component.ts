import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-estudiantequizz',
templateUrl: './estudiantequizz.component.html',
styleUrls: ['./estudiantequizz.component.css'],
})
export class EstudiantequizzComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
