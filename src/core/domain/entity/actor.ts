import { ObjectId } from 'mongodb'

type ActorProps = {
  _id?: ObjectId
  movie_id: number
  name: string
}

export class Actor {
  private _id: ObjectId
  private movie_id: number
  private name: string

  constructor(actor_props: ActorProps) {
    this._id = actor_props._id ?? new ObjectId()
    this.movie_id = actor_props.movie_id
    this.name = actor_props.name
  }

  get id() {
    return this._id
  }

  get data() {
    return {
      movie_id: this.movie_id,
      name: this.name,
    }
  }

  set data(actor_props: ActorProps) {
    this.movie_id = actor_props.movie_id
    this.name = actor_props.name
  }
}
