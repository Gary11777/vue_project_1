<script setup>
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamFooter from '@/components/Teams/TeamFooter.vue';
import { useTeamStore } from '@/stores/TeamStore';

let team = useTeamStore();

team.fill();

setTimeout(() => {
  team.grow(25);
}, 2000);
</script>

<template>
  <TeamHeader />

  <div class="place-self-center w-full max-w-4xl flex flex-col gap-y-3 mt-8">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>
