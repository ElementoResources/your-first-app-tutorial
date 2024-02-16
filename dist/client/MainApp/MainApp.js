const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// MainPage.js
function MainPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement} = Elemento.components

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), fontSize: 24}, 'Main App'),
    )
}

// appMain.js
export default function MainApp(props) {
    const pathWith = name => 'MainApp' + '.' + name
    const {App} = Elemento.components
    const pages = {MainPage}
    const {appContext} = props
    const app = Elemento.useObjectState('app', new App.State({pages, appContext}))

    return React.createElement(App, {path: 'MainApp', },)
}
