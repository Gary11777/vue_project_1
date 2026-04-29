<script setup>
defineProps({
    show: Boolean
});
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
        <div class="modal-container">
            <div>
                <slot name="body">default body</slot>
            </div>
            <footer class="modal-footer">
                <slot name="footer">
                    <button @click="$emit('close')">Close</button>
                </slot>
            </footer>
        </div>
    </div>
    </Transition>
</template>

<style>

.modal-mask {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
}

.modal-container {
    background-color: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 7px;
}

.modal-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: .5rem;
    font-size: .8rem;
}

.modal-footer button {
    background-color: #a19f9f;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: .8rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #888686;
    }
}

.modal-enter-active {
    transition: opacity 0.6s, scale 0.6s;
}

.modal-leave-active {
    transition: opacity 0.4s, scale 0.4s;
}

.modal-enter-from, .modal-leave-to {
    opacity: 0;
    scale: 1.25;
}

.modal-enter-to, .modal-leave-from {
    opacity: 1;
    scale: 1;
}

</style>