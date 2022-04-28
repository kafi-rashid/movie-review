import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/objects/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private moviesService: MoviesService) { }
  
  trending: Movie[] = [];
  theatre: Movie[] = [];
  popular: Movie[] = [];

  ngOnInit(): void {
    this.getTrending();
    this.getInTheatre();
    this.getPopular();
  }

  getTrending() {
    this.moviesService.getTrendingMovies().subscribe((movies: Movie[]) => {
      this.trending = movies;
    }, error => {
      console.log(error)
    });
  }

  getInTheatre() {
    this.moviesService.getInTheatre().subscribe((movies: Movie[]) => {
      this.theatre = movies;
    }, error => {
      console.log(error)
    });
  }

  getPopular() {
    this.moviesService.getPopularMovies().subscribe((movies: Movie[]) => {
      this.popular = movies;
    }, error => {
      console.log(error)
    });
  }

  getRating(rating: number) {
    console.log(Math.max(0, (Math.min(5, rating) * 20)))
    return Math.max(0, (Math.min(5, rating) * 20)) + 'px'
  }

  viewDetails(movie: Movie) {
    this.router.navigate(['/movies/'+movie.id], {state: {data: movie}});
  }

}
