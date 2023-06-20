<script lang="ts">

import items from "../lib/images.json";

//init
let img_src: string;
let img_index: number;
let status: undefined;

//set activ signal
items.forEach(img => {
  if(img.show == true)
  {
    img_src = img.file;
    img_index = img.index;
  }  
});


let testing = {img: [
    {alt: "cross", file: "01.png"},
    {alt: "arrow_white", file: "02.png"},
    {alt: "arrow_orange", file: "03.png"},
    {alt: "arrow_green", file: "04.png"},
  ]};

//get activ signal
async function getStatus() {
  const response = await fetch('/signal');
  let response_get = await response.json();
  status = response_get.alt;
}

//testing better with postman
async function postTest(){
  const data = testing["img"][0];

  console.log(JSON.stringify(data));

  const response = await fetch('/inventaire', {
						method: 'POST',
						body: JSON.stringify({data}),
						headers: {
							'Content-Type': 'application/json'
						}
					});

  const { truc } = await response.json();
  console.log(truc);
}
   
//change activ signal
function changeImg(item: { alt: string; file: string; show: boolean; index: number; }) {
  items[img_index].show = false;
  item.show = true;
  img_src = item.file;
}
        
</script>
  
<main>
  
  <h1>Simulateur FMS</h1>
  
  <div class="fond">
    <img src={img_src} alt="actuel"/>
  </div>
  
  
  <div class="bd_img">
    {#each items as item}
    <button on:click={()=>changeImg(item)}>
    <img src={item.file} alt={item.alt} />
    </button>
    {/each}
  </div>

  <button on:click={getStatus}>Get signal actif</button>

  {#if status !== undefined}
    <p>Image active {status}</p>
  {/if}


  <button on:click={postTest}>Post un nouveau signal</button>

  </main>
  
  
  <style>
    h1 {
      font-size: 5em;
    }
  
  
    button{
      margin: 10px;
    }
  
    .fond{
      background-color: black;
      margin: auto;
      width: 50%;
      padding: 10px;
    }
  
    .bd_img{
      background-color: gray;
      margin: auto;
      width: 50%;
      padding: 10px;
    }

    .bd_img button{
      width: 100px;
      height: 100px;
    }

    .bd_img img{
      width: 40%;
      height: auto;
    }

  </style>

