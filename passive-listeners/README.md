# passive-listeners

## Описание

Для решения проблем page-speed

## Implementation

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/stavis-dev/hugo-modules/passive-listeners"
```

Add some following configuration to your `config/_default/params.toml` file.

```toml
[[params.plugins.js]]
link = "plugins/passive-listeners/passive-listeners.js"
lazy = true
```