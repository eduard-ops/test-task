import * as api from 'services/norris.api';

import { useState, useEffect } from 'react';

import Button from 'components/Button';

import Modal from 'components/Modal/Modal';

import NotFound from 'components/NotFound';

import Loader from 'components/Loader';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [oneCategory, SetOneCategory] = useState({});
  const [randomJoke, setRandomJock] = useState({});
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchApiCategories = async () => {
      try {
        setLoader(true);
        const fetchRes = await api.fetchCategories();
        if (fetchRes.length === 0) {
          throw new Error();
        }
        setCategories(fetchRes);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchApiCategories();
  }, []);

  useEffect(() => {
    const fetchApiRandom = async () => {
      const fetchRes = await api.fetchRandomJoke();
      if (fetchRes.value === undefined) {
        setShowModal(false);
        return;
      }

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
      {loader && <Loader />}
      {showModal ? (
        <Modal text={oneCategory.value ?? randomJoke.value} />
      ) : (
        <h2 className="eror-text">Sorry can't find Chuck's quote</h2>
      )}
    </>
  );
}
