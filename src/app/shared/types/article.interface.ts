import { ProfileInterface } from './profile.interface';

export interface ArticleInterface {
    author: ProfileInterface;
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: string[];
}