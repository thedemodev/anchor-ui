import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconAddFriend = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M10.0788666,3.10558595 C8.94586659,3.10558595 8.02479992,4.22025261 8.02479992,5.58425261 C8.02479992,6.94825261 8.94586659,8.06291928 10.0788666,8.06291928 C11.2103999,8.06291928 12.1299999,6.94825261 12.1299999,5.58425261 C12.1299999,4.22025261 11.2103999,3.10558595 10.0788666,3.10558595 Z M10.0788666,9.52958595 C8.13773326,9.52958595 6.55813326,7.76225261 6.55813326,5.58425261 C6.55813326,3.40625261 8.13773326,1.63891928 10.0788666,1.63891928 C12.0177999,1.63891928 13.5966666,3.40625261 13.5966666,5.58425261 C13.5966666,7.76225261 12.0177999,9.52958595 10.0788666,9.52958595 L10.0788666,9.52958595 Z" /> {/* eslint-disable-line max-len */}
      <path d="M15.4556666,14.1129193 C13.3487999,14.1129193 11.6357333,15.8215859 11.6357333,17.9335859 C11.6357333,20.0382526 13.3487999,21.7469193 15.4556666,21.7469193 C17.5610666,21.7469193 19.2741333,20.0382526 19.2741333,17.9335859 C19.2741333,15.8215859 17.5610666,14.1129193 15.4556666,14.1129193 Z M15.4556666,22.4802526 C12.9447333,22.4802526 10.9023999,20.4415859 10.9023999,17.9335859 C10.9023999,15.4182526 12.9447333,13.3795859 15.4556666,13.3795859 C17.9651333,13.3795859 20.0074666,15.4182526 20.0074666,17.9335859 C20.0074666,20.4415859 17.9651333,22.4802526 15.4556666,22.4802526 L15.4556666,22.4802526 Z" /> {/* eslint-disable-line max-len */}
      <path d="M11.2719999,18.6082526 L4.65293326,18.6082526 C4.26793326,18.6082526 3.94819992,18.3075859 3.92106659,17.9262526 L3.68493326,14.4649193 C3.59913326,13.1889193 4.58693326,11.7222526 5.84459992,11.2602526 C8.53886659,10.2922526 11.4963999,10.2922526 14.1818666,11.2529193 C15.1373999,11.6049193 15.9440666,12.5069193 16.2403333,13.5482526 L14.8293999,13.9515859 C14.6621999,13.3649193 14.1906666,12.8222526 13.6824666,12.6315859 C11.3203999,11.7882526 8.71193326,11.7882526 6.34619992,12.6389193 C5.63853326,12.8955859 5.10979992,13.7975859 5.14866659,14.3695859 L5.33786659,17.1415859 L11.2719999,17.1415859 L11.2719999,18.6082526" /> {/* eslint-disable-line max-len */}
      <path d="M15.4556666,20.6909193 C15.0501333,20.6909193 14.7223333,20.3609193 14.7223333,19.9575859 L14.7223333,15.9022526 C14.7223333,15.4989193 15.0501333,15.1689193 15.4556666,15.1689193 C15.8611999,15.1689193 16.1889999,15.4989193 16.1889999,15.9022526 L16.1889999,19.9575859 C16.1889999,20.3609193 15.8611999,20.6909193 15.4556666,20.6909193" /> {/* eslint-disable-line max-len */}
      <path d="M17.4818666,18.6669193 L13.4287333,18.6669193 C13.0231999,18.6669193 12.6953999,18.3369193 12.6953999,17.9335859 C12.6953999,17.5229193 13.0231999,17.2002526 13.4287333,17.2002526 L17.4818666,17.2002526 C17.8873999,17.2002526 18.2151999,17.5229193 18.2151999,17.9335859 C18.2151999,18.3369193 17.8873999,18.6669193 17.4818666,18.6669193" /> {/* eslint-disable-line max-len */}
    </g>
  </svg>
);

IconAddFriend.propTypes = {
  color: PropTypes.string
};

IconAddFriend.defaultProps = {
  color: colors.icons
};

IconAddFriend.displayName = 'IconAddFriend';

export default IconAddFriend;