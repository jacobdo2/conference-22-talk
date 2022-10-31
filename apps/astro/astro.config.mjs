import image from '@astrojs/image';
import lit from '@astrojs/lit';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), lit(), react(), svelte(), image()]
});
