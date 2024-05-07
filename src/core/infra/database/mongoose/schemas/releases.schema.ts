import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'
import { ObjectId } from 'mongodb'

export type ReleasesDocument = HydratedDocument<ReleasesModel>;

@Schema({ collection: 'releases' })
export class ReleasesModel {
  @ApiProperty()
  @Prop({ isRequired: true })
  _id: ObjectId

  @ApiProperty()
  @Prop({ isRequired: true })
  id: number

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
  @Prop({ isRequired: false })
  rating?: string
}

export const ReleasesSchema = SchemaFactory.createForClass(ReleasesModel)
