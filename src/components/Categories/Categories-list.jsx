import * as api from 'services/norris.api';

import { useState, useEffect } from 'react';

import Button from 'components/Button';

import Modal from 'components/Modal/Modal';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [oneCategory, SetOneCategory] = useState([]);
  const [randomJoke, setRandomJock] = useState([]);

  useEffect(() => {
    const fetchApiCategories = async () => {
      try {
        const fetchRes = await api.fetchCategories();
        setCategories(fetchRes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiCategories();
  }, []);

  useEffect(() => {
    const fetchApiRandom = async () => {
      try {
        const fetchRes = await api.fetchRandomJoke();
        setRandomJock(fetchRes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiRandom();
  }, []);

  const hundleClick = async name => {
    try {
      const res = await api.fetchCategoriesByName(name);
      SetOneCategory(res);
    } catch (error) {}
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
      <Modal text={oneCategory.value ?? randomJoke.value} />
    </>
  );
}
