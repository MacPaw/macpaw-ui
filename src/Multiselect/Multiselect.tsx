import cx from 'clsx';
import React, { FC, ReactNode } from 'react';
import Select from '../Select/Select';
import Tag from '../Tag/Tag';
import TagList from '../TagList/TagList';
import Hint from '../Hint/Hint';
import { Error } from '../types';

export interface MultiselectProps {
  className?: string;
  placeholder?: string;
  scale?: 'medium';
  onChange?: (values: string[]) => void;
  error?: Error;
  label?: string | ReactNode;
  [x:string]: any;
}

interface Option {
  value: string;
  label: string;
  selected: boolean;
}

const Multiselect: FC<React.PropsWithChildren<MultiselectProps>> = (props) => {
  const {
    className,
    children,
    placeholder,
    onChange,
    error,
    scale,
    label,
    ...other
  } = props;

  const options: Option[] = React.Children.map(children, (c: any) => ({
    value: String(c.props.value),
    label: String(c.props.children),
    selected: Boolean(c.props.selected),
  }))!;

  if (!options) return null;

  const showHintError = error && typeof error !== 'boolean';
  const selectedOptions = options.filter((o) => o.selected);
  const selectedValues = selectedOptions.map((o) => o.value);
  const rootClassnames = cx(
    'multiselect',
    !selectedOptions.length && '-empty',
    error && '-error',
    scale === 'medium' && '-medium',
    className
  );

  function toggleSelected(toggleOption: Option) {
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
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedOption = options.find((o) => o.value === event.target.value)!;
            toggleSelected(selectedOption);
          }}
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
