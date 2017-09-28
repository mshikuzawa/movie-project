import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { MdToolbarModule, 
         MdCardModule, 
         MdButtonModule,
         MdInputModule } from '@angular/material';
import { MovieService } from './movie.service';
import { HttpModule } from '@angular/http';
import { FormsModule, 
         NgModel,
         ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    HttpModule,
    MdInputModule,
    MdCardModule,
    FormsModule, 
    ReactiveFormsModule, 
    MdButtonModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
