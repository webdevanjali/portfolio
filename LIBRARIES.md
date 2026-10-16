# DevPortfolio — Third-Party Libraries and Asset Guide

This document records every external CDN URL visible in the original `index.html` screenshot, the library versions, their purpose, local file locations, and the original project assets.

**Project:** DevPortfolio  
**Integration method:** Local files instead of CDN imports  
**Primary Bootstrap version:** 4.3.1

---

## 1. Bootstrap CSS

- **Library:** Bootstrap
- **Version:** 4.3.1
- **Purpose:** Responsive layouts, grid system, buttons, navigation, forms, cards, and component styling.
- **Official website:** https://getbootstrap.com/
- **Documentation:** https://getbootstrap.com/docs/4.3/
- **Original CDN URL from screenshot:**

  https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css

- **Alternative download URL:**

  https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css

- **Local destination:**

  `vendor/bootstrap/css/bootstrap.min.css`

- **HTML usage:**

  `<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">`

## 2. Bootstrap JavaScript

- **Library:** Bootstrap JavaScript
- **Version:** 4.3.1
- **Purpose:** Dropdowns, collapsible navigation, modals, carousels, tooltips, and other interactive Bootstrap components.
- **Official documentation:** https://getbootstrap.com/docs/4.3/
- **Original CDN URL from screenshot:**

  https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js

- **Alternative download URL:**

  https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js

- **Local destination:**

  `vendor/bootstrap/js/bootstrap.min.js`

- **HTML usage:**

  `<script src="vendor/bootstrap/js/bootstrap.min.js"></script>`

- **Dependencies:** Load jQuery and Popper.js before this file.

## 3. Older Bootstrap CSS

- **Library:** Bootstrap
- **Version:** 4.1.1
- **Purpose:** Older version of Bootstrap styling.
- **Original CDN URL from screenshot:**

  https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css

- **Status:** Found in the original HTML; not used in the updated HTML.
- **Recommendation:** Keep the record for historical reference. Do not load this alongside Bootstrap 4.3.1.

## 4. Older Bootstrap JavaScript

- **Library:** Bootstrap JavaScript
- **Version:** 4.1.1
- **Purpose:** Interactive Bootstrap components for the older Bootstrap release.
- **Original CDN URL from screenshot:**

  https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js

- **Status:** Found in the original HTML; not used in the updated HTML.
- **Recommendation:** Do not load both Bootstrap JavaScript versions on the same page.

## 5. jQuery

- **Library:** jQuery
- **Version:** 3.4.1
- **Purpose:** DOM manipulation, event handling, and JavaScript utilities. Required by Bootstrap 4 JavaScript.
- **Official website:** https://jquery.com/
- **Original CDN URL from screenshot:**

  https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js

- **Alternative download URL:**

  https://code.jquery.com/jquery-3.4.1.min.js

- **Local destination:**

  `vendor/jquery/jquery.min.js`

- **HTML usage:**

  `<script src="vendor/jquery/jquery.min.js"></script>`

## 6. Older jQuery

- **Library:** jQuery
- **Version:** 3.2.1
- **Purpose:** Older version of the jQuery JavaScript library.
- **Original CDN URL from screenshot:**

  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js

- **Status:** Found in the original HTML; not used in the updated HTML.
- **Recommendation:** Use only one jQuery version unless a verified compatibility requirement says otherwise.

## 7. Popper.js

- **Library:** Popper.js
- **Version:** 1.14.7
- **Purpose:** Positions dropdowns, tooltips, and popovers used by Bootstrap 4.
- **Official project website:** https://popper.js.org/
- **Original CDN URL from screenshot:**

  https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js

- **Alternative download URL:**

  https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js

- **Local destination:**

  `vendor/popper/popper.min.js`

- **HTML usage:**

  `<script src="vendor/popper/popper.min.js"></script>`

- **Load order:** Include after jQuery and before Bootstrap JavaScript.

## 8. Font Awesome

- **Library:** Font Awesome
- **Version:** 5.7.0
- **Purpose:** Icons such as menus, social media symbols, arrows, and interface icons.
- **Official website:** https://fontawesome.com/
- **Original CDN URL from screenshot:**

  https://use.fontawesome.com/releases/v5.7.0/css/all.css

- **Release URL:**

  https://use.fontawesome.com/releases/v5.7.0/

- **Local destination:**

  `vendor/fontawesome/css/all.css`

- **Required accompanying files:** The `webfonts/` directory and its font files from the same Font Awesome package.
- **HTML usage:**

  `<link rel="stylesheet" href="vendor/fontawesome/css/all.css">`

- **Important:** Keep the `css/` and `webfonts/` directories in their expected relative positions. Otherwise, icon fonts may fail to load.

- **Integrity attribute:** The original screenshot contains an integrity hash, but it is not sufficiently legible to transcribe reliably. Do not reuse a guessed hash. If you later use a CDN link, obtain the correct integrity value from a trusted source.

---

## 9. Original CDN references and duplicates

The screenshot contains the following imports more than once:

| Resource | Occurrences visible |
|---|---|
| Bootstrap CSS 4.3.1 | 2 |
| Bootstrap JavaScript 4.3.1 | 2 |
| jQuery 3.4.1 | 2 |
| Popper.js 1.14.7 | 2 |
| Bootstrap CSS 4.1.1 | 1 |
| Bootstrap JavaScript 4.1.1 | 1 |
| jQuery 3.2.1 | 1 |
| Font Awesome CSS 5.7.0 | 1 |

Some occurrences are inside separate commented sections or groups of copied code. This inventory records the distinct references, not a recommendation to load every occurrence.

The updated HTML consolidates these into one set of active dependencies.

---

## 10. My own project files

These are local project assets, not third-party CDN files.

### CSS files

| File | Purpose |
|---|---|
| `css/projectSlider.css` | Styles for the project slider |
| `css/imagehover.css` | Image hover effects |
| `css/style.css` | Main website styling |

### JavaScript file

| File | Purpose |
|---|---|
| `js/projectSlider.js` | Custom JavaScript for the project slider |

The exact functionality of these files depends on their contents. Their names alone do not establish their original authors or download sources.

---

## 11. Final folder structure

```text
DevPortfolio/
│
├── index.html
├── LIBRARIES.md
│
├── css/
│   ├── projectSlider.css
│   ├── imagehover.css
│   └── style.css
│
├── js/
│   └── projectSlider.js
│
└── vendor/
    ├── bootstrap/
    │   ├── css/
    │   │   └── bootstrap.min.css
    │   └── js/
    │       └── bootstrap.min.js
    │
    ├── jquery/
    │   └── jquery.min.js
    │
    ├── popper/
    │   └── popper.min.js
    │
    └── fontawesome/
        ├── css/
        │   └── all.css
        └── webfonts/
            └── [Font Awesome font files]
```

---

## 12. How to reuse these libraries in another project

1. Copy the required library folders from `vendor/` into the new project.
2. Copy `LIBRARIES.md` so you retain the version numbers and original URLs.
3. Update the relative paths in the new HTML file to match its folder structure.
4. Load jQuery, Popper.js, and Bootstrap JavaScript in the correct order.
5. Test the page to ensure that icons, styling, and interactive components work.

If you prefer to download the libraries again, use the original URLs recorded above. For Bootstrap, you can also consult the official version-specific download guide:

https://getbootstrap.com/docs/4.3/getting-started/download/

## 13. Maintenance notes

- Keep the selected versions consistent across projects.
- Do not include duplicate CSS or JavaScript imports.
- Preserve the licenses and notices supplied with third-party libraries.
- The `vendor/` folder contains third-party code; the `css/` and `js/` folders contain your project assets.
- A local copy removes the runtime dependency on the CDN, but you still need to download the files and keep the folder structure intact.
- Back up the project and `LIBRARIES.md` together, preferably using Git.