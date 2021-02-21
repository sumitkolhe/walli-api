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
  download_links: Object<string>;
}

export interface imageListDetails {
  results: [Array<imageDetails>];
}
