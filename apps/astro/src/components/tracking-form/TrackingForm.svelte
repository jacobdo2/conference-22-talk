<script lang="ts">
  import { InputField, Button } from 'ui';
  import { trackingFormStore } from '../../stores';

  const handleSubmit = (event: SubmitEvent) => {
    const inputs = (event.target as HTMLFormElement).elements;

    trackingFormStore.set({
      shippingReference: inputs['shipment_reference'].value,
      destination: inputs['destination'].value
    });
  };
</script>

<form on:submit|preventDefault="{handleSubmit}">
  <InputField
    label="Shipment reference"
    name="shipment_reference"
    assistiveText="Release number or booking ID"
  />
  <InputField
    label="Destination"
    name="destination"
    assistiveText="Port of discharge or destination address postcode"
  />
  <Button style="align-self: flex-end" type="submit">Search</Button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 350px;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 0 0 12px rgba(0, 43, 69, 0.15);
    grid-gap: 8px;
  }
</style>
