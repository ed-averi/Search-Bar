
import { useMemo, useRef, useState } from 'react';
import './App.css';

function App(){

const [items, setItems] =useState([ ])
const [query, setQuery] =useState("")

const inputRef= useRef()

const filteredItems= useMemo(()=>{
    return items.filter(item=>{
    return item.toLowerCase().includes(query.toLowerCase())
})
},[items, query])

function onSubmit(e){
    e.preventDefault()// this prevents the form from refreshing the page
    const value = inputRef.current.value // this access the input (line 24)
    if (value === "") return
    setItems(prev => {
        return [... prev, value]
    })
    inputRef.current.value = "" // this deletes the input element value after it's added
}
return (<>
    Search: 
    <input value={query} onChange={e => setQuery(e.target.value)} type="search"/>
    <br/>
    <br/>
    <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text"></input>
        <button type='submit'>Add</button>
    </form>
    <h3>Items:</h3>
    {filteredItems.map(item =>
        <div>{item}</div>)}
    </>

    )
}

export default App;
