import styles from 'styles/modules/background-animation.module.scss';

const COL_COUNT = 12;

const BackgroundAnimation = () => {
  return (
    <div className={styles.root}>
      {Array.from({ length: COL_COUNT }, (_, i) => (
        <div key={i} className={styles.column} />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
