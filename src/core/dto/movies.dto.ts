import { Field, Float, Int, ObjectType, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsNumber
} from 'class-validator'

@InputType({ description: 'Modelo de dados para adicionar um filme' })
export class MovieInput {
  @ApiProperty({ description: 'Nome', required: true })
  @IsString({ message: 'Nome é obrigatório'})
  @Field((type) => String, { description: 'Nome' })
  name: string

  @ApiProperty({ description: 'Ano de lançamento', required: true })
  @IsNumber()
  @Field((type) => Int, { description: 'Ano de lançamento' })
  date: number

  @ApiProperty({ description: 'Slogan', required: true })
  @IsString({ message: 'Slogan é obrigatório'})
  @Field((type) => String, { description: 'Slogan' })
  tagline: string

  @ApiProperty({ description: 'Descrição', required: true })
  @IsString({ message: 'Descrição é obrigatório'})
  @Field((type) => String, { description: 'Descrição' })
  description: string

  @ApiProperty({ description: 'Tempo de duração em minutos', required: true })
  @IsNumber()
  @Field((type) => Int, { description: 'Tempo de duração em minutos', defaultValue: 0 })
  minute: number

  @ApiProperty({ description: 'Média de avaliação no Letterboxd', required: true })
  @IsOptional()
  @IsNumber()
  @Field((type) => Float, { description: 'Média de avaliação no Letterboxd', defaultValue: 0 })
  rating: number
}

@ObjectType({ description: 'Modelo de dados de retorno um filme' })
export class Movie {
  @ApiProperty({ description: 'Identificador', required: true })
  @Field((type) => Int, { description: 'Identificador', nullable: false })
  id: number

  @ApiProperty({ description: 'Nome', required: true })
  @Field((type) => String, { description: 'Nome', nullable: true })
  name: string

  @ApiProperty({ description: 'Ano de lançamento', required: true })
  @Field((type) => Int, { description: 'Ano de lançamento', nullable: true })
  date: number

  @ApiProperty({ description: 'Slogan', required: true })
  @Field((type) => String, { description: 'Slogan', nullable: true })
  tagline: string

  @ApiProperty({ description: 'Descrição', required: true })
  @Field((type) => String, { description: 'Descrição', nullable: true })
  description: string

  @ApiProperty({ description: 'Tempo de duração em minutos', required: true })
  @Field((type) => Int, { description: 'Tempo de duração em minutos', nullable: true })
  minute: number

  @ApiProperty({ description: 'Média de avaliação no Letterboxd', required: true })
  @Field((type) => Float, { description: 'Média de avaliação no Letterboxd', nullable: true })
  rating: number
}

@ObjectType({ description: 'Modelo de dados da listagem de filmes' })
export class ListMoviesOutput {
  @ApiProperty({ description: 'Lista de filmes', required: true })
  @Field((type) => [Movie], { description: 'Lista de filmes' })
  movies: Movie[]
}
