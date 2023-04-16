import { _wcl } from './common-lib.js';
import { _wccss } from './common-css.js';
import {
  colorPalette as _fujiColorPalette,
  buttons as _fujiButtons,
  a11y as _fujiA11y,
  input as _fujiInput,
  checkbox as _fujiCheckbox,
} from './fuji-css.js';
import Mustache from './mustache.js';
import './wc-msc-ripple.js';

const defaults = {
  options: [], // [{ content, value }, ...]
  size: 5,
  placeholder: 'select please',
  sound: false,
  vibrate: false
};

const booleanAttrs = ['sound', 'vibrate']; // booleanAttrs default should be false
const objectAttrs = ['options', 'values'];
const custumEvents = {
  change: 'msc-select-list-change'
};

const template = document.createElement('template');
template.innerHTML = `
<style>
${_wccss}
${_fujiColorPalette}
${_fujiButtons}
${_fujiA11y}
${_fujiInput}
${_fujiCheckbox}

:host{position:relative;inline-size:100%;display:block;}

.main {
  --size: ${defaults.size};
  --unit-block-size: 44px;
  --listing-max-block-size: calc(var(--unit-block-size) * var(--size));
  --form-axis-y: calc(100% + 8px);

  --background-color: var(--msc-select-list-background-color, rgba(255 255 255));
  --text-color: var(--msc-select-list-label-color, rgba(35 42 49));
  --padding-inline: var(--msc-select-list-listing-padding-inline, 12px);
  --padding-block: var(--msc-select-list-listing-padding-block, 12px);
  --padding: var(--padding-inline) var(--padding-block);
  --line-size: calc(100% - var(--padding-inline) * 2);
  --line-color: var(--msc-select-list-line-color, rgba(198 198 200));
  --border-color: var(--msc-select-list-border-color, rgba(198 198 200));
  --box-shadow: var(--msc-select-list-box-shadow, 0 0 1px rgba(0 0 0/.1), 0 2px 4px rgba(0 0 0/.08));

  --pointer-events: none;

  /* select */
  --select-background-color: var(--msc-select-list-select-background-color, rgba(255 255 255));
  --select-text-color: var(--msc-select-list-select-text-color, rgba(91 99 106));
  --select-border-color: var(--msc-select-list-select-border-color, rgba(110 119 128));
  --select-theme-color: var(--msc-select-list-select-theme-color, rgba(53 116 224));

  /* checkbox */
  --default-accent-color: var(--msc-select-list-checkbox-accent-color, rgba(53 116 224));
  --default-border-color: var(--msc-select-list-checkbox-border-color, rgba(131 138 146));
  --default-background-color: var(--msc-select-list-checkbox-background-color, rgba(255 255 255));
  --default-checkmark-color: var(--msc-select-list-checkbox-checkmark-color, rgba(255 255 255));

  --default-border-color--disabled: var(--msc-select-list-checkbox-border-color--disabled, rgba(178 185 192));
  --default-background-color--disabled: var(--msc-select-list-checkbox-background-color--disabled, rgba(245 248 250));
  --default-checkmark-color--disabled: var(--msc-select-list-checkbox-checkmark-color--disabled, rgba(178 185 192));

  /* scroll */
  --scrollbar-inline-size: 2px;
  --scrollbar-block-size: 2px;
  --scrollbar-background: transparent;
  --scrollbar-thumb-color: var(--msc-select-list-scrollbar-thumb-color, rgba(0 0 0/.2));

  /* ripple */
  --ripple-color: var(--msc-select-list-ripple-color, rgba(0 0 0/.15));

  /* a11y-block-link */
  --a11y-block-link-overlay-color: var(--msc-select-list-overlay, 29 34 40);
}

.main:focus-within {
  --pointer-events: auto;
}

.main .input-set {
  --default-background-color: var(--select-background-color);
  --default-text-color: var(--select-text-color);
  --default-border-color: var(--select-border-color);
  --default-theme: var(--select-theme-color);
}

.il-pair {
  --gap: var(--il-pair-gap, .75em);
  --align-items: var(--il-align-item, flex-start);
}

.il-pair{position:relative;display:flex;align-items:var(--align-items);gap:var(--gap);}
.il-pair>:first-child{flex-shrink:0;}
.il-pair>label{line-height:20px;}

.main{position:relative;outline:0 none;}
.main msc-ripple{--msc-ripple-color:var(--ripple-color);}
.main__form{position:absolute;inset-inline-start:0;inset-block-start:var(--form-axis-y);inline-size:100%;background-color:var(--background-color);display:block;border-radius:8px;overflow:hidden;box-shadow:var(--box-shadow);}
.main__form{box-sizing:border-box;border:1px solid var(--border-color);}
.main__form .il-pair{padding:var(--padding);box-sizing:border-box;}
.main__form msc-ripple+msc-ripple .il-pair::before{position:absolute;inset-inline-start:var(--padding-inline);inset-block-start:0;inline-size:var(--line-size);block-size:1px;content:'';background-color:var(--line-color);}
.input-set{cursor:default;}
.checkbox-set__span{color:var(--text-color);}

.listing {
  --scrollbar-thumb: var(--scrollbar-thumb-color);
  max-block-size: var(--listing-max-block-size);
}
.listing::-webkit-scrollbar {
  inline-size: var(--scrollbar-inline-size);
  block-size: var(--scrollbar-block-size);
}
.listing::-webkit-scrollbar-track {
  background: var(--scrollbar-background);
}
.listing::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-block-size);
  background: var(--scrollbar-thumb);
}

.main .main__form{transition:transform 250ms ease,opacity 250ms ease;transform:translateY(-20px);opacity:0;will-change:transform,opacity;pointer-events:var(--pointer-events);}
.main .main__form msc-ripple{pointer-events:var(--pointer-events);}
.main:focus-within .main__form{transform:translateY(0px);opacity:1;}

.main--mutate-size{}
</style>

<div class="main main--mutate-size" tabindex="0">
  <div class="input-set input-set--select">
    <p class="decoy text-overflow" tabindex="0">${defaults.placeholder}</p>
  </div>

  <form class="main__form">
    <div class="listing overscrolling"></div>
  </form>
</div>
`;

const templateUnit = document.createElement('template');
templateUnit.innerHTML = `
{{#units}}
<msc-ripple class="a11y-block-link esc-dark-mode" tabindex="0">
  <label class="il-pair">
    <div class="checkbox-set">
      <input type="checkbox" name="checkbox[]" value="{{value}}" data-content="{{content}}" />
      <div class="checkbox-set__label"></div>
    </div>
    <span class="checkbox-set__span">{{content}}</span>
  </label>
</msc-ripple>
{{/units}}
`;

// Houdini Props and Vals
if (CSS?.registerProperty) {
  try {
    CSS.registerProperty({
      name: '--msc-select-list-background-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(255 255 255)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-label-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(35 42 49)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-listing-padding-inline',
      syntax: '<length>',
      inherits: true,
      initialValue: '12px'
    });

    CSS.registerProperty({
      name: '--msc-select-list-listing-padding-block',
      syntax: '<length>',
      inherits: true,
      initialValue: '12px'
    });

    CSS.registerProperty({
      name: '--msc-select-list-line-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(198 198 200)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-border-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(198 198 200)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-select-background-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(255 255 255)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-select-text-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(91 99 106)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-select-border-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(110 119 128)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-select-theme-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(53 116 224)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-checkbox-accent-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(53 116 224)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-checkbox-border-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(131 138 146)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-checkbox-background-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(255 255 255)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-checkbox-checkmark-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(255 255 255)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-checkbox-border-color--disabled',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(178 185 192)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-checkbox-background-color--disabled',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(245 248 250)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-checkbox-checkmark-color--disabled',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(255 255 255)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-scrollbar-thumb-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(0 0 0/.2)'
    });

    CSS.registerProperty({
      name: '--msc-select-list-ripple-color',
      syntax: '<color>',
      inherits: true,
      initialValue: 'rgba(0 0 0/.15)'
    });
  } catch(err) {
    console.warn(`msc-collage: ${err.message}`);
  }
}

export class MscSelectList extends HTMLElement {
  #data;
  #nodes;
  #config;

  constructor(config) {
    super();

    // template
    this.attachShadow({ mode: 'open', delegatesFocus: true });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // data
    this.#data = {
      controller: ''
    };

    // nodes
    this.#nodes = {
      styleSheet: this.shadowRoot.querySelector('style'),
      select: this.shadowRoot.querySelector('.decoy'),
      form: this.shadowRoot.querySelector('.main__form'),
      listing: this.shadowRoot.querySelector('.listing')
    };

    // config
    this.#config = {
      ...defaults,
      ...config // new MscSelectList(config)
    };

    // evts
    this._onInput = this._onInput.bind(this);
  }

  async connectedCallback() {
   const { config, error } = await _wcl.getWCConfig(this);

    if (error) {
      console.warn(`${_wcl.classToTagName(this.constructor.name)}: ${error}`);
      this.remove();
      return;
    } else {
      this.#config = {
        ...this.#config,
        ...config
      };
    }

    // upgradeProperty
    const properties = Object.keys(defaults);
    const find = properties.splice(properties.findIndex((key) => key === 'options'), 1);
    properties.unshift(find[0]);
    properties.forEach((key) => this.#upgradeProperty(key));

    // evts
    this.#data.controller = new AbortController();
    const signal = this.#data.controller.signal;
    this.#nodes.form.addEventListener('input', this._onInput, { signal });

    this.#updateStorage();
    this._onInput();
  }

  disconnectedCallback() {
    if (this.#data?.controller) {
      this.#data.controller.abort();
    }
  }

  #format(attrName, oldValue, newValue) {
    const hasValue = newValue !== null;

    if (!hasValue) {
      if (booleanAttrs.includes(attrName)) {
        this.#config[attrName] = false;
      } else {
        this.#config[attrName] = defaults[attrName];
      }
    } else {
      switch (attrName) {
        case 'options':
          try {
            const options = JSON.parse(newValue).reduce(
              (acc, cur) => {
                const option = {
                  content: '',
                  value: '',
                  disabled: false,
                  checked: false,
                  ...cur
                };

                acc.push(option);

                return acc;
              }
            , [])
            .filter(({ content, value }) => content && value);

            this.#config[attrName] = options;
          } catch(err) {
            console.warn(`${_wcl.classToTagName(this.constructor.name)}: ${err.message}`);
          }
          break;

        case 'sound':
        case 'vibrate':
          this.#config[attrName] = true;
          break;

        case 'placeholder':
          this.#config[attrName] = newValue;
          break;

        case 'size': {
          const id = +newValue;
          this.#config[attrName] = (isNaN(id) || id < defaults.size) ? defaults.size : id;
          break;
        }
      }
    }
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (!MscSelectList.observedAttributes.includes(attrName)) {
      return;
    }

    this.#format(attrName, oldValue, newValue);

    switch (attrName) {
      case 'options':
        this.#genOptions();
        break;

      case 'sound':
        Array.from(this.#nodes.listing.querySelectorAll('msc-ripple')).forEach(
          (ripple) => {
            ripple.sound = this.sound;
          }
        );
        break;

      case 'vibrate':
        Array.from(this.#nodes.listing.querySelectorAll('msc-ripple')).forEach(
          (ripple) => {
            ripple.vibrate = this.vibrate;
          }
        );
        break;

      case 'size':
        this.#mutateSize();
        break;
    }
  }

  static get observedAttributes() {
    return Object.keys(defaults); // MscSelectList.observedAttributes
  }

  #upgradeProperty(prop) {
    let value;

    if (MscSelectList.observedAttributes.includes(prop)) {
      if (Object.prototype.hasOwnProperty.call(this, prop)) {
        value = this[prop];
        delete this[prop];
      } else {
        if (booleanAttrs.includes(prop)) {
          value = (this.hasAttribute(prop) || this.#config[prop]) ? true : false;
        } else if (objectAttrs.includes(prop)) {
          value = this.hasAttribute(prop) ? this.getAttribute(prop) : JSON.stringify(this.#config[prop]);
        } else {
          value = this.hasAttribute(prop) ? this.getAttribute(prop) : this.#config[prop];
        }
      }

      this[prop] = value;
    }
  }

  set options(value) {
    if (value) {
      const newValue = typeof value === 'string'
        ? JSON.parse(value)
        : (Array.isArray(value) ? value : defaults.options);
      this.setAttribute('options', JSON.stringify(newValue));
    } else {
      this.removeAttribute('options');
    }
  }

  get options() {
    return this.#config.options;
  }

  set values(values = []) {
    if (!Array.isArray(values)) {
      return;
    }

    Array.from(this.#nodes.listing.querySelectorAll('input')).forEach(
      (input) => {
        const value = input.value;

        input.checked = values.includes(value);
      }
    );

    this._onInput();
  }

  get values() {
    return this.#getValues();
  }

  set size(value) {
    if (value) {
      this.setAttribute('size', value);
    } else {
      this.removeAttribute('size');
    }
  }

  get size() {
    return this.#config.size;
  }

  set placeholder(value) {
    if (value) {
      this.setAttribute('placeholder', value);
    } else {
      this.removeAttribute('placeholder');
    }
  }

  get placeholder() {
    return this.#config.placeholder;
  }

  set sound(value) {
    this.toggleAttribute('sound', Boolean(value));
  }

  get sound() {
    return this.#config.sound;
  }

  set vibrate(value) {
    this.toggleAttribute('vibrate', Boolean(value));
  }

  get vibrate() {
    return this.#config.vibrate;
  }

  #fireEvent(evtName, detail) {
    this.dispatchEvent(new CustomEvent(evtName,
      {
        bubbles: true,
        composed: true,
        ...(detail && { detail })
      }
    ));
  }

  #genOptions() {
    const { listing } = this.#nodes;
    
    listing.replaceChildren();
    const templateString = Mustache.render(templateUnit.innerHTML, { units:[...this.options] });
    listing.insertAdjacentHTML('beforeend', templateString);

    Array.from(listing.querySelectorAll('input')).forEach(
      (input, idx) => {
        const { checked, disabled } = this.options[idx];

        input.checked = checked;
        input.disabled = disabled;
      }
    );
  }

  #getValues() {
    const formData = new FormData(this.#nodes.form);
    return formData.getAll('checkbox[]');
  }

  #mutateSize() {
    _wcl.addStylesheetRules(
      '.main--mutate-size',
      {
        '--size': this.size
      },
      this.#nodes.styleSheet
    );
  }

  #updateStorage() {
    let storage = this.querySelector('input[type=hidden]');

    if (!storage) {
      storage = document.createElement('input');
      storage.type = 'hidden';
      storage.name = 'msc-select-list';
      this.appendChild(storage);
    }

    storage.value = JSON.stringify(this.#getValues());
  }

  _onInput() {
    const { select } = this.#nodes;
    const values = this.#getValues();

    this.#updateStorage();

    // select
    if (values.length) {
      const contents = Array.from(this.#nodes.listing.querySelectorAll('input:checked')).reduce(
        (acc, input) => {
          return acc.concat(input.dataset.content);
        }
      , []);
      select.textContent = contents.join('; ');
    } else {
      select.textContent = this.placeholder;
    }

    this.#fireEvent(custumEvents.change);
  }
}

// define web component
const S = _wcl.supports();
const T = _wcl.classToTagName('MscSelectList');
if (S.customElements && S.shadowDOM && S.template && !window.customElements.get(T)) {
  window.customElements.define(_wcl.classToTagName('MscSelectList'), MscSelectList);
}