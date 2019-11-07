import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from './actions/Actions'
import AddedFeature from './AddedFeature';


const AddedFeatures = props => {

  const removeFeature = e => {
    e.preventDefault();
    removeFeature(props.item)
  }

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.features
  }
}

export default connect(mapStateToProps, { removeFeature }) (AddedFeatures);
