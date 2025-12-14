import { useState, useEffect, useRef } from 'react'
import './App.css'
import About from './components/About'
import Work from './components/Work'
import Hobbies from './components/Hobbies'
import Social from './components/Social'

type Section = 'about' | 'work' | 'hobbies' | 'social'

interface HistoryItem {
  type: 'input' | 'output'
  text: string
  error?: boolean
}

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('about')
  const [commandHistory, setCommandHistory] = useState<HistoryItem[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [showCursor, setShowCursor] = useState<boolean>(true)
  const sectionContainerRef = useRef<HTMLDivElement>(null)
  const terminalBodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    // Scroll to top of section container when section changes
    if (sectionContainerRef.current && terminalBodyRef.current) {
      const containerTop = sectionContainerRef.current.offsetTop
      terminalBodyRef.current.scrollTo({
        top: containerTop - 20, // Small offset for better visibility
        behavior: 'smooth'
      })
    }
  }, [currentSection])

  const handleCommand = (cmd: string): void => {
    const trimmedCmd = cmd.trim().toLowerCase()
    const newHistory: HistoryItem[] = [...commandHistory, { type: 'input', text: cmd }]
    
    if (trimmedCmd === 'about' || trimmedCmd === 'whoami') {
      setCurrentSection('about')
      newHistory.push({ type: 'output', text: 'Displaying about section...' })
    } else if (trimmedCmd === 'work' || trimmedCmd === 'experience' || trimmedCmd === 'history') {
      setCurrentSection('work')
      newHistory.push({ type: 'output', text: 'Displaying work history...' })
    } else if (trimmedCmd === 'hobbies' || trimmedCmd === 'interests') {
      setCurrentSection('hobbies')
      newHistory.push({ type: 'output', text: 'Displaying hobbies...' })
    } else if (trimmedCmd === 'social' || trimmedCmd === 'links' || trimmedCmd === 'contact') {
      setCurrentSection('social')
      newHistory.push({ type: 'output', text: 'Displaying social links...' })
    } else if (trimmedCmd === 'help' || trimmedCmd === '?') {
      newHistory.push({ 
        type: 'output', 
        text: `Available commands:
  about, whoami    - Show about section
  work, experience  - Show work history
  hobbies          - Show hobbies
  social, links    - Show social media links
  help, ?          - Show this help message
  clear            - Clear terminal`
      })
    } else if (trimmedCmd === 'clear') {
      setCommandHistory([])
      return
    } else if (trimmedCmd === '') {
      return
    } else {
      newHistory.push({ 
        type: 'output', 
        text: `Command not found: ${cmd}. Type 'help' for available commands.`,
        error: true
      })
    }
    
    setCommandHistory(newHistory)
    setInputValue('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleCommand(inputValue)
    }
  }

  return (
    <div className="app">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn btn-close"></span>
            <span className="btn btn-minimize"></span>
            <span className="btn btn-maximize"></span>
          </div>
          <div className="terminal-title">jorgecalvar.com — zsh</div>
        </div>
        
        <div className="terminal-body" ref={terminalBodyRef}>
          <div className="welcome-banner">
            <pre className="ascii-art">
{`╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║      ██╗ ██████╗ ██████╗  ██████╗ ███████╗                   ║
║      ██║██╔═══██╗██╔══██╗██╔════╝ ██╔════╝                   ║
║      ██║██║   ██║██████╔╝██║  ███╗█████╗                     ║
║ ██   ██║██║   ██║██╔══██╗██║   ██║██╔══╝                      ║
║ ╚█████╔╝╚██████╔╝██║  ██║╚██████╔╝███████╗                   ║
║  ╚════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝                   ║
║                                                              ║
║    Welcome to jorgecalvar.com                                 ║
║    Type 'help' for available commands                          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝`
            }</pre>
          </div>

          <div className="command-history">
            {commandHistory.map((item, idx) => (
              <div key={idx} className={`history-item ${item.type}`}>
                {item.type === 'input' && (
                  <span className="prompt">$ </span>
                )}
                <span className={item.error ? 'error-text' : ''}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="section-container" ref={sectionContainerRef}>
            {currentSection === 'about' && <About onNavigate={setCurrentSection} />}
            {currentSection === 'work' && <Work />}
            {currentSection === 'hobbies' && <Hobbies />}
            {currentSection === 'social' && <Social />}
          </div>

          <div className="input-line">
            <span className="prompt">$ </span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="command-input"
              autoFocus
              placeholder="Type a command..."
            />
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>█</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

