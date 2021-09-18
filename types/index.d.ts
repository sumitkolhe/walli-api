export interface imageDetails {
  id: string;
  title: string;
  description: string;
  date: number;
  artistId: string;
  artistName: string;
  artistBio: string;
  artistAvatar: string; //TODO: Maybe remove?
  likes: string;
  downloads: string;
  location: string;
  copyright: string;
  downloadLinks: Object<string>;
  tags?: Array<string>;
}

export interface categoryDetails {
  id: string;
  name: string;
  categoryName: string;
  createdAt: number;
  updatedAt: string;
  position: string;
  categoryThumnail: string;
  categoryImage: string;
}
