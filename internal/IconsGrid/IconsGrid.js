import React from 'react';
import * as icons from '../../src/Icons/jsx';
import styles from './IconsGrid.module.css';

const IconsGrid = (props) => {
  const { filterFunction, ...other } = props;
  const iconKeys = Object.keys(icons).sort().filter(filterFunction);
  return (
    <div className={styles.iconsGrid} {...other}>
      {iconKeys.map((iconKey, index) => {
        const Component = icons[iconKey];
        return <Component key={index} title={iconKey}/>;
      })}
    </div>
  )
}

export default IconsGrid;
