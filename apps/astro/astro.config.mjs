import lit from '@astrojs/lit';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from '@astrojs/svelte';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), react(), svelte(), image()]
});
