// type = featured, recent, popular
export const getImagesUrl = (type: string): string => {
  return `https://ku.shanga.co/api/v2/images/?title=&tag=&artist_name=&sort=${type}&page=1&lang=en_IN`;
};

export const getRandomImagesUrl = (artist_id: string): string => {
  return `https://ku.shanga.co/api/v2/images/getrandomimages/?artist_id=${artist_id}&type=include&count=5&lang=en_IN`;
};

export const getCategoriesUrl = (): string => {
  return `https://ku.shanga.co/api/v2/images/getCategories/?sort=position&page=1&lang=en_IN`;
};

export const getCategoryImagesUrl = (category_id: string): string => {
  return `https://ku.shanga.co/api/v2/images/getCategoryImages/?category_id=${category_id}&sort=popular&page=1&`;
};
