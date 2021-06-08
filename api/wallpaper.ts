import { NowRequest, NowResponse } from "@vercel/node";
import { AxiosResponse } from "axios";
import { imageDetails } from "types";
import { generateImagePayload } from "../utils/payload";
import { axiosInstance } from "../utils/config";
import { getImagesUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const wallpaper_type = req.query.type as string;
  const page = req.query.page as string;

  try {
    await axiosInstance
      .get(getImagesUrl(wallpaper_type, page))
      .then((image_details: AxiosResponse<imageDetails[]>) => {
        let images = new Array();
        image_details.data.forEach((image: imageDetails) => {
          images.push(generateImagePayload(image));
        });

        res.json(images);
      });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
