import { Component } from '@angular/core';
import { MovieService } from './movie.service';

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
  postInfo: {name: "The Departed", releaseDate: 2006};

constructor ( public movie$: MovieService) {
  
  //need to pass in what we are putting into the NGmodel on .html
     
        movie$.getData(this.title)
        .subscribe( res => {
          this.searchResults.push(res);
            console.log("hits", res);
        });
        
              this.movie$.postData(this.postInfo)
        .subscribe(
            data => console.log("hit", data),
            error => console.log("error", error)
                    );
      
      
}

//search for a specific movie title
search(){
      this.movie$.getData(this.title)
        .subscribe( res => {
          this.searchResults.push(res);
            console.log(res);
        });
        
        
  
}

//click to add to favorites
  addFav(title){
    this.favList.push(title) 
  }
    
    
  //     console.log("title", this.searchResults, title)
  //     if (this.movieInFav(this.favMovies, title)) {
  //           console.log("check!")
  //     }
  //     else {
  //           this.favList.push(title) 
  //   }
  //   this.searchResults = [];
  // }
  
    movieInFav(array, arrVal){
    return array.some(movFav => arrVal == movFav)
  }

// //delete botton
//     delFav(index){
//       this.favList.splice(index, 1)
//   } 

}


