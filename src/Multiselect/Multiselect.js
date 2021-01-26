import cx from 'clsx';
import React, { useState, useEffect, useRef } from 'react';
import Tag from '../Tag/Tag';
import CheckIcon from '../Icons/jsx/CheckIcon';

function childrenToOptions(children) {
  return React.Children.map(children, c => ({
    value: c.props.value,
    label: c.props.children,
    selected: Boolean(c.props.selected),
  }));
}

function getSelectedOptions(options) {
  return options.filter(o => o.selected);
}

const Multiselect = (props) => {
  const { className, children, placeholder, ...other } = props;
  const [options, setOptions] = useState(childrenToOptions(children));
  const [listOpened, setListOpened] = useState(false);
  const componentRef = useRef(null);
  const listRef = useRef(null);
  const selectedOptions = getSelectedOptions(options);
  const showPlaceholder = !selectedOptions.length && placeholder;

  function toggleSelected(toggleOption) {
    return function (event) {
      if (event.key && event.key !== 'Enter') return;
      event.stopPropagation();
      setOptions(options.map((option) => {
        if (option.value !== toggleOption.value) return option;
        option.selected = !option.selected;
        return option;
      }));
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
