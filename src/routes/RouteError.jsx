import { useRouteError, useNavigate } from 'react-router-dom';

const RouteError = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1>Bir hata oluştu</h1>
      <p>{error?.message ?? 'Bilinmeyen hata'}</p>
      <button onClick={() => navigate('/')}>Ana sayfaya dön</button>
    </div>
  );
};

export default RouteError;
