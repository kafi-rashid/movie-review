import { Injectable } from '@angular/core';
import { Movie } from '../objects/Movie';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url: string = '/assets/@fakedb/';

  constructor(private http: HttpClient) { }

  public getTrendingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "trending-movies.json");
  }

  public getInTheatre(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "theatre-movies.json");
  }

  public getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "popular-movies.json");
  }
}
