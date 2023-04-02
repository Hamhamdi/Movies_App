import { TvShowsService } from './../../services/tv-shows.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  tvShows: any[] = []
  query: string =""
  popularShows:any[]=[]

  constructor(private tvService: TvShowsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getShows()
  }

  getShows(page:number = 1) {
    this.tvService.getPopular("popular", page).subscribe((data:any)=>{
      this.tvShows = data.results
      console.log(this.tvShows)
    })
  }

  searchShows(query: string){
    
      if(this.query === ''){
        this.getShows()
      }else{
        this.tvService.getSearch(query).subscribe(({results}:any)=>{
          this.tvShows= results
          this.popularShows = this.tvShows
    
        })
      }
  
      
  }


  paginate(event:any){
    this.getShows(event.page+1)
  }


}
