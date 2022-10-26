import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('ts-lit')
export default class MyElement extends LitElement {
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;

  // Define reactive properties--updating a reactive property causes
  // the component to update.
  @property()
  greeting = 'Hello';

  @state()
  private _planet = 'World';

  @property({ type: String })
  set planet(planet: string) {
    console.log("I'm updating the value");
    this._planet = planet;
  }

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, property values, event handlers,
  // and child nodes/text.
  render() {
    return html`
      <span @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this._planet}</span>
      </span>
    `;
  }

  // Event handlers can update the state of @properties on the element
  // instance, causing it to re-render
  togglePlanet() {
    this.planet = this._planet === 'World' ? 'Mars' : 'World';
  }
}
