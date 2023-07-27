import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import arrowTop from "./images/dit-icon-arrow-top.svg";

const DEFAULT_ALT_TEXT = "ページ上部に戻る";

@customElement("dit-page-top-button")
export class DitPageTopButton extends LitElement {
  static get properties() {
    return {
      altText: { type: String, reflect: true },
      fixedLeft: { type: Number, reflect: true },
      fixedBottom: { type: Number, reflect: true },
      disabled: { type: Boolean, reflect: true },
      static: { type: Boolean, reflect: true },
    };
  }
  constructor() {
    super();
    this.altText = DEFAULT_ALT_TEXT;
    this.fixedLeft = 48;
    this.fixedBottom = 48;
    this.static = false;
    this.disabled = false;
  }
  altText: string = DEFAULT_ALT_TEXT;
  fixedLeft: number = 48;
  fixedBottom: number = 48;
  static: boolean = false;
  disabled: boolean = false;
  static styles = css`
    .dit-page-top-button {
      display: inline-flex;
      padding: 16px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 34px;
      border: 1px solid #0017c1;
      background: #fff;
      cursor: pointer;
    }
    .dit-page-top-button:active,
    .dit-page-top-button:hover {
      border: 1px solid #000082;
      background: #e8f1fe;
    }
    .dit-page-top-button:focus {
      border: 2px solid #d18d0f;
      outline: none;
    }
    .dit-page-top-button:disabled {
      display: none;
    }
    .page-top-button-image {
      width: 24px;
      height: 24px;
    }
  `;

  render() {
    return html`
      <style>
        .dit-page-top-button {
          position: ${this.static ? "static" : "fixed"};
          left: ${this.fixedLeft}px;
          bottom: ${this.fixedBottom}px;
        }
      </style>
      <button
        role="button"
        alt="${this.altText}"
        ?disabled=${this.disabled}
        class="dit-page-top-button"
      >
        <img
          src=${arrowTop}
          alt="${this.altText}"
          class="page-top-button-image"
        />
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dit-page-top-button": DitPageTopButton;
  }
}
