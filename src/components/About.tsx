import './Section.css'

interface AboutProps {
  onNavigate: (section: 'work' | 'hobbies' | 'social') => void
}

function About({ onNavigate }: AboutProps): JSX.Element {
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-title">ABOUT(1)</span>
        <span className="section-subtitle">Personal Manual Page</span>
      </div>
      
      <div className="man-content">
        <div className="man-section">
          <h2 className="man-heading">NAME</h2>
          <p className="man-text">Jorge Calvar - Software Engineer & Problem Solver</p>
        </div>

        <div className="man-section">
          <h2 className="man-heading">SYNOPSIS</h2>
          <p className="man-text">
            <code className="code-highlight">jorge</code> [--passionate] [--curious] [--driven]
          </p>
        </div>

        <div className="man-section">
          <h2 className="man-heading">DESCRIPTION</h2>
          <p className="man-text">
            A software engineer with a passion for building impactful solutions and 
            continuously learning. Currently working at Datadog, where I've been 
            contributing to innovative projects for the past 2 years.
          </p>
        </div>

        <div className="man-section">
          <h2 className="man-heading">SEE ALSO</h2>
          <p className="man-text">
            <code 
              className="link" 
              onClick={() => onNavigate('work')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onNavigate('work')
                }
              }}
            >
              work
            </code> - View work history<br/>
            <code 
              className="link" 
              onClick={() => onNavigate('hobbies')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onNavigate('hobbies')
                }
              }}
            >
              hobbies
            </code> - Learn about interests<br/>
            <code 
              className="link" 
              onClick={() => onNavigate('social')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onNavigate('social')
                }
              }}
            >
              social
            </code> - Connect on social media
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

