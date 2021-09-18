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
    artistId: data.artistId,
    artistName: data.displayName,
    artistBio: data.artistBio,
    artistAvatar: data.avatar,
    likes: data.likes,
    downloads: data.downloads,
    copyright: data.copyright,
    location: data.location,
    downloadLinks: sanitizeDownloadLinks(data.thumb),
    tags: data._tags,
  };

  return image_payload;
};

export const generateCategoryPayload = (data: any) => {
  const category_payload: categoryDetails = {
    id: data.id,
    name: data.name,
    categoryName: data.category_name,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    position: data.position,
    categoryThumnail: data.thumb,
    categoryImage: data.square,
  };

  return category_payload;
};
