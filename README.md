# `<prog-lightbox>`

A web component that progressively-enhances a link to a image, displaying that image in a lightbox

## Example

```html
<prog-lightbox>
    <a href="./examples/img/photo-large.jpg">
        <img src="./examples/img/photo-thumbnail.jpg" alt>
    </a>
</prog-lightbox>

<!-- Meanwhile, hiding near the bottom of the document, is this innocent looking template... -->
<template data-matches="prog-lightbox">
    <dialog id>
        <form method="dialog">
            <button type="submit">Close dialog</button>
        </form>
        <picture>
            <img src alt>
        </picture>
    </dialog>
</template>

<!-- And the necessary script to make it happen... -->
<script type="module" defer>
import ProgLightbox from '../mjs/prog-lightbox.mjs';
window.customElements.define('prog-lightbox', ProgLightbox);
</script>
```

## Principles

- **Resiliency**\
  This component only works if the script successfully loads, and all the necessary HTML exists
- **Progressive enhancement**\
  Without the script, this pattern (an anchor pointing to a larger image) still works!
  The default behaviour is for the linked image in the same browser tab, or adjacent tab if the author uses the `target` attribute on the anchor.
- **Unstyled**\
  Choose your own styling and markup for the contents of the custom element and the dialog.
