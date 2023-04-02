import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimePipe } from '../../pipes/time.pipe';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  movie: any = {}
 

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params: any) => {
      this.getOneMovie(params.id)
    })

  }

  getOneMovie(id: number) {
    this.movieService.getMovie(id).subscribe((response: any) => {
      this.movie = response
      console.log(this.movie)
    })
  }

  watchTrailer(){
    Swal.fire({
      title: 'Watch Trailer',
      // didOpen: () => {
      //   const component = document.createElement('app-youtube-embed');
      //   component.setAttribute('title', video.name);
      //   component.setAttribute('key', video.key);
      //   Swal.getContent().appendChild(component);
      // },
      // showCloseButton: true,
      // showCancelButton: true,
      // focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    });
    

  }

}
