import Layer from "./layer/layer.js"
import tmp from './app.html'

export default function changeNode() {
  let layer = new Layer()
  let tmpNode = tmp + layer.templent
  let div = document.createElement('div')
  div.innerHTML = tmpNode
  return div
}