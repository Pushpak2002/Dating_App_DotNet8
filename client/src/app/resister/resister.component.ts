import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resister',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resister.component.html',
  styleUrl: './resister.component.css'
})
export class ResisterComponent {
  usersFromHomeComponent = input.required<any>();
  model : any = {}

  register(){
    console.log(this.model);
  }

  cancel(){
    console.log('cancelled');
  }
}
