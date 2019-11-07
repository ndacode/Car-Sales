import React from 'react';
import {connect} from 'react-redux';
import { buyItem } from './actions/Actions';

const AdditionalFeature = props => {

  const buyItem = e => {
    e.preventDefault();
    buyItem(props.item)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={props.buyItem}>Add</button>
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

export default connect(mapStateToProps, { buyItem })(AdditionalFeature);
