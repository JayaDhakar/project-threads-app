import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    CommentsModule,
    MongooseModule.forRoot(
      'mongodb+srv://Thread-user:Thread_user@cluster0free.wohl103.mongodb.net/threads?retryWrites=true&w=majority&appName=Cluster0Free',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
