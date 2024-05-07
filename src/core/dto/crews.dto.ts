import { Field, Int, ObjectType, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsNumber
} from 'class-validator'

@InputType({ description: 'Modelo de dados para adicionar um membro de equipe de um filme' })
export class CrewInput {
  @ApiProperty({ description: 'Identificador do filme', required: true })
  @IsNumber({}, { message: 'Identificador do filme é obrigatório'})
  @Field((type) => Int, { description: 'Identificador do filme', nullable: false })
  movie_id: number

  @ApiProperty({ description: 'Função', required: true })
  @IsString({ message: 'Função é obrigatório'})
  @Field((type) => String, { description: 'Função' })
  role: string

  @ApiProperty({ description: 'Nome', required: true })
  @IsString({ message: 'Nome é obrigatório'})
  @Field((type) => String, { description: 'Nome' })
  name: string
}

@ObjectType({ description: 'Modelo de dados de retorno de um membro de equipe de um filme' })
export class CrewOutput {
  @ApiProperty({ description: 'Identificador do filme', required: true })
  @Field((type) => Int, { description: 'Identificador do filme', nullable: false })
  id: number

  @ApiProperty({ description: 'Função', required: true })
  @Field((type) => String, { description: 'Função', nullable: true })
  role: string

  @ApiProperty({ description: 'Nome', required: true })
  @Field((type) => String, { description: 'Nome', nullable: true })
  name: string
}

@ObjectType({ description: 'Modelo de dados da listagem de membros de equipes de filmes' })
export class ListCrewsOutput {
  @ApiProperty({ description: 'Lista de membros de equipes de filmes', required: true })
  @Field((type) => [CrewOutput], { description: 'Lista de membros de equipes de filmes' })
  crews: CrewOutput[]
}
