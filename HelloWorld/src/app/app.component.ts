import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello From Bridgelabz';
  logoUrl = './assets/images/BridgeLabz.jpg';
  
  userName: string = '';
  nameError: string = '';

  ngOnInit(): void {
    this.title = "Hello from Bridgelabz!";
  }

  onClick($event: Event) {
    console.log("Saved button clicked", $event);
    window.open(this.logoUrl, "_blank");
  }

  onInput($event: any) {
    console.log("Change event occurred!", $event.data);
    const nameRegex = new RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.nameError = nameRegex.test(this.userName) ? '' : 'Name is incorrect';
  }
}
