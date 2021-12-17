
const INITIAL_STATE = {
    quotes: [
        {id: 1, author: "M.K.Atatürk", text: "Our true mentor in life is science!"},
        {id: 2, author: "Albert Einstein", text: "If you can't explain it to a six year old, you don't understand it yourself."}
    ]
}

//* We use reducers to update redux store state
const reducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case 'ADD_QUOTE':
            return {
                ...state,
                quotes: [
                    ...state.quotes,
                    {
                        id: state.quotes.length + 1,
                        author: action.payload.author,
                        text: action.payload.text
                    }
                ]
            }
        default:
            return state;
    }
}

export default reducer;