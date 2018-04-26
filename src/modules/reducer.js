export const CLICKED = 'CLICKED';

const x = new Array(8);
for (var i = 0; i < 8; i++) {
  x[i] = new Array(8);
}
    x[3][3] = true;
    x[4][4] = true;
    x[3][4] = false;
    x[4][3] = false;

const initialState = {
    count: 0,
    value: true,
    isClicked: false,
    arr : x,
  };

  export default (state = initialState, action) => {

    if(action.arg){
      var co = action.arg.split('-')
      state.arr[co[0]][co[1]] = state.value;

      if(state.arr[co[0]][co[1]] === true){
        var downY = Number(co[0])+1;
        let count = 0;
        for(let i = downY; i<8;i++){
          if(state.arr[i][co[1]] === true){ 
            break;
          } else if(state.arr[i][co[1]] === undefined){ 
            break;
          } else if(state.arr[i][co[1]] === false && i<7){ 
            count++;
          }
        }
        console.log(count);

        if(count>0){
          console.log(downY+count)
          for(let j = 0; j<count;j++){
            if(state.arr[downY+count][co[1]] === true){
              state.arr[downY+j][co[1]]=true;
            }
          }
        }
      }

      // if(state.arr[co[0]][co[1]] === true){

      //   //any pink blocks between blue blocks downwards will turn blue
      //   var downY = Number(co[0])+1;
      //   for(var i = downY ; i <= 8-downY ; i++ ){
      //     //if pink is below blue, both will be blue
      //     if(state.arr[i][co[1]] === undefined){ 
      //       break; 
      //     } else if(state.arr[i][co[1]] === true) {
      //       break; 
      //     } else if(state.arr[i][co[1]] === false) {

      //       for(let j = i+1; j<8; j++){

      //         if(state.arr[j][co[1]] === true){
      //           state.arr[j-1][co[1]] = true;
      //           console.log(j+"  hi")
      //         }
      //         else break;
      //       }


      //       // state.arr[i][co[1]] = true;
      //       // console.log(i+" "+co[1]+" in  " + state.arr[i][co[1]])
            
      //       if(state.arr[i+1][co[1]] === undefined){
      //         console.log(i+" "+co[1])
      //         for(let j = i; j> co[0]; j--){
      //           state.arr[j][co[1]] = false;
      //           console.log(j+" "+co[1] + " converting false")
      //         }
      //         break;
      //       }

            
      //     }
      //   }

        

      // }

      if(state.arr[co[0]][co[1]] === false){
        //console.log("false");
      }


      // Important code

      // var downY = Number(co[0])+1;
      // var count = 0;

      // for(var i = downY ; i <= 8-downY ; i++ ){

      //   //if pink is below blue, both will be blue
      //   if(state.arr[i][co[1]] === false){
      //     //if(state.arr[i][co[1]] === undefined){ console.log(i); break; }
      //     state.arr[i][co[1]] = true;
      //     count++;
      //     console.log(i+" in  " + state.arr[i][co[1]])
      //     console.log("count "+count)

      //     break;
  
      //   }


      //   //if blue is below pink both will be pink
      //   if(state.arr[i][co[1]] === true){
      //     state.arr[i][co[1]] = false;
      //     console.log(i+" in  " + state.arr[co[0]][co[1]])

      //     break
  
      //   }


      // }


      var count=0;
      if(state.arr.forEach(c=>{
        c.forEach(r=>{
          if(r||c){count++}
        })
      }));
      if(count===64){
        console.log("game over");
        alert("Game Over");
      }
       

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


