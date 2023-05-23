
<script lang="ts">
    let img_src = "01.png"
    let items = ["01.png","02.png", "03.png", "04.png"];

    function changeImg(name: string) {
      img_src =  name;
    }
    
    
    
</script>
  
  <main>
  
  <h1>Simulateur FMS</h1>
  
  <div class="fond">
    <img src={img_src} alt="actuel"/>
</div>
  
  
  <div class="choix">
    {#each items as item}
    <button on:click={()=>changeImg(item)}>{item}</button>
    {/each}
  </div>
  
  
  </main>
  
  
  <style>
    h1 {
      font-size: 5em;
    }
  
    p{
      color: white;
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
  
    .choix{
      background-color: gray;
      margin: auto;
      width: 50%;
      padding: 10px;
    }
  </style>

