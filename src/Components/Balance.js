import React from 'react'
import { connect } from 'react-redux'
import '../App.css';

const Balance = (props) => {

    const amounts = props.items.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += parseInt(item)),0);
    
    return (
        <div> 
            <h3>Balance : {total}</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.Expenses.transactions,
})

export default connect(mapStateToProps)(Balance)
