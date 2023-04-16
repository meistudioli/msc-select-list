export const colorPalette = `
:host {
  /**
   * fuji color palette
   * https://git.vzbuilders.com/pages/fuji-design/fuji-docs/app/colorPalette.html
   */
  --white: 255 255 255;
  --marshmallow: 245 248 250;
  --grey-hair: 240 243 245;
  --dirty-seagull: 224 228 233;
  --pebble: 199 205 210;
  --bob: 176 185 193;
  --gandalf: 151 158 168;
  --shark: 130 138 147;
  --dolphin: 110 119 128;
  --battleship: 91 99 106;
  --charcoal: 70 78 86;
  --ramones: 44 54 63;
  --batcave: 35 42 49;
  --inkwell: 29 34 40;
  --midnight: 16 21 24;
  --black: 0 0 0;
  --watermelon: 255 82 87;
  --solo-cup: 235 15 41;
  --malibu: 255 0 128;
  --barney: 204 0 140;
  --mimosa: 255 211 51;
  --turmeric: 255 167 0;
  --masala: 255 139 18;
  --cheetos: 253 97 0;
  --carrot-juice: 255 82 13;
  --mulah: 26 197 103;
  --bonsai: 0 135 81;
  --spirulina: 0 160 160;
  --sea-foam: 17 211 205;
  --peeps: 125 203 255;
  --sky: 18 169 255;
  --dory: 15 105 255;
  --scooter: 0 99 235;
  --cobalt: 0 58 188;
  --denim: 26 13 171;
  --blurple: 93 94 255;
  --hendrix: 248 244 255;
  --thanos: 144 124 255;
  --starfish: 119 89 255;
  --hulk-pants: 126 31 255;
  --grape-jelly: 96 1 210;
  --mulberry: 80 21 176;
  --malbec: 57 0 125;

  /* Auction */
  --theme-gradient-start: 255 231 98;
  --theme-gradient-end: 252 218 25;
  --anchor-green: 58 191 186;
  --mark-buynow: 0 120 255;
  --mark-bidding: 255 139 18;
  --mark-metro-express: 255 77 82;
  --heart-red: 253 79 87;

  /* animation */
  --transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
`;

export const buttons = `
/*
 * html usage:
  <button
    class="buttons"
    data-type="primary"
    data-size="small"
  >
    Button
  </button>
*/

.buttons {
  --border-size: 2px;
  --border-color: var(--default-border-color, transparent);
  --background-color: var(--default-background-color, rgba(var(--dory)));
  --color: var(--default-text-color, rgba(var(--white)));
  --justify-content: var(--default-justify-content, center);

  --font-size: 14px;
  --block-size: 32px;
  --padding-inline: 24px;
  --gap: 4px;

  --box-shadow: 0 0 0 transparent;
  --border-radius: var(--block-size);
  --btn-active: scale(.97);

  --overlay-opacity-normal: 0;
  --overlay-opacity-active: .2;
  --overlay-opacity: var(--overlay-opacity-normal);
  --overlay-color: var(--inkwell);
  --overlay: rgba(var(--overlay-color)/var(--overlay-opacity));

  --transition: background-color 200ms var(--transition-timing-function);
}

.buttons{position:relative;font-size:var(--font-size);color:var(--color);font-family:system-ui,'Helvetica Neue',Helvetica,Arial,sans-serif;inline-size:fit-content;inline-size:-moz-fit-content;block-size:var(--block-size);background:var(--background-color);padding-inline:var(--padding-inline);border-radius:var(--border-radius);box-sizing:border-box;appearance:none;box-shadow:var(--box-shadow);display:flex;gap:var(--gap);align-items:center;overflow:hidden;border:0 none;transition:var(--transition);justify-content:var(--justify-content);}
.buttons::before{position:absolute;inset-inline-start:0;inset-block-start:0;inline-size:100%;block-size:100%;box-sizing:border-box;border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);content:'';}
.buttons::after{position:absolute;inset-inline-start:0;inset-block-start:0;inline-size:100%;block-size:100%;background-color:var(--overlay);content:'';pointer-events:none;z-index:1;transition:var(--transition);}
.buttons:focus,
.buttons:focus-visible{outline:0 none;}
.buttons:active{transform:var(--btn-active);}
.buttons:focus-visible{--overlay-opacity:var(--overlay-opacity-active);}
.buttons--full{inline-size:100%;justify-content:center;}

/*
 * types: https://git.vzbuilders.com/pages/fuji-design/fuji-docs/app/buttonsTypes.html
 * take light background spec only
 */
.buttons[data-type='primary'] {
  --default-background-color: rgba(var(--dory));
  --color: rgba(var(--white));
  --border-color: transparent;
  --overlay-color: var(--inkwell);
}

.buttons[data-type='primary-with-shadow'] {
  --default-background-color: rgba(var(--white));
  --default-text-color: rgba(var(--dory));
  --border-color: transparent;
  --box-shadow: var(--shadow-elevations-3);
  --overlay-color: var(--inkwell);
}

.buttons[data-type='secondary1'] {
  --default-text-color: rgba(var(--dory));
  --background-color: transparent;
  --border-color: var(--color);
  --overlay-color: var(--dirty-seagull);
}

.buttons[data-type='secondary2'] {
  --default-text-color: rgba(var(--dory));
  --background-color: transparent;
  --border-color: rgba(var(--dirty-seagull));
  --overlay-color: var(--dirty-seagull);
}

.buttons[data-type='ghost'] {
  --default-text-color: rgba(var(--dory));
  --border-color: transparent;
  --background-color: transparent;
  --overlay-color: var(--dirty-seagull);
}

/*
 * sizes: https://git.vzbuilders.com/pages/fuji-design/fuji-docs/app/buttonsTypes.html;
 */
.buttons[data-size='xx-small'] {
  --font-size: 12px;
  --block-size: 24px;
  --padding-inline: 16px;
  --gap: 4px;
}

.buttons[data-size='x-small'] {
  --font-size: 12px;
  --block-size: 28px;
  --padding-inline: 20px;
  --gap: 4px;
}

.buttons[data-size='small'] {
  --font-size: 14px;
  --block-size: 32px;
  --padding-inline: 24px;
  --gap: 4px;
}

.buttons[data-size='medium'] {
  --font-size: 14px;
  --block-size: 36px;
  --padding-inline: 28px;
  --gap: 8px;
}

.buttons[data-size='large'] {
  --font-size: 16px;
  --block-size: 44px;
  --padding-inline: 36px;
  --gap: 8px;
}

.buttons[data-size='x-large'] {
  --font-size: 18px;
  --block-size: 56px;
  --padding-inline: 44px;
  --gap: 8px;
}

/*
 * disable: https://git.vzbuilders.com/pages/fuji-design/fuji-docs/app/buttonsInactive.html
 */
.buttons[data-type='primary'][disabled],
.buttons[data-type='primary-with-shadow'][disabled] {
  --background-color: rgba(var(--grey-hair));
  --color: rgba(var(--bob));
}

.buttons[data-type='secondary1'][disabled] {
  --background-color: transparent;
  --color: rgba(var(--bob));
  --border-color: rgba(var(--dirty-seagull));
}

.buttons[data-type='secondary2'][disabled] {
  --background-color: transparent;
  --color: rgba(var(--bob));
  --border-color: rgba(var(--bob)/.5);
}

.buttons[data-type='ghost'][disabled] {
  --background-color: transparent;
  --color: rgba(var(--bob));
  --border-color: transparent;
}

@media (hover: hover) {
  .buttons:hover {
    --overlay-opacity: var(--overlay-opacity-active);
  }

  .buttons[disabled]:hover {
    --overlay-opacity-active: 0;
    --btn-active: scale(1);
  }
}

/*
@font-face {
  font-family: YahooSans;
  src: url('https://www.yahoo.com/sy/os/fontserver/YahooSans/Regular.woff2') format('woff2'),url('https://www.yahoo.com/sy/os/fontserver/YahooSans/Regular.woff') format('woff'),url('https://www.yahoo.com/sy/os/fontserver/YahooSans/Regular.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
  font-display: optional;
}

@font-face {
  font-family: YahooSans;
  src: url('https://www.yahoo.com/sy/os/fontserver/YahooSans/Semibold.woff2') format('woff2'),url('https://www.yahoo.com/sy/os/fontserver/YahooSans/Semibold.woff') format('woff'),url('https://www.yahoo.com/sy/os/fontserver/YahooSans/Semibold.ttf') format('ttf');
  font-weight: 600;
  font-style: normal;
  font-display: optional;
}

@font-face {
  font-family: YahooSans;
  src: url('https://www.yahoo.com/sy/os/fontserver/YahooSans/Bold.woff2') format('woff2'),url('https://www.yahoo.com/sy/os/fontserver/YahooSans/Bold.woff') format('woff'),url('https://www.yahoo.com/sy/os/fontserver/YahooSans/Bold.ttf') format('ttf');
  font-weight: 700;
  font-style: normal;
  font-display: optional;
}

@font-face {
  font-family: YahooSans;
  src: url('https://www.yahoo.com/sy/os/fontserver/YahooSans/ExtraBold.woff2') format('woff2'),url('https://www.yahoo.com/sy/os/fontserver/YahooSans/ExtraBold.woff') format('woff'),url('https://www.yahoo.com/sy/os/fontserver/YahooSans/ExtraBold.ttf') format('ttf');
  font-weight: 800;
  font-style: normal;
  font-display: optional;
}
*/
`;

export const a11y = `
/* a11y-block-link */
.a11y-block-link {
  --opacity-normal: 0;
  --opacity-active: var(--a11y-block-link-opacity-active, .2);
  --opacity: var(--opacity-normal);
  --overlay-color: var(--a11y-block-link-overlay-color, var(--inkwell));
  --overlay: rgba(var(--overlay-color) / var(--opacity));
  --transition: background-color 200ms var(--transition-timing-function),
    color 200ms var(--transition-timing-function),
    box-shadow 200ms var(--transition-timing-function);
  --expand: var(--a11y-block-link-expand, 0px);
  --border-radius: var(--a11y-block-link-border-radius, 0px);
}

.a11y-block-link {
  position: relative;
  display: block;
  outline: 0 none;
}

.a11y-block-link::after {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  color: var(--overlay);
  inline-size: 100%;
  block-size: 100%;
  content: '';
  pointer-events: none;
  background: var(--overlay);
  transition: var(--transition);
  box-shadow: 0 0 0 var(--expand);
  border-radius: var(--border-radius);
}

.a11y-block-link:focus-visible {
  --opacity: var(--opacity-active);
}

/* fancy-hover */
.fancy-hover {
  --theme: rgba(var(--anchor-green));
  --text-color-normal: rgba(var(--anchor-green));
  --text-color-active: rgba(var(--white));

  color: var(--text-color-normal);
  font-weight: 400;
  text-decoration: none;
  padding: 0 6px;
  background-image: linear-gradient(to right, var(--theme), var(--theme));
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size 200ms ease-in-out, color 200ms ease-in-out;
  transform-origin: 0% 50%;
  border-radius: 3px;
  outline: 0 none;
}

.fancy-hover:active {
  transform: scale(0.95);
  transform-origin: 50% 50%;
}

.fancy-hover:focus-visible {
  font-weight: 400;
  color: var(--text-color-active);
  background-size: 100% 100%;
  border-radius: 6px;
}

/* a11y-flex-line */
.a11y-flex-line {
  --position: var(--default-position, relative);
  --line-color: var(--default-line-color, rgba(15 105 255));
  --line-block-size: var(--default-line-block-size, 2px);
  --line-inset-block-end: var(--default-line-inset-block-end, 0px);
  --transition-duration: var(--default-transition-duration, 200ms);
  --transform-origin: var(--default-transform-origin, 50% 50%);

  --scale-x-normal: 0;
  --scale-x-active: 100%;
  --scale-x: var(--scale-x-normal);
}

.a11y-flex-line {
  position: var(--position);
  outline: 0 none;
}

.a11y-flex-line::after {
  content: '';
  position: absolute;
  inset-inline-start: 0;
  inset-block-end: var(--line-inset-block-end);
  inline-size: 100%;
  block-size: var(--line-block-size);
  border-radius: var(--line-block-size);
  background-color: var(--line-color);
  transform: scaleX(var(--scale-x));
  transition: transform var(--transition-duration) ease 100ms;
  transform-origin: var(--transform-origin);
  pointer-events: none;
}

.a11y-flex-line:focus-visible {
  --scale-x: var(--scale-x-active);
}

@media (hover: hover) {
  .a11y-block-link:hover {
    --opacity: var(--opacity-active);
  }

  .fancy-hover:hover {
    font-weight: 400;
    color: var(--text-color-active);
    background-size: 100% 100%;
  }

  .a11y-flex-line:hover {
    --scale-x: var(--scale-x-active);
  }
}

@media (prefers-color-scheme: dark) {
  .a11y-block-link:not(.esc-dark-mode) {
    --overlay-color: var(--dirty-seagull);
  }
}
`;

export const dialog = `
/*
 * dialog
 * https://codepen.io/geckotang/post/dialog-with-animation
 */
.fuji-alerts {
  --color: rgba(var(--batcave));
  --background: rgba(var(--white));
  --padding: 1.5em;
  --margin: 1.5em;

  --close-size: 40px;
  --close-axis-gap: 8px;

  --content-max-inline-size: calc(100vw - var(--padding) * 2 - var(--margin) * 2);
  
  --close-color: #5f6368;
  --close-mask: path('M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z');
}
.fuji-alerts{color:var(--color);background:var(--background);border-radius:.5em;border:0 none;padding:var(--padding);box-shadow:0 0 2px rgba(0,0,0,.05);}
/* ::backdrop neither inherits from nor is inherited by any other elements. No restrictions are made on what properties apply to this pseudo-element. */
.fuji-alerts::backdrop{background-color:rgba(35 42 49/.6);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);}
.fuji-alerts[open],.fuji-alerts[open]::backdrop{animation:fuji-alerts-open 400ms cubic-bezier(.4,0,.2,1) normal;}
.fuji-alerts[close],.fuji-alerts[close]::backdrop{animation:fuji-alerts-close 400ms cubic-bezier(0,0,.2,1) normal;}
.fuji-alerts__form{max-inline-size:var(--content-max-inline-size);block-size:fit-content;block-size:-moz-fit-content;}

.fuji-alerts__close {
  --background-opacity-normal: 0;
  --background-opacity-active: 1;
  --background-opacity: var(--background-opacity-normal);
  --background: rgba(var(--marshmallow)/var(--background-opacity));

  font-size: 0;
  position: absolute;
  inset-inline-end: var(--close-axis-gap);
  inset-block-start: var(--close-axis-gap);
  inline-size: var(--close-size);
  block-size: var(--close-size);
  appearance:none;
  border:0 none;
  border-radius: var(--close-size);
  outline: 0 none;
  background-color: var(--background);
  transition: background-color 200ms ease;
  will-change: background-color;
  z-index: 1;
}

.fuji-alerts__close::before{position:absolute;inset-inline:0 0;inset-block:0 0;margin:auto;inline-size:24px;block-size:24px;content:'';background-color:var(--close-color);clip-path:var(--close-mask);}
.fuji-alerts__close:active{transform:scale(.8);}

.fuji-alerts__close:focus {
  --background-opacity: var(--background-opacity-active);
}

@media (hover: hover) {
  .fuji-alerts__close:hover {
    --background-opacity: var(--background-opacity-active);
  }
}

.fuji-alerts[data-overlay-mode=light]::backdrop{background:#fff;filter:opacity(.66);}

@media (prefers-color-scheme: dark) {
  .fuji-alerts {}
}

@keyframes fuji-alerts-open {
  from {opacity:0;}
  to {opacity:1;}
}
@keyframes fuji-alerts-close {
  from {opacity:1;}
  to {opacity:0;}
}

@media screen and (max-width: 767px) {
  .fuji-alerts[data-type=bottom] {
    inset-block: auto var(--margin);
  }

  .fuji-alerts[data-type=full] {
    --content-max-inline-size: 100%;
    inset-inline:0 auto;
    inset-block:0 auto;
    inline-size: 100%;
    block-size: 100%;
    box-sizing: border-box;
    border-radius: 0;
    max-inline-size: none;
    max-block-size: none;
  }

  .fuji-alerts[data-type=full] .fuji-alerts__form {
    position: absolute;
    inset-inline: 0 0;
    inset-block: 0 0;
    margin: auto;
  }
}
`;

export const input = `
/*
 * input-set
 * html usage:

  <div class="input-set">
    <input name="input-set" type="text" value="" placeholder="show me the money" />
    <label class="input-set__label">
      <span class="input-set__label__span">文字輸入</span>
    </label>
    <em class="input-set__em">Some errors occured</em>
  </div>

  <div class="input-set">
    <input name="input-set" type="date" value="" placeholder=" " />
    <label class="input-set__label">
      <span class="input-set__label__span">日期輸入</span>
    </label>
    <em class="input-set__em">Some errors occured</em>
  </div>

  <div class="input-set input-set--select">
    <select name="input-set-select">
      <option value="opt-1">option 1</option>
      <option value="opt-1">option 2</option>
      <option value="opt-1">option 3</option>
      <option value="opt-1">option 4</option>
      <option value="opt-1">option 5</option>
    </select>

    <label class="input-set__label">
      <span class="input-set__label__span">下拉選單</span>
    </label>
    <em class="input-set__em">Some errors occured</em>
  </div>
 */
.input-set {
  --icon-warn: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGhlaWdodD0nMjQnIHdpZHRoPScyNCc+PHBhdGggZD0nTTAgMGgyNHYyNEgweicgZmlsbD0nbm9uZScvPjxwYXRoIGZpbGw9JyNlYjBmMjknIGQ9J00xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnY2eicvPjwvc3ZnPg==) no-repeat 50% 50%/cover;
  --icon-arrow-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCc+PGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48cGF0aCBmaWxsPScjNkU3NzgwJyBkPSdNMTguOTI1IDkuNjE0TDEyLjQ5IDE2IDYuMDU1IDkuNjE1YS45MzcuOTM3IDAgMDEwLTEuMzM4Ljk1OC45NTggMCAwMTEuMzQ3IDBsNS4wODggNS4wNDkgNS4wODgtNS4wNDlhLjk1Ni45NTYgMCAwMTEuMzQ3IDAgLjk0Ljk0IDAgMDEwIDEuMzM3eicvPjxwYXRoIGQ9J00yNCAwdjI0SC45OFYweicvPjwvZz48L3N2Zz4=) no-repeat 50% 50%/24px 24px;

  --background-color: var(--default-background-color, rgba(var(--white)));
  --text-color: var(--default-text-color, rgba(var(--batcave)));
  --border-color: var(--default-border-color, rgba(var(--dolphin)));
  --err-color: var(--default-err-color, rgba(var(--solo-cup)));
  --err-text-color: var(--default-err-text-color, rgba(var(--dolphin)));
  --label-text-color: var(--default-label-text-color, rgba(var(--dolphin)));
  --theme: var(--default-theme, rgba(var(--anchor-green)));
  --hover: var(--theme);

  --placeholder-text-color-normal: transparent;
  --placeholder-text-color-active: var(--default-placeholder-text-color, rgba(var(--charcoal)));
  --placeholder-text-color: var(--placeholder-text-color-normal);

  --border-radius: var(--default-border-radius, 4px);
  --input-block-size: var(--default-input-block-size, 48px);
  --input-line-height: var(--default-input-line-height, 46px);
  --padding-inline-start: var(--default-padding-inline-start, 12px);
  --padding-inline-end: var(--default-padding-inline-end, 12px);
  --padding-inline: var(--padding-inline-start) var(--padding-inline-end);

  --border-size-normal: 1px;
  --border-size-active: 2px;
  --border-size: var(--border-size-normal);

  --err-display: none;
}

.input-set > :is(input, select, textarea, .decoy)::-webkit-input-placeholder{color:var(--placeholder-text-color);transition:color 100ms ease;will-change:color;}
.input-set > :is(input, select, textarea, .decoy)::-moz-placeholder{color:var(--placeholder-text-color);transition:color 100ms ease;will-change:color;}

.input-set > :is(input, select, textarea, .decoy):focus {
  --border-color: var(--hover);
  --border-size: var(--border-size-active);
}

.input-set > :is(input, select, textarea, .decoy):focus::-webkit-input-placeholder {
  --placeholder-text-color: var(--placeholder-text-color-active);
}

.input-set > :is(input, select, textarea, .decoy):focus::-moz-placeholder {
  --placeholder-text-color: var(--placeholder-text-color-active);
}

.input-set{position:relative;display:block;}
.input-set > :is(input, select, textarea, .decoy) {
  font-size:1em;
  inline-size:100%;
  padding-inline:var(--padding-inline);
  block-size:var(--input-block-size);
  border-radius:var(--border-radius);
  box-sizing:border-box;
  display:block;
  appearance:none;
  -webkit-appearance:none;
  border:0 none;
  resize:none;
  outline: 0 none;
  line-height: var(--input-line-height);

  color: var(--text-color);
  background-color: var(--background-color);
  box-shadow: inset calc(var(--border-size) * -1) calc(var(--border-size) * -1) 0 var(--border-color), inset var(--border-size) var(--border-size) 0 var(--border-color);
  transition: box-shadow 100ms ease;
}

.input-set > :is(input, select, textarea, .decoy):focus{outline: 0 none;}
.input-set__label{position:absolute;inset-inline-start:6px;inset-block-start:16px;inline-size:fit-content;font-size:1em;color:var(--label-text-color);line-height:1;padding-inline:6px;display:block;pointer-events:none;transition:transform 100ms ease,color 100ms ease,background-color 100ms ease;will-change:transform,color,background-color;}
.input-set__label__span{position:relative;z-index:1;}
.input-set__label::after{position:absolute;inset-inline-start:0;inset-block-start:50%;inline-size:100%;block-size:3.53px;background-color:var(--background-color);content:'';}
.input-set__em{font-size:14px;line-height:1;color:var(--err-text-color);padding-inline-start:var(--padding-inline-start);margin-block-start:8px;display:var(--err-display);align-items:center;gap:6px;}
.input-set__em::before{inline-size:14px;block-size:14px;background:var(--icon-warn);content:'';}

.input-set > :is(input, select, textarea, .decoy):focus ~ .input-set__label {
  color: var(--hover);
  transform: translateY(-24px) scale(0.85);
}

.input-set > .decoy:not(:empty) ~ .input-set__label {
  transform: translateY(-24px) scale(0.85);
}

.input-set > :is(input, select, textarea):not(:placeholder-shown) ~ .input-set__label {
  transform: translateY(-24px) scale(0.85);
}

.input-set > :is(input, select, textarea):invalid~.input-set__em,
.input-set > :is(input, select, textarea)[invalid]~.input-set__em {
  --err-display: flex;
}

.input-set > :is(input, select, textarea):invalid,
.input-set > :is(input, select, textarea)[invalid] {
  --border-color: var(--err-color);
}

.input-set > :is(input, select, textarea)[readonly],
.input-set > :is(input, select, textarea)[disabled],
.input-set > :is(input, select, textarea)[readonly]~.input-set__label,
.input-set > :is(input, select, textarea)[disabled]~.input-set__label  {
  --text-color: rgba(var(--bob));
  --border-color: rgba(var(--bob));
  --background-color: rgba(var(--marshmallow));
}

/* select */
.input-set--select :is(select, .decoy) {
  padding-inline-end: calc(var(--padding-inline-end) * 2 + 24px);
}

.input-set--select::after{position:absolute;inset-inline-end:var(--padding-inline-end);inset-block-start:50%;inline-size:24px;block-size:24px;content:'';margin-block-start:-12px;background:var(--icon-arrow-down);pointer-events:none;}


@media (hover: hover) {
  .input-set:hover {
    --border-color: var(--hover);
  }

  .input-set:hover > :is(input, select, textarea):not(:placeholder-shown)~.input-set__label {
    --label-text-color: var(--hover);
  }
}

@media (prefers-color-scheme: dark) {
  .input-set:not(.esc-dark-mode) {
    --default-background-color: rgba(var(--batcave));
    --default-text-color: rgba(var(--grey-hair));
    --default-border-color: rgba(var(--charcoal));
    --default-placeholder-text-color: rgba(var(--dolphin));
    --default-label-text-color: rgba(var(--gandalf));
    --default-placeholder-color: rgba(var(--dolphin));
  }

  .input-set:not(.esc-dark-mode) > :is(input, select, textarea)[readonly],
  .input-set:not(.esc-dark-mode) > :is(input, select, textarea)[disabled],
  .input-set:not(.esc-dark-mode) > :is(input, select, textarea)[readonly]~.input-set__label,
  .input-set:not(.esc-dark-mode) > :is(input, select, textarea)[disabled]~.input-set__label  {
    --text-color: rgba(var(--shark));
    --border-color: rgba(var(--charcoal));
    --background-color: rgba(var(--batcave));
  }
}
`;

export const checkbox = `
/*
 * input-set
 * html usage:
  <div class="checkbox-set checkbox-set--enable-dark-mode">
    <input id="my-checkbox" type="checkbox" name="checkbox[]" value="0" />
    <label class="checkbox-set__label" for="my-checkbox"></label>
  </div>
 */

.checkbox-set {
  --size: 1.25em;
  --border-radius: 2px;
  --mask-checkmark: path('m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z');
  --duration: 100ms;
  --timing-function: cubic-bezier(.4,0,.2,1);

  /* normal */
  --accent-color: var(--default-accent-color, rgba(42 108 246));
  --border-color: var(--default-border-color, rgba(131 138 146));
  --background-color: var(--default-background-color, rgba(255 255 255));
  --checkmark-color: var(--default-checkmark-color, rgba(255 255 255));
  
  /* disabled */
  --border-color--disabled: var(--default-border-color--disabled, rgba(178 185 192));
  --background-color--disabled: var(--default-background-color--disabled, rgba(255 255 255));
  --checkmark-color--disabled: var(--default-checkmark-color--disabled, rgba(178 185 192));
}

.checkbox-set__label {
  --checkmark-opacity-normal: 0;
  --checkmark-opacity-active: 1;
  --checkmark-opacity: var(--checkmark-opacity-normal); 
}

.checkbox-set input:checked~.checkbox-set__label {
  --border-color: var(--accent-color);
  --background-color: var(--accent-color);
  --checkmark-opacity: var(--checkmark-opacity-active);
}

.checkbox-set input:not(:is(:disabled,:readonly)):focus-visible~.checkbox-set__label {
  --border-color: var(--accent-color);
}

.checkbox-set input:disabled~.checkbox-set__label {
  --border-color: var(--border-color--disabled);
  --background-color: var(--background-color--disabled);
  --checkmark-color: var(--checkmark-color--disabled);
}

.checkbox-set{position:relative;inline-size:var(--size);aspect-ratio:1/1;overflow:hidden;}
.checkbox-set input{position:absolute;top:-100%;outline:0 none;}
.checkbox-set__label{position:relative;inline-size:100%;block-size:100%;background-color:var(--background-color);display:block;border-radius:var(--border-radius);overflow:hidden;transition:background-color var(--duration) var(--timing-function);will-change:background-color;}
.checkbox-set__label::before{position:absolute;inset-inline-start:0;inset-block-start:0;content:'';inline-size:100%;block-size:100%;border-radius:var(--border-radius);box-shadow:inset 0 0 0 2px var(--border-color);box-sizing:border-box;transition:box-shadow var(--duration) var(--timing-function);will-change:box-shadow;}
.checkbox-set__label::after{position:absolute;inset-inline-start:0;inset-block-start:0;content:'';inline-size:100%;block-size:100%;background-color:var(--checkmark-color);clip-path:var(--mask-checkmark);transition:opacity var(--duration) var(--timing-function);will-change:opacity;opacity:var(--checkmark-opacity);}

@media (hover: hover) {
  .checkbox-set input:not(:is(:disabled,:readonly))~.checkbox-set__label:hover {
    --border-color: var(--accent-color);
  }
}

@media (prefers-color-scheme: dark) {
  /* fuji example */
  .checkbox-set--enable-dark-mode {
    --default-accent-color: rgba(75 168 248);
    --default-border-color: rgba(131 138 146);
    --default-background-color: rgba(0 0 0);

    --default-border-color--disabled: rgba(131 138 146);
    --default-background-color--disabled: rgba(0 0 0);
  }
}
`;

export const radio = `
/*
 * input-set
 * html usage:
  <div class="radio-set radio-set--enable-dark-mode">
    <input id="my-radio" type="radio" name="radio" value="0" />
    <label class="radio-set__label" for="my-radio"></label>
  </div>
 */

.radio-set {
  --size: 1.25em;
  --border-radius: var(--size);
  --duration: 100ms;
  --timing-function: cubic-bezier(.4,0,.2,1);

  /* normal */
  --accent-color: var(--default-accent-color, rgba(42 108 246));
  --border-color: var(--default-border-color, rgba(131 138 146));
  --background-color: var(--default-background-color, rgba(255 255 255));
  --dot-color: var(--default-dot-color, var(--accent-color));
  
  /* disabled */
  --border-color--disabled: var(--default-border-color--disabled, rgba(178 185 192));
  --background-color--disabled: var(--default-background-color--disabled, rgba(255 255 255));
  --dot-color--disabled: var(--default-dot-color--disabled, rgba(178 185 192));
}

.radio-set__label {
  --dot-scale-normal: .001;
  --dot-scale-active: 1;
  --dot-scale: var(--dot-scale-normal); 
}

.radio-set input:checked~.radio-set__label {
  --border-color: var(--accent-color);
  --dot-scale: var(--dot-scale-active);
}

.radio-set input:not(:is(:disabled,:readonly)):focus-visible~.radio-set__label {
  --border-color: var(--accent-color);
}

.radio-set input:disabled~.radio-set__label {
  --border-color: var(--border-color--disabled);
  --background-color: var(--background-color--disabled);
  --dot-color: var(--dot-color--disabled);
}

.radio-set{position:relative;inline-size:var(--border-radius);aspect-ratio:1/1;overflow:hidden;}
.radio-set input{position:absolute;top:-100%;outline:0 none;}
.radio-set__label{position:relative;inline-size:100%;block-size:100%;background-color:var(--background-color);display:block;border-radius:var(--border-radius);overflow:hidden;}
.radio-set__label::before{position:absolute;inset-inline-start:0;inset-block-start:0;content:'';inline-size:100%;block-size:100%;border-radius:var(--size);box-shadow:inset 0 0 0 2px var(--border-color);box-sizing:border-box;transition:box-shadow var(--duration) var(--timing-function);will-change:box-shadow;}
.radio-set__label::after{position:absolute;inset-inline:0;inset-block:0;content:'';inline-size:8px;block-size:8px;margin:auto;border-radius:8px;background-color:var(--dot-color);transition:transform var(--duration) var(--timing-function);will-change:transform;transform:scale(var(--dot-scale));}

@media (hover: hover) {
  .radio-set input:not(:is(:disabled,:readonly))~.radio-set__label:hover {
    --border-color: var(--accent-color);
  }
}

@media (prefers-color-scheme: dark) {
  /* fuji example */
  .radio-set--enable-dark-mode {
    --default-accent-color: rgba(75 168 248);
    --default-border-color: rgba(131 138 146);
    --default-background-color: rgba(0 0 0);

    --default-border-color--disabled: rgba(131 138 146);
    --default-background-color--disabled: rgba(0 0 0);
  }
}
`;