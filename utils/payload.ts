import { categoryDetails, imageDetails } from "types";

const enforceHttps = (link: string): string => {
  if (link.includes("http://")) return link.replace("http://", "https://");
  return link;
};

const sanitizeDownloadLinks = (image_link: string) => {
  return {
    thumbnail: enforceHttps(image_link),
    original: enforceHttps(image_link).replace("__800_800", ""),
  };
};

export const generateImagePayload = (data: any) => {
  const image_payload: imageDetails = {
    id: data.id,
    title: data.title,
    description: data.description,
    date: data.image_date,
    artist_id: data.artist_id,
    artist_name: data.display_name,
    artist_bio: data.artist_bio,
    artist_avatar: data.avatar,
    likes: data.likes,
    downloads: data.downloads,
    copyright: data.copyright,
    location: data.location,
    download_links: sanitizeDownloadLinks(data.thumb),
    tags: data._tags,
  };

  return image_payload;
};

export const generateCategoryPayload = (data: any) => {
  const category_payload: categoryDetails = {
    id: data.id,
    name: data.name,
    category_name: data.category_name,
    created_at: data.created_at,
    updated_at: data.updated_at,
    position: data.position,
    category_thumnail: data.thumb,
    category_image: data.square,
  };

  return category_payload;
};
