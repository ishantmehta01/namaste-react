const h22 = React.createElement('h2', {}, "This is H2!!")
const h11 = React.createElement('h1', {style:{color: 'red'}}, ["Hello from React again baby!!", h22])


const parent = React.createElement('div', {className: 'parent'}, [h11, h22])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)