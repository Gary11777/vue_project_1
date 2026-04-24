<script setup>
import TeamMember from './TeamMember.vue';
import { useTeamStore } from '@/stores/TeamStore';

let team = useTeamStore();
</script>

<template>
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
    <p class="text-right text-gray-500 italic text-sm" v-show="! team.spotsRemaining">There are no remaining team spots. Upgrade to add more.</p>
    <p class="text-right text-gray-500 italic text-sm" v-show="team.spotsRemaining">There are {{ team.spotsRemaining }} remaining team spots.</p>
</template>