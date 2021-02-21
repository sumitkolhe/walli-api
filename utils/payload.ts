import { categoryDetails, imageDetails } from "types";

export const sanitizeDownloadLinks = (
  square_image?: string,
  rectangle_image?: string
) => {
  let download_links = new Array();
  if (square_image) download_links.push(square_image!.replace("__800_800", ""));
  if (rectangle_image)
    download_links.push(rectangle_image!.replace("__800_1422", ""));
  return download_links;
};

export const generateImagePayload = (data: any) => {
  const image_payload: imageDetails = {
    id: data.id,
    title: data.title,
    description: data.description,
    date: data.image_date,
    artist_id: data.artist_id,
    artist_name: data.display_name,
    likes: data.likes,
    downloads: data.downloads,
    copyright: data.copyright,
    location: data.location,
    download_links: sanitizeDownloadLinks(data.thumb, data.thumb_rect),
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
