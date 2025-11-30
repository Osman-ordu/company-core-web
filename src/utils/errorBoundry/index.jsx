import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ErrorBoundary Component - React 19 Best Practice
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Update state with error details
    this.setState({
      error,
      errorInfo,
    });

    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.handleReset);
      }

      // Default fallback UI
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h2>Bir hata oluştu</h2>
          <p>{this.state.error?.message || 'Beklenmeyen bir hata meydana geldi.'}</p>
          {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
            <details style={{ marginTop: '1rem', textAlign: 'left', maxWidth: '600px' }}>
              <summary>Hata Detayları (Sadece Geliştirme Modu)</summary>
              <pre style={{ overflow: 'auto', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
                {this.state.error?.toString()}
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={this.handleReset}
              style={{
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: '4px',
                background: '#fff',
              }}
            >
              Tekrar Dene
            </button>
            <button
              onClick={this.handleReload}
              style={{
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: '4px',
                background: '#fff',
              }}
            >
              Sayfayı Yenile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.func, // (error, resetError) => ReactNode
};

export default ErrorBoundary;


