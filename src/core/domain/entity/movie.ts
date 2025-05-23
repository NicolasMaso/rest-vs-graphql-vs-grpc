import { MovieInput } from "src/core/dto/movies.dto.js"
import random from 'random'

type MovieProps = {
  id?: number
  name: string
  date: number
  tagline: string
  description: string
  minute: number
  rating: number
}

export class Movie {
  private id?: number
  private name: string
  private date: number
  private tagline: string
  private description: string
  private minute: number
  private rating: number

  constructor(movie_props: MovieProps) {
    this.id = movie_props.id
    this.name = movie_props.name
    this.date = movie_props.date
    this.tagline = movie_props.tagline || ''
    this.description = movie_props.description|| ''
    this.minute = movie_props.minute || 0
    this.rating = movie_props.rating || 0
  }

  static create(movie_input: MovieInput): Movie {
    const id = random.int(1, 10000000);
    return new Movie({ ...movie_input, id })
  }

  get data() {
    return {
      id: this.id,
      name: this.name,
      date: this.date,
      tagline: this.tagline,
      description: this.description,
      minute: this.minute,
      rating: this.rating
    }
  }

  set data(movie_props: MovieProps) {
    this.name = movie_props.name
    this.date = movie_props.date
    this.tagline = movie_props.tagline
    this.description = movie_props.description
    this.minute = movie_props.minute
    this.rating = movie_props.rating
  }
}
