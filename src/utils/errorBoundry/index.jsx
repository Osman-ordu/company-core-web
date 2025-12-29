import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    this.setState({
      error,
      errorInfo,
    });

  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.handleReset);
      }

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
  fallback: PropTypes.func, 
};

export default ErrorBoundary;


