import { NowRequest, NowResponse } from "@vercel/node";
import { AxiosResponse } from "axios";
import { categoryDetails } from "types";
import { generateCategoryPayload } from "../utils/payload";
import { axiosInstance } from "../utils/config";
import { getCategoriesUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  const page = req.query.page as string;

  try {
    await axiosInstance
      .get(getCategoriesUrl(page))
      .then((image_details: AxiosResponse<categoryDetails[]>) => {
        let categories = new Array();
        image_details.data.forEach((category: categoryDetails) => {
          categories.push(generateCategoryPayload(category));
        });

        res.json(categories);
      });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
