import React from 'react';

export default function Success({ count, onclickInviteSend }) {
  return (
    <div className="success-block">
      <img src="../assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>
        Всем
        {' '}
        {count}
        {' '}
        пользователям отправлено приглашение.
      </p>
      <button
        onClick={() => {
          window.location.reload();
        }}
        className="send-invite-btn"
      >
        Назад

      </button>
    </div>
  );
}
