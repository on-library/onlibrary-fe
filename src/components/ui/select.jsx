import ReactSelect from "react-select";
import PropTypes from "prop-types";

const Select = ({ options, isMulti, onChange }) => {
  return (
    <ReactSelect options={options} isMulti={isMulti} onChange={onChange} />
  );
};

Select.propTypes = {
  isMulti: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Select;
