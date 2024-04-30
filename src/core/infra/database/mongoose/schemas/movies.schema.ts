import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'

export type MoviesDocument = HydratedDocument<MoviesModel>;

@Schema({ collection: 'movies' })
export class MoviesModel {
  @ApiProperty()
  @Prop({ isRequired: true })
  id: number

  @ApiProperty()
  @Prop({ isRequired: true })
  name: string

  @ApiProperty()
  @Prop({ isRequired: true })
  date: number

  @ApiProperty()
  @Prop({ isRequired: true })
  tagline: string

  @ApiProperty()
  @Prop({ isRequired: true })
  description: string

  @ApiProperty()
  @Prop({ isRequired: true })
  minute: number

  @ApiProperty()
  @Prop({ isRequired: true })
  rating: number
}

export const MoviesSchema = SchemaFactory.createForClass(MoviesModel)
