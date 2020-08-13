import React from 'react';
import './Palette.css';

const getTextColor = (value) => {
  const darkText = [
    '--color-white',
  ];
  return darkText.includes(value) ? '#000' : '#fff';
};

export default ({ items }) => {
  const withGradients = items.find((item) => item.gradient);

  return (
    <div className={`palette ${withGradients && 'paletteGradients'}`}>
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
            <div className="paletteCell">
              <div className="paletteColor" style={colorStyle}>
                {color[1] ?? ''}
              </div>
              {gradient && (
                <div className="paletteGradient" style={gradientStyle}>
                  <div className="paletteGradientColor">{gradient[1]}</div>
                  <div className="paletteGradientColor">{gradient[2]}</div>
                </div>
              )}
            </div>
            <div className="paletteText">{name}</div>
          </div>
        );
      })}
    </div>
  );
};
