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
            //console.log(co[0]+" "+i)
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

        // diagonal down checking. click up and it will check for all diagonal blocks downwards to left /
        let countDL = 0;
        for(let i = 0; i<Number(co[1]);i++){
          if(co[0]>=6 || co[1]<2) break;
          if(state.arr[Number(co[0])+i+1][Number(co[1])-i-1] === true){ 
            //console.log((Number(co[0])+i+1)+" " +(Number(co[1])-i-1)+ " break true")
            break;
          } else if(state.arr[Number(co[0])+i+1][Number(co[1])-i-1] === undefined){
            //console.log((Number(co[0])+i+1)+" " +(Number(co[1])-i-1)+ " break undefined")
            break;
          } else if(state.arr[Number(co[0])+i+1][Number(co[1])-i-1] === false && i<7){ 
            countDL++;
          }
        }
        //console.log(countDL);
        if(countDL>0){
          for(let j = 0; j<countDL;j++){
            if(state.arr[Number(co[0])+countDL+1][Number(co[1])-countDL-1] === true){
              state.arr[Number(co[0])+countDL-j][Number(co[1])-countDL+j] = true;
              //console.log((Number(co[0])+countDL-j)+" " +(Number(co[1])-countDL+j)+ " converted")
            }
          }
        }

        // diagonal down checking. click up and it will check for all diagonal blocks downwards to right \
        let countDR = 0;
        for(let i = 1; i<7;i++){
          if(Number(co[1])+i >6 || Number(co[0])+i >6 ){ break; }
          if(state.arr[Number(co[0])+i][Number(co[1])+i] === true){ 
            //console.log((Number(co[0])+i)+" " +(Number(co[1])+i)+ " break true")
            break;
          } else if(state.arr[Number(co[0])+i][Number(co[1])+i] === undefined){
            //console.log((Number(co[0])+i)+" " +(Number(co[1])+i)+ " break undefined")
            break;
          } else if(state.arr[Number(co[0])+i][Number(co[1])+i] === false){
            //console.log((Number(co[0])+i)+" " +(Number(co[1])+i)+ " count")
            countDR++;
          }
        }
        //console.log(countDR);
        if(countDR>0){
          for(let j = 1; j<=countDR;j++){
            if(state.arr[Number(co[0])+countDR+1][Number(co[1])+countDR+1] === true){
              state.arr[Number(co[0])+j][Number(co[1])+j] = true;
              //console.log((Number(co[0])+j)+" " +(Number(co[1])+j)+ " converted")
            }
          }
        }

        // diagonal down checking. click up and it will check for all diagonal blocks upwards to right \
        let countUR = 0;
        for(let i = 1; i<7;i++){
          if(Number(co[0])-i < 1 || Number(co[1])-i >6 ){ console.log("breaked "); break; }
          if(state.arr[Number(co[0])-i][Number(co[1])-i] === true){ 
            //console.log((Number(co[0])-i)+" " +(Number(co[1])-i)+ " break true")
            break;
          } else if(state.arr[Number(co[0])-i][Number(co[1])-i] === undefined){
            //console.log((Number(co[0])-i)+" " +(Number(co[1])-i)+ " break undefined")
            break;
          } else if(state.arr[Number(co[0])-i][Number(co[1])-i] === false){
            //console.log((Number(co[0])-i)+" " +(Number(co[1])-i)+ " count")
            countUR++;
          }
        }
        //console.log(countUR);
        if(countUR>0){
          for(let j = 1; j<=countUR;j++){
            if(state.arr[Number(co[0])-countUR-1][Number(co[1])-countUR-1] === true){
              state.arr[Number(co[0])-j][Number(co[1])-j] = true;
              //console.log((Number(co[0])-j)+" " +(Number(co[1])-j)+ " converted")
            }
          }
        }

        // diagonal down checking. click up and it will check for all diagonal blocks upwards to left /
        let countUL = 0;
        for(let i = 1; i<7;i++){
          if(Number(co[0])-i < 1 || Number(co[1])-i >6 ){ console.log("breaked "); break; }
          if(state.arr[Number(co[0])-i][Number(co[1])+i] === true){ 
            //console.log((Number(co[0])-i)+" " +(Number(co[1])+i)+ " break true")
            break;
          } else if(state.arr[Number(co[0])-i][Number(co[1])+i] === undefined){
            //console.log((Number(co[0])-i)+" " +(Number(co[1])+i)+ " break undefined")
            break;
          } else if(state.arr[Number(co[0])-i][Number(co[1])+i] === false && i<7){ 
            //console.log((Number(co[0])-i)+" " +(Number(co[1])+i)+ " count")
            countUL++;
          }
        }
        //console.log(countUL);
        if(countUL>0){
          for(let j = 1; j<=countUL;j++){
            if(state.arr[Number(co[0])-countUL-1][Number(co[1])+countUL+1] === true){
              state.arr[Number(co[0])-j][Number(co[1])+j] = true;
              //console.log((Number(co[0])+countDL-j)+" " +(Number(co[1])-countDL+j)+ " converted")
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
        //console.log(countUp);

        if(countUp>0){
          //console.log(upY+countUp)
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
            //console.log(co[0]+" "+i)
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

        // diagonal down checking. click up and it will check for all diagonal blocks downwards to left /

        let countDL = 0;
        for(let i = 0; i<Number(co[1]);i++){
          //console.log(" co[0] "+ (Number(co[0])+i) + " co[1] "+ (Number(co[1])-i) )
          if(Number(co[0])+i >=6 || co[1]<2 ){ break; }
          if(state.arr[Number(co[0])+i+1][Number(co[1])-i-1] === false){ 
            //console.log((Number(co[0])+i+1)+" " +(Number(co[1])-i-1)+ " break false")
            break;
          } else if(state.arr[Number(co[0])+i+1][Number(co[1])-i-1] === undefined){
            //console.log((Number(co[0])+i+1)+" " +(Number(co[1])-i-1)+ " break undefined")
            break;
          } else if(state.arr[Number(co[0])+i+1][Number(co[1])-i-1] === true && i<7){ 
            //console.log((Number(co[0])+i+1)+" " +(Number(co[1])-i-1)+ " count")
            countDL++;
          }
        }
        console.log(countDL);
        if(countDL>0){
          for(let j = 1; j<=countDL;j++){
            if(state.arr[Number(co[0])+countDL+1][Number(co[1])-countDL-1] === false){
              state.arr[Number(co[0])+j][Number(co[1])-j] = false;
              //console.log((Number(co[0])+j)+" " +(Number(co[1])-j)+ " converted")
            }
          }
        }


        // diagonal down checking. click up and it will check for all diagonal blocks downwards to right \
        let countDR = 0;
        for(let i = 1; i<7;i++){
          if(Number(co[1])+i >6 || Number(co[0])+i >6 ){ break; }
          if(state.arr[Number(co[0])+i][Number(co[1])+i] === false){ 
            //console.log((Number(co[0])+i)+" " +(Number(co[1])+i)+ " break true")
            break;
          } else if(state.arr[Number(co[0])+i][Number(co[1])+i] === undefined){
            //console.log((Number(co[0])+i)+" " +(Number(co[1])+i)+ " break undefined")
            break;
          } else if(state.arr[Number(co[0])+i][Number(co[1])+i] === true){
            //console.log((Number(co[0])+i)+" " +(Number(co[1])+i)+ " count")
            countDR++;
          }
        }
        //console.log(countDR);
        if(countDR>0){
          for(let j = 1; j<=countDR;j++){
            if(state.arr[Number(co[0])+countDR+1][Number(co[1])+countDR+1] === false){
              state.arr[Number(co[0])+j][Number(co[1])+j] = false;
              //console.log((Number(co[0])+j)+" " +(Number(co[1])+j)+ " converted")
            }
          }
        }


        // diagonal down checking. click up and it will check for all diagonal blocks upwards to right \
        let countUR = 0;
        for(let i = 1; i<7;i++){
          if(Number(co[1])-i >6 || Number(co[0])-i < 1 ){ break; }
          if(state.arr[Number(co[0])-i][Number(co[1])-i] === false){ 
            //console.log((Number(co[0])-i)+" " +(Number(co[1])-i)+ " break true")
            break;
          } else if(state.arr[Number(co[0])-i][Number(co[1])-i] === undefined){
            //console.log((Number(co[0])-i)+" " +(Number(co[1])-i)+ " break undefined")
            break;
          } else if(state.arr[Number(co[0])-i][Number(co[1])-i] === true){
            //console.log((Number(co[0])-i)+" " +(Number(co[1])-i)+ " count")
            countUR++;
          }
        }
        //console.log(countUR);
        if(countUR>0){
          for(let j = 1; j<=countUR;j++){
            if(state.arr[Number(co[0])-countUR-1][Number(co[1])-countUR-1] === false){
              state.arr[Number(co[0])-j][Number(co[1])-j] = false;
              //console.log((Number(co[0])-j)+" " +(Number(co[1])-j)+ " converted")
            }
          }
        }

        // diagonal down checking. click up and it will check for all diagonal blocks upwards to left /
        let countUL = 0;
        for(let i = 1; i<7;i++){
          if(Number(co[0])-i < 1 || Number(co[1])-i >6 ){ console.log("breaked "); break; }
          if(state.arr[Number(co[0])-i][Number(co[1])+i] === false){ 
            //console.log((Number(co[0])-i)+" " +(Number(co[1])+i)+ " break true")
            break;
          } else if(state.arr[Number(co[0])-i][Number(co[1])+i] === undefined){
            //console.log((Number(co[0])-i)+" " +(Number(co[1])+i)+ " break undefined")
            break;
          } else if(state.arr[Number(co[0])-i][Number(co[1])+i] === true && i<7){ 
            //console.log((Number(co[0])-i)+" " +(Number(co[1])+i)+ " count")
            countUL++;
          }
        }
        //console.log(countUL);
        if(countUL>0){
          for(let j = 1; j<=countUL;j++){
            if(state.arr[Number(co[0])-countUL-1][Number(co[1])+countUL+1] === false){
              state.arr[Number(co[0])-j][Number(co[1])+j] = false;
              //console.log((Number(co[0])+countDL-j)+" " +(Number(co[1])-countDL+j)+ " converted")
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


