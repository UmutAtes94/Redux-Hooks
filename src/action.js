//* we use action function to send action to payload
export const addQuote = (quote) => {
    console.log(quote)
    return {
        type: "ADD_QUOTE",
        payload: quote
    }
}