import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'

export type CrewsDocument = HydratedDocument<CrewsModel>;

@Schema({ collection: 'crews' })
export class CrewsModel {
  @ApiProperty()
  @Prop({ isRequired: true })
  id: Number

  @ApiProperty()
  @Prop({ isRequired: true })
  role: string

  @ApiProperty()
  @Prop({ isRequired: true })
  name: string
}

export const CrewsSchema = SchemaFactory.createForClass(CrewsModel)
