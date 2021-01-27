import cx from 'clsx';
import React, { useState, useEffect, useRef } from 'react';
import Tag from '../Tag/Tag';
import CheckIcon from '../Icons/jsx/CheckIcon';

const Multiselect = (props) => {
  const { className, children, placeholder, onChange, ...other } = props;
  const options = React.Children.map(children, c => ({
    value: c.props.value,
    label: c.props.children,
    selected: Boolean(c.props.selected),
  }));
  const [listOpened, setListOpened] = useState(false);
  const componentRef = useRef(null);
  const listRef = useRef(null);
  const selectedOptions = options.filter(o => o.selected);
  const selectedValues = selectedOptions.map(o => o.value);
  const showPlaceholder = !selectedOptions.length && placeholder;

  function toggleSelected(toggleOption) {
    return function (event) {
      if (event.key && event.key !== 'Enter') return;
      event.stopPropagation();

      if (onChange) {
        if (toggleOption.selected) {
          onChange(selectedValues.filter(v => v !== toggleOption.value));
        } else {
          onChange([...selectedValues, toggleOption.value]);
        }
      }
    };
  }

  function toggleList(event) {
    if (event.key && event.key !== 'Enter') return;
    if (listRef.current && listRef.current.contains(event.target)) return; // do not close list after selection
    setListOpened(!listOpened);
  }

  function outsideClickListener(event) {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setListOpened(false);
    }
  }

  useEffect(() => {
    if (listOpened) {
      document.addEventListener('mousedown', outsideClickListener);
    } else {
      document.removeEventListener('mousedown', outsideClickListener);
    }

    return () => document.removeEventListener('mousedown', outsideClickListener);
  }, [listOpened]);

  return (
    <div
      ref={componentRef}
      className={cx('multiselect', !selectedOptions.length && 'multiselect-empty', className)}
      {...other}
      tabIndex="0"
      role="button"
      onClick={toggleList}
      onKeyPress={toggleList}
    >
      {selectedOptions.map(o => <Tag key={o.value} onRemove={toggleSelected(o)}>{o.label}</Tag>)}

      {showPlaceholder && <div className="multiselect-placeholder">{placeholder}</div>}

      {listOpened && (
        <div className="multiselect-list" ref={listRef}>
          {options.map(o => (
            <div
              key={o.value}
              className={cx('multiselect-item', o.selected && 'multiselect-selected')}
              tabIndex="0"
              role="button"
              onClick={toggleSelected(o)}
              onKeyPress={toggleSelected(o)}
            >
              {o.label}
              {o.selected && <CheckIcon className="multiselect-check" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Multiselect;
