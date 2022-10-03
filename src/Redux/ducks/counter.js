//this is a duck


//intialstate
const initialState={
    count:0
    //name:"", many more ....
    //id: 0
};

//actions
const INCREMENT = 'increment';
const DECREMENT ='decrement';

export const increment =()=>({
    type:INCREMENT
})
export const decrement =()=>({
    type:DECREMENT
})



function mystate(state = initialState,action ){
    switch(action.type)
    {
        case INCREMENT:
            return {...state , count:state.count+1}; // if we dont do ...state then we will overwrite wverythhing with the count so we are spreading all variables and then after that we add this which is overwritten on the presed state 
        case DECREMENT:
            return {...state , count:state.count-1} ;
        default:
            return state; 
    }
}
export default mystate