export interface imageDetails {
  id: string;
  title: string;
  description: string;
  date: number;
  artist_id: string;
  artist_name: string;
  artist_bio: string;
  artist_avatar: string; //TODO: Maybe remove?
  likes: string;
  downloads: string;
  location: string;
  copyright: string;
  download_links: Object<string>;
  tags?: Array<string>;
}

export interface categoryDetails {
  id: string;
  name: string;
  category_name: string;
  created_at: number;
  updated_at: string;
  position: string;
  category_thumnail: string;
  category_image: string;
}
