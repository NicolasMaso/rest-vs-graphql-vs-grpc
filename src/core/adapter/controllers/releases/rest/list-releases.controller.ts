import { ListReleases } from '../../../../application/usecase/releases/list-releases.js';
import { Controller, Get, HttpStatus, ParseIntPipe, Query, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';


@ApiTags('Releases')
@Controller('releases')
export class RestListReleasesController {
  constructor(
    private readonly listReleases: ListReleases
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Get()
  async handle(@Res() res: Response, @Query('limit', ParseIntPipe) limit: number): Promise<Response> {
    const result = await this.listReleases.execute(limit)
    return res.status(HttpStatus.OK).json(result);
  }
}
