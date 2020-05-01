<template>
	
   <div class="card">
      <div class="img-container">
         <router-link :to="data.path">
            <img src="/images/go.jpg" />
         </router-link>
      </div>
      <div class="body">
         <router-link :to="data.path">
            <h3 class="title" >{{ data.title }}</h3>
         </router-link>
         <p class="content">{{data.description}}</p>
      </div>
      <footer class="footer">
         <Avatar />
         <router-link :to="data.path" class="button">LEER</router-link>
      </footer>
   </div>
   
</template>


<!-- JS -->
<script>
   export default {
      name: 'Card',

      props: ['data'],

   }
</script>


<!-- STYLES -->
<style scoped>
.card {
   display: flex;
   flex-direction: column;
	width: 100%;
   height: 100%;
   border-radius: .5rem;
   overflow: hidden;
   box-shadow: 0 2px 4px rgba(174,190,205,.3);
}
.img-container {
   position: relative;
   width: 100%;
   padding-bottom: 56.25%;
   border-top-left-radius: .5rem;
   border-top-right-radius: .5rem;
}
.img-container img {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
}
.body {
   display: flex;
   flex-direction: column;
   padding: 0 1rem;
   flex-grow: 1;
}
.title {
   margin: 0;
   padding-top: 1rem;
   color: rgb(65, 64, 64);
   font-weight: 900;
}
.content {
   margin-top: .3rem;
}
.footer {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: .1rem 1rem;
   width: -webkit-fill-available;
   background: rgb(243, 243, 243);
   border-bottom-left-radius: .5rem;
   border-bottom-right-radius: .5rem;
}
.button {
   background: rgb(243, 243, 243);
   color: #3eaf7c;
   border: none;
   outline:none;
   height: fit-content;
   padding: .5rem .5rem;
   border-radius: .3rem;
   font-weight: 700;
}
</style>
