# youtube Module

## Installation

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/stavis-dev/hugo-modules/youtube-pepel"
```

<hr>

## YouTube Video (Lite and Fast)

To add Youtube video as a Partial or Shortcode, add this plugin to your `config.toml` file.

```toml
[[params.plugins.js]]
link = "plugins/youtube-pepel.js"
```

### Using Partial

```md
<!-- minimal use -->
{{ partial "youtube-pepel.html" (dict "Id" "6FIoOJm3vYA") }}

<!-- extended use -->
{{ partial "youtube-pepel.html" (dict "Id" "6FIoOJm3vYA" "Class" "mx-auto"  "Width" "600px" "Style" "" "Attr" "") }}
```

### Using Shortcode

```md
<!-- minimal use -->
{{< youtube-pepel 6FIoOJm3vYA >}}

<!-- extended use -->
{{< youtube-pepel id="6FIoOJm3vYA" class="mx-auto" width="600px" style="" attr="" >}}
```

**Available parameters/options:**

- `id`: YouTube video Id (ex: youtube.com/watch?v=`FeHiF0XQ8VQ`)
- `class`: video class
- `width`: video width
- `style`: add custom style
- `attr`: add custom attribute

<hr>