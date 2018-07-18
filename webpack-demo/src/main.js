import changNode from "./print"

let node =changNode()
 document.getElementById('app').appendChild(node)
if (module.hot) {
    module.hot.accept('./print.js', function () {
       let newNode = changNode()
        document.getElementById('app').replaceChild(newNode,node)
        node =newNode
    })
}