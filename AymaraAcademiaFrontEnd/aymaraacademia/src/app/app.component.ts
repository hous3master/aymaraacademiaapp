import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aymaraacademia';
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
}

/*import { Component } from '@angular/core';
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
*/
