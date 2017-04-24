import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconClose({ color, ...custom }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
      <g id="icon_close" fill={color} transform="translate(3, 3)">
        <path d="M16.02864,3.98806269 L1.08864,3.98806269 C0.69048,3.98806269 0.36864,3.66550269 0.36864,3.26806269 C0.36864,2.87062269 0.69048,2.54806269 1.08864,2.54806269 L16.02864,2.54806269 C16.4268,2.54806269 16.74864,2.87062269 16.74864,3.26806269 C16.74864,3.66550269 16.4268,3.98806269 16.02864,3.98806269" />
        <path d="M10.4148,3.56110269 C10.23624,2.68270269 9.45576,2.04550269 8.55864,2.04550269 C7.66008,2.04550269 6.8796,2.68198269 6.70248,3.56038269 L5.29056,3.27382269 C5.60448,1.72798269 6.97824,0.605502686 8.55864,0.605502686 C10.13688,0.605502686 11.51064,1.72726269 11.82528,3.27310269 L10.4148,3.56110269" />
        <path d="M3.7044,17.8660627 C2.94768,17.8660627 2.31912,17.2526227 2.27304,16.4692627 L1.52784,3.98950269 C1.50336,3.59206269 1.80576,3.25150269 2.20248,3.22774269 C2.61288,3.19534269 2.94048,3.50710269 2.96496,3.90382269 L3.71016,16.3835827 L13.41288,16.4260627 L14.15304,3.90382269 C14.1768,3.50566269 14.5224,3.20614269 14.91336,3.22774269 C15.31152,3.25150269 15.61392,3.59206269 15.59016,3.98950269 L14.84496,16.4692627 C14.79384,17.2540627 14.16672,17.8660627 13.41432,17.8660627 L3.7044,17.8660627" />
        <path d="M5.82624,15.2229427 C5.44824,15.2229427 5.13,14.9270227 5.10912,14.5432627 L4.6296,5.96302269 C4.60728,5.56630269 4.91112,5.22646269 5.30784,5.20414269 C5.7024,5.17678269 6.0444,5.48638269 6.06672,5.88310269 L6.54624,14.4633427 C6.56856,14.8600627 6.26544,15.1999027 5.86728,15.2222227 L5.82624,15.2229427" />
        <path d="M11.28816,15.2229427 L11.24784,15.2222227 C10.85112,15.1999027 10.54728,14.8600627 10.5696,14.4633427 L11.04912,5.88310269 C11.07,5.48566269 11.4192,5.17534269 11.80728,5.20414269 C12.20544,5.22646269 12.50856,5.56630269 12.48624,5.96302269 L12.00672,14.5432627 C11.98584,14.9270227 11.66832,15.2229427 11.28816,15.2229427" />
        <path d="M8.55864,15.2229427 C8.16048,15.2229427 7.83864,14.9011027 7.83864,14.5029427 L7.83864,5.92342269 C7.83864,5.52598269 8.16048,5.20342269 8.55864,5.20342269 C8.9568,5.20342269 9.27864,5.52598269 9.27864,5.92342269 L9.27864,14.5029427 C9.27864,14.9011027 8.9568,15.2229427 8.55864,15.2229427" />
      </g>
    </svg>
  );
}

IconClose.propTypes = {
  color: PropTypes.string
};

IconClose.defaultProps = {
  color: colors.icons
};

IconClose.displayName = 'IconClose';

export default pure(IconClose);