import PropTypes from 'prop-types';

export default function Button({ item, clickButton }) {
  return (
    <button
      onClick={() => clickButton(item)}
      type="button"
      className="categories-button categories-button--text"
    >
      {item}
    </button>
  );
}

Button.propTypes = {
  item: PropTypes.string.isRequired,
  clickButton: PropTypes.func.isRequired,
};
