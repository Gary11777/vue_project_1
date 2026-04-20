<template>
    <tr class="transition-colors duration-150 hover:bg-green-50/60">
        <td class="px-6 py-4">
            <div class="flex items-center gap-x-4">
                <img :src="`https://i.pravatar.cc/50?u=${email}`" alt="" class="w-10 h-10 rounded-full ring-2 ring-white shadow">
                <span class="text-base font-semibold text-gray-800">{{ name }}</span>
            </div>
        </td>

        <td class="px-6 py-4 text-sm text-gray-500">{{ email }}</td>

        <td class="px-6 py-4">
            <span class="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                {{ status }}
            </span>
        </td>
    </tr>
</template>

<script setup>
defineProps({
    name: String,
    email: String,
    status: String,
});
</script>