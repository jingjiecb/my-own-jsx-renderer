/** @jsx h */
const foo = <h1 id="foo">Hello!</h1>

const dataList = ["haha", "jiji", "lalaji", "gagaji"]

const list = (
    <ul>
        {dataList.map(data => <li>{data}</li>)}
    </ul>
)

function h(tag, props, ...args){
    let children = args.length ? [].concat(...args) : null;
    return { tag, props, children };
}

function render(vnode) {
    let node
    if (vnode.split) {
        node = document.createTextNode(vnode)
    }
    else {
        node = document.createElement(vnode.tag)
        Object.keys(vnode.props || {}).forEach(prop => {
            node.setAttribute(prop, vnode.props[prop])
        });
        (vnode.children || []).forEach(child => {
            node.appendChild(render(child));
        });
    }
    return node
}

function load(vnode) {
    document.body.appendChild(render(vnode))
}

load(foo)
load(list)