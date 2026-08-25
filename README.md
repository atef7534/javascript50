# javascript50

A growing collection of small, self-contained frontend projects built with plain HTML, CSS and JavaScript — no frameworks, no build tools (except where noted) — created to practice core JavaScript and browser concepts: DOM manipulation, events, timers, arrays/objects, and the Fetch API.

The repository is named for a target of **50 projects**. It currently contains **19 completed projects**, listed below exactly as they exist in this repo today.

A standalone showcase page (`index.html` in the repo root) presents all of these projects with search/filtering — open it directly in a browser to browse them visually.

---

## Projects

| # | Project | Folder | Concepts |
|---|---------|--------|----------|
| 01 | [Accordion](https://atef7534.github.io/javascript50/01%20Accordion/index.html) | `01 Accordion` | DOM Manipulation, Event Listeners, CSS Transitions |
| 02 | [Box Of Boxes](https://atef7534.github.io/javascript50/02%20Box%20Of%20Boxes/index.html) | `02 Box Of Boxes` | DOM Manipulation, Event Listeners, Timers |
| 03 | [Color Flipper](https://atef7534.github.io/javascript50/03%20Color%20Flipper/index.html) | `03 Color Flipper` | DOM Manipulation, Event Listeners |
| 04 | [Counter Button](https://atef7534.github.io/javascript50/04%20Counter%20Button/index.html) | `04 Counter Button` | DOM Manipulation, Functions |
| 05 | [Date Now](https://atef7534.github.io/javascript50/05%20Date%20Now/index.html) | `05 Date Now` | Timers, Date Object |
| 06 | [Expanding Cards](https://atef7534.github.io/javascript50/06%20Expanding%20Cards/index.html) | `06 Expanding Cards` | DOM Manipulation, Event Listeners, CSS Transitions |
| 07 | [Loader](https://atef7534.github.io/javascript50/07%20Loader/index.html) | `07 Loader` | CSS Animations, DOM Manipulation, Forms |
| 08 | [Sidebar Effect](https://atef7534.github.io/javascript50/08%20Sidebar%20Effect/index.html) | `08 Sidebar Effect` | DOM Manipulation, CSS Transitions |
| 09 | [ToDo List](https://atef7534.github.io/javascript50/09%20ToDo%20List/index.html) | `09 ToDo List` | DOM Manipulation, Event Listeners, Forms |
| 10 | [Typing](https://atef7534.github.io/javascript50/10%20typing/index.html) | `10 typing` | DOM Manipulation, Timers, Arrays, Objects |
| 11 | [Small Word](https://atef7534.github.io/javascript50/11%20Small%20Word/index.html) | `11 Small Word` | DOM Manipulation, Event Listeners, Forms |
| 12 | [Kinetic Loader](https://atef7534.github.io/javascript50/12%20Kinetic%20Loader/index.html) | `12 Kinetic Loader` | CSS Animations, DOM Manipulation, Timers |
| 13 | [Calculator](https://atef7534.github.io/javascript50/13%20Calculator/index.html) | `13 Calculator` | DOM Manipulation, Functions, Arrays |
| 14 | [Slideshow](https://atef7534.github.io/javascript50/14%20slideshow/index.html) | `14 slideshow` | DOM Manipulation, Event Listeners, Timers |
| 15 | [Testimonial Slider](https://atef7534.github.io/javascript50/15%20testimonial%20slider/index.html) | `15 testimonial slider` | DOM Manipulation, Arrays, Objects |
| 16 | [Progress Steps](https://atef7534.github.io/javascript50/16%20progress%20steps/index.html) | `16 progress steps` | DOM Manipulation, Event Listeners, CSS Transitions |
| 17 | [Notion](https://atef7534.github.io/javascript50/17%20notion/index.html) | `17 notion` | DOM Manipulation, Event Listeners, Forms |
| 18 | [Stock Ticker](https://atef7534.github.io/javascript50/18%20Stock%20Ticker/index.html) | `18 Stock Ticker` | ES Modules, Timers, DOM Manipulation |
| 19 | [Color Scheme Generator](https://atef7534.github.io/javascript50/19%20Color%20Scheme%20Generator/index.html) | `19 Color Scheme Generator` | Fetch API, REST API, JSON, Async/Await |
| 20 | [Contact Management](https://atef7534.github.io/javascript50/20%20Contact%20Management/index.html) | `20 Contact Management` | Fetch API, REST API, JSON, Async/Await, DOM Manipulation, Event Listeners |

### Project details

**01 · Accordion** — A classic collapsible accordion. Clicking a section header toggles an `active` class and animates the panel's `max-height` open or closed.

**02 · Box Of Boxes** — A grid of hundreds of boxes generated dynamically in JavaScript. Hovering over a box applies a randomized colored glow effect for a few seconds via `setTimeout`.

**03 · Color Flipper** — A one-button app that generates a random RGB color, applies it as the page background, and displays the resulting `rgb()` value as text.

**04 · Counter Button** — A simple click counter with increment and reset buttons.

**05 · Date Now** — A live-updating clock reading hours, minutes, seconds and milliseconds from `Date`, refreshed every 100ms.

**06 · Expanding Cards** — A row of image panels that expand to fill available space when clicked, while the others collapse, using a shared `active` class toggle.

**07 · Loader** — A spinning CSS loader that can be paused/resumed, with a color picker that updates the loader's border color live.

**08 · Sidebar Effect** — A slide-in navigation sidebar, hidden off-screen by default, toggled via a data attribute tracking open/closed state.

**09 · ToDo List** — An interactive to-do list: add tasks from a text input, mark them done with a strikethrough style, and remove them individually.

**10 · Typing** — A typing speed game showing random words from a word bank, with a countdown timer, selectable difficulty levels, and live scoring.

**11 · Small Word** — A live text-styling tool: a dropdown controls font weight and a color input controls text color, applied instantly.

**12 · Kinetic Loader** — An animated loading sequence that hides its container and reveals a "goodbye" message after a delay.

**13 · Calculator** — A text-input calculator that validates the entered expression, rejects letters, and evaluates arithmetic using a manual stack-based parser (no `eval()`).

**14 · Slideshow** — An auto-advancing image slideshow with next/previous controls and clickable dot indicators.

**15 · Testimonial Slider** — A testimonial carousel storing reviewer data (name, age, photo, quote) in an array of objects and rendering one testimonial at a time.

**16 · Progress Steps** — A multi-step progress indicator with next/previous buttons that activate steps one at a time and animate a progress bar's width.

**17 · Notion** — A minimal Notion-style task board: a modal lets you enter a task title and description, then adds it as a card to the task list on save.

**18 · Stock Ticker** — A simulated live stock ticker that polls a local mock data source every 1.5 seconds, updating price, name and timestamp, and swapping in a green/red/grey icon to show whether the price rose, fell, or held steady. Built with ES modules; run via `npm install && npm start` (Vite) from inside its folder.

**19 · Color Scheme Generator** — Pick a base color and a scheme mode, submit the form, and it sends a request to [The Color API](https://www.thecolorapi.com/), receives JSON in return, and dynamically renders the resulting six-color palette with click-to-copy swatches. Requires an internet connection to fetch new palettes.

**20 · Contact Management** — Search for you contact using search in any place you want to look for.

---

## Tech stack

- **HTML5** — semantic markup for each project
- **CSS3** — flexbox, transitions, and animations for interactivity
- **Vanilla JavaScript** — DOM APIs, event listeners, timers, `fetch`, and ES modules
- No frameworks or UI libraries are used, except where a project's own `README.md` states otherwise (see Stock Ticker)

## How to run

**Live site:** the easiest way to browse every project is the deployed showcase page:
👉 **https://atef7534.github.io/javascript50/**

Each project link in the table above also points directly to its live, deployed page.

To run locally instead:

1. Clone the repository:
   ```bash
   git clone https://github.com/atef7534/javascript50.git
   cd javascript50
   ```
2. Open any project's `index.html` directly in a browser, e.g.:
   ```
   01 Accordion/index.html
   ```
3. Or open the root `index.html` to browse all projects through the searchable showcase page.

The **Stock Ticker** project (`18 Stock Ticker`) is the exception — it uses ES modules bundled with Vite and has its own setup instructions in its folder's `README.md`.

## Repository structure

```
javascript50/
├── 01 Accordion/
├── 02 Box Of Boxes/
├── 03 Color Flipper/
├── 04 Counter Button/
├── 05 Date Now/
├── 06 Expanding Cards/
├── 07 Loader/
├── 08 Sidebar Effect/
├── 09 ToDo List/
├── 10 typing/
├── 11 Small Word/
├── 12 Kinetic Loader/
├── 13 Calculator/
├── 14 slideshow/
├── 15 testimonial slider/
├── 16 progress steps/
├── 17 notion/
├── 18 Stock Ticker/
├── 19 Color Scheme Generator/
├── 20 Contact Management/
├── index.html      # searchable project showcase
└── README.md
```

Each project folder is self-contained with its own `index.html`, CSS and JavaScript files (and occasionally images or SVGs used by that project).

## Status

19 of 50 planned projects are implemented so far. More will be added over time.
