export const CLICKED = 'CLICKED';
export const CHANGED = 'CHANGED';

const x = new Array(8);
for (var i = 0; i < 8; i++) {
  x[i] = new Array(8);
}

const initialState = {
    count: 0,
    value: true,
    isClicked: false,
    arr : x
  };

  export default (state = initialState, action) => {
    
    if(action.arg){
      state.arr[action.arg.split('-')[0]][action.arg.split('-')[1]] = state.value;
      console.log(state.arr)
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
