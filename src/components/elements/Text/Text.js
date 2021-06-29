import React from 'react';
import PropTypes from 'prop-types';
import { P, Span, Strong, Anchor } from './styles';

export default function Text({ className, as, level, children, onClick }) {
  const existLevel = `${className} text-${level}` || `${className}`;

  function TextAsTag() {
    switch (as) {
      case 'span':
        return <Span className={existLevel}>{children}</Span>;
      case 'strong':
        return <Strong className={existLevel}>{children}</Strong>;
      case 'anchor':
        return (
          <Anchor className={existLevel} onClick={onClick}>
            {children}
          </Anchor>
        );
      default:
        return <P className={existLevel}>{children}</P>;
    }
  }

  return <>{TextAsTag()}</>;
}

Text.defaultProps = {
  level: '1',
  as: 'p',
  className: '',
  onClick: () => {},
};

Text.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', 'action']),
  className: PropTypes.string,
  as: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
