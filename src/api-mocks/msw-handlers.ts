import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/global/example", () => {
    return HttpResponse.json({ success: true });
  }),
];
