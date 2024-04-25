import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'

export type ReleasesDocument = HydratedDocument<ReleasesModel>;

@Schema({ collection: 'releases' })
export class ReleasesModel {
  @ApiProperty()
  @Prop({ isRequired: true })
  id: Number

  @ApiProperty()
  @Prop({ isRequired: true })
  country: string

  @ApiProperty()
  @Prop({ isRequired: true })
  date: Date

  @ApiProperty()
  @Prop({ isRequired: true })
  type: string

  @ApiProperty()
  @Prop({ isRequired: true })
  rating: string
}

export const ReleasesSchema = SchemaFactory.createForClass(ReleasesModel)
