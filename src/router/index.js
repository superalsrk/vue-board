import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const LAYOUT = {
    BLANK: '@/components/layout/blank',
    BOARD: '@/components/layout/board'
}

//board page rules
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

let midSides = {};
let sortedItems = [];

BOARD_PAGE_RULES.forEach((item) => {
    let label = item.label;
    let page = item.page.replace('@/pages', '');

    if (label.indexOf('/') > -1 && page.indexOf('/') > -1) {
        let parentname = label.split('/')[0];
        let childname = label.split('/')[1];

        let parentrouter = '/' + page.split('/')[1];
        let childrouter = page;

        if (typeof midSides[parentrouter] === 'undefined') {
            midSides[parentrouter] = {
                'name': parentname,
                'hasSub': true,
                'subs': []
            };
            sortedItems.push(parentrouter)
        }

        midSides[parentrouter].subs.push({
            'path': childrouter,
            'name': childname
        })

    } else {
        sortedItems.push(page);
        midSides[page] = {
            'name': label,
            'hasSub': false
        }
    }
});

let SIDEBAR_TREE = sortedItems.map((x, index) => {
    return Object.assign(midSides[x], { 'path': x })
});

export {
    SIDEBAR_TREE
}

console.log(SIDEBAR_TREE)

//Dynamic resolve router
function view(name) {
    return function (resolve) {
        require(['@/pages/' + name + '.vue'], resolve)
    }
}


let default_router = null;

let BOARD_PAGE_ROUTER_LIST = BOARD_PAGE_RULES.map((x) => {
    let page = x.page;

    if (typeof x.default != 'undefined' && x.default == true) {
        default_router = x.page.replace('@/pages', '')
    }
    return {
        path: page.replace('@/pages/', ''),
        component: view(page.replace('@/pages/', ''))
    }
})

if (default_router == null) {
    default_router = '/' + BOARD_PAGE_ROUTER_LIST[0].page;
}


export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('@/components/layout/board'),
            redirect: default_router,
            children: BOARD_PAGE_ROUTER_LIST
        }
    ]
})
