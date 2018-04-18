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
    <p>Count: {props.count}</p>

    
    { <Table>
      { [0,1,2,3,4,5,6,7].map(r=>
        <tr>
          { [0,1,2,3,4,5,6,7].map(c=>
            <Button
              variant="raised"
              size="small"
              id={c+"-"+r}
              onClick={(event)=> { props.arr[c][r] !== undefined ? " " : props.clicked(event.target.id)}}
              color={
                props.arr[c][r] === true ? "primary":props.arr[c][r] === false ? "secondary" : " "
              }
            />
            )}
        </tr>
        )}
      </Table> 
      }
  </div>
);

const mapStateToProps = state => ({
  count: state.reducer.count,
  arr: state.reducer.arr
});

const mapDispatchToProps = (dispatch, arg) => {
  return {
    clicked: (arg) => {dispatch (clicked(arg));},    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
