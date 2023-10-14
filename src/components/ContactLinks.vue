<template>
    <div class="flex p-2 text-center justify-center md:justify-around mx-auto mb-2">
        <a :href="`mailto:${email}`" class="mx-2">
            <small>
                <Icon icon="logos:google-gmail" />
            </small>
        </a>           
        <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" :aria-label="social.uiName" class="mx-2" target="_blank">
            <small>
                <Icon :icon="social.icon" class="hover:text-md"/>
            </small>
        </a>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
    email: string;
    socialLinks: SocialLink[];
}>();
</script>