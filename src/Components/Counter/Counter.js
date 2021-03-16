import React from "react";
import { connect } from "react-redux";

// Action
import { counterPlus, counterMinus } from "../../Actions/CounterActions";
 
const Counter = ({counter, counterPlus, counterMinus}) => {
    return(
        <div className="qty mt-5">
            <span className="minus bg-dark" onClick = { counterMinus }>-</span>
            <input type="number" className="count" name="qty" value = {counter}></input>
            <span className="plus bg-dark" onClick = { counterPlus }>+</span>
        </div>
    )
}

const mapStateToProps = ({CounterReducer}) => {
    const {counter} = CounterReducer;
    return {counter};
}
const mapDispatchToProps = {
    counterPlus,
    counterMinus
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);