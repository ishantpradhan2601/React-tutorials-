import React, { useReducer } from 'react'

const UseReducerExample1 = () => {
    const initialCartState = { count: 0 }

    const reducerCart = (state, action) => {
        switch (action.type) {
            case 'addcart':
            
                return { count: state.count + 1 }
            case 'removecart':
                if(state.count===0)
                {
                    return state;
                }
                return { count: state.count - 1 }
            case 'resetcart':
                return initialCartState
            default:
                return state
        }
    }

    const [cartState, dispatch] = useReducer(reducerCart, initialCartState)

    return (
        <div>
            <h2>Cart : {cartState.count}</h2>

            <button onClick={() => dispatch({ type: 'addcart' })}>
                Add to Cart
            </button>

            <button onClick={() => dispatch({ type: 'removecart' })}>
                Remove from Cart
            </button>

            <button onClick={() => dispatch({ type: 'resetcart' })}>
                Reset Cart
            </button>
        </div>
    )
}

export default UseReducerExample1
