import { Suspense } from 'react';
import ErrorBoundary from '../utils/errorBoundry';
import CLoader from '../components/CLoader';

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<CLoader />}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Suspense>
);

export default SuspenseWrapper;
