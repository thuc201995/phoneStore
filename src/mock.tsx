import { setupWorker, rest } from "msw";
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
              firstName: "John",
              age: 38,
            })
          );
        case "ipad":
          return res(
            ctx.json({
              firstName: "John1",
              age: 38,
            })
          );
      }
    }
  ),
];
export const worker = setupWorker(...handler);
