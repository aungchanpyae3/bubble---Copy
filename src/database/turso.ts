import { createClient } from "@libsql/client";
export const turso = createClient({
  url: "",
  authToken: "",
});
