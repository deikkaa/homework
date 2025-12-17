export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PostType {
  id: number
  title: string
  body: string
  comments: Comment[]
}
