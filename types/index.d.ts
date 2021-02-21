export interface imageDetails {
  id: string;
  title: string;
  description: string;
  date: number;
  artist_id: string;
  artist_name: string;
  likes: string;
  downloads: string;
  location: string;
  copyright: string;
  download_links: Object<string>;
  tags?: Array<string>;
}

export interface imageListDetails {
  results: [Array<imageDetails>];
}
