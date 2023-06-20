//connaître l'affichaga actuel et change l'affichage actuel

import { json } from '@sveltejs/kit';
// @ts-ignore
import { readFileSync,writeFile, readdirSync, read } from 'node:fs';


//Renvoit l'image actuellement affichée
export function GET() {
    var toReturn = undefined
    let raw_data = readFileSync("src/lib/images.json", "utf-8");
    let items = JSON.parse(raw_data);

	items.forEach((/** @type {{ show: boolean; }} */ img) => {
        if(img.show == true)
        {
            toReturn = img;
        }  
      });

    if(toReturn == undefined){
	    return json({status: 500});
    }else{
        return json(toReturn);
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
    
    //mettre à false l'affichage actuel et mettre à true le nouveau
    temp.forEach((/** @type {{ index: number,show: boolean; }} */ img) => {
        if(img.show == true)
        {
            img.show = false;
        }
        if(img.index == data["index"]) {
            img.show = true;
        }
      });

    
    let data_json = JSON.stringify(temp,null,2);

    writeFile("src/lib/images.json", data_json, err => {
        if (err) console.log("Error writing file:", err);
    });

    }else{
        return json({status: 400});
    }


	return json({status: 201});
}

