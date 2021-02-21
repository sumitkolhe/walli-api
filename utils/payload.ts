import { imageDetails } from "types";

export const sanitizeDownloadLinks = (
  square_image: string,
  rectangle_image: string
) => {
  return [
    {
      square: square_image.replace("__800_800", ""),
      rectangle: rectangle_image.replace("__800_1422", ""),
    },
  ];
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
    location: data.location,
    download_links: sanitizeDownloadLinks(data.thumb, data.thumb_rect),
  };

  return image_payload;
};
