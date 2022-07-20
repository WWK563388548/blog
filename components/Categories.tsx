import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from 'services';
import { Category } from 'pages';

const Categories = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => {
        return (
          <Link href={`/category/${category.slug}`} key={category.slug}>
            <span className="cursor-pointer block pb-3 mmb-3">
              {category.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
