import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'

export type MoviesDocument = HydratedDocument<MoviesModel>;

@Schema({ collection: 'movies' })
export class MoviesModel {
  @ApiProperty()
  @Prop({ isRequired: true })
  id: Number

  @ApiProperty()
  @Prop({ isRequired: true })
  name: string

  @ApiProperty()
  @Prop({ isRequired: true })
  date: Number

  @ApiProperty()
  @Prop({ isRequired: true })
  tagline: string

  @ApiProperty()
  @Prop({ isRequired: true })
  description: string

  @ApiProperty()
  @Prop({ isRequired: true })
  minute: Number

  @ApiProperty()
  @Prop({ isRequired: true })
  rating: Number
}

export const MoviesSchema = SchemaFactory.createForClass(MoviesModel)
