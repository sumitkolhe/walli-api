import { NowRequest, NowResponse } from "@vercel/node";

module.exports = async (_req: NowRequest, res: NowResponse) => {
  res.json({
    Server: "online",
    Documentation: "https://sumitkolhe.gitbook.io/walli",
    Github_repo: "https://github.com/sumitkolhe/walli-api",
    Author: "https://sumit.codes",
  });
};
