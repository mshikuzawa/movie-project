import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  title: string;
  favMovies: any [] = [];
  favList: any [] = [];
  searchResults;
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
  
}


//search for a specific movie title
search(title){
      this.movie$.getData(this.title)
        .subscribe( res => {
          this.searchResults = res.results
            console.log("Test1", res);
            console.log('Search Results:', this.searchResults)
        });
        
        
  
}

//click to add to favorites
//     addFav(title){
//       console.log("title",title)
//     this.favList.push(title.results[0]) 
//     console.log (this.title)
//     console.log('Search Results', this.searchResults)
//     console.log('fav list ', this.favList)
// }

//   addFav(title){
//       console.log("title", this.searchResults, this.title);
//       for (var i = 0; i < this.favList.length; i++){
//         if (this.searchResults === this.favList[i]) {
//             console.log("check!")
//       }
//         else {
//             this.favList.push(this.title) 
//     }
//     this.favList = [];
//   }
// }

    addFav(searchResults){
      console.log("title", searchResults)
      if (this.movieInFav(this.favMovies, this.title)) {
            console.log("check!")
            console.log(this.movieInFav)
            console.log(this.favMovies)
      }
      else {
            this.favList.push(searchResults)
            console.log(this.favList)
     }
     this.searchResults = [];
  }

  movieInFav(array, arrVal){
    return array.some(movieFav => arrVal == movieFav)
  }
  
    delFav(index){
    this.favList.splice(index, 1)
  } 


// getData(title: string) {
//     this.movie$.postData(this.postInfo)
//       .subscribe(
//           data => console.log("hit", data),
//           error => console.log("error", error)
//     );
// }

      

}


