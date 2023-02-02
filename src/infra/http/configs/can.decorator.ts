import { SetMetadata } from '@nestjs/common'

export const Can = (...permissionsRequired: string[]) => SetMetadata('permissionsRequired', permissionsRequired)