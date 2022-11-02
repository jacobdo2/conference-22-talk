import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { default as theme, variantToColorMap } from '../theme';

@customElement('lit-label')
export class Label extends LitElement {
  static styles = css`
    div {
      height: 2em;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 1em;
      margin-bottom: 1em;
      padding: 0 0.8em;
    }
  `;

  @property()
  variant = '';

  @property()
  label = '';

  render() {
    const style = html`<style>
      div {
        background: ${variantToColorMap[this.variant]};
        color: ${this.variant === 'neutral'
          ? theme.palette.text.dark.blue
          : theme.palette.text.light.primary};
      }
    </style>`;
    return html`${style}
      <div }>${this.label}</div>`;
  }
}
