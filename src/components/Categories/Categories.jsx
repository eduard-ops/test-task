import * as api from 'services/norris.api';

import { useState, useEffect } from 'react';

import Button from 'components/Button';

import Modal from 'components/Modal/Modal';

import NotFound from 'components/NotFound';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [oneCategory, SetOneCategory] = useState({});
  const [randomJoke, setRandomJock] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApiCategories = async () => {
      try {
        const fetchRes = await api.fetchCategories();
        if (fetchRes.length === 0) {
          throw new Error();
        }
        setCategories(fetchRes);
      } catch (error) {
        setError(true);
      }
    };
    fetchApiCategories();
  }, []);

  useEffect(() => {
    const fetchApiRandom = async () => {
      const fetchRes = await api.fetchRandomJoke();
      setRandomJock(fetchRes);
    };

    fetchApiRandom();
  }, []);

  const hundleClick = async name => {
    const res = await api.fetchCategoriesByName(name);
    SetOneCategory(res);
  };

  return (
    <>
      {categories.length > 0 && (
        <ul className="categories-list">
          {categories.map((item, index) => {
            return (
              <li className="categories-list__item" key={index}>
                <Button item={item} clickButton={hundleClick} />
              </li>
            );
          })}
        </ul>
      )}
      {error && <NotFound />}
      <Modal text={oneCategory.value ?? randomJoke.value} />
    </>
  );
}
