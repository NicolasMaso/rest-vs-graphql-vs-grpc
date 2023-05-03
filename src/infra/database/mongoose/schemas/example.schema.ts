import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'

export type ExampleDocument = HydratedDocument<ExampleModel>;

@Schema()
export class ExampleModel {
  @ApiProperty()
  @Prop()
    name: string
}

export const ExampleSchema = SchemaFactory.createForClass(ExampleModel)