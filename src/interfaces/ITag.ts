import { ICategory } from './ICategory';

export type ITag = {
  id: string;
  name: string;
  category: ICategory[];
};
