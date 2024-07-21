import { Component } from '@angular/core';
import { ResisterComponent } from "../resister/resister.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registerMode = false;

  registerToggle(){
    this.registerMode = !this.registerMode
  }
}
