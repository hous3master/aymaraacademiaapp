import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-role',
templateUrl: './role.component.html',
styleUrls: ['./role.component.css'],
})
export class RoleComponent {
constructor(public route: ActivatedRoute) {}

ngOnInit(): void {}
}
