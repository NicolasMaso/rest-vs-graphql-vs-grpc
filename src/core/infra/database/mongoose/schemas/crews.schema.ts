import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument, Types, } from 'mongoose'

export type CrewsDocument = HydratedDocument<CrewsModel>;

@Schema({ collection: 'crews' })
export class CrewsModel {
  @ApiProperty()
  @Prop({ isRequired: true })
  crew_id: number

  @ApiProperty()
  @Prop({ isRequired: true })
  id: number

  @ApiProperty()
  @Prop({ isRequired: true })
  role: string

  @ApiProperty()
  @Prop({ isRequired: true })
  name: string
}

export const CrewsSchema = SchemaFactory.createForClass(CrewsModel)
