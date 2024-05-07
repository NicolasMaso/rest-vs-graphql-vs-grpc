import { EditRelease } from '../../../../application/usecase/releases/edit-release.js';
import { Body, Controller, HttpStatus, Param, ParseIntPipe, Put, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';
import { ReleaseInput } from '../../../../dto/releases.dto.js';


@ApiTags('Releases')
@Controller('releases')
export class RestEditReleaseController {
  constructor(
    private readonly editRelease: EditRelease
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Put('/:id')
  async handle(@Res() res: Response, @Param('id') release_id: string, @Body() release_input: ReleaseInput): Promise<Response> {
    const result = await this.editRelease.execute(release_id, release_input)
    return res.status(HttpStatus.OK).json(result);
  }
}
