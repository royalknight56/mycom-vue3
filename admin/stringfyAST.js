/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-09 21:39:22
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-09 21:46:00
 */
module.exports = function (ast) {
    var title = 'testapp'
    
    var res = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but ${title} doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>`;
    
    function JSONToHtml(item) {
        let props = '';
        for (let key in item) {
            props += map[key](item)
        }
        return `<mc-${item.com}${props}>${item.value ? item.value : ''}</mc-${item.com}>`
    }
    
    var map = {
        'common': (item) => {
            let prop = `${item.size ? ' size="' + item.size + '"' : ''}${item.type ? ' type="' + item.type + '"' : ''}`;
            return prop
        },
        'com': () => {
            return ''
        },
        'value': () => {
            return ''
        },
        'child': (item) => {
            for (let i = 0; i < item.child.length; i++) {
                if (item.value) {
                    item.value += JSONToHtml(item.child[i]);
                } else {
                    item.value = JSONToHtml(item.child[i]);
                }

            }
            return ''

        },
        'menu': (item) => {
            return `${item.menu ? ' :menu="' + item.menu + '"' : ''}`
        },
        'size': (item) => {
            return `${item.size ? ' size="' + item.size + '"' : ''}`
        },
        'type': (item) => {
            return `${item.type ? ' type="' + item.type + '"' : ''}`
        },
    }
    for (let i = 0; i < ast.length; i++) {
        res += JSONToHtml(ast[i]);
    }

    res += `
</body>  
</html>
`
return res
}