<template>
<div class="card">
    <div class="card-image-container">
        <router-link :to="data.path">
            <img class="card-image" :src="data.image" :alt="data.title" />
        </router-link>
    </div>
    <div class="card-body">
        <router-link :to="data.path">
            <h3 class="card-body-title">{{ data.title }}</h3>
        </router-link>
        <p class="card-body-content">{{ data.description }}</p>
    </div>
    <footer class="card-footer">
        <Avatar />
        <router-link :to="data.path" class="card-footer-button">Leer</router-link>
    </footer>
</div>
</template>

<!-- JS -->

<script>
export default {
    name: 'Card',

    props: ['data'],
};
</script>

<!-- STYLES -->

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(174, 190, 205, 0.3);
}

.card-image-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}

.card-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}

.card-body {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    flex-grow: 1;
}

.card-body-title {
    margin: 0;
    padding-top: 1rem;
    color: rgb(65, 64, 64);
    font-weight: 900;
}

.card-body-content {
    margin-top: 0.3rem;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 1rem;
    width: -webkit-fill-available;
    background: rgb(250, 250, 250);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}

.card-footer-button {
    background: rgb(250, 250, 250);
    color: #3eaf7c;
    border: none;
    outline: none;
    height: fit-content;
    padding: 0.5rem 0.5rem;
    border-radius: 0.3rem;
    font-weight: 700;
}
</style>
