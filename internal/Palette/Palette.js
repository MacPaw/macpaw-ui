import styles from './Palette.module.css';

const getTextColor = (value) => {
  const darkText = [
    '--color-white',
  ];
  return darkText.includes(value) ? '#000' : '#fff';
}

export default ({ items }) => {
  const withGradients = items.find((item) => item.gradient);

  return (
    <div className={`${styles.palette} ${withGradients && styles.gradients}`}>
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
          }
        }
        return (
          <div key={name}>
            <div className={styles.cell}>
              <div className={styles.color} style={colorStyle}>
                {color[1] ?? ''}
              </div>
              {gradient && (
                <div className={`${styles.gradient}`} style={gradientStyle}>
                  <div className={styles.gradientColor}>{gradient[1]}</div>
                  <div className={styles.gradientColor}>{gradient[2]}</div>
                </div>
              )}
            </div>
            <div className={styles.text}>{name}</div>
          </div>
        );
      })}
    </div>
  );
};