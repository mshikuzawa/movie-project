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
import {UserService } from './user.service';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent, 
    RegisterComponent
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
    MdButtonModule,
    
    RouterModule.forRoot([
        {
            path: 'register',
            component:RegisterComponent
        }
        ])
  ],
  providers: [MovieService, 
    UserService, 
    RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
