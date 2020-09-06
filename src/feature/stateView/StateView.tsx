import React from 'react';
import { connect } from 'react-redux';
import { DispatchTypes } from '../../redux/Actions';
import { State } from '../../redux/State';

const mapStateToProps = (state: State) => ({
    wholeState: state
  });
  
  const mapDispatchToProps = (dispatch: DispatchTypes) => ({
  });
  
  type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const StateView = ({wholeState}: Props) => (
    <pre>
        {JSON.stringify({...wholeState, results: []}, null, '\t')}
    </pre>
);

export default connect(mapStateToProps, mapDispatchToProps)(StateView)