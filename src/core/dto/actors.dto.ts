import { Field, Int, ObjectType, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsNumber
} from 'class-validator'

@InputType({ description: 'Modelo de dados para adicionar um ator de um filme' })
export class  ActorInput {
  @ApiProperty({ description: 'Identificador do filme', required: true })
  @IsNumber({}, { message: 'Identificador do filme é obrigatório'})
  @Field((type) => Int, { description: 'Identificador do filme', nullable: false })
  movie_id: number

  @ApiProperty({ description: 'Nome', required: true })
  @IsString({ message: 'Nome é obrigatório'})
  @Field((type) => String, { description: 'Nome' })
  name: string
}

@ObjectType({ description: 'Modelo de dados de retorno um ator de um filme' })
export class ActorOutput {
  @ApiProperty({ description: 'Identificador do filme', required: true })
  @Field((type) => Int, { description: 'Identificador do filme', nullable: false })
  id: number

  @ApiProperty({ description: 'Nome', required: true })
  @Field((type) => String, { description: 'Nome', nullable: true })
  name: string
}

@ObjectType({ description: 'Modelo de dados da listagem de atores de filmes' })
export class ListActorsOutput {
  @ApiProperty({ description: 'Lista de atores de filmes', required: true })
  @Field((type) => [ActorOutput], { description: 'Lista de atores de filmes' })
  actors: ActorOutput[]
}
