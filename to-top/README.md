# to-top

## Описание

Кнопка наверх сайта.

## Implementation

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/stavis-dev/hugo-modules/to-top"
```

Add some following configuration to your `config/_default/params.toml` file.

```toml
# metrika

```

```toml
[[params.plugins.js]]
link = "js/to-top.js"
```