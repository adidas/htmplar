// caption

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { setMedium, slugify } from './utils';
import Image from './image';

const Caption = props => {
  const { className, children, medium, id, image, imagePlacement, title, valign, align } = props;

  const availableIn = setMedium(medium);
  const imageAlign = imagePlacement || 'top';
  const _id = id === '' ? `htmplar-caption-${slugify(title)}` : id;
  let textAlign;

  switch (imageAlign) {
    case 'left':
      textAlign = 'right';
      break;
    case 'right':
      textAlign = 'left';
      break;
    default:
      textAlign = 'top';
      break;
  }

  return (
    <table
      id={_id}
      className={classNames('htmplar-caption', className, availableIn)}
      align={align}
      cellPadding={0}
      cellSpacing={0}
      border="0"
    >
      <tr>
        <td className={classNames('htmplar-caption-inner')} valign={valign}>
          <table
            align={imageAlign}
            className={classNames('htmplar-caption-image-block')}
            cellSpacing={0}
            cellPadding={0}
            border="0"
          >
            <tr>
              <td className={classNames('htmplar-caption-image-container')} valign={valign}>
                <Image src={image} title={title} />
              </td>
            </tr>
          </table>
          <table
            align={textAlign}
            className={classNames('htmplar-caption-text-block')}
            cellPadding={0}
            cellSpacing={0}
            border="0"
          >
            <tr>
              <td className={classNames('htmplar-caption-content')} valign={valign}>
                {title ?
                  <h2 className={classNames('htmplar-caption-title')}>{title}</h2>
                : ''}
                {children}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

Caption.defaultProps = {
  imagePlacement: 'top',
  align: 'left',
  valign: 'top',
  id: ''
};

Caption.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.string,
  title: PropTypes.string,
  medium: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.symbol,
    PropTypes.array,
    PropTypes.string
  ]),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  imagePlacement: PropTypes.string,
  align: PropTypes.string,
  valign: PropTypes.string
};

export default Caption;
