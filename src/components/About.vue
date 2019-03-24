<template>
    <div id="about">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
export default {
    title: 'Owl News - Про нас',
    name: 'about'
}
</script>
<!-- инкапсулированные стили компонента -->
<style>
#about {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>