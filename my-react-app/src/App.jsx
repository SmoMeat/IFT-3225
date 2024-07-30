const title = "Bonjour"
const style = {color: 'red', backgroundColor: 'blue'}
const showTitle = true
const messages = [
  'Bonjour',
  'Bonsoir',
  'Allo'
]

function App() {
    const handleClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      alert("click")
    }

  return <>
    <Title color="blue" id="monid" className="Demo" children="Hello world"/>
    {
      showTitle
        ? <h1 onClick={handleClick} id="title" className="title" style={style}>{title}</h1>
        : <h1>Test</h1>
    }
    <ul>
      {messages.map(m => {<li key={m}>{m}</li>})}
    </ul>
  </>
}

function Title({ color, children, hidden, ...props }) {
  if (hidden) {
    return null
  }

  return <h1 style={{color: color}} {...props}>
    {children}
  </h1>
}


export default App
