import { NowRequest, NowResponse } from "@vercel/node";
import { AxiosResponse } from "axios";
import { imageDetails } from "types";
import { generateImagePayload } from "../utils/payload";
import { axiosInstance } from "../utils/config";
import { getSearchUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const query = req.query.query as string;

  try {
    await axiosInstance
      .post(getSearchUrl(), {
        params: `hitsPerPage=10&page=0&query=${query}`,
      })
      .then((image_details: AxiosResponse<imageDetails[] | any>) => {
        let images = new Array();
        image_details.data.hits.forEach((image: imageDetails) => {
          images.push(generateImagePayload(image));
        });

        res.json(images);
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
