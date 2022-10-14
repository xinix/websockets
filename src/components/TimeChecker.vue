<script lang="ts" setup>
import { io } from 'socket.io-client'
import { onBeforeUnmount, reactive, ref } from 'vue'

const now = new Date()
const state = reactive({
    time: `${now.getHours()}:${now.getMinutes()}`,
})
const messages = ref<string[]>([])

const socket = io('dev.bakkersonline.be:3000')
socket.on('bericht', (message: string) => {
    messages.value.push(message)
})

const onSubmit = () => {
    socket.emit('klok', state.time)
}

onBeforeUnmount(() => socket.disconnect())
</script>

<template>
    <form @submit.prevent="onSubmit">
        <ul>
            <li v-for="msg in messages">{{ msg }}</li>
        </ul>

        <div class="form-field">
            <label for="time">Tis hier nu:</label>
            <input id="time" v-model="state.time" name="time" type="time" />
        </div>
        <button type="submit">Laat dat weten aan den andere meneer</button>
    </form>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;

    li + li {
        margin-top: 0.5em;
    }
}

.form-field {
    margin: 2em 0;

    label {
        font-size: 1.5em;
        font-weight: bold;
        display: block;
        margin: 0.5em 0;
    }

    input[type='time'] {
        font-size: 1.5em;
        padding: 0.5em 1em;
        color: #32cbad;
        border: solid 3px rgba(91, 24, 24, 0.4);
        border-radius: 0.25em;
        background-color: rgb(255, 72, 210, 0.5);
    }
}
</style>
