const { description } = require('../../package')

module.exports = {
    /**
    * Ref：https://v1.vuepress.vuejs.org/config/#title
    */
    title: 'Simple Online Printing',
    /**
    * Ref：https://v1.vuepress.vuejs.org/config/#description
    */
    description: description,

    /**
    * Extra tags to be injected to the page HTML `<head>`
    *
    * ref：https://v1.vuepress.vuejs.org/config/#head
    */
    head: [
        ['meta', { name: 'theme-color', content: '#168ff0' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
    * Theme configuration, here is the default theme configuration for VuePress.
    *
    * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
    */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
        nav: [
            {
                text: 'Documentación',
                link: '/docs/',
            },
            {
                text: 'Tienda',
                link: 'https://plugincopisteriaonline.com',
            },
            {
                text: 'Demo',
                link: 'https://demo.plugincopisteriaonline.com',
            }
        ],
        sidebar: {
            '/docs/': [
                {
                    title: 'Introducción',
                    collapsable: false,
                    children: [
                        '',
                        'installation',
                    ]
                },
                {
                    title: 'Primeros pasos',
                    collapsable: false,
                    children: [
                        'basics/',
                        'basics/template',
                        'basics/product',
                    ]
                },
                {
                    title: 'Opciones de configuración',
                    collapsable: false,
                    children: [
                        'config/',
                        'config/options',
                        'config/design',
                        'config/finish',
                        'config/tooltips',
                        'config/license',
                    ]
                },
                {
                    title: 'Soporte',
                    collapsable: false,
                    children: [
                        'help/'
                    ]
                }
            ]
        }
    },
    /**
    * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
    */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
