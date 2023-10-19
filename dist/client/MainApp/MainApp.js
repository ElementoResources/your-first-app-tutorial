const runtimeUrl = `${window.location.origin}/runtime/runtime.js`
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// MainPage.js
function MainPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, TextInput} = Elemento.components
    const YourName = Elemento.useObjectState(pathWith('YourName'), new TextInput.State({}))

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), fontSize: 24}, 'Hello You'),
        React.createElement(TextInput, {path: pathWith('YourName'), label: 'Your Name'}),
        React.createElement(TextElement, {path: pathWith('Text53')}, 'Hello there, ' + YourName),
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
