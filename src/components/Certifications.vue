<template>
    <div class="mb-6">
        <p class="text-sm font-semibold">
            Certifications
        </p>
        <ul class="m-2">
            <li class="mb-4" v-for="(cert, index) in certifications">
            <small class="px-3 py-2 rounded-xl bg-blue-600 text-white" :key="index">{{ cert }}</small>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">

defineProps<{ certifications: string[] }>();
</script>