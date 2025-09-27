export interface Post {
  id: number;
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
}

export interface Community {
  id: number;
  name: string;
  description: string;
}

export interface Comment {
  id: number;
  text: string;
  postId: number;
}
