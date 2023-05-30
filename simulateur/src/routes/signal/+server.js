import { json } from '@sveltejs/kit';

//test pour le get
export function GET() {
	const status = "aled" + Math.random();

	return json(status);
}

export async function POST({request, cookies}) {
    const { description } = await request.json();
    const items = cookies.get('img');

    //to something with the images

	return json({status: 201});
}

