import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,  // <-- Ensure this is added
  imports: [RouterOutlet, FormsModule],  // <-- Add FormsModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Hello From Bridgelabz';
  logoUrl = './assets/images/BridgeLabz.jpg';
  
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from brigdeLabz ! ";
  }

  onClick($event:Event){
    console.log("Saved button on clicked",$event)
    window.open(this.logoUrl, "_blank");
  }

  // onInput($event:any) {
  //   console.log("Change event occured!", $event.data);
  //   const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  //   if (nameRegex.test(this.userName)) {
  //     this.nameError = "";
  //     return;
  //   }
  //   this.nameError = "Name is incorrect";
  // }
}


