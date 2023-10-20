import { subscriber,update,Action } from "./store.js";
const handler = (prev,next)=>{
  console.log(prev ,next)
}
const unSubscribe= subscriber(handler)

/**
 * @type {Action}
 */
const customAction= (prev)=>{
return{
  ...state,
  wind:{
    ...state.wind,
    value:state.value+19
  },
}
}
update(customAction)
unSubscribe()
update(customAction)
update(customAction)
update(customAction)