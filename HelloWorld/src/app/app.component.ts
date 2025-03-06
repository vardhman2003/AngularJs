import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello From Bridgelabz';
  logoUrl = 'https://i.pinimg.com/736x/71/d9/a9/71d9a9a5614ec8a9a17079ace15f10a0.jpg';

  onClick($event:Event){
    console.log("Saved button on clicked",$event)
    window.open(this.logoUrl, "_blank");
  }
}
