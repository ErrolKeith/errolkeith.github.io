<template>
    <div class="flex justify-center md:justify-around items-center">
        <img class="rounded-3xl max-w-[48px]" src="/errol-headshot.jpeg" alt="Errol keith headshot"/>
        <div>
            <h1 class="p-2 font-semibold -mb-4">{{ name }}</h1>
            <h2 class="p-2">{{ title }}</h2>
        </div>
    </div>

</template>

<script setup lang="ts">

defineProps<{
    name:string;
    title:string;
}>();
</script>