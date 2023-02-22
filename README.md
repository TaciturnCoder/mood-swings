# mood-swings
🎨 Color scheme that adapts to your mood

# Installation

```bash
npm i @dwijbavisi/mood-swings
```

# Usage

```scss
@use '@dwijbavisi/mood-swings' as mood-swings;

:root {
    @include mood-swings.container;

    // Generate new color
    @include mood-swings.new(notification, #502343);
}
```

See [spec/design](./spec/design)

# API Documentation

See [docs/api](./docs/api)
