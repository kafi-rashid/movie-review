export class Movie {
  id: number = -1;
  name: string = '';
  cover: string = '';
  rating: number = 0;
  reviews: Review[] = []
}

class Review {
  author: string = '';
  published_on: Date = new Date();
  review: string = '';
  rating: number = 0;
}