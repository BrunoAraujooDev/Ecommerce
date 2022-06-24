import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  position: number = 0;

  getPosition(){
    this.position = window.pageYOffset;  
  }
}
