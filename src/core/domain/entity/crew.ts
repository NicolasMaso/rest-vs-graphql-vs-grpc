import { ObjectId } from 'mongodb'

type CrewProps = {
  _id?: ObjectId
  movie_id: number
  role: string
  name: string
}

export class Crew {
  private _id: ObjectId
  private movie_id: number
  private role: string
  private name: string

  constructor(crew_props: CrewProps) {
    this._id = crew_props._id ?? new ObjectId()
    this.movie_id = crew_props.movie_id
    this.role = crew_props.role
    this.name = crew_props.name
  }

  get id() {
    return this._id
  }

  get data() {
    return {
      movie_id: this.movie_id,
      role: this.role,
      name: this.name
    }
  }

  set data(crew_props: CrewProps) {
    this.movie_id = crew_props.movie_id
    this.role = crew_props.role
    this.name = crew_props.name
  }
}
