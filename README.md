# lingkarbelajar.tumblr.com

> Theme for [lingkarbelajar.tumblr.com](http://lingkarbelajar.tumblr.com/)

## Installation

### Requirements

* [Node.js](https://nodejs.org/) (>= 0.10)
* Grunt - `npm install -g grunt-cli`
* Tumblr Theme Parser - `npm install -g tumblr-theme-parser`

### Installation guide

```sh
$ git clone https://github.com/resir014/lingkarbelajar.tumblr.com.git
$ cd lingkarbelajar.tumblr.com
$ npm install
```

## Working with the theme

### Local previews

This project comes with a  built-in theme parser, complete with a JSON-based dummy content that will be used to compile the theme files into a rough representation of what the theme would look like if it were loaded as a Tumblr theme.

To use this tool, type the following:

```sh
# Generates a sample homepage.
$ grunt build:page

# Generates a sample permalink page.
$ grunt build:permalink
```

Then go to the `build` folder and open the generated `index.html` file.

### Building the theme

Use the `dist` command to build a final copy of the theme assets.

```sh
$ grunt dist
```

## Components

* [Normalize.css](http://necolas.github.io/normalize.css/) (version 3.0.2)
* [jQuery](https://jquery.com/) (version 1.11.3)
* [Grunt](http://gruntjs.com/)
* [tumblr-theme-parser](https://github.com/carrot/tumblr-theme-parser)

## License

Released under the [MIT license](https://github.com/resir014/Tumblr-Boilerplate/blob/master/LICENSE).

This theme is based from the [Hyde Jekyll theme](http://hyde.getpoole.com) by [Mark Otto](https://twitter.com/mdo), as well as several other third-party components. See [third-party.txt](https://github.com/resir014/whattheminecraft.tumblr.com/blob/master/third-party.txt) for details.
