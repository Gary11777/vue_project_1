<script setup>
import TeamMember from '@/components/Teams/TeamMember.vue';
import team from '@/team.json';
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400" :disabled="true">Add Member (0 Spots Left)</button>
    </div>
    <div>
      <div class="inline-flex items-center text-3xl relative">
        <!-- <img src="/smiley.png" alt="" class="mr-2"> -->
        <h3>{{ team.name }}</h3>
        <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">{{ team.spots }}</div>
      </div>
    </div>
  </header>

  <div class="place-self-center w-full max-w-4xl flex flex-col gap-y-3 mt-8">
    <div class="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200 bg-white">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gradient-to-r from-green-500 to-emerald-600">
          <tr>
            <th class="text-left px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white">Name</th>
            <th class="text-left px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white">Email</th>
            <th class="text-left px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 bg-white">
          <TeamMember v-for="member in team.members" :key="member.id" :name="member.name" :email="member.email" :status="member.status" />
        </tbody>
      </table>
    </div>
    <p class="text-right text-gray-500 italic text-sm">There are no remaining team spots. Upgrade to add more.</p>
  </div>
  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
  </footer>
</template>
