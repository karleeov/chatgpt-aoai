import { NextRequest } from "next/server";
const buildRequestLike = () => {
  try {
    const { headers } = require("next/headers");
    return new NextRequest("https://placeholder.com", { headers: headers() });
  } catch (e) {
    if (e && "message" in e && typeof e.message === "string" && e.message.toLowerCase().includes("Dynamic server usage".toLowerCase())) {
      throw e;
    }
    throw new Error(
      `Clerk: auth() and currentUser() are only supported in App Router (/app directory).
If you're using /pages, try getAuth() instead.
Original error: ${e}`
    );
  }
};
export {
  buildRequestLike
};
//# sourceMappingURL=utils.js.map