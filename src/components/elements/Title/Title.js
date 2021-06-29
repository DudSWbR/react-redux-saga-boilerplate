import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { CtTitle } from './styles';
import isMobile from '~/hooks/isMobile';

export default function Title({
  className,
  as,
  level,
  levelDesktop,
  children,
}) {
  const mobile = isMobile();

  function TitleHasDesktop() {
    if (!mobile && !!levelDesktop) {
      return `title-${levelDesktop}`;
    }
    return `title-${level}`;
  }

  const existLevel = `${className} ${TitleHasDesktop()}` || `${className}`;

  return (
    <CtTitle className={existLevel}>
      <Typography variant={`h${as}`}>{children} </Typography>
    </CtTitle>
  );
}

Title.defaultProps = {
  level: '',
  levelDesktop: '',
  className: '',
  as: '6',
};

Title.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']),
  levelDesktop: PropTypes.oneOf([
    '',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ]),
  className: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
