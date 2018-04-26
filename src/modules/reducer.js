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

      //when the clicked tab is blue
      if(state.arr[co[0]][co[1]] === true){

        // vertically down checking
        let downY = Number(co[0])+1;
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

        if(count>0){
          for(let j = 0; j<count;j++){
            if(state.arr[downY+count][co[1]] === true){
              state.arr[downY+j][co[1]] = true;
            }
          }
        }

        // vertically up checking
        
        let upY = Number(co[0])-1;
        let countUp = 0;
        for(let i = upY; i>0;i--){
          if(state.arr[i][co[1]] === true){ 
            break;
          } else if(state.arr[i][co[1]] === undefined){ 
            break;
          } else if(state.arr[i][co[1]] === false && i>0){ 
            countUp++;
          }
        }
        //console.log(countUp);

        if(countUp>0){
          //console.log(upY+countUp)
          for(let j = 0; j<countUp;j++){
            if(state.arr[upY-countUp][co[1]] === true){
              state.arr[upY-j][co[1]] = true;
            }
          }
        }

        // horizontally right checking
        let rightY = Number(co[1])+1;
        let rCount = 0;
        for(let i = rightY; i<8;i++){
          if(state.arr[co[0]][i] === true){ 
            break;
          } else if(state.arr[co[0]][i] === undefined){ 
            break;
          } else if(state.arr[co[0]][i] === false && i<7){ 
            console.log(co[0]+" "+i)
            rCount++;
          }
        }

        if(rCount>0){
          for(let j = 0; j<rCount;j++){
            if(state.arr[co[0]][rightY+rCount] === true){
              state.arr[co[0]][rightY+j] = true;
            }
          }
        }

        // horizontally left checking
        let leftY = Number(co[1])-1;
        let lCount = 0;
        for(let i = leftY; i>0;i--){
          if(state.arr[co[0]][i] === true){ 
            break;
          } else if(state.arr[co[0]][i] === undefined){ 
            break;
          } else if(state.arr[co[0]][i] === false && i>0){ 
            lCount++;
          }
        }

        if(lCount>0){
          for(let j = 0; j<lCount;j++){
            if(state.arr[co[0]][leftY-lCount] === true){
              state.arr[co[0]][leftY-j] = true;
            }
          }
        }

      }

      // --------------------------------------------------------------- //
      //when the clicked tab is pink
      if(state.arr[co[0]][co[1]] === false){

        // vertically down checking
        let downY = Number(co[0])+1;
        let count = 0;
        for(let i = downY; i<8;i++){
          if(state.arr[i][co[1]] === false){ 
            break;
          } else if(state.arr[i][co[1]] === undefined){ 
            break;
          } else if(state.arr[i][co[1]] === true && i<7){ 
            count++;
          }
        }

        if(count>0){
          for(let j = 0; j<count;j++){
            if(state.arr[downY+count][co[1]] === false){
              state.arr[downY+j][co[1]] = false;
            }
          }
        }

        // vertically up checking
        let upY = Number(co[0])-1;
        let countUp = 0;
        for(let i = upY; i>0;i--){
          if(state.arr[i][co[1]] === false){ 
            break;
          } else if(state.arr[i][co[1]] === undefined){ 
            break;
          } else if(state.arr[i][co[1]] === true && i>0){ 
            countUp++;
          }
        }
        console.log(countUp);

        if(countUp>0){
          console.log(upY+countUp)
          for(let j = 0; j<countUp;j++){
            if(state.arr[upY-countUp][co[1]] === false){
              state.arr[upY-j][co[1]] = false;
            }
          }
        }

        // horizontally right checking
        let rightY = Number(co[1])+1;
        let rCount = 0;
        for(let i = rightY; i<8;i++){
          if(state.arr[co[0]][i] === false){ 
            break;
          } else if(state.arr[co[0]][i] === undefined){ 
            break;
          } else if(state.arr[co[0]][i] === true && i<7){ 
            console.log(co[0]+" "+i)
            rCount++;
          }
        }

        if(rCount>0){
          for(let j = 0; j<rCount;j++){
            if(state.arr[co[0]][rightY+rCount] === false){
              state.arr[co[0]][rightY+j] = false;
            }
          }
        }

        // horizontally left checking
        let leftY = Number(co[1])-1;
        let lCount = 0;
        for(let i = leftY; i>0;i--){
          if(state.arr[co[0]][i] === false){ 
            break;
          } else if(state.arr[co[0]][i] === undefined){ 
            break;
          } else if(state.arr[co[0]][i] === true && i>0){ 
            lCount++;
          }
        }

        if(lCount>0){
          for(let j = 0; j<lCount;j++){
            if(state.arr[co[0]][leftY-lCount] === false){
              state.arr[co[0]][leftY-j] = false;
            }
          }
        }

      }


      let count=0;
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


