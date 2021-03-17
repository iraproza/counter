import React from "react";
import { connect } from "react-redux";

// Action
import { counterPlus, counterMinus, counterMinusTwo, counterPlusTwo, counterMultiplyTwo, counterReset } from "../../Actions/CounterActions";
 
const Counter = ({counter, counterPlus, counterMinus, counterMinusTwo, counterPlusTwo, counterMultiplyTwo, counterReset}) => {
    return(
        <div className="qty mt-5">
            <span className="reset bg-dark" onClick = { counterReset }>Reset</span>
            <span className="minus bg-dark two-change" onClick = { counterMinusTwo }>-2</span>
            <span className="minus bg-dark" onClick = { counterMinus }>-</span>
            <input type="number" className="count" name="qty" value = {counter}></input>
            <span className="plus bg-dark" onClick = { counterPlus }>+</span>
            <span className="plus bg-dark two-change" onClick = { counterPlusTwo }>+2</span>
            <span className="multiply plus bg-dark two-change " onClick = { counterMultiplyTwo }>*2</span>
        </div>
    )
}

const mapStateToProps = ({CounterReducer}) => {
    const {counter} = CounterReducer;
    return {counter};
}
const mapDispatchToProps = {
    counterPlus,
    counterMinus, 
    counterMinusTwo,
    counterPlusTwo,
    counterMultiplyTwo,
    counterReset
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);