export interface Post {
  id: number;
  title: string;
  body: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
export interface Comment {
  id: number;
  name: string;
  username: string;
  body: string;
}
export interface Album {
  id: number;
  name: string;
  title: string;
}
export interface Photo {
  id: number;
  name: string;
}
export interface Todo {
  id: number;
  name: string;
  username: string;
  body: string;
  title: string;
}
