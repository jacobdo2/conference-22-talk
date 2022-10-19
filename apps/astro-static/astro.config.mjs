import { defineConfig } from 'astro/config';
// import customElements from 'custom-elements-ssr/astro.js';
function getViteConfiguration() {
  return {
    optimizeDeps: {
      include: [
        'custom-elements-ssr/client-shim.min.js',
        '@webcomponents/template-shadowroot/template-shadowroot.js'
      ],
      exclude: ['custom-elements-ssr/server.js']
    },
    ssr: {
      external: ['linkedom', 'custom-elements-ssr/server.js']
    }
  };
}

function customElements() {
  return {
    name: 'custom-elements-ssr',
    hooks: {
      'astro:config:setup': ({ updateConfig, addRenderer }) => {
        addRenderer({
          name: 'custom-elements-ssr',
          clientEntrypoint: 'custom-elements-ssr/client-shim.min.js',
          serverEntrypoint: 'custom-elements-ssr/server.js'
        });

        updateConfig({
          vite: getViteConfiguration()
        });
      }
    }
  };
}
// https://astro.build/config
export default defineConfig({
  integrations: [customElements()]
});
