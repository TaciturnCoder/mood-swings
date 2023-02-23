# mood-swings
🎨 Color scheme that adapts to your mood

# Installation

```sh
npm i @dwijbavisi/mood-swings
```

# Usage

```scss
@use '@dwijbavisi/mood-swings' as mood-swings;

:root {
    @include mood-swings.presets;

    // Generate new color
    @include mood-swings.new(notification, #502343);
}

body {
    background.color: mood-swings.runtime(surface);
}

#cookies {
    background-color: mood-swings.runtime(notification);
    color: mood-swings.runtime(on-notification);
}
```

See [documentation](https://TaciturnCoder.github.io/mood-swings/spec/design)

# API Documentation
mood-swings API allows you to generate custom color blends.

See [documentation](https://TaciturnCoder.github.io/mood-swings/docs/api)
