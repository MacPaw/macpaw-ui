import React from 'react';
import styles from './Palette.module.css';

const getTextColor = (value) => {
  const darkText = [
    '--color-white',
  ];
  return darkText.includes(value) ? '#000' : '#fff';
};

export default ({ items }) => {
  const withGradients = items.find((item) => item.gradient);

  return (
    <div className={`${styles.palette} ${withGradients && styles.paletteGradients}`}>
      {items.map((item) => {
        const { name, color, gradient } = item;
        const colorStyle = {
          backgroundColor: `var(${color[0]})`,
          color: getTextColor([0]),
        };
        let gradientStyle;
        if (gradient) {
          gradientStyle = {
            backgroundImage: `var(${gradient[0]})`,
          };
        }
        return (
          <div key={name}>
            <div className={styles.paletteCell}>
              <div className={styles.paletteColor} style={colorStyle}>
                {color[1] ?? ''}
              </div>
              {gradient && (
                <div className={styles.paletteGradient} style={gradientStyle}>
                  <div className={styles.paletteGradientColor}>{gradient[1]}</div>
                  <div className={styles.paletteGradientColor}>{gradient[2]}</div>
                </div>
              )}
            </div>
            <div className={styles.paletteText}>{name}</div>
          </div>
        );
      })}
    </div>
  );
};
