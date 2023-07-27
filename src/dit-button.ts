import {
  LitElement,
  css,
  unsafeCSS,
  ReactiveControllerHost,
  html,
  PropertyDeclaration,
  TemplateResult,
} from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

type ButtonType = "primary" | "secondary" | "tertiary";
type MediaType = "mobile" | "tablet" | "desktop";

@customElement("dit-button")
export class DitButton extends LitElement {
  static get properties() {
    return {
      color: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      media: { type: String, reflect: true },
      form: { type: Boolean, reflect: true },
    };
  }
  constructor() {
    super();
    this.color = "primary";
    this.disabled = false;
    this.media = "mobile";
    this.form = false;
  }
  color: ButtonType = "primary";
  disabled: boolean = false;
  media: MediaType = "mobile";
  form: boolean = false;

  static get styles() {
    return css`
      .dit-button {
        display: flex;
        width: 256px;
        padding: 16px;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 8px;
        background-color: #0017c1;
        border: 1px solid transparent;
        color: #fff;
        font-family: Noto Sans JP;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        cursor: pointer;
      }
      .mobile {
        width: 100%;
      }
      .tablet {
        width: 50%;
      }
      .tablet.form {
        width: 100%;
      }
      .desktop {
        width: 25%;
      }
      .desktop.form {
        width: 75%;
      }
      .dit-button.primary {
        background-color: #0017c1;
        color: #fff;
        border: 1px solid transparent;
      }
      .dit-button.primary:hover,
      .dit-button.primary:active {
        background-color: #000082;
      }
      .dit-button.primary:focus {
        padding: 15px;
        outline: 2px solid #d18d0f;
        outline-offset: 2px;
      }
      .dit-button.primary:disabled {
        background-color: #949497;
        color: #fff;
        cursor: not-allowed;
      }
      .dit-button.secondary {
        background-color: transparent;
        color: #0017c1;
        border: 1px solid #0017c1;
      }
      .dit-button.secondary:hover,
      .dit-button.secondary:active {
        background-color: #e8f1fe;
        color: #000082;
        border: 1px solid #000082;
      }
      .dit-button.secondary:focus {
        padding: 15px;
        border: 2px solid #d18d0f;
        outline: none;
      }
      .dit-button.secondary:disabled {
        background-color: transparent;
        color: #949497;
        border: 1px solid #949497;
        cursor: not-allowed;
      }
      .dit-button.tertiary {
        background-color: transparent;
        color: #0017c1;
        text-decoration: underline;
        border: 1px solid transparent;
      }
      .dit-button.tertiary:hover,
      .dit-button.tertiary:active {
        color: #000082;
      }
      .dit-button.tertiary:focus {
        padding: 15px;
        border: 2px solid #d18d0f;
        outline: none;
      }
      .dit-button.tertiary:disabled {
        background-color: transparent;
        color: #949497;
      }
    `;
  }
  render() {
    return html`
      <button
        role="button"
        class="dit-button ${this.color} ${this.media} ${this.form && "form"}"
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dit-button": DitButton;
  }
}
