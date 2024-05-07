import { AddRelease } from '../../../../application/usecase/releases/add-release.js';
import { Body, Controller, HttpStatus, Post, Res, Version } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express';
import { ReleaseInput } from '../../../../dto/releases.dto.js';


@ApiTags('Releases')
@Controller('releases')
export class RestAddReleaseController {
  constructor(
    private readonly addRelease: AddRelease
  ) {}

  @ApiOkResponse({
    description: 'OK'
  })
  @Version('1')
  @Post()
  async handle(@Res() res: Response, @Body() release_input: ReleaseInput): Promise<Response> {
    const result = await this.addRelease.execute(release_input)
    return res.status(HttpStatus.CREATED).json(result);
  }
}
