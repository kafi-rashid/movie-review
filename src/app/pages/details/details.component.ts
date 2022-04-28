import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/objects/Movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router) { }

  movie: Movie = new Movie;

  ngOnInit(): void {
    if(history.state.data) {
      this.movie = history.state.data;
    }
    else {
      this.router.navigate(['/movies'])
    }
  }

  getRating(rating: number) {
    console.log(Math.max(0, (Math.min(5, rating) * 20)))
    return Math.max(0, (Math.min(5, rating) * 20)) + 'px'
  }

}
