import { ArticleInterface } from '../shared/types/article.interface';

const articles: {articles: ArticleInterface[], articlesCount: number} = {
    articles:  [{
        author: {
            bio: null,
            following: false,
            image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
            username: "Grupo Primo",
        },
        body: 'Follow @thiago.nigro on Instagram',
        createdAt: '2021-09-22T19:15:47.034Z',
        description: 'Best investment and entrepreneur content',
        favorited: false,
        favoritesCount: 0,
        slug: 'grupo-primo-e37vf8',
        tagList: ['tag1', 'tag2', 'tag3'],
        title: 'Grupo Primo',
        updatedAt: '2021-09-22T19:15:47.034Z'
    },{
        author: {
            bio: null,
            following: false,
            image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
            username: "Grupo Primo",
        },
        body: 'Follow @thiago.nigro on Instagram',
        createdAt: '2021-09-22T19:15:47.034Z',
        description: 'Best investment and entrepreneur content',
        favorited: false,
        favoritesCount: 0,
        slug: 'grupo-primo-e37vf8',
        tagList: [],
        title: 'Grupo Primo',
        updatedAt: '2021-09-22T19:15:47.034Z'
    },{
        author: {
            bio: null,
            following: false,
            image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
            username: "Grupo Primo",
        },
        body: 'Follow @thiago.nigro on Instagram',
        createdAt: '2021-09-22T19:15:47.034Z',
        description: 'Best investment and entrepreneur content',
        favorited: false,
        favoritesCount: 0,
        slug: 'grupo-primo-e37vf8',
        tagList: [],
        title: 'Grupo Primo',
        updatedAt: '2021-09-22T19:15:47.034Z'
    },{
        author: {
            bio: null,
            following: false,
            image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
            username: "Grupo Primo",
        },
        body: 'Follow @thiago.nigro on Instagram',
        createdAt: '2021-09-22T19:15:47.034Z',
        description: 'Best investment and entrepreneur content',
        favorited: false,
        favoritesCount: 0,
        slug: 'grupo-primo-e37vf8',
        tagList: [],
        title: 'Grupo Primo',
        updatedAt: '2021-09-22T19:15:47.034Z'
    },{
        author: {
            bio: null,
            following: false,
            image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
            username: "Grupo Primo",
        },
        body: 'Follow @thiago.nigro on Instagram',
        createdAt: '2021-09-22T19:15:47.034Z',
        description: 'Best investment and entrepreneur content',
        favorited: false,
        favoritesCount: 0,
        slug: 'grupo-primo-e37vf8',
        tagList: [],
        title: 'Grupo Primo',
        updatedAt: '2021-09-22T19:15:47.034Z'
    },{
        author: {
            bio: null,
            following: false,
            image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
            username: "Grupo Primo",
        },
        body: 'Follow @thiago.nigro on Instagram',
        createdAt: '2021-09-22T19:15:47.034Z',
        description: 'Best investment and entrepreneur content',
        favorited: false,
        favoritesCount: 0,
        slug: 'grupo-primo-e37vf8',
        tagList: [],
        title: 'Grupo Primo',
        updatedAt: '2021-09-22T19:15:47.034Z'
    }],
    articlesCount: 500
}
export function GetArticle(): {articles: ArticleInterface[], articlesCount: number} {
    return articles;
} 