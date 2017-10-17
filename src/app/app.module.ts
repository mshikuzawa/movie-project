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
import {FavoritesService} from './favorites.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent, 
    RegisterComponent, LoginComponent, MainComponent
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
            path: '',
            component: LoginComponent
        },
        {
            path: 'register',
            component:RegisterComponent
        },
        {
            path:'main',
            component: MainComponent
        }
        ])
  ],
  providers: [MovieService, 
    UserService, 
    FavoritesService,
    RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
