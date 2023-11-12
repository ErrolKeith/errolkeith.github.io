<template>
    <form>
        <div class="flex items-center min-h-screen bg-gray-100 dark:bg-gray-200 bg-opacity-40 dark:bg-opacity-80 fixed top-0 right-0 left-0 bottom-0">
        <div class="container mx-auto">
            <div class="max-w-xl mx-auto my-10 bg-white p-5 rounded-md shadow-sm py-4">
                <button @click.prevent="close" aria-label="close contact form modal"><Icon icon="carbon:close-outline" class="text-gray-600 text-3xl"/></button>
                
                <div class="text-center">
                    <h1 class="my-3 text-3xl font-semibold text-gray-900 dark:text-gray-900">
                    Contact Errol
                    </h1>
                    <p class="text-gray-400 dark:text-gray-400">
                    Fill out the form below to send a message.
                    </p>
                </div>
                <div class="m-7">
                    <form :action="formAction" method="POST" id="form" class="needs-validation" novalidate>
                    <input type="hidden" name="access_key" :value="web3PublicAccessKey" />
                    <input type="hidden" name="subject" value="New Submission errolkeith.github.io" />
                    <input type="hidden" name="redirect" value="https://errolkeith.github.io">
                    <input type="checkbox" name="botcheck" id="" style="display: none;" />

                    <div class="flex mb-6 space-x-4">
                        <div class="w-full md:w-1/2">
                        <label for="fname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">First Name</label>
                        <input type="text" name="name" id="first_name" placeholder="John" required class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300" />
                        <div class="hidden empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                            Please provide your first name.
                        </div>
                        </div>
                        <div class="w-full md:w-1/2">
                        <label for="lname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Last Name</label>
                        <input type="text" name="last_name" id="lname" placeholder="Doe" required class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300" />
                        <div class="hidden empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                            Please provide your last name.
                        </div>
                        </div>
                    </div>

                    <div class="flex mb-6 space-x-4">
                        <div class="w-full md:w-1/2">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300" />
                        <div class="hidden empty-feedback text-red-400 text-sm mt-1">
                            Please provide your email address.
                        </div>
                        <div class="hidden invalid-feedback text-red-400 text-sm mt-1">
                            Please provide a valid email address.
                        </div>
                        </div>

                        <div class="w-full md:w-1/2">
                        <label for="phone" class="block text-sm mb-2 text-gray-600 dark:text-gray-400">Phone Number</label>
                        <input type="text" name="phone" id="phone" placeholder="(555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300" />

                        <div class="hidden empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                            Please provide your phone number.
                        </div>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                        <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300" required></textarea>
                        <div class="hidden empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                        Please enter your message.
                        </div>
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="w-full px-3 py-4 text-white bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none">
                        Send Message
                        </button>
                    </div>
                    <p class="text-base text-center text-gray-400" id="result"></p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </form>
</template>
<script setup lang="ts">
import {Icon} from "@iconify/vue";
import { ref } from "vue";

const web3PublicAccessKey = ref(import.meta.env.VITE_WEB3_FORMS_PUBLIC_ACCESS_KEY);
const formAction = ref("https://api.web3forms.com/submit");

const emit = defineEmits<{
    (e: 'close'): void
}>();

function close(){
    emit('close');
}
</script>