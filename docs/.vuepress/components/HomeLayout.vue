<template >
   <div class="container">
      <header class="header">
         <h1 >Mis notas</h1>
         <h3> Una guia con mis notas sobre programación y mas! </h3>
         <hr />
      </header>
      
      <ListNotes />

  </div>
</template>


<script>
   export default {

      name: 'HomeLayout',

   }
</script>


<style scoped>
.container {
   max-width: 1200px;
   margin-left: auto;
   margin-right: auto;
   padding: 3rem 1rem;
}
.header {
   text-align: center;
}
</style>