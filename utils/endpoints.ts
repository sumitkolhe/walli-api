// type = featured, recent, popular
export const getImagesUrl = (type: string, page: string): string => {
  return `https://walli.quosmos.com/api/v2/images/?title=&tag=&artist_name=&sort=${type}&page=${
    page ? page : 1
  }&lang=en_IN`;
};

export const getRandomImagesUrl = (count: string): string => {
  return `https://walli.quosmos.com/api/v2/images/getrandomimages/?artist_id=&type=&count=${
    count ? count : 10
  }&lang=en_IN`;
};

export const getCategoriesUrl = (page?: string): string => {
  return `https://walli.quosmos.com/api/v2/images/getCategories/?sort=position&page=${
    page ? page : 1
  }&lang=en_IN`;
};

export const getCategoryImagesUrl = (
  category_id: string,
  page?: string
): string => {
  return `https://walli.quosmos.com/api/v2/images/getCategoryImages/?category_id=${category_id}&sort=popular&page=${
    page ? page : 1
  }`;
};

export const getSearchUrl = () => {
  return `https://9glx4ih8ti-dsn.algolia.net/1/indexes/walli_images_live/query`;
};

export const getOriginalImageUrl = (imageId: string) => {
  return `https://walli.quosmos.com/api/v2/images/getImage/?id=${imageId}&screen=original&type=rectangle&lang=en_IN`;
};
