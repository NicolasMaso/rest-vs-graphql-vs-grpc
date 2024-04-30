import { Field, Float, Int, ObjectType, InputType } from "@nestjs/graphql";

@InputType({ description: 'Modelo de dados para adicionar um filme' })
export class MovieInput {
  @Field((type) => String, { description: 'Nome' })
  name: string

  @Field((type) => Int, { description: 'Ano de lançamento' })
  date: number

  @Field((type) => String, { description: 'Slogan' })
  tagline: string

  @Field((type) => String, { description: 'Descrição' })
  description: string

  @Field((type) => Int, { description: 'Tempo de duração em minutos' })
  minute: number

  @Field((type) => Float, { description: 'Média de avaliação no Letterboxd' })
  rating: number
}

@ObjectType({ description: 'Modelo de dados de retorno um filme' })
export class MovieOutput {
  @Field((type) => Int, { description: 'Identificador' })
  id: number

  @Field((type) => String, { description: 'Nome' })
  name: string

  @Field((type) => Int, { description: 'Ano de lançamento' })
  date: number

  @Field((type) => String, { description: 'Slogan' })
  tagline: string

  @Field((type) => String, { description: 'Descrição' })
  description: string

  @Field((type) => Int, { description: 'Tempo de duração em minutos' })
  minute: number

  @Field((type) => Float, { description: 'Média de avaliação no Letterboxd' })
  rating: number
}

@ObjectType({ description: 'Modelo de dados da listagem de filmes' })
export class ListMoviesOutput {
  @Field((type) => [MovieOutput], { description: 'Lista de filmes' })
  movies: MovieOutput[]
}
