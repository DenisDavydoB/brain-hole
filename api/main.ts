import { NestFactory } from '@nestjs/core'
import { AppModule } from './src/app.module.js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(8001)
}
bootstrap().catch((error) => {
  console.error(error)
  process.exit(1)
})
