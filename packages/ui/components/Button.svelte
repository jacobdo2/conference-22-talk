<script lang="ts">
  import theme from '../theme';

  export let onClick: (event: MouseEvent) => void;

  export let type: string = 'button';
</script>

<button
  style="
    --defaultBackground: {theme.palette.blue.primary};
    --focusBackground: {theme.palette.blue.medium};
    {$$props.style};
   "
  type="{type}"
  on:click="{onClick}"
>
  <slot />
</button>

<style>
  button {
    font-family: 'DFDS-Bold', sans-serif;
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

  button:focus {
    background: var(--focusBackground);
  }
</style>
