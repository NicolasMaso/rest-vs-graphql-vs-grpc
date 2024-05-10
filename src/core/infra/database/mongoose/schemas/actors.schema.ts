import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'

export type ActorsDocument = HydratedDocument<ActorsModel>;

@Schema({ collection: 'actors' })
export class ActorsModel {
  @ApiProperty()
  @Prop({ isRequired: true })
  actor_id: number

  @ApiProperty()
  @Prop({ isRequired: true })
  id: number

  @ApiProperty()
  @Prop({ isRequired: true })
  name: string
}

export const ActorsSchema = SchemaFactory.createForClass(ActorsModel)
