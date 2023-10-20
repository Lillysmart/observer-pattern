//@ts-check

import { subscriber, update, Action, Notify } from "./store.js";
const handler = (prev, next) => {
  console.log(prev, next);
};
const unSubscribe = subscriber(handler);
/**
 * @type {Notify}
 */
const htmlHandler =(next,prev)=>{
if (prev.wind.value === next.wind.value){
  return
}
const div= document.createElement("div")
div.innerText=next.wind.value.toString()
  document.body.appendChild(div)
}
subscriber(htmlHandler)
/**
 * @type {Action}
 */
const customAction = (state) => {
  return {
    ...state,
    wind: {
      ...state.wind,
      value: state.wind.value + 19,
    },
  };
};

update(customAction);
;update(customAction);
update(customAction);
update(customAction);
