<template>
<div class="card-container">
    <article v-for="(item, index) in data" :key="index">
        <Card :data="item" />
    </article>
</div>
</template>

<script>
export default {
    name: 'ListNotes',

    props: ['data'],
};
</script>

<style scoped>
.card-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    width: 100%;
}

@media screen and (min-width: 576px) {
    .card-container {
        grid-template-columns: 1fr 1fr;
        gap: 1.4rem;
    }
}

@media screen and (min-width: 678px) {
    .card-container {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.8rem;
    }
}
</style>
