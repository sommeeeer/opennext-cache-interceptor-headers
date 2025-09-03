import { unstable_cache } from "next/cache";

export const dynamic = "force-static";

export default async function Page() {
  const dateFn = unstable_cache(async () => new Date().toISOString(), ["date"], {
    tags: ["date"],
  });
  const date = await dateFn();
	return <>{date}</>
}

