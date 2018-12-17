# UML diagram (Nomnoml) in Gitbook
This plugin can render UML diagram using [nomnoml](http://www.nomnoml.com/) .  
And this syntacs can be previewed by VS Code [Markdown Nomnoml Support](https://github.com/amoosbr/vscode-markdown-nomnoml).  
Forked from (https://plugins.gitbook.com/plugin/nomnoml)
## Installation
Configure the plugin in your `book.json`:

```js
{
  "plugins": ["nomnoml-md"]
}
```


## How to use

```nomnoml

#fill: #d5e7ee; #8ebff2

[<frame>Decorator pattern|
  [<abstract>Component||+ operation()]
  [Client] depends --> [Component]
  [Decorator|- next: Component]
  [Decorator] decorates -- [ConcreteComponent]
  [Component] <:- [Decorator]
  [Component] <:- [ConcreteComponent]
]

```