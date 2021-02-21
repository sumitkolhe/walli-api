import { NowRequest, NowResponse } from "@vercel/node";
import { AxiosResponse } from "axios";
import { imageDetails } from "types";
import { generateImagePayload } from "../utils/payload";
import { axiosInstance } from "../utils/config";
import { getCategoryImagesUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const id = req.query.id as string;
  const page = req.query.page as string;
  if (!id) res.status(400).json({ message: "category id is missing" });

  try {
    await axiosInstance
      .get(getCategoryImagesUrl(id, page))
      .then((image_details: AxiosResponse<imageDetails[]>) => {
        let categories = new Array();
        image_details.data.forEach((category: imageDetails) => {
          categories.push(generateImagePayload(category));
        });

        res.json(categories);
      });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
