import React from 'react';
import {connect} from 'react-redux';
import { removeFeature } from '../actions/Actions';

const AddedFeature = props => {
  console.log(removeFeature);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{props.removeFeature(props.feature)}}>X</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    price: state.price
  }
}

export default connect(mapStateToProps, { removeFeature }) (AddedFeature);
