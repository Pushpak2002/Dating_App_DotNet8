import { Component, input, output } from '@angular/core';
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
  cancelResister = output<boolean>();


  model : any = {}

  register(){
    console.log(this.model);
  }

  cancel(){
    this.cancelResister.emit(false);
  }
}
