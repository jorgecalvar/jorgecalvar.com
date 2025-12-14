import './Section.css'

function Hobbies(): JSX.Element {
  return (
    <div className="section">
      <div className="section-header">
        <span className="section-title">HOBBIES(1)</span>
        <span className="section-subtitle">Interests & Activities Manual Page</span>
      </div>
      
      <div className="man-content">
        <div className="man-section">
          <h2 className="man-heading">SPORTS</h2>
          <p className="man-text">
            I like water skiing, going to the gym, and I've recently started running. 
            You can check out my runs on{' '}
            <a 
              href="https://www.strava.com/athletes/22852283" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link"
            >
              Strava
            </a>.
          </p>
        </div>

        <div className="man-section">
          <h2 className="man-heading">READING</h2>
          <p className="man-text">
            I really enjoy reading fantasy books. My favorite series so far are "The Wheel of Time", "The Night Angel Trilogy", and 
            "Kingkiller Chronicle".
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hobbies

