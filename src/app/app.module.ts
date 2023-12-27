import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempFormComponent } from './Components/temp-form/temp-form.component';
import { FormsModule } from '@angular/forms';
import { CountComponent } from './Components/count/count.component';

@NgModule({
  declarations: [AppComponent, TempFormComponent, CountComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
