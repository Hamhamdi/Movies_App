import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  movie: any[] = []
  query: string =""
  popularMovies:any[]=[]

  constructor(private movieService: MovieService, private route: ActivatedRoute,private elRef: ElementRef) {}

ngOnInit(): void {
  this.getMovie()

  const scrollableDiv = this.elRef.nativeElement.querySelector('.scrollable-div');
  const fadeElement = this.elRef.nativeElement.querySelector('.fade-element');

  scrollableDiv.addEventListener('scroll', () => {

    fadeElement.style.opacity = '0';

    
  });
}  

  searchMovie(query: string) {
    if(this.query === ''){
      this.getMovie()
    }else{
      this.movieService.getSearch(query).subscribe(({results}:any)=>{
        this.movie = results
        this.popularMovies = this.movie
  
      })
    }

    }
  


  getMovie(page:number = 1) {
    this.movieService.getPopular("popular", page).subscribe((data:any)=>{
      this.movie = data.results
      console.log(this.movie)
    })
  }

  paginate(event:any){
    this.getMovie(event.page+1)
  }


}
