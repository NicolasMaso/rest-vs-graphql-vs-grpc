import { Config } from 'jest'

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src/domain/usecase',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../../../coverage',
  testEnvironment: 'node'
}

export default config
