import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Page404.module.css';

function Page404() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.errorTitle}>404</h1>
      <h2 className={styles.errorSubtitle}>Page Not Found</h2>
      <p className={styles.errorDescription}>
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <button
        className={styles.button}
        onClick={() => {
          navigate('/');
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default Page404;