import { CurrentUserInterface } from '../shared/types/currentUser.interface';

const user = {
    id: 123456789,
    email: '123456789@gmail.com',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    username: 'Alex',
    bio:  'BIO',
    image: null,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsZXgiLCJpYXQiOjE1MTYyMzkwMjJ9.eYLYdLSJI8N1wFc5f3U0BMKuTJv8mcwfmA8is1f7ctc'
}

export const GetMockUser = (): CurrentUserInterface => {
    return user;
}