import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import filter from '../../../img/application/filter.svg';
import reset from '../../../img/application/reset.svg';
import search from '../../../img/application/search.svg';

const Filters = () => {
  const applications = useSelector((state) => state.applications);
  const [activeFilter, setActiveFilter] = useState(0);
  const [nameQuizes, setNameQuizes] = useState([]);
  const [cityQuizes, setCityQuizes] = useState([]);

  const handleActiveFilter = (id) => {
    if (activeFilter === id) {
      setActiveFilter(0);
    } else {
      setActiveFilter(id);
    }
  };

  const handleCount = (id) => {
    let count = 0;
    applications.forEach((app) => {
      if (app.quizId === id) {
        count++;
      }
    });
    return count;
  };
  const handleCityCount = (id) => {
    let count = 0;
    applications.forEach((app) => {
      if (app.quizId === id) {
        count++;
      }
    });
    return count;
  };

  const handleNames = () => {
    const uniqueQuizes = applications.reduce((acc, application) => {
      if (!acc.some(quiz => quiz.id === application.quizId)) {
        acc.push({
          name: application.quizName,
          id: application.quizId,
        });
      }
      return acc;
    }, []);
    setNameQuizes(uniqueQuizes);
  };
  const handleCities = () => {
    const uniqueQuizes = applications.reduce((acc, application) => {
      if (!acc.some(quiz => quiz.id === application.quizId)) {
        acc.push({
          name: application.quizName,
          id: application.quizId,
        });
      }
      return acc;
    }, []);
    setCityQuizes(uniqueQuizes);
  };
  useEffect(() => {
    handleNames();
  }, [applications]); 

  return (
    <div className="filters">
      <div onClick={() => handleActiveFilter(1)} className={activeFilter === 1 ? 'active' : ''}>
        Все заявки<img src={filter} alt="#" />
      </div>
      <div id="applic" className={activeFilter === 1 ? 'active' : ''}>
        <div className='active'><button></button>Все заявки<p>65</p></div>
        <div><button></button>Новые<p>32</p></div>
      </div>
      <div onClick={() => handleActiveFilter(2)} className={activeFilter === 2 ? 'active' : ''}>
        Квизы<img src={filter} alt="#" />
      </div>
      <div id="quizes" className={activeFilter === 2 ? 'active' : ''}>
        <div className='input_search'><img src={search} alt="#" /><p>56464</p></div>
        <div className="scroll">
          {nameQuizes.map((quiz, index) => (
            <div key={index}>
              <button></button>{quiz.name}<p>{handleCount(quiz.id)}</p>
            </div>       
          ))}
        </div>
      </div>
      <div onClick={() => handleActiveFilter(3)} className={activeFilter === 3 ? 'active' : ''}>
        Город<img src={filter} alt="#" />
      </div>
      <div id="city" className={activeFilter === 3 ? 'active' : ''}>
        <div className='input_search'><img src={search} alt="#" /><p>56464</p></div>
        <div className="scroll">
          <div>
            <button></button>{cityQuizes.city || 'нет города'}<p></p>
          </div>           
        </div>
      </div>
      <div onClick={() => handleActiveFilter(4)} className={activeFilter === 4 ? 'active' : ''}>
        За все время<img src={filter} alt="#" />
      </div>
      <div id="time" className={activeFilter === 4 ? 'active' : ''}>
        
      </div>
      <p><img src={reset} alt="#" />Сбросить</p>
    </div>
  );
};

export default Filters;