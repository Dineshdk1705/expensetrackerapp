const initialState = ({
    transactions: [],
})

const Expenses = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    {
                        time: action.time,
                        amount: action.amount,
                        message: action.message,
                        id: action.id,
                    },
                ],
            };
        

        case "REMOVE_TRANSACTION":
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    {
                        time: action.time,
                        amount: "-" + action.amount,
                        message: action.message,
                        id: action.id,
                    },
                ],
            }; 
        
        default:
            return state;    
    }
}

export default Expenses;