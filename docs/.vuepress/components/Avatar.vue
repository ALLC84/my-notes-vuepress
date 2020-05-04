<template>

   <div class="avatar">
      <img class="avatar__image" src="/images/imgAbout.jpg" />
   </div>

</template>

<script>
export default {
   name: "Avatar"
}
</script>

<style scoped>
.avatar {
   width: 2rem;
   height: 2rem;
   border-radius: 1000px;
   border: .1rem solid white;
   overflow: hidden;
}
.avatar__image {
   max-width: 100%;
}
</style>