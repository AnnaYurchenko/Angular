import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // place where angular find a point to entrance
  templateUrl: './app.component.html', // link to template
  styleUrls: ['./app.component.css'] // styles
})
export class AppComponent {
  title = 'Tour of Heroes';
}
