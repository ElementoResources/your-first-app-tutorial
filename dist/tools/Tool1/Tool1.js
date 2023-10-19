const runtimeUrl = `${window.location.origin}/runtime/runtime.js`
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// Tool1.js
export default function Tool1(props) {
    const pathWith = name => 'Tool1' + '.' + name
    const {App} = Elemento.components
    const {Editor, Preview} = Elemento
    const pages = {}
    const {appContext} = props
    const app = Elemento.useObjectState('app', new App.State({pages, appContext}))

    return React.createElement(App, {path: 'Tool1', },)
}
