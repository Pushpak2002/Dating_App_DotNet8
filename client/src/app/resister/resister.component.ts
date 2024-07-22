import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-resister',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resister.component.html',
  styleUrl: './resister.component.css'
})
export class ResisterComponent {

  private accountService = inject(AccountService);
  private toastr = inject(ToastrService);
  cancelResister = output<boolean>();


  model : any = {}

  register(){
    this.accountService.register(this.model).subscribe({
      next: response=>{
        console.log(response);
        this.cancel();
      },
      error:error=>this.toastr.error(error.error)
    })
  }

  cancel(){
    this.cancelResister.emit(false);
  }
}
