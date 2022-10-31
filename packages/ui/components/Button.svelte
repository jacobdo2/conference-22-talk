<script lang="ts">
  export let onClick: (event: MouseEvent) => void;

  export let type: string = 'button';
</script>

<button type="{type}" on:click="{onClick}">
  <slot />
</button>

<style>
</style>
