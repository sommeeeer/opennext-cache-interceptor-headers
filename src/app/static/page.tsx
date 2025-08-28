export const dynamic = "force-static";

async function getTime() {
	return new Date().toISOString();
}

export default async function Page() {
	const time = await getTime();
	return <>{time}</>
}
