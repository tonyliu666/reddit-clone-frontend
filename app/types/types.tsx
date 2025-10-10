export interface Post {
  id: number;
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
}

export type Community = {
  name: string;
  description?: string;
  iconImageBytes?: string;
  bannerImageBytes?: string;
};

export interface Comment {
  id: number;
  text: string;
  postId: number;
}
