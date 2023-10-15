<template>
    <div class="p-6">
        <!-- <h3 class="font-semibold mb-4">Experience</h3> -->
        <ul>
            <li v-for="position in experience" class="mb-20">
                <div class="grid grid-cols-3 font-semibold max-w-[95%] mx-auto">
                    <h3 class="text-left">{{ position.title }}</h3>
                    <p class="text-center">{{ position.company }}</p>
                    <p class="text-right">{{ position.startEndDate }}</p>
                </div>
                <hr class="border-2 border-blue-600 rounded-lg mb-8"/>
                <ul v-for="experience in position.detailItems" class="m-4 list-disc px-8">
                    <li class="px-2">
                    {{ experience }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    experience: Experience[]
}>();
</script>