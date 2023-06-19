import { json } from '@sveltejs/kit';
// @ts-ignore
import { readFileSync,writeFile, readdirSync, read } from 'node:fs';


//test pour le get
export function GET() {
	const status = "dice " + Math.random();

	return json(status);
}


// @ts-ignore
export async function POST({request,cookies}) {
    const data  = await request.json();

    if (data != undefined) {
    //to-dob something with the images
    // @ts-ignore
    let description = readFileSync("src/lib/images.json", "utf-8");

    let temp = JSON.parse(description);
    temp.push(data["data"]);
    console.log(temp);
    let data_json = JSON.stringify(temp,null,2);
    console.log(data_json);

    writeFile("src/lib/images.json", data_json, err => {
        if (err) console.log("Error writing file:", err);
    });

    }else{
        console.log("mauvaise réception");
    }


	return json({status: 201});
}

