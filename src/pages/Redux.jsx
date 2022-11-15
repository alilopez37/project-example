import {useSelector, useDispatch } from 'react-redux'
import {decrement, increment} from '../redux/reducers/productReducer'


function Redux () {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <span>{count}</span>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <button onClick={()=> dispatch(increment())}>+</button>
        </div>
    )
}

export default Redux;
