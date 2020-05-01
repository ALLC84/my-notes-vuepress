<template >
   <div>
      <main class="container">
         <article v-for="(item, index) in listNotes" :key="index">
            <Card :data="item"/>
         </article>
      </main>
   </div>
</template>


<script>
   export default {
      name: 'ListNotes',
      
      data() {
         return{
            listNotes: []
         }
      },

      methods: {
         getNotes: async function() {
            const data = await fetch('/data/data-notes.json');
            const notes = await data.json();
            this.listNotes = notes
         }
      },

      mounted() {
         // Se ejecuta al insertar el DOM
         this.getNotes()
      },

   }
</script>


<style scoped>
.container{
   display: grid;
   gap: 1rem;
   grid-template-columns: 1fr;
   margin-top: 3rem;
}
@media screen and (min-width: 576px) {
   .container{
      grid-template-columns: 1fr 1fr ;
      gap: 1.4rem;
   }
}
@media screen and (min-width: 678px) {
   .container{
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.8rem;
   }
}
@media screen and (min-width: 992px) {
   .container{
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 2.2rem;
   }
}
</style>