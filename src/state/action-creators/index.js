export const depositMoney =(amount)=> {
return (dispatch)=>{
    //call dispatch
dispatch({
type:'deposit',
payload:amount
})
}
}
export const withdrawMoney=(amount)=>{
   return (dispatch)=>{
      dispatch({
        type:'withdraw',
        payload:amount 
      })
   }  
}

// depositMoney return karega ek function ko jo ki ek function lega dispatch ko
//  lega ki o actual me ek function hai.