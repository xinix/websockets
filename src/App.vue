<script lang="ts" setup>
import TimeChecker from './components/TimeChecker.vue'
</script>

<template>
    <main>
        <h1>👋🏻 Dag meneer!</h1>
        <h2>Hoe laat is het daar?</h2>
        <TimeChecker />
    </main>
</template>

<style scoped>
main {
    align-self: center;
    margin: 0 auto;
    padding: 2rem;
    color: #fad7f8;
    border-radius: 15px;
    background-color: rgba(67, 35, 68, 0.6);
}
</style>
