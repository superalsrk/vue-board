# vue-board

> A Vue.js project of Vue Board

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## Usage

Just edit the variable `BOARD_PAGE_RULES` file in `src/router/index.js` like this

```js
const BOARD_PAGE_RULES = [
    {
        'label': 'Home',
        'page': '@/pages/home/test'
    },

    {
        'label': 'Tool/debug',
        'page': '@/pages/tool/debug',
        'default': true
    },

    {
        'label': 'Tool/test',
        'page': '@/pages/tool/test'
    },

    {
        'label': 'Option',
        'page': '@/pages/option/test'
    }
]
```

It'll generate the site like this

![](http://mirror.tarax.cn/repo/vue-board/screen.png2017-11-11_1617.png)