# metrika

## Описание

Скрипты добавляющие гугл и яндекс метрику на страницу сайта.

## Implementation

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/stavis-dev/hugo-modules/metrika"
```


Совет от яндекса установить счетчик повыше. Хотя по наблюдениям, его лучше подключать
именно внизу страницы. После выполнения всех скриптов.
При установке счетчика в HTML-код сайта, разместите код как можно ближе к началу страницы. 
Например, в пределах тегов `<head></head>` или `<body></body>`.

> Personally, I add this section of the code to the sailing bottom of the page

`layouts/_default/baseof.html`

```html
{{ "<!-- metrika -->" | safeHTML }}
{{ partial "metrika.html" }}
```

Можно отключать метрику при работе локально

```html
{{ if not (or (hugo.IsServer) (eq hugo.Environment "test")) }}
{{ partial "metrika.html" }}
{{end}}
```


Add some following configuration to your `config/_default/params.toml` file.

```toml
# metrika
google_analytics_id="UA-1234567-1"
yandex_metrika = "123456"
```