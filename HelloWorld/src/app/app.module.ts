import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // ✅ Required for ngModel
import { RouterModule } from '@angular/router'; // ✅ Required for router-outlet
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],  // ✅ Now AppComponent can be declared
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
