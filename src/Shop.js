import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from "./state/index";
function Shop() {
  const dispatch=useDispatch();
  const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h2> Deposit / Withdraw Money </h2>
        {/* <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.withdrawMoney(200))}}>-</button>
        Add to cart
        <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.depositMoney(400))}}>+</button> */}

{/* Method 2 */}
<button className='btn btn-primary' onClick={()=>{dispatch(withdrawMoney(200))}}>-</button>
        Add to cart
        <button className='btn btn-primary' onClick={()=>{dispatch(depositMoney(400))}}>+</button>
    </div>
  )
}

export default Shop