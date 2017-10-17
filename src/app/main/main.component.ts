import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {UserService } from '../user.service';
import {FavoritesService} from '../favorites.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  private fragment: string;

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
  object: any = {};

constructor ( public movie$: MovieService, public user$: UserService, public favorites$: FavoritesService, private route: ActivatedRoute) {  
      
}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
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
      
      this.object.title = searchResults.title
      
      ///on the left is the way the properties are in loopback  on the right grab what you need
      this.object.releaseDate = searchResults.release_date
      
      
      
      console.log("title", searchResults)
      if (!this.movieInFav(this.favMovies, this.title)) {
        
         // this.favList.push(searchResults)
            // console.log(this.favList)
            this.favorites$.saveFavorites(this.object)
                .subscribe( res => {
      /*succesful response from server is always the first arrow function in subscribe method.
      anything we want to do with resonse we do here.
      */
       //push into our favorites array on successful response save so we can display.
      this.favList.push(searchResults)
      console.log("res", res)})
        
        
        
        
      }
      else {
           
            console.log("check my favorite movie")
          
            console.log(this.favMovies)
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


