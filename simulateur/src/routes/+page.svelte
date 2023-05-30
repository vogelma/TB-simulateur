
<script lang="ts">

let status: undefined;

async function getStatus() {
  const response = await fetch('/signal');
  status = await response.json();
}


  let items = {img: [
    {alt: "cross", file: "01.png"},
    {alt: "arrow_white", file: "02.png"},
    {alt: "arrow_orange", file: "03.png"},
    {alt: "arrow_green", file: "04.png"},
  ]};
   
   let bd_img = items;
   let img_src = bd_img["img"][0].file;


    
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
    {#each bd_img["img"] as item}
    <button on:click={()=>changeImg(item.file)}>
    <img src={item.file} alt={item.alt} />
    </button>
    {/each}
  </div>

  <button on:click={getStatus}>Roll the dice</button>

  {#if status !== undefined}
    <p>You rolled a {status}</p>
  {/if}
  
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

