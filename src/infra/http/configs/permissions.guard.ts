import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    const user = request?.user
    const permissionsRequired = this.reflector.get<string[]>('permissionsRequired', context.getHandler())
    const isPublic = !permissionsRequired.length
    if (isPublic) { return true }
    if (!user) { return false }
    const isFreeProfile = permissionsRequired.includes('isFreeProfile')
    const isUserAuthorized = user.permissions.some((permission: string) => permissionsRequired.includes(permission))
    return isFreeProfile || isUserAuthorized
  }
}
