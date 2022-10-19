class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = '<h1>Hello World</h1>';
  }
}

// Make sure to export the `tagName`, without it, Astro will error
export const tagName = 'my-element';
customElements.define(tagName, MyElement);
