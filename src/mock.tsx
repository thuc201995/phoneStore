import { setupWorker, rest } from "msw";
import iphone13 from "./imgs/product/ip13.webp";
import ipad from "./imgs/product/ipad.webp";
const handler = [
  rest.get(
    "/api/product",
    // Example of a response resolver that returns
    // a "Content-Type: application/json" response.
    (req, res, ctx) => {
      const category = req.url.searchParams.get("category");
      switch (category) {
        case "iphone":
          return res(
            ctx.json({
              total: 10,
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Iphone 13",
                  category_name: "iphone 13",
                  image: iphone13,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Iphone 13",
                  category_name: "iphone 13 pro max",
                  image: iphone13,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Iphone 13",
                  category_name: "iphone 13 pro",
                  image: iphone13,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Iphone 12",
                  category_name: "iphone 12",
                  image: iphone13,
                },
                {
                  id: "62a3f81760f58bfcbed017123",
                  name: "Iphone 12 pro max",
                  category_name: "iphone 12",
                  image: iphone13,
                },
              ],
            })
          );
        case "ipad":
          return res(
            ctx.json({
              total: 10,
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Ipad 1",
                  category_name: "iphone 13",
                  image: ipad,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Ipad 11",
                  category_name: "iphone 13 pro max",
                  image: ipad,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Ipad 111",
                  category_name: "iphone 13 pro",
                  image: ipad,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Ipad 132",
                  category_name: "iphone 12",
                  image: ipad,
                },
                {
                  id: "62a3f81760f58bfcbed017123",
                  name: "Ipad 1322",
                  category_name: "iphone 12",
                  image: ipad,
                },
              ],
            })
          );
      }
    }
  ),
];
export const worker = setupWorker(...handler);
