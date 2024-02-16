const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// StartPage.js
function StartPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Button} = Elemento.components
    const {Editor, Preview} = Elemento
    const app = Elemento.useGetObjectState('app')
    const {ShowPage} = app
    const NextButton_action = React.useCallback(async () => {
        await ShowPage(HowtoUsePage)
    }, [])

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), fontSize: 24}, 'Creating your first app with Elemento'),
        React.createElement(TextElement, {path: pathWith('Para1')}, 'Congratulations on deciding to dive in to Elemento!'),
        React.createElement(TextElement, {path: pathWith('Para2')}, 'This short guide is intended for complete beginners to programming.  It will take you step-by-step through creating a really simple Elemento app, called Hello You.  It will take about 5 minutes.'),
        React.createElement(TextElement, {path: pathWith('Para3')}, 'You will need a computer with a good size screen (Full HD 1920 x 1080 is best) and an up to date version of the Chrome browse'),
        React.createElement(TextElement, {path: pathWith('Para4')}, 'Let\'s get started - click the Next button below'),
        React.createElement(Button, {path: pathWith('NextButton'), content: 'Next', appearance: 'outline', action: NextButton_action}),
    )
}

// HowtoUsePage.js
function HowtoUsePage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Layout, Button} = Elemento.components
    const {Editor, Preview} = Elemento
    const app = Elemento.useGetObjectState('app')
    const {ShowPage} = app
    const Previous_action = React.useCallback(async () => {
        await ShowPage(StartPage)
    }, [])
    const NextButton_action = React.useCallback(async () => {
        await ShowPage(HowElementoWorksPage)
    }, [])

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), fontSize: 24}, 'How to Use this Tutorial'),
        React.createElement(TextElement, {path: pathWith('Para1')}, 'This is the Elemento Studio screen - there is a lot to see. The next page explains what you are looking at.'),
        React.createElement(TextElement, {path: pathWith('Para2')}, `Each page contains detailed instructions to complete that step.  
If you can't see what any instruction means, click the Show Me link beside it.  `),
        React.createElement(TextElement, {path: pathWith('Para3')}, 'You can also click the Help button at the top of the page at any time to find further information about anything you are doing in the tutorial. '),
        React.createElement(TextElement, {path: pathWith('Para4')}, 'You can move around the tutorial with the Previous and Next buttons at the bottom of each page.'),
        React.createElement(Layout, {path: pathWith('Buttons'), horizontal: true, wrap: false},
            React.createElement(Button, {path: pathWith('Previous'), content: 'Previous', appearance: 'outline', action: Previous_action}),
            React.createElement(Button, {path: pathWith('NextButton'), content: 'Next', appearance: 'outline', action: NextButton_action}),
    ),
    )
}

// HowElementoWorksPage.js
function HowElementoWorksPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Layout, Button} = Elemento.components
    const {Editor, Preview} = Elemento
    const app = Elemento.useGetObjectState('app')
    const {ShowPage} = app
    const Previous_action = React.useCallback(async () => {
        await ShowPage(HowtoUsePage)
    }, [])
    const NextButton_action = React.useCallback(async () => {
        await ShowPage(WhatYouSeePage)
    }, [])

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), fontSize: 24}, 'How Elemento works - in 30 seconds'),
        React.createElement(TextElement, {path: pathWith('Para1')}, 'Elemento lets you create apps by assembling parts like pages, buttons, input boxes and pieces of text.  These are called "elements".'),
        React.createElement(TextElement, {path: pathWith('Para2')}, 'Each element has properties - settings that control what it looks like and what it does.'),
        React.createElement(TextElement, {path: pathWith('Para3')}, 'Property settings can be plain values, like "green" or 20, or they can be formulas.  Formulas are similar to those in a spreadsheet, and they let the app calculate what to show and do as you use it.'),
        React.createElement(TextElement, {path: pathWith('Para4')}, 'Now lets see how you set up the elements and their properties.'),
        React.createElement(Layout, {path: pathWith('Buttons'), horizontal: true, wrap: false},
            React.createElement(Button, {path: pathWith('Previous'), content: 'Previous', appearance: 'outline', action: Previous_action}),
            React.createElement(Button, {path: pathWith('NextButton'), content: 'Next', appearance: 'outline', action: NextButton_action}),
    ),
    )
}

// WhatYouSeePage.js
function WhatYouSeePage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Layout, Button} = Elemento.components
    const {Editor, Preview} = Elemento
    const app = Elemento.useGetObjectState('app')
    const {ShowPage} = app
    const ShowMe1_action = React.useCallback(async () => {
        await Editor.Show('treeItem')
    }, [])
    const ShowMe2_action = React.useCallback(async () => {
        await await Editor.Click('treeItem', 'Main Page')
        await await Editor.Show('propertiesPanel')
        await Preview.Show()
    }, [])
    const ShowMe3_action = React.useCallback(async () => {
        await Preview.Show('MainApp')
    }, [])
    const ShowMe4_action = React.useCallback(async () => {
        await Editor.Show('menuButton')
    }, [])
    const Previous_action = React.useCallback(async () => {
        await ShowPage(HowElementoWorksPage)
    }, [])
    const NextButton_action = React.useCallback(async () => {
        await ShowPage(Step1Page)
    }, [])

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), fontSize: 24}, 'What you can see in the Studio'),
        React.createElement(Layout, {path: pathWith('Navigator'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Explanation')}, `Navigator
This shows you the parts of the app and lets you move around to work on each element`),
            React.createElement(Button, {path: pathWith('ShowMe1'), content: 'Show me', appearance: 'link', action: ShowMe1_action}),
    ),
        React.createElement(Layout, {path: pathWith('Properties'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Explanation')}, `Properties panel
This shows the settings for the element you select in the Navigator`),
            React.createElement(Button, {path: pathWith('ShowMe2'), content: 'Show me', appearance: 'link', action: ShowMe2_action}),
    ),
        React.createElement(Layout, {path: pathWith('Preview'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Explanation')}, `Preview panel
This shows the app you are building, running on the page`),
            React.createElement(Button, {path: pathWith('ShowMe3'), content: 'Show me', appearance: 'link', action: ShowMe3_action}),
    ),
        React.createElement(Layout, {path: pathWith('Menu'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Explanation')}, `Menu buttons
These let you do the various actions you need, like in most software you have used before`),
            React.createElement(Button, {path: pathWith('ShowMe4'), content: 'Show me', appearance: 'link', action: ShowMe4_action}),
    ),
        React.createElement(TextElement, {path: pathWith('Para1')}, `Tools window
That's this part you are looking at.  It shows things like this tutorial, and also Help.`),
        React.createElement(TextElement, {path: pathWith('Para2')}, `Right now the app you are working on is like a new, empty app you have just created.  
On the next page you will start changing it.`),
        React.createElement(Layout, {path: pathWith('Buttons'), horizontal: true, wrap: false},
            React.createElement(Button, {path: pathWith('Previous'), content: 'Previous', appearance: 'outline', action: Previous_action}),
            React.createElement(Button, {path: pathWith('NextButton'), content: 'Next', appearance: 'outline', action: NextButton_action}),
    ),
    )
}

// Step1Page.js
function Step1Page(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Layout, Button} = Elemento.components
    const {Editor, Preview} = Elemento
    const app = Elemento.useGetObjectState('app')
    const {ShowPage} = app
    const ShowItem_action = React.useCallback(async () => {
        await Editor.Show('treeItem', 'Main Page')
    }, [])
    const ExpandItem_action = React.useCallback(async () => {
        await Editor.EnsureTreeItemsExpanded('treeItem', 'Main Page')
    }, [])
    const Showlink_action = React.useCallback(async () => {
        await Editor.Click('treeItem', 'Title')
    }, [])
    const ShowMe4_action = React.useCallback(async () => {
        await Editor.Click('propertyField', 'Content')
    }, [])
    const ShowMe5_action = React.useCallback(async () => {
        await Editor.SetValue('propertyField', 'Content', 'Hello You')
    }, [])
    const ShowMe6_action = React.useCallback(async () => {
        await Preview.Show('Title')
    }, [])
    const Previous_action = React.useCallback(async () => {
        await ShowPage(WhatYouSeePage)
    }, [])
    const NextButton_action = React.useCallback(async () => {
        await ShowPage(Step2Page)
    }, [])

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Heading'), fontSize: 24}, 'Step 1 - Change the Title'),
        React.createElement(Layout, {path: pathWith('Step1'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Para1')}, 'Find the Main Page item in the Navigator on the left of the screen.'),
            React.createElement(Button, {path: pathWith('ShowItem'), content: 'Show me', appearance: 'link', action: ShowItem_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step2'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Para1')}, 'Click the "+" to the left of Main Page to expand it.'),
            React.createElement(Button, {path: pathWith('ExpandItem'), content: 'Show me', appearance: 'link', action: ExpandItem_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step3'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Para1')}, 'Click on the Title item.'),
            React.createElement(Button, {path: pathWith('Showlink'), content: 'Show me', appearance: 'link', action: Showlink_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step4'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Instruction')}, 'Click on the Content box in the Properties Panel'),
            React.createElement(Button, {path: pathWith('ShowMe4'), content: 'Show me', appearance: 'link', action: ShowMe4_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step5'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Instruction')}, 'Change the Content to \'Hello You\' (or whatever you want to call your app)'),
            React.createElement(Button, {path: pathWith('ShowMe5'), content: 'Show me', appearance: 'link', action: ShowMe5_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step6'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Instruction')}, 'You will see the Title change in the Preview'),
            React.createElement(Button, {path: pathWith('ShowMe6'), content: 'Show me', appearance: 'link', action: ShowMe6_action}),
    ),
        React.createElement(Layout, {path: pathWith('Buttons'), horizontal: true, wrap: false},
            React.createElement(Button, {path: pathWith('Previous'), content: 'Previous', appearance: 'outline', action: Previous_action}),
            React.createElement(Button, {path: pathWith('NextButton'), content: 'Next', appearance: 'outline', action: NextButton_action}),
    ),
    )
}

// Step2Page.js
function Step2Page(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Layout, Button} = Elemento.components
    const {Editor, Preview} = Elemento
    const app = Elemento.useGetObjectState('app')
    const {ShowPage} = app
    const ShowMe21_action = React.useCallback(async () => {
        await Editor.Show('treeItem', 'Title')
    }, [])
    const ShowMe22_action = React.useCallback(async () => {
        await Editor.Click('menuButton', 'Insert')
    }, [])
    const ShowMe23_action = React.useCallback(async () => {
        await Editor.Click('menuItem', 'After')
    }, [])
    const ShowMe24_action = React.useCallback(async () => {
        await Editor.Click('menuItem', 'Text Input')
    }, [])
    const ShowMe26_action = React.useCallback(async () => {
        await Editor.Click('propertyField', 'Name')
    }, [])
    const ShowMe25_action = React.useCallback(async () => {
        await Editor.SetValue('propertyField', 'Name', 'Your Name[Enter]')
    }, [])
    const Previous2_action = React.useCallback(async () => {
        await ShowPage(Step1Page)
    }, [])
    const Next2_action = React.useCallback(async () => {
        await ShowPage(Step3Page)
    }, [])

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Heading'), fontSize: 24}, 'Step 2 - Add a box to enter your name'),
        React.createElement(Layout, {path: pathWith('Step1'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Para1')}, 'Make sure the Title item is still selected (orange background), and click on it again if not'),
            React.createElement(Button, {path: pathWith('ShowMe21'), content: 'Show me', appearance: 'link', action: ShowMe21_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step2'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Para1')}, 'Click the Insert menu button'),
            React.createElement(Button, {path: pathWith('ShowMe22'), content: 'Show me', appearance: 'link', action: ShowMe22_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step3'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Para1')}, 'Click After on the left of the menu that appears'),
            React.createElement(Button, {path: pathWith('ShowMe23'), content: 'Show me', appearance: 'link', action: ShowMe23_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step4'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Instruction')}, 'Click Text Input on the right of the menu'),
            React.createElement(Button, {path: pathWith('ShowMe24'), content: 'Show me', appearance: 'link', action: ShowMe24_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step5'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Instruction')}, 'Click the Name box at the top of the Properties panel'),
            React.createElement(Button, {path: pathWith('ShowMe26'), content: 'Show me', appearance: 'link', action: ShowMe26_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step6'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Instruction')}, `Change the Name to the words: 'Your Name'.
You need to press Enter after this change.`),
            React.createElement(Button, {path: pathWith('ShowMe25'), content: 'Show me', appearance: 'link', action: ShowMe25_action}),
    ),
        React.createElement(Layout, {path: pathWith('Buttons'), horizontal: true, wrap: false},
            React.createElement(Button, {path: pathWith('Previous2'), content: 'Previous', appearance: 'outline', action: Previous2_action}),
            React.createElement(Button, {path: pathWith('Next2'), content: 'Next', appearance: 'outline', action: Next2_action}),
    ),
    )
}

// Step3Page.js
function Step3Page(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Layout, Button} = Elemento.components
    const {Editor, Preview} = Elemento
    const app = Elemento.useGetObjectState('app')
    const {ShowPage} = app
    const ShowMe31_action = React.useCallback(async () => {
        await Editor.Show('treeItem', 'Your Name')
    }, [])
    const ShowMe32_action = React.useCallback(async () => {
        await Editor.Click('button', 'Insert')
    }, [])
    const ShowMe33_action = React.useCallback(async () => {
        await Editor.Click('menuItem', 'After')
    }, [])
    const ShowMe34_action = React.useCallback(async () => {
        await Editor.Click('menuItem', 'Text$')
    }, [])
    const ShowMe35_action = React.useCallback(async () => {
        await Editor.Click('propertyTypeButton', 'Content')
    }, [])
    const ShowMe36_action = React.useCallback(async () => {
        await Editor.SetValue('propertyField', 'Content', '\'Hello there, \' + YourName')
    }, [])
    const ShowMe37_action = React.useCallback(async () => {
        await Preview.SetValue('YourName', 'Alexandra')
    }, [])
    const Previous3_action = React.useCallback(async () => {
        await ShowPage(Step2Page)
    }, [])
    const Next3_action = React.useCallback(async () => {
        await ShowPage(FinishPage)
    }, [])

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Heading'), fontSize: 24}, 'Step 3 - Display the message'),
        React.createElement(TextElement, {path: pathWith('Explanation')}, 'In this step, you are going to add a line of text with the Hello greeting.  It uses a simple formula to make the message.'),
        React.createElement(Layout, {path: pathWith('Step1'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Para1')}, 'Make sure the Your Name item is still selected in the Navigator, and click on it again if not'),
            React.createElement(Button, {path: pathWith('ShowMe31'), content: 'Show me', appearance: 'link', action: ShowMe31_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step2'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Para1')}, 'Click the Insert menu button'),
            React.createElement(Button, {path: pathWith('ShowMe32'), content: 'Show me', appearance: 'link', action: ShowMe32_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step3'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Para1')}, 'Click After on the left of the menu that appears'),
            React.createElement(Button, {path: pathWith('ShowMe33'), content: 'Show me', appearance: 'link', action: ShowMe33_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step4'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Instruction')}, 'Click Text on the right of the menu'),
            React.createElement(Button, {path: pathWith('ShowMe34'), content: 'Show me', appearance: 'link', action: ShowMe34_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step5'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Instruction')}, `Click the ABC button to the left of the Content box at the top of the Properties panel.
It should change to FX= (for a Formula).  Don't worry about the red error message.`),
            React.createElement(Button, {path: pathWith('ShowMe35'), content: 'Show me', appearance: 'link', action: ShowMe35_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step6'), horizontal: true, wrap: true},
            React.createElement(TextElement, {path: pathWith('Instruction')}, `Change the Content formula to exactly what is on the next line:
 'Hello there, ' + YourName`),
            React.createElement(Button, {path: pathWith('ShowMe36'), content: 'Show me', appearance: 'link', action: ShowMe36_action}),
    ),
        React.createElement(Layout, {path: pathWith('Step7'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('Instruction')}, `Type something in the Your Name box, and watch the greeting below change as you type
`),
            React.createElement(Button, {path: pathWith('ShowMe37'), content: 'Show me', appearance: 'link', action: ShowMe37_action}),
    ),
        React.createElement(Layout, {path: pathWith('Buttons'), horizontal: true, wrap: false},
            React.createElement(Button, {path: pathWith('Previous3'), content: 'Previous', appearance: 'outline', action: Previous3_action}),
            React.createElement(Button, {path: pathWith('Next3'), content: 'Next', appearance: 'outline', action: Next3_action}),
    ),
    )
}

// FinishPage.js
function FinishPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Layout, Button} = Elemento.components
    const {Editor, Preview} = Elemento
    const app = Elemento.useGetObjectState('app')
    const {ShowPage} = app
    const Previous_action = React.useCallback(async () => {
        await ShowPage(Step3Page)
    }, [])
    const BacktoStartButton_action = React.useCallback(async () => {
        await ShowPage(StartPage)
    }, [])

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), fontSize: 24}, 'You\'ve got there!'),
        React.createElement(TextElement, {path: pathWith('Para1')}, 'Congratulations - you have built your first app with Elemento!  It doesn\'t do very much, but it is a complete working program.'),
        React.createElement(TextElement, {path: pathWith('Para2')}, 'This tutorial was intended to give you a flavour of using Elemento, without too much explanation.  Other tutorials will go deeper into why you were doing each step.'),
        React.createElement(TextElement, {path: pathWith('Para2b')}, 'If you would like to, please play around with any of the elements and properties, just to see what happens.  You can always start afresh just by downloading this tutorial again'),
        React.createElement(TextElement, {path: pathWith('Para3')}, 'More tutorials and examples will appear regularly to help you improve your skills with Elemento. You can also explore the Help to find a detailed explanation of anything you need to know. '),
        React.createElement(TextElement, {path: pathWith('Para4')}, 'Thanks for trying Elemento - enjoy the rest of your journey!'),
        React.createElement(Layout, {path: pathWith('Buttons'), horizontal: true, wrap: false},
            React.createElement(Button, {path: pathWith('Previous'), content: 'Previous', appearance: 'outline', action: Previous_action}),
            React.createElement(Button, {path: pathWith('BacktoStartButton'), content: 'Back to Start', appearance: 'outline', action: BacktoStartButton_action}),
    ),
    )
}

// Tutorial.js
export default function Tutorial(props) {
    const pathWith = name => 'Tutorial' + '.' + name
    const {App} = Elemento.components
    const {Editor, Preview} = Elemento
    const pages = {StartPage, HowtoUsePage, HowElementoWorksPage, WhatYouSeePage, Step1Page, Step2Page, Step3Page, FinishPage}
    const {appContext} = props
    const app = Elemento.useObjectState('app', new App.State({pages, appContext}))
    const Tutorial_startupAction = React.useCallback(async () => {
        await Editor.SetOptions({showBeforeActions: true,
        showWithPointer: true, delay: 250})
    }, [])

    return React.createElement(App, {path: 'Tutorial', maxWidth: '60em', startupAction: Tutorial_startupAction, showWhenProjectOpened: true,},)
}
