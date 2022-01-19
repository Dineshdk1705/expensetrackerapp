import React, {useState} from 'react'
import { connect } from 'react-redux';
import { add_transaction } from '../actions';
import { remove_transaction } from '../actions';
import '../App.css';

const AddExpenses = (props) => {
    const [data, setData] = useState("");
    
    
    const addData = (e) => {
        if(data !== ""){
            e.preventDefault();
            let input = data;
            props.dispatch(add_transaction(input));
            setData("");
        }
    }

    const removeData = (e) => {
        if(data !== ""){
            e.preventDefault();
            let input = data;
            props.dispatch(remove_transaction(input));
            setData("");
        }
    }
    
    return (
        <div className="addExpenses">
           
            <input type="number" value={data} onChange={(e) => setData(e.target.value)}/>
            
            <div className="buttons">
                <button onClick={addData}>Add</button>
                <button onClick={removeData}>Remove</button>
            </div>
        </div>
    )
}

export default connect()(AddExpenses);
