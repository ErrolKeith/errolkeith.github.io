import { createApp } from "vue";
import { z } from "zod";
import "./style.css";
import App from "./App.vue";

const environmentSchema = z.object({
  web3PublicAccessKey: z.string(),
});

validateEnvironment();

createApp(App).mount("#app");

function validateEnvironment() {
  const validEnvironemnt = environmentSchema.safeParse({
    web3PublicAccessKey:
      import.meta.env.VITE_WEB3_FORMS_PUBLIC_ACCESS_KEY ??
      import.meta.env.production.VITE_WEB3_FORMS_PUBLIC_ACCESS_KEY,
  });

  if (!validEnvironemnt.success) {
    throw Error(
      `Invalid Environment Configuration. Ensure all Variables are present.`
    );
  }
}
