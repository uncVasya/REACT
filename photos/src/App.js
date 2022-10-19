import React from 'react';
import './index.scss';
import Collection from './Component/Collection/Collection';

const cats = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];

function App() {
  const [categoryId, setCategoryId] = React.useState(0);
  const [collections, setCollections] = React.useState([]);
  const [isLoadin, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryId ? `category=${categoryId}` : '';

    fetch(`https://634ead2b4af5fdff3a64007d.mockapi.io/Photo-collection?page=${page}&limit=3&${category}`)
      .then((resp) => resp.json())
      .then((json) => {
        setCollections(json);
        console.log(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('JSON не получен');
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((el, index) => (
            <li onClick={() => setCategoryId(index)} className={index === categoryId ? 'active' : ''} key={el.name}>{el.name}</li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {isLoadin ? (
          <h2>Загрузка данных...</h2>
        ) : (
          collections
            .filter((el) => el.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
            .map((el, index) => (
              <Collection
                key={index}
                name={el.name}
                images={el.photos}
              />
            )))}

      </div>
      <ul className="pagination">
        {
          [...Array(5)].map((el, index) => (
            <li onClick={() => setPage((index + 1))} className={page === (index + 1) ? 'active' : ''}>{index + 1}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
