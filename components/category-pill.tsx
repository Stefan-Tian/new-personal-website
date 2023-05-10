import cx from 'classnames';
import styles from 'styles/modules/category-pill.module.scss';
import { MouseEventHandler } from 'react';

interface CategoryPillProps {
  category: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const CategoryPill = ({ category, active, onClick }: CategoryPillProps) => {
  return (
    <div
      className={cx(styles.root, { [styles.active]: active })}
      onClick={onClick}
    >
      {category}
    </div>
  );
};

export default CategoryPill;
