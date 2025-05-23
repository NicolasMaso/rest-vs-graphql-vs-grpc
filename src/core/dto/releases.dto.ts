import { Field, Int, ObjectType, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsNumber,
  IsOptional,
  IsDate
} from 'class-validator'

@InputType({ description: 'Modelo de dados para adicionar um lançamento de um filme' })
export class ReleaseInput {
  @ApiProperty({ description: 'Identificador do filme', required: true })
  @IsNumber({}, { message: 'Identificador do filme é obrigatório'})
  @Field((type) => Int, { description: 'Identificador do filme', nullable: false })
  movie_id: number

  @ApiProperty({ description: 'País', required: true })
  @IsString({ message: 'País é obrigatório' })
  @Field((type) => String, { description: 'País', nullable: true })
  country: string

  @ApiProperty({ description: 'Data', required: true })
  @Field((type) => Date, { description: 'Data', nullable: true })
  date: Date

  @ApiProperty({ description: 'Tipo (Ex: Digital, Cinema, Físico, Premiere...)', required: true })
  @IsString({ message: 'Tipo é obrigatório'})
  @Field((type) => String, { description: 'Tipo (Ex: Digital, Cinema, Físico, Premiere...)', nullable: true })
  type: string

  @ApiProperty({ description: 'Classificação indicativa', required: false })
  @IsOptional()
  @Field((type) => String, { description: 'Classificação indicativa', nullable: true })
  rating?: string
}

@ObjectType({ description: 'Modelo de dados de retorno de um lançamento de um filme' })
export class ReleaseOutput {
  @ApiProperty({ description: 'Identificador do filme', required: true })
  @Field((type) => Int, { description: 'Identificador do filme', nullable: false })
  id: number

  @ApiProperty({ description: 'País', required: true })
  @Field((type) => String, { description: 'País', nullable: true })
  country: string

  @ApiProperty({ description: 'Data', required: true })
  @Field((type) => Date, { description: 'Data', nullable: true })
  date: Date

  @ApiProperty({ description: 'Tipo (Ex: Digital, Cinema, Físico, Premiere...)', required: true })
  @Field((type) => String, { description: 'Tipo (Ex: Digital, Cinema, Físico, Premiere...)', nullable: true })
  type: string

  @ApiProperty({ description: 'Classificação indicativa', required: false })
  @Field((type) => String, { description: 'Classificação indicativa', nullable: true })
  rating?: string
}

@ObjectType({ description: 'Modelo de dados da listagem de lançamentos de um filme' })
export class ListReleasesOutput {
  @ApiProperty({ description: 'Lista de lançamentos de um filme', required: true })
  @Field((type) => [ReleaseOutput], { description: 'Lista de lançamentos de um filme' })
  releases: ReleaseOutput[]
}
