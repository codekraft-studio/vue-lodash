# vue-lodash

> Lodash integration and filters for Vue

## Installation

Download the project using your favourite package manager:

```
npm install @codekraft-studio/vue-lodash
yarn add @codekraft-studio/vue-lodash
```

Than load it inside your application main file:

```js
import Vue from 'vue'
import VueLodash from '@codekraft-studio/vue-lodash'

Vue.use(VueLodash)
```

You can also customize the plugin installation using some options:

```js
import Vue from 'vue'
import VueLodash from '@codekraft-studio/vue-lodash'

Vue.use(VueLodash, {
  name: '_',
  globalFilters: true
})
```

## Usage

The plugin will install lodash globally in your Vue instance `Vue._`, it will
be accessible from everywhere even inside your templates scope:

```html
<li v-for="n in _.uniq([2, 4, 4, 6, 10, 1, 3, 1, 8, 6])">{{n}}</li>
```

Once you have installed the project and setup correctly you should be able
to use almost all of the lodash methods as filters, for example:

```html
<p>{{ description | capitalize }}</p>
```

You can also chain them to obtain more complex results:

```html
<p>{{ description | capitalize | truncate }}</p>
```

---

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```
