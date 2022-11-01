<script lang="ts">
  import { InputField, Button } from 'ui';
  import { trackingFormStore } from '../../stores';

  enum FieldName {
    SHIPMENT_REFERENCE = 'shipment_reference',
    DESTINATION = 'destination'
  }

  let shippingReference = '132534543543';
  let destination = 'Dover';

  const handleSubmit = () => {
    if (!shippingReference || !destination) {
      return;
    }

    trackingFormStore.set({
      shippingReference,
      destination
    });

    shippingReference = destination = null;
  };
</script>

<form on:submit|preventDefault="{handleSubmit}">
  <InputField
    label="Shipment reference"
    name="{FieldName.SHIPMENT_REFERENCE}"
    assistiveText="Release number or booking ID"
    bind:value="{shippingReference}"
    required
  />
  <InputField
    label="Destination"
    name="{FieldName.DESTINATION}"
    assistiveText="Port of discharge or destination address postcode"
    bind:value="{destination}"
    required
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
