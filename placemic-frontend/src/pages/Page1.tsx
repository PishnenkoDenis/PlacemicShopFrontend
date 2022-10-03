import React,{ memo} from 'react'
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counter';
import { Link } from 'react-router-dom';

const Page1 = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <Link to="/page2"> to Page 2:</Link>
    </div>
  )
}

export default memo(Page1);