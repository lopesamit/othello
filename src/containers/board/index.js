import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'material-ui'
import { Table } from 'material-ui'

import {
  clicked,

} from '../../modules/reducer';

//the ui of 8*8 board

const Board = props => (
  <div>
    <p>Blue : {props.countT} Pink : {props.countF}</p>
    <p>Next: {
      <Button 
        color={
          props.value === true ? "primary" : "secondary" 
        }
        variant="raised"
        size="small"
      /> 
      }
    </p>

    
    { <Table>
      { [0,1,2,3,4,5,6,7].map(c=>
        <tr>
          { [0,1,2,3,4,5,6,7].map(r=>
            <Button
              variant="raised"
              size="small"
              id={c+"-"+r}
              onClick={(event) => {
                console.log("client board------  "+c + " " + r); 
                //check if one button is pressed again. don't allow
                props.arr[c][r] !== undefined ? " " : (
                    //check if there is a block next to the clicked block, if yes then allow the click.

                    props.clicked(event.target.id)
                  )
                }
              }
              onMouseOver={(event) => ""}

              color={
                props.arr[c][r] === true ? "primary":props.arr[c][r] === false ? "secondary" : " "
              }
            >
            {/* {r + " " + c} */}
            </Button>
            )}
        </tr>
        )}
      </Table> 
      }
  </div>
);

const mapStateToProps = state => ({
  count: state.reducer.count,
  arr: state.reducer.arr,
  value: state.reducer.value,
  moved: state.reducer.moved,
  countT: state.reducer.countT,
  countF: state.reducer.countF,
});

const mapDispatchToProps = (dispatch, arg) => {
  return {
    clicked: (arg) => {dispatch (clicked(arg));},    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
