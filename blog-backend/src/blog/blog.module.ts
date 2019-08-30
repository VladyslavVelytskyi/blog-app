import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogSchema } from './schemas/blog.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{name: 'Post', schema: BlogSchema}]),
  ],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
