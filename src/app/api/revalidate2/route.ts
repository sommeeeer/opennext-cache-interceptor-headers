import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  revalidateTag("date")
  return new Response("ok");
}
