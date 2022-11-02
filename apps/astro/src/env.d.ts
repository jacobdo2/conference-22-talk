/// <reference types="astro/client" />
declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'lit-label': JSX.IntrinsicElements['div'] & { label: string; variant: string };
    }
  }
}
