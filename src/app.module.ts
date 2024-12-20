import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gurudaspranavam007:CfaY5UkWYOwPOvMx@cluster0.ifch7.mongodb.net/nest?retryWrites=true&w=majority&appName=Cluster0'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
