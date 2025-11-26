import { Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSyncExternalStore, useMemo } from 'react';

export const HistoryRouter = ({ history, basename, children }) => {
  const subscribe = useMemo(
    () => (callback) => {
      const unsubscribe = history.listen(callback);
      return unsubscribe;
    },
    [history]
  );

  const getSnapshot = useMemo(() => () => history.location, [history]);

  const getServerSnapshot = useMemo(() => () => history.location, [history]);

  const location = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const routerProps = useMemo(
    () => ({
      basename,
      location,
      navigationType: history.action,
      navigator: history,
    }),
    [basename, location, history]
  );

  return <Router {...routerProps}>{children}</Router>;
};

HistoryRouter.propTypes = {
  basename: PropTypes.string,
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
};
