<template >
   <div class="container">
      <header class="header">
         <h1 >{{$frontmatter.title}}</h1>
         <h3> {{$frontmatter.description}} </h3>
         <hr />
      </header>
      
      <ListNotes :data="$frontmatter.data"/>

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