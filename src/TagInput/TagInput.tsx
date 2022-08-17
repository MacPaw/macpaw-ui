/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  ReactNode,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
  useEffect,
} from 'react';
import cx from 'clsx';
import Hint from '../Hint/Hint';
import Tag, { TagProps } from '../Tag/Tag';
import TagList from '../TagList/TagList';
import { Error } from '../types';
import { uniqId } from '../helpers';

export interface TagInputListItem {
  id: string;
  value: string;
  color?: 'primary' | 'secondary' | 'warning';
}

export interface TagInput {
  id: string;
  tags: TagInputListItem[];
  label?: string | ReactNode;
  error?: Error;
  className?: string;
  placeholder?: string;
  clipboardSeparator?: string | RegExp;
  addKeyCodes?: string[];
  removeKeyCodes?: string[];
  maxHeight?: string | number;
  isReadOnly?: boolean;
  disabled?: boolean;
  isUnique?: boolean;
  isHandleClipboard?: boolean;
  isHandleOnBlur?: boolean;
  onChange: (nextTags: TagInputListItem[]) => void;
  onValueChange?: (value: string) => void;
  validate?: (tag: string) => boolean | Promise<boolean>;
  formatter?: (value: string) => ReactNode;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const defaultValidation = (tag: string) => Boolean(tag.trim());

const DEFAULT_ADD_KEY_CODES = ['Enter'];

const TagInput: React.FC<React.PropsWithChildren<TagInput>> = ({
  id,
  tags,
  label,
  error,
  className,
  placeholder,
  clipboardSeparator = '',
  addKeyCodes = DEFAULT_ADD_KEY_CODES,
  removeKeyCodes = [],
  maxHeight,
  isReadOnly,
  isHandleOnBlur,
  disabled,
  isUnique,
  isHandleClipboard,
  onChange,
  onValueChange,
  validate = defaultValidation,
  formatter,
  inputValue: value = '',
  setInputValue: setValue,
}) => {
  const showError = error && typeof error !== 'boolean';

  const tagInputClassNames = cx('tag-input', className, {
    '-readonly': isReadOnly,
    '-error': showError,
    '-disabled': disabled,
  });

  const checkIsUniqueTag = (tag: string, list: TagInputListItem[]) => {
    if (!isUnique) return true;

    return !list.map(({ value: tagValue }) => tagValue.toLowerCase()).includes(tag.toLowerCase());
  };

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue((target as HTMLInputElement).value);
  };

  const handleRemoveTag = (tagId: string) => {
    onChange(tags.filter(({ id }) => tagId !== id));
  };

  const handleAddTag = async () => {
    const isValid = (await validate?.(value)) ?? true;
    const isUniqueTag = checkIsUniqueTag(value, tags);

    if (!isValid) return;

    setValue('');

    if (!isUniqueTag) return;

    onChange([...tags, {
      id: uniqId(),
      value,
    }]);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    const isAddEvent = addKeyCodes.includes(event.code);
    const isRemoveEvent = removeKeyCodes.includes(event.code) && !value && tags.length;

    if (isAddEvent) {
      event.preventDefault();
      event.stopPropagation();
      await handleAddTag();
    } else if (isRemoveEvent) {
      event.preventDefault();
      event.stopPropagation();
      handleRemoveTag(tags[tags.length - 1].id);
    }
  };

  const handleBlur = async () => {
    if (value && isHandleOnBlur) await handleAddTag();
  };

  const handlePaste = async (event: ClipboardEvent<HTMLInputElement>) => {
    if (!isHandleClipboard) return;

    const clipboardItems = event.clipboardData
      .getData('text')
      .split(clipboardSeparator)
      .map((value: string) => value.trim())
      .filter(Boolean);

    if (clipboardItems.length === 1) return;

    event.preventDefault();

    const clipboardTagValidationPromises = clipboardItems.map((tag: string) => validate?.(tag) ?? true);
    const clipboardTagValidationArray = await Promise.all(clipboardTagValidationPromises);

    const clipboardTags = clipboardItems.reduce(
      (acc: TagInputListItem[], tag: string, index: number): TagInputListItem[] => {
        const isValid = clipboardTagValidationArray[index];
        const isUniqueTag = checkIsUniqueTag(tag, acc);

        if (!isUniqueTag) return acc;

        return [
          ...acc,
          {
            id: uniqId(),
            value: tag,
            ...(!isValid ? { color: 'warning' } : {}),
          },
        ];
      },
      tags,
    );

    onChange(clipboardTags);
  };

  useEffect(() => {
    onValueChange?.(value);
  }, [value]);

  return (
    <label className={tagInputClassNames} htmlFor={id}>
      {!!label && <span className="tag-input-label h6">{label}</span>}
      <TagList as="span" style={{ maxHeight }}>
        {tags.map(({ id, value, color }) => {
          const tagProps: TagProps = {
            as: 'span',
            color,
            borderRadius: 24,
            ...(!isReadOnly && { onRemove: () => handleRemoveTag(id) }),
          };

          return (<Tag key={id} {...tagProps}>{formatter?.(value) ?? value}</Tag>);
        }
        )}
        {!isReadOnly && (
          <input
            type="text"
            id={id}
            className=""
            value={value}
            placeholder={placeholder}
            onPaste={handlePaste}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        )}
      </TagList>
      {showError && (<Hint style={{ marginTop: 6 }} error>{error}</Hint>)}
    </label>
  );
};

export default TagInput;
