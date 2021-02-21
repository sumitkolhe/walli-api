import { NowRequest, NowResponse } from "@vercel/node";
import { AxiosResponse } from "axios";
import { imageDetails } from "types";
import { generateImagePayload } from "../utils/payload";
import { axiosInstance } from "../utils/config";
import { getSearchUrl } from "../utils/endpoints";
import { setHeaders } from "../utils/headers";

module.exports = async (req: NowRequest, res: NowResponse) => {
  setHeaders(res);
  let query = req.query.query as string;
  let count = req.query.count as string;
  let tag = req.query.tag as string;

  if (query && tag)
    res.status(400).json({ message: "cannot use tag and query together" });

  query = `query=${query}`;
  tag = `filters=_tags:'${tag}'`;

  const request_body = {
    params: `${req.query.tag ? tag : query}&hitsPerPage=${count ? count : 5}`,
  };

  try {
    console.log(request_body);
    await axiosInstance
      .post(getSearchUrl(), request_body)
      .then((image_details: AxiosResponse<imageDetails[] | any>) => {
        let images = new Array();
        image_details.data.hits.forEach((image: imageDetails) => {
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
