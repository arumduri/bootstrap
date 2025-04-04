---
layout: docs
title: Icon link
description: Quickly create stylized hyperlinks with Bootstrap Icons or other icons.
group: helpers
toc: true
added: 5.3
---

The icon link helper component modifies our default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default `gap` value. We stylize the underline with a custom offset and color. Icons are automatically sized to `1em` to best match their associated text's `font-size`.

Icon links assume [Bootstrap Icons](https://icons.getbootstrap.com) are being used, but you can use any icon or image you like.

{{< callout >}}
{{< /callout >}}

## Example

Take a regular `<a>` element, add `.icon-link`, and insert an icon on either the left or right of your link text. The icon is automatically sized, placed, and colored.

{{< example >}}
{{< /example >}}

{{< example >}}
{{< /example >}}

## Style on hover

Add `.icon-link-hover` to move the icon to the right on hover.

{{< example >}}
{{< /example >}}

## Customize

Modify the styling of an icon link with our link CSS variables, Sass variables, utilities, or custom styles.

### CSS variables

Modify the `--bs-link-*` and `--bs-icon-link-*` CSS variables as needed to change the default appearance.

Customize the hover `transform` by overriding the `--bs-icon-link-transform` CSS variable:

{{< example >}}
{{< /example >}}

Customize the color by overriding the `--bs-link-*` CSS variable:

{{< example >}}
{{< /example >}}

### Sass variables

Customize the icon link Sass variables to modify all icon link styles across your Bootstrap-powered project.

{{< scss-docs name="icon-link-variables" file="scss/_variables.scss" >}}

### Sass utilities API

Modify icon links with any of [our link utilities]({{< docsref "/utilities/link/" >}}) for modifying underline color and offset.

{{< example >}}
{{< /example >}}
