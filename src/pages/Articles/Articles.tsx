import { FC, useEffect, useState } from 'react';
import { api } from '../../constants';
import style from './Articles.module.css';

interface ArticlesType {
  id: string;
  title: string;
}

export const Articles: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [articles, setArticles] = useState<ArticlesType[]>([]);

  useEffect(() => {
    getFetchArticles();
  }, []);

  const getFetchArticles = async () => {
    setLoading(true);
    setArticles([]);
    setError('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const res = await fetch(`${api}/v3/articles`);
      const data: ArticlesType[] = await res.json();
      setArticles(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={style.wrapper}>
        <h2>Articles</h2>
        <div style={{ height: '20px' }}>{loading ? 'Loading...' : ''}</div>
        <button onClick={getFetchArticles} className={style.button}>
          Reload
        </button>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
        {error && <p style={{ color: 'maroon' }}>{error}</p>}
      </div>
    </>
  );
};
