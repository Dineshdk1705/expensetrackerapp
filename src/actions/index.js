
let today = new Date();

export const add_transaction = (amount, message, time) => ({
    type: "ADD_TRANSACTION",
    message: "Add",
    amount,
    id: Math.random(),
    time: (today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()) +" "+ (today.getHours() + ":" + today.getMinutes() + ":" + new Date().getSeconds()),
})

export const remove_transaction = (amount, message, time) => ({
    type: "REMOVE_TRANSACTION",
    amount,
    message: "Remove",
    id: Math.random(),
    time: (today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()) +" "+ (today.getHours() + ":" + today.getMinutes() + ":" + new Date().getSeconds()),
}) 