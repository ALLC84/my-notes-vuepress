<template>
<div class="root">
    <header class="header">
        <h1>
            {{ $frontmatter.title }}
        </h1>
        <h3 class="header-description">
            {{ $frontmatter.description }}
        </h3>
    </header>

    <main class="main">
        <ListNotes :data="$frontmatter.cards" />
    </main>

    <footer class="footer">
        {{ $frontmatter.footer }}
    </footer>
</div>
</template>

<script>
export default {
    name: 'HomeLayout',
};
</script>

<style scoped>
.root {
    position: relative;
    max-width: 960px;
    /* min-height: calc(100vh - 6rem); */
    margin-left: auto;
    margin-right: auto;
    padding: 3rem 1rem;
}

.header {
    text-align: center;
}

.header-description {
    color: #6a8bad;
}

.main {
    margin: 3rem 0;
    padding-bottom: 3rem;
    border-bottom: 0.03rem solid rgb(218, 218, 218);
}

.footer {
    text-align: center;
    padding: 0 1rem;
    color: #6a8bad;
    font-size: 0.9em;
}
</style>
