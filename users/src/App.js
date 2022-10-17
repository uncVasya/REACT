import React from 'react';
import './index.scss';
import Success from './Compounents/Success/success';
import Users from './Compounents/Users/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((resp) => resp.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        // console.error(err);
        // alert('Ошибка запроса');
      })
      .finally(() => setisLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((el) => el !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onclickInviteSend = () => {
    setSuccess((prev) => !prev);
  };

  return (
    <div className="App">

      {(success && invites.length > 0) ? (
        <Success count={invites.length} onclickInviteSend={onclickInviteSend} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onclickInviteSend={onclickInviteSend}
        />
      )}
    </div>
  );
}

export default App;
