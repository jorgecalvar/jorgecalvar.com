import './Section.css'
import datadogLogo from '../assets/datadog-logo.png'

function Work(): JSX.Element {
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-title">WORK(1)</span>
        <span className="section-subtitle">Professional Experience Manual Page</span>
      </div>
      
      <div className="man-content">
        <div className="man-section">
          <h2 className="man-heading">CURRENT POSITION</h2>
          <div className="work-item">
            <div className="work-header">
              <div className="work-company-wrapper">
                <img 
                  src={datadogLogo} 
                  alt="Datadog" 
                  className="company-logo"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <span className="work-company">Datadog</span>
              </div>
              <span className="work-duration">July 2023 - Present</span>
            </div>
            <p className="work-description">
              Backend engineer in the Software Delivery product org. Working on{' '}
              <a href="https://www.datadoghq.com/product/platform/dora-metrics/" target="_blank" rel="noopener noreferrer" className="product-link">
                DORA Metrics
              </a>
              ,{' '}
              <a href="https://docs.datadoghq.com/deployment_gates/" target="_blank" rel="noopener noreferrer" className="product-link">
                Deployment Gates
              </a>
              , and{' '}
              <a href="https://www.datadoghq.com/product/ci-cd-monitoring/" target="_blank" rel="noopener noreferrer" className="product-link">
                CI Visibility
              </a>
              .
            </p>
          </div>
        </div>

        <div className="man-section">
          <h2 className="man-heading">TECHNICAL STACK</h2>
          <div className="skills-grid">
            <span className="skill-tag">Go</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Kubernetes</span>
            <span className="skill-tag">ElasticSearch</span>
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">Cassandra</span>
            <span className="skill-tag">Kafka</span>
            <span className="skill-tag">gRPC</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">GCP</span>
            <span className="skill-tag">Azure</span>
            <span className="skill-tag">Terraform</span>
            <span className="skill-tag">Bazel</span>
            <span className="skill-tag">Microservices</span>
            <span className="skill-tag">Event-Driven</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
