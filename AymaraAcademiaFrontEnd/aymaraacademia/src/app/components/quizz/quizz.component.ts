import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-quizz',
templateUrl: './quizz.component.html',
styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
