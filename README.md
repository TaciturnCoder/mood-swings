# mood-swings
🎨 Color scheme that adapts to your mood

# Installation

## Install from npm
```sh
npm i @dwijbavisi/mood-swings
```

## Import in your project

```scss
@use '@dwijbavisi/mood-swings' as swings;
```

## Demonstration

See [spec/demo](https://TaciturnCoder.github.io/mood-swings/spec/demo)
to see mood-swings in action.

# Usage

```scss
@use '@dwijbavisi/mood-swings' as swings;

:root {
    @include swings.presets;

    // Generate new color
    @include swings.new(notification, #502343);
}

body {
    background-color: swings.runtime(surface);
    color: swings.runtime(on-surface);
}

#cookies {
    background-color: swings.runtime(notification);
    color: swings.runtime(on-notification);
}

.primary {
    background-color: mood-swings.runtime(primary);
    color: mood-swings.runtime(on-primary);
}
```

## Configuration

```scss
// Use 'mood-swings/tokens' for configuring tokens
// You can configure following tokens
@use '@dwijbavisi/mood-swings/tokens' with (
    $prefix: 'my-prefix',
    $accent: #502343,
    $variant: #502343,
    $mood: pink,
    $error: red,
    $warning: magenta,
    $success: green,
    $on-shift: 40,
    $container-shift: 20,
    $blend-ratio: 0.5,
    $variant-blend-ratio: 0.5
);

// Use 'mood-swings' with custom tokens set
@use '@dwijbavisi/mood-swings' as swings;

// ...
// ...
```

See [docs/tokens](https://TaciturnCoder.github.io/mood-swings/docs/tokens)
for more information.

## Documentation
See [docs](https://TaciturnCoder.github.io/mood-swings/docs)
for more information.

# API Documentation
mood-swings API allows you to generate custom color blends.

```scss
// Use 'mood-swings/api' for using API
@use '@dwijbavisi/mood-swings' as swings;
@use '@dwijbavisi/mood-swings/api' as swings-api;

// ...
// ...
```

See [docs/api](https://TaciturnCoder.github.io/mood-swings/docs/api)
for more information.
