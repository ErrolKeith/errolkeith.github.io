<template>
    <div class="mb-6">
        <p class="text-sm font-semibold">Skills</p>
        <ul class="flex flex-wrap justify-around m-2">
            <li v-for="(skill, index) in skills" class="my-2" :key="index">
            <!-- TODO: Convert this small tag to be Pill.vue for pill components-->
            <small class="px-3 py-2 rounded-xl bg-blue-600 text-white">{{ skill }}</small>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    skills: string[];
}>();
</script>