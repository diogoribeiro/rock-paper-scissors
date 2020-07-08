import PropTypes from 'prop-types';

export const shape = PropTypes.shape({
  icon: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  resultAgainsOponents: PropTypes.object,
  type: PropTypes.string.isRequired,
});

export const shapes = PropTypes.shape({
  shapes: PropTypes.objectOf(shape),
});
