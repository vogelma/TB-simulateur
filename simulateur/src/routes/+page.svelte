
<script lang="ts">

import items from "../lib/images.json";
//init
let img_src = items[0].file;

let status: undefined;

async function getStatus() {
  const response = await fetch('/signal');
  status = await response.json();
}

async function postTest(){
  const data = [{"alt": "arrow_white", "file": "02.png"}];

  //console.log(JSON.stringify(data));

  const response = await fetch('/signal', {
						method: 'POST',
						body: JSON.stringify({data}),
						headers: {
							'Content-Type': 'application/json'
						}
					});
}
     
function changeImg(name: string) {
  img_src =  name;
}

        
</script>
  
  <main>
  
  <h1>Simulateur FMS</h1>
  
  <div class="fond">
    <img src={img_src} alt="actuel"/>
</div>
  
  
  <div class="bd_img">
    {#each items as item}
    <button on:click={()=>changeImg(item.file)}>
    <img src={item.file} alt={item.alt} />
    </button>
    {/each}
  </div>

  <button on:click={getStatus}>Roll the dice</button>

  {#if status !== undefined}
    <p>You rolled a {status}</p>
  {/if}


  <button on:click={postTest}>Post testing</button>

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

