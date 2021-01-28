import cx from 'clsx';
import React from 'react';
import Select from '../Select/Select';
import Tag from '../Tag/Tag';

const Multiselect = (props) => {
  const { className, children, placeholder, onChange, ...other } = props;
  const options = React.Children.map(children, c => ({
    value: c.props.value,
    label: c.props.children,
    selected: Boolean(c.props.selected),
  }));
  const selectedOptions = options.filter(o => o.selected);
  const selectedValues = selectedOptions.map(o => o.value);

  function toggleSelected(toggleOption) {
    if (onChange) {
      if (toggleOption.selected) {
        onChange(selectedValues.filter(v => v !== toggleOption.value));
      } else {
        onChange([...selectedValues, toggleOption.value]);
      }
    }
  }

  return (
    <div
      className={cx('multiselect', !selectedOptions.length && 'multiselect-empty', className)}
      {...other}
    >
      {selectedOptions.map(o => <Tag key={o.value} onRemove={() => toggleSelected(o)}>{o.label}</Tag>)}

      <Select value="" onChange={event => toggleSelected(options.find(o => o.value === event.target.value))}>
        <option value="" disabled>{placeholder || ''}</option>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </Select>
    </div>
  );
};

export default Multiselect;
