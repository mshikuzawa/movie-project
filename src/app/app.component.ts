import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import {UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;
  favMovies: any [] = [];
  favList: any [] = [];
  searchResults = [];
  postInfo: {title: "The Departed", releaseDate: 2006};
  user: any = {
    firstName: "Matt",
    lastName: "Dome",
    email: "matt@gmail.com",
    password: "hey"
  };

constructor ( public movie$: MovieService, public user$: UserService) {  
      
}


ngOnInit(){
  this.user$.register(this.user)
  .subscribe(res => console.log("res", res))
  
}


//search for a specific movie title
search(title){
      this.movie$.getData(this.title)
        .subscribe( res => {
          this.searchResults.push(res);
            console.log("Test1", res);
        });
        
        
  
}

//click to add to favorites
    addFav(title){
    this.favList.push(this.title) 
    console.log (this.title)
}
  
    delFav(index){
    this.favList.splice(index, 1)
  } 

  
  //   movieInFav(array, arrVal){
  //   return array.some(movFav => arrVal == movFav)
  // } 
  //     console.log("title", this.searchResults, this.title);
  //     if (this.movieInFav(this.favMovies, this.title)) {
  //           console.log("check!")
  //     }
  //     else {
  //           this.favList.push(this.title) 
  //   }
  //   this.favList = [];
  // }
  



// delete botton  


// getData(title: string) {
//     this.movie$.postData(this.postInfo)
//       .subscribe(
//           data => console.log("hit", data),
//           error => console.log("error", error)
//     );
// }
      

}


