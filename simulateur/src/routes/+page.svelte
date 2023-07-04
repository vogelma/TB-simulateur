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

        
</script>
  
<main>
  
  <h1>Simulateur FMS</h1>
  
  <div class="fond">
    <img src={img_src} alt="actuel"/>
  </div>
  
  <div class="bd_img">
    <h2>Inventaire signal</h2>
    {#each items as item}
    <img src={item.file} alt={item.alt} />
    {/each}
  </div>

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


    .bd_img img{
      width: 10%;
      height: auto;
    }

  </style>

