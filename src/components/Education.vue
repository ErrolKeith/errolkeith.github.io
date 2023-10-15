<template>
    <div>
        <p class="text-sm font-semibold">
            Education
        </p>
        <ul>
            <li v-for="(school, index) in schooling">
            <div :key="index" class="m-2">
                <small>{{ school.gradMonth + ' ' + school.gradYear }}</small>
                <p class="">{{ school.degree }}</p>
                <div class="grid grid-cols-1">
                <small>{{ school.school }}</small>
                </div>
            </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    schooling: Education[];
}>();
</script>