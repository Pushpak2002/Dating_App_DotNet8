import { Component, inject, OnInit } from '@angular/core';
import { ResisterComponent } from "../resister/resister.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);
  users: any;

  registerMode = false;

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response=> this.users = response,
      error: error => console.log(error),
      complete: ()=>console.log("Request has complete")
    })
  }
}
