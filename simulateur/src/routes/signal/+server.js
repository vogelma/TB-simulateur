import { json } from '@sveltejs/kit';
// @ts-ignore
import { readFile,writeFile, readdirSync } from 'node:fs';

// @ts-ignore
function jsonReader(filePath, cb) {
    readFile(filePath, (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        // @ts-ignore
        const object = JSON.parse(fileData);
        return cb && cb(null, object);
      } catch (err) {
        return cb && cb(err);
      }
    });
  }



//test pour le get
export function GET() {
	const status = "dice " + Math.random();

	return json(status);
}


// @ts-ignore
export async function POST({request,cookies}) {
    const { description } = await request.json();
    console.log(description);

    if (description === undefined) {
    //to-dob something with the images
    // @ts-ignore
    jsonReader("src/lib/images.json", (err, description) => {
        if (err) {
          console.log("Error reading file:", err);
          return;
        }
        writeFile("src/lib/images.json", JSON.stringify(description,null,2), err => {
          if (err) console.log("Error writing file:", err);
        });
      });

    }else{
        console.log("mauvaise réception");
    }


	return json({status: 201});
}

