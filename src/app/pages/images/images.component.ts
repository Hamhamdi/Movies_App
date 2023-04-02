import { MovieService } from './../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  constructor(private movieService: MovieService, private route: ActivatedRoute ) {}


}
