<script lang="ts">
  import theme from '../theme';

  export let onClick: (event: MouseEvent) => void;

  export let type: string = 'button';
</script>

<button
  style="
    --defaultBackground: {theme.palette.blue.primary};
    {$$props.style};
   "
  type="{type}"
  on:click="{onClick}"
>
  <slot />
</button>

<style>
  button {
    height: 40px;
    padding: 10px 24px;
    background: var(--defaultBackground);
    color: white;
    border-radius: 4px;
    font-weight: bold;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
</style>
