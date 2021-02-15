import cx from 'clsx';
import React from 'react';
import Select from '../Select/Select';
import Tag from '../Tag/Tag';
import TagList from '../TagList/TagList';
import Hint from '../Hint/Hint';

const Multiselect = (props) => {
  const {
    className,
    children,
    placeholder,
    onChange,
    error,
    size,
    label,
    ...other
  } = props;

  const options = React.Children.map(children, (c) => ({
    value: c.props.value,
    label: c.props.children,
    selected: Boolean(c.props.selected),
  }));

  const showHintError = error && typeof error !== 'boolean';
  const selectedOptions = options.filter((o) => o.selected);
  const selectedValues = selectedOptions.map((o) => o.value);
  const rootClassnames = cx(
    'multiselect',
    !selectedOptions.length && '-empty',
    error && '-error',
    size === 'medium' && '-medium',
    className
  );

  function toggleSelected(toggleOption) {
    if (onChange) {
      if (toggleOption.selected) {
        onChange(selectedValues.filter((v) => v !== toggleOption.value));
      } else {
        onChange([...selectedValues, toggleOption.value]);
      }
    }
  }

  return (
    <>
      {label && <div className="h6">{label}</div>}
      <div className={rootClassnames} {...other}>
        {selectedOptions.length && (
          <TagList>
            {selectedOptions.map((o) => (
              <Tag key={o.value} onRemove={() => toggleSelected(o)}>
                {o.label}
              </Tag>
            ))}
          </TagList>
        )}

        <Select
          value=""
          onChange={(event) => toggleSelected(
            options.find((o) => o.value === event.target.value)
          )}
        >
          <option value="" disabled>
            {placeholder || ''}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </div>
      {showHintError && <Hint style={{ marginTop: 6 }} error>{error}</Hint>}
    </>
  );
};

export default Multiselect;
