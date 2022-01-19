import React from 'react'
import { connect } from 'react-redux'
import '../App.css';

const MyList = (props) => {
    
    return (
        <div className="myList">
            <h3>Transactions:</h3>
            <ul>
                {props.items.map((item, index) =>(
                    <li key={index}>{item.time} - {item.message} - {(item.amount).replace("+","").replace("-","")}</li>
                ))}
            </ul>
        </div>
       
    );
};

const mapStateToProps = (state) => ({
    items: state.Expenses.transactions,

})

export default connect(mapStateToProps)(MyList);
