import { setupWorker, rest } from "msw";
import iphone13 from "./imgs/product/ip13.webp";
import ipad from "./imgs/product/ipad.webp";
import mac from "./imgs/product/mac.png";
import airpod from "./imgs/product/airpod.webp";
import watch from "./imgs/product/watch.webp";
import phukien from "./imgs/product/phukien.webp";
import dichvu from "./imgs/product/dichvu.png";
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
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Iphone 13",
                  category_name: "iphone 13 pro max",
                  image: iphone13,
                  price: 2000000,
                  discount_price: null,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Iphone 13",
                  category_name: "iphone 13 pro",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Iphone 12",
                  category_name: "iphone 12",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017123",
                  name: "Iphone 12 pro max",
                  category_name: "iphone 12",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
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
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Ipad 11",
                  category_name: "iphone 13 pro max",
                  image: ipad,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Ipad 111",
                  category_name: "iphone 13 pro",
                  image: ipad,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Ipad 132",
                  category_name: "iphone 12",
                  image: ipad,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017123",
                  name: "Ipad 1322",
                  category_name: "iphone 12",
                  image: ipad,
                  price: 2000000,
                  discount_price: null,
                },
              ],
            })
          );
        case "home":
          return res(
            ctx.json({
              total: 10,
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Ipad 1",
                  category_name: "iphone 13",
                  image: mac,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "mac 11",
                  category_name: "iphone 13 pro max",
                  image: mac,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "mac 111",
                  category_name: "iphone 13 pro",
                  image: mac,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "mac 132",
                  category_name: "iphone 12",
                  image: mac,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017123",
                  name: "mac 1322",
                  category_name: "iphone 12",
                  image: mac,
                  price: 2000000,
                  discount_price: null,
                },
              ],
            })
          );
        case "accessory":
          return res(
            ctx.json({
              total: 10,
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Iphone 13",
                  category_name: "iphone 13",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Iphone 13",
                  category_name: "iphone 13 pro max",
                  image: iphone13,
                  price: 2000000,
                  discount_price: null,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Iphone 13",
                  category_name: "iphone 13 pro",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Iphone 12",
                  category_name: "iphone 12",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017123",
                  name: "Iphone 12 pro max",
                  category_name: "iphone 12",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
                },
              ],
            })
          );
        case "home-page-iphone":
          return res(
            ctx.json({
              total: 10,
              title: "Iphone",
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Iphone 13",
                  category_name: "iphone 13",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Iphone 13",
                  category_name: "iphone 13 pro max",
                  image: iphone13,
                  price: 2000000,
                  discount_price: null,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Iphone 13",
                  category_name: "iphone 13 pro",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Iphone 12",
                  category_name: "iphone 12",
                  image: iphone13,
                  price: 2000000,
                  discount_price: 123456789,
                },
              ],
            })
          );
        case "home-page-ipad":
          return res(
            ctx.json({
              total: 10,
              title: "Ipad",
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Ipad 1",
                  category_name: "iphone 13",
                  image: ipad,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Ipad 11",
                  category_name: "iphone 13 pro max",
                  image: ipad,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Ipad 111",
                  category_name: "iphone 13 pro",
                  image: ipad,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Ipad 132",
                  category_name: "iphone 12",
                  image: ipad,
                  price: 2000000,
                  discount_price: 123456789,
                },
              ],
            })
          );
        case "home-page-mac":
          return res(
            ctx.json({
              total: 10,
              title: "MAC",
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Ipad 1",
                  category_name: "iphone 13",
                  image: mac,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Ipad 11",
                  category_name: "iphone 13 pro max",
                  image: mac,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Ipad 111",
                  category_name: "iphone 13 pro",
                  image: mac,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Ipad 132",
                  category_name: "iphone 12",
                  image: mac,
                  price: 2000000,
                  discount_price: 123456789,
                },
              ],
            })
          );
        case "home-page-airpods":
          return res(
            ctx.json({
              total: 10,
              title: "Airpods",
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Ipad 1",
                  category_name: "iphone 13",
                  image: airpod,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Ipad 11",
                  category_name: "iphone 13 pro max",
                  image: airpod,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Ipad 111",
                  category_name: "iphone 13 pro",
                  image: airpod,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Ipad 132",
                  category_name: "iphone 12",
                  image: airpod,
                  price: 2000000,
                  discount_price: 123456789,
                },
              ],
            })
          );
        case "home-page-watch":
          return res(
            ctx.json({
              total: 10,
              title: "Watch",
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Ipad 1",
                  category_name: "iphone 13",
                  image: watch,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Ipad 11",
                  category_name: "iphone 13 pro max",
                  image: watch,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Ipad 111",
                  category_name: "iphone 13 pro",
                  image: watch,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Ipad 132",
                  category_name: "iphone 12",
                  image: watch,
                  price: 2000000,
                  discount_price: 123456789,
                },
              ],
            })
          );
        case "home-page-phu-kien":
          return res(
            ctx.json({
              total: 10,
              title: "Phụ kiện chính hãng",
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Ipad 1",
                  category_name: "iphone 13",
                  image: phukien,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Ipad 11",
                  category_name: "iphone 13 pro max",
                  image: phukien,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Ipad 111",
                  category_name: "iphone 13 pro",
                  image: phukien,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Ipad 132",
                  category_name: "iphone 12",
                  image: phukien,
                  price: 2000000,
                  discount_price: 123456789,
                },
              ],
            })
          );
        case "home-page-dich-vu":
          return res(
            ctx.json({
              total: 10,
              title: "Dịch vụ",
              data: [
                {
                  id: "62a3f81760f58bfcbed017e9",
                  name: "Ipad 1",
                  category_name: "iphone 13",
                  image: dichvu,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed017r4",
                  name: "Ipad 11",
                  category_name: "iphone 13 pro max",
                  image: dichvu,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01734",
                  name: "Ipad 111",
                  category_name: "iphone 13 pro",
                  image: dichvu,
                  price: 2000000,
                  discount_price: 123456789,
                },
                {
                  id: "62a3f81760f58bfcbed01324",
                  name: "Ipad 132",
                  category_name: "iphone 12",
                  image: dichvu,
                  price: 2000000,
                  discount_price: 123456789,
                },
              ],
            })
          );
      }
    }
  ),
  rest.get(
    "/api/product/:id",
    // Example of a response resolver that returns
    // a "Content-Type: application/json" response.
    (req, res, ctx) => {
      const { id } = req.params;
      return res(
        ctx.json({
          data: {
            name: "iphone",
            color: {
              red: [iphone13, ipad, mac, ipad, iphone13, mac, ipad],
              blue: [ipad, ipad, ipad, ipad, ipad],
              green: [mac, mac, mac, mac, mac],
            },
          },
        })
      );
    }
  ),
];
export const worker = setupWorker(...handler);
