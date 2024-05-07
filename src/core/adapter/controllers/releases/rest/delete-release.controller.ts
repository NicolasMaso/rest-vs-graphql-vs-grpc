import { DeleteRelease } from '../../../../application/usecase/releases/delete-release.js';
import { Controller, Delete, HttpStatus, Param, ParseIntPipe, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';


@ApiTags('Releases')
@Controller('releases')
export class RestDeleteReleaseController {
  constructor(
    private readonly deleteRelease: DeleteRelease
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Delete('/:id')
  async handle(@Res() res: Response, @Param('id') release_id: string): Promise<Response> {
    const result = await this.deleteRelease.execute(release_id)
    return res.status(HttpStatus.OK).json(result);
  }
}
