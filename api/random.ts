import { NowRequest, NowResponse } from "@vercel/node";
import { AxiosResponse } from "axios";
import { imageDetails } from "types";
import { generateImagePayload } from "../utils/payload";
import { axiosInstance } from "../utils/config";
import { getRandomImagesUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const count = req.query.count as string;

  try {
    await axiosInstance
      .get(getRandomImagesUrl(count))
      .then((image_details: AxiosResponse<imageDetails[]>) => {
        let images = new Array();
        image_details.data.forEach((image: imageDetails) => {
          images.push(generateImagePayload(image));
        });

        res.json(images);
      });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
