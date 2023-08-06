import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
   site: 'https://unwrapped.design',
  integrations: [tailwind(), image(),  partytown(), sitemap()]
});