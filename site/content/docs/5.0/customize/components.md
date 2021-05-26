---
layout: docs
title: Components
description:  기본 클래스와 수정 클래스를 가지고 거의 모든 컴포넌트를 반응하는 방식으로 구축하는 방법과 이유를 소개합니다.
group: customize
toc: true
---

## Base classes

Bootstrap의 컴포넌트는 주로 기본-제어자 명명법으로 만들어졌습니다. 가능한 한 많은 공유 속성을 `.btn`과 같은 기본 클래스로 그룹화 하고, 각 변형 개개의 스타일을 `.btn-primary` 혹은 `.btn-success`와 같은 제어자 클래스로 그룹화 되어 있습니다.

To build our modifier classes, we use Sass's `@each` loops to iterate over a Sass map. This is especially helpful for generating variants of a component by our `$theme-colors` and creating responsive variants for each breakpoint. As you customize these Sass maps and recompile, you'll automatically see your changes reflected in these loops.

Check out [our Sass maps and loops docs]({{< docsref "/customize/sass#maps-and-loops" >}}) for how to customize these loops and extend Bootstrap's base-modifier approach to your own code.

## Modifiers

Many of Bootstrap's components are built with a base-modifier class approach. This means the bulk of the styling is contained to a base class (e.g., `.btn`) while style variations are confined to modifier classes (e.g., `.btn-danger`). These modifier classes are built from the `$theme-colors` map to make customizing the number and name of our modifier classes.

Here are two examples of how we loop over the `$theme-colors` map to generate modifiers to the `.alert` and `.list-group` components.

{{< scss-docs name="alert-modifiers" file="scss/_alert.scss" >}}

{{< scss-docs name="list-group-modifiers" file="scss/_list-group.scss" >}}

## Responsive

These Sass loops aren't limited to color maps, either. You can also generate responsive variations of your components. Take for example our responsive alignment of the dropdowns where we mix an `@each` loop for the `$grid-breakpoints` Sass map with a media query include.

{{< scss-docs name="responsive-breakpoints" file="scss/_dropdown.scss" >}}

Should you modify your `$grid-breakpoints`, your changes will apply to all the loops iterating over that map.

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation]({{< docsref "/layout/grid#sass" >}}).

## Creating your own

We encourage you to adopt these guidelines when building with Bootstrap to create your own components. We've extended this approach ourselves to the custom components in our documentation and examples. Components like our callouts are built just like our provided components with base and modifier classes.

<div class="bd-example">
  <div class="bd-callout my-0">
    <strong>This is a callout.</strong> We built it custom for our docs so our messages to you stand out. It has three variants via modifier classes.
  </div>
</div>

```html
<div class="callout">...</div>
```

In your CSS, you'd have something like the following where the bulk of the styling is done via `.callout`. Then, the unique styles between each variant is controlled via modifier class.

```scss
// Base class
.callout {}

// Modifier classes
.callout-info {}
.callout-warning {}
.callout-danger {}
```

For the callouts, that unique styling is just a `border-left-color`. When you combine that base class with one of those modifier classes, you get your complete component family:

{{< callout info >}}
**This is an info callout.** Example text to show it in action.
{{< /callout >}}

{{< callout warning >}}
**This is a warning callout.** Example text to show it in action.
{{< /callout >}}

{{< callout danger >}}
**This is a danger callout.** Example text to show it in action.
{{< /callout >}}
