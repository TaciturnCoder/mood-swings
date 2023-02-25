# mood-swings [0.5.0]
🎨 Color scheme that adapts to your mood

# Installation

```sh
# Install from npm
npm i @dwijbavisi/mood-swings
```

```scss
// Import in your project
@use '@dwijbavisi/mood-swings';
```

## Demo

See [spec/demo](https://TaciturnCoder.github.io/mood-swings/spec/demo)
to see mood-swings in action.

# Usage

```scss
// Import in your project
@use '@dwijbavisi/mood-swings';

:root {
    // Load colors based on preset tokens
    @include mood-swings.presets;
    // This generates following colors ready to be used:
    // primary, secondary, surface, error, warning, success

    // Generate custom color
    @include mood-swings.new(notification, #502343);
    // mood-swings.new colors don't blend with mood
    // Use mood-swings API to generate custom color blends
}

body {
    // Defined via mood-swings.presets
    background-color: mood-swings.runtime(surface);
    color: mood-swings.runtime(on-surface);
}

#cookies {
    // Defined via mood-swings.new
    background-color: mood-swings.runtime(notification-container);
    color: mood-swings.runtime(on-notification-container);
}

.primary-button {
    background-color: mood-swings.runtime(primary);
    color: mood-swings.runtime(on-primary);
}
```

# Configuration

```scss
// Use '@dwijbavisi/mood-swings/tokens' with custom values
@use '@dwijbavisi/mood-swings/tokens' with (
    // Following tokens are available for configuration
    $prefix: 'my-prefix',
    $accent: #502343,           // Used for primary color
    $variant: #502343,          // Used for secondary color
    $mood: pink,
    $error: red,
    $warning: magenta,
    $success: green,
    $on-shift: 40,              // Used for on-* color
    $container-shift: 20,       // Used for *-container color
    $blend-ratio: 0.5,          // Used for blending colors with mood
    $variant-blend-ratio: 0.5   // Used for blending variant with mood
);

// Import in your project
@use '@dwijbavisi/mood-swings';
```

See [docs/tokens](https://TaciturnCoder.github.io/mood-swings/docs/tokens)
for more information.

# Documentation
See [docs](https://TaciturnCoder.github.io/mood-swings/docs)
for more information.

## mood-swings API
mood-swings API allows you to generate custom color blends.

```scss
@use '@dwijbavisi/mood-swings';
@use '@dwijbavisi/mood-swings/api' as mood-swings-api;
```

See [docs/api](https://TaciturnCoder.github.io/mood-swings/docs/api)
for more information.
