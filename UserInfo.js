import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withGoogleSheets} from 'react-db-google-sheets';

const UserInfo = props => (
  <div>
    {props.db.sheet1.map(data => (<span>{data.id}</span>))}
  </div>
);

UserInfo.propTypes = {
  db: PropTypes.shape({
    sheet1: PropTypes.arrayOf(PropTypes.object)
  })
}

//export default withGoogleSheets('sheet1')(UserInfo);