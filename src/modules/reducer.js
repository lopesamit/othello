export const CLICKED = 'CLICKED';
export const CHANGED = 'CHANGED';


const initialState = {
    count: 0,
    value: true,
    isClicked: false,
    arr : []
  };

  export default (state = initialState, action) => {
    
    if(action.arg){
      state.arr.push({[action.arg]:state.value});
    }
    switch (action.type) {
      case CLICKED:
        return {
        ...state,
        isClicked: true,
        value: !state.value,
        count: state.count + 1,
        arr: state.arr
      };

      case CHANGED:
      return {
        //someway change the Board by passing the co-ordinates of the clicked button

      }

      default:
      return state;
  }
};


export const clicked = (arg) => {
  return dispatch => {

    dispatch({
      type: CLICKED,
      arg: arg
    });
    
  };
};

export const changed = (arg) => {
  return dispatch => {

    dispatch({
      type: CHANGED,
      arg: arg
    });
    
  };
};
