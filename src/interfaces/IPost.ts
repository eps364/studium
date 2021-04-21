import { ICategory } from './ICategory';
import { IComment } from './IComment';
import { ITag } from './ITag';

export type IPost = {
  id: string;
  author?: string;
  title: string;
  image_url: string;
  body: string;
  category: ICategory[];
  created_at: string;
  updated_at: string;
  comments: IComment[];
  tags: ITag[];
};
