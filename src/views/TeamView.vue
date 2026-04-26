<script setup>
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamFooter from '@/components/Teams/TeamFooter.vue';
import { useTeamStore } from '@/stores/TeamStore';
import Modal from '@/components/Teams/Modal.vue';
import { ref } from 'vue';

let team = useTeamStore();

team.fill();

let showModal = ref(false);

</script>

<template>
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center w-full max-w-4xl flex flex-col gap-y-3 mt-8">
    <TeamMembers />
  </div>

  <TeamFooter />

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
</template>
