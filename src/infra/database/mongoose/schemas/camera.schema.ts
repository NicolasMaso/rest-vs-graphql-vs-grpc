import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'

export type CameraDocument = HydratedDocument<Camera>;

@Schema()
export class Camera {
  @ApiProperty()
  @Prop()
    name: string
}

export const CameraSchema = SchemaFactory.createForClass(Camera)