import { useState } from 'react';
import CategoryPill from 'components/category-pill';
import styles from 'styles/modules/categories.module.scss';

interface CategoriesProps {
  categories: string[];
}

const Categories = ({ categories }: CategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState('Garena');

  const handleCategoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const category = e.currentTarget.innerText;
    setActiveCategory(category);
  };

  return (
    <div className={styles.root}>
      {categories.map((category) => (
        <CategoryPill
          key={category}
          category={category}
          active={activeCategory === category}
          onClick={handleCategoryClick}
        />
      ))}
    </div>
  );
};

export default Categories;
