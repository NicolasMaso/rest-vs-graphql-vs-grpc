import { ObjectId } from 'mongodb'

type ReleaseProps = {
  _id?: ObjectId
  movie_id: number
  country: string
  date: Date
  type: string
  rating?: string
}

export class Release {
  private _id: ObjectId
  private movie_id: number
  private country: string
  private date: Date
  private type: string
  private rating: string

  constructor(release_props: ReleaseProps) {
    this._id = release_props._id ?? new ObjectId()
    this.movie_id = release_props.movie_id
    this.country = release_props.country
    this.date = release_props.date
    this.type = release_props.type
    this.rating = release_props.rating
  }

  get id() {
    return this._id
  }

  get data() {
    return {
      movie_id: this.movie_id,
      country: this.country,
      date: this.date,
      type: this.type,
      rating: this.rating,
    }
  }

  set data(release_props: ReleaseProps) {
    this.movie_id = release_props.movie_id
    this.country = release_props.country
    this.date = release_props.date
    this.type = release_props.type
    this.rating = release_props.rating
  }
}
