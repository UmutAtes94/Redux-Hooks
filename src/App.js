import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addQuote } from './action';

const App = () => {

    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    //* get quotes from reduxStore.. We are using useSelector to get data from redux-store
    const quotes = useSelector((state) => state.quotes)
    //* use dispatch to send action
    const dispatch = useDispatch();

    const onClickButton = () => {
        //* call action method into the dispatch method to dispatch action for reducer 
        dispatch(addQuote({text, author}))
        setAuthor("")
        setText("")
    }

    return (
        <div style={{textAlign: 'center', marginTop: "5%"}}>

            <div style={{marginTop: "2%"}}>
                Quote:
                <input
                    type="text"
                    placeholder='type quote here..'
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>

            <div style={{marginTop: "2%"}}>
                Author:
                <input
                    type="text"
                    placeholder='type author here..' 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}/>
            </div>

            <button onClick={onClickButton} style={{marginTop: "1%"}}>Add</button>
            <hr/>

            {
                quotes.map((quote) => {
                    return(
                        <div key={quote.id} style={{marginTop: "1%"}}>
                            {`${quote.text} : ${quote.author}`}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;