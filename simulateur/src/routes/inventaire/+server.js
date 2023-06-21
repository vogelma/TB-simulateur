//renvoit l'état de la bd et ajout d'une nouveau signal
import { json } from '@sveltejs/kit';
// @ts-ignore
import { readFileSync,writeFile, readdirSync, read } from 'node:fs';

export function GET() {
    let raw_data = readFileSync("src/lib/images.json", "utf-8");
    let items = JSON.parse(raw_data);

    if(items.length){
	    return json(items);
    }else{
        return json({status: 500});
        
    }
}

// @ts-ignore
export async function POST({request,cookies}) {
    const data  = await request.json();

    if (data != undefined) {
    //to-dob something with the images
    // @ts-ignore
    let description = readFileSync("src/lib/images.json", "utf-8");

    //pourrait être amélioré
    let temp = JSON.parse(description);
    temp.push(data);
    console.log(temp);
    let data_json = JSON.stringify(temp,null,2);

    writeFile("src/lib/images.json", data_json, err => {
        if (err) console.log("Error writing file:", err);
    });

    }else{
        return json({status: 400});
    }

	return json({status: 201});
}