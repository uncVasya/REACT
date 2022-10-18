import React from 'react';
import './index.scss';
import Collection from './Component/Collection/Collection';

function App() {
  const [collections, setCollections] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://634ead2b4af5fdff3a64007d.mockapi.io/Photo-collection')
      .then((resp) => resp.json())
      .then((json) => {
        setCollections(json);
        console.log(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('JSON не получен');
      });
  }, []);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {collections
          .filter((el) => el.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
          .map((el, index) => (
            <Collection
              key={index}
              name={el.name}
              images={el.photos}
            />
          ))}

      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
