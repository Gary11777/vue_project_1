<script setup>
import Modal from '../Modal.vue';
import { ref } from 'vue';
import { useTeamStore } from '@/stores/TeamStore';

let showModal = ref(false);

let team = useTeamStore();
</script>

<template>
  <button 
      class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400" 
      :disabled="! team.spotsRemaining"
      @click="showModal = true"
      >Add Member ({{ team.spotsRemaining }} Spots Left)</button>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #body>
        <p>Need to add a new member to your team. </p>
        <form class="mt-6">
          <div class="flex flex-col gap-y-2">
            <input type="email"
            placeholder="Email"
            v-model="email"
            class="w-full p-2 border border-gray-300 rounded-md"
            />
            <input type="text"
            placeholder="Name"
            v-model="name"
            class="w-full p-2 border border-gray-300 rounded-md"
            />
            <button type="submit" class="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-150 cursor-pointer">Add Member</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>