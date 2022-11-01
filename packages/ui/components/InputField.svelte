<script lang="ts">
  import theme from '../theme';

  export let label: string;
  export let name: string;
  export let assistiveText: string = '';
  export let value;
  export let required;
  let error: string;

  const handleBlur = () => {
    if (required && !value?.trim()) {
      error = 'This field is required';
    }
  };

  const handleKeyPress = () => {
    error = null;
  };
</script>

<div
  style="
  --labelColor: {theme.palette.groupBlue.primary};
  --inputTextColor: {theme.palette.text.dark.primary};
  --errorColor: {theme.palette.red.primary};
"
>
  <label for="{name}">{label}</label>
  <input
    type="text"
    name="{name}"
    bind:value
    on:blur="{handleBlur}"
    on:keypress="{handleKeyPress}"
  />
  {#if error}
    <span class:error>{error}</span>
  {:else if assistiveText}
    <span>{assistiveText}</span>
  {/if}
</div>

<style>
  div {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  label {
    font-family: 'DFDS-Regular', sans-serif;
    font-size: 16px;
    color: var(--labelColor);
    margin-bottom: 4px;
  }

  input {
    border-radius: 0;
    border: 1px solid grey;
    height: 48px;
    text-indent: 16px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.76);
  }

  input:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.05);
  }

  span {
    color: var(--labelColor);
    font-size: 10px;
    margin-bottom: 8px;
  }

  span.error {
    color: var(--errorColor);
  }
</style>
