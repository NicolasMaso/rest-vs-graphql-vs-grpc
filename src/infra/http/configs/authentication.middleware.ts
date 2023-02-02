import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { verify, VerifyErrors } from 'jsonwebtoken'

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') { return next() }
    const isPublicRequest = req.headers['x-forwarded-prefix'] === '/video-manager-public'
    const authorization = req.body.token || req.params.token || req.headers['x-access-token'] || req.headers.authorization
    const token = authorization?.replace('Bearer ', '') || null
    if (isPublicRequest) { return next() }
    return verify(token, 'seventh2017', async (err: VerifyErrors, decoded: any) => {
      if (err) {
        const isExpired = err.message === 'jwt expired'
        return res.status(401)?.send(isExpired ? 'Token expirado.' : 'Token inválido.')
      }
      if (!decoded.payload.verified) { return res.status(401)?.send('Você precisa confirmar o seu e-mail primeiro.') }
      req.user = { ...decoded.payload, permissions: decoded.permissions }
      return next()
    })
  }
}
