<template>
<div class="avatar">
    <img class="avatar-image" src="/images/imgAbout.jpg" />
</div>
</template>

<script>
export default {
    name: 'Avatar',
};
</script>

<style scoped>
.avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    border: 0.1rem solid white;
    overflow: hidden;
}

.avatar-image {
    max-width: 100%;
}
</style>
