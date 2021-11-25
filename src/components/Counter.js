import React , { useState }from 'react';
import PropTypes from 'prop-types';


const Counter = ({ initialState = 0 }) => {
    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        return new Promise ((resolve,reject) => {
            resolve(setCounter(prev => prev + 1))
        })
       
    };
    const decrement = () => {
        return new Promise ((resolve,reject) => {
            resolve(setCounter(prev => prev - 1))
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        return new Promise ((resolve,reject) => {
            resolve(setCounter(0))
        })
    }


    return (
        <form onSubmit={onSubmit} data-test="component-form">
            <button onClick={decrement} id='decrement' type='button' data-test="decrement-button"> - </button>
            <span data-test="count">{counter}</span>
            <button onClick={increment} id="increment" type='button' data-test="increment-button"> + </button>
            <button type="submit" data-test="submit-button"> Submit </button>
        </form>
    )
}

Counter.propTypes = {
    initialState: PropTypes.number
}

export default React.memo(Counter);