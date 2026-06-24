import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    // Log error to monitoring service in production
    if (import.meta.env.PROD) {
      console.error('Error Boundary caught an error:', error, errorInfo)
      // In production, you might want to send this to a service like Sentry
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          backgroundColor: 'var(--black)',
          color: 'var(--smoke)',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            fontFamily: 'Bebas Neue',
            color: 'var(--crimson)'
          }}>
            Something went wrong
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2rem',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            We apologize for the inconvenience. An unexpected error has occurred. 
            Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'var(--crimson)',
              color: 'var(--smoke)',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              fontFamily: 'DM Sans',
              fontWeight: '500',
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'var(--crimson2)'
              e.target.style.transform = 'translateX(2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'var(--crimson)'
              e.target.style.transform = 'translateX(0)'
            }}
          >
            Refresh Page
          </button>
          
          {import.meta.env.DEV && this.state.error && (
            <details style={{ 
              marginTop: '2rem', 
              textAlign: 'left',
              maxWidth: '800px',
              fontSize: '0.9rem',
              fontFamily: 'Courier Prime'
            }}>
              <summary style={{ 
                cursor: 'pointer', 
                color: 'var(--gold)',
                marginBottom: '1rem'
              }}>
                Error Details (Development Only)
              </summary>
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                color: 'var(--steel)',
                backgroundColor: 'var(--panel)',
                padding: '1rem',
                borderRadius: '4px',
                overflow: 'auto'
              }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
