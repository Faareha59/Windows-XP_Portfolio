import { useState, useEffect } from 'react';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import TypingGame from './components/TypingGame'; // Import TypingGame component
import Calculator from './components/Calculator'; // Import Calculator component
import Videos from './components/Videos';
import Resume from './components/Resume'; // Import Resume component
import Certificates from './components/Certificates'; // Import Certificates component
import './App.css'; // Ensure the CSS file is imported

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleRedirect = (url) => {
    alert("Welcome to the modern web!");
    window.open(url, '_blank');
  };

  const handleIconClick = (icon) => {
    if (icon.onClick) {
      icon.onClick();
    } else {
      if (!openWindows.find(w => w.id === icon.id)) {
        setOpenWindows([...openWindows, icon]);
      }
      setActiveWindow(icon.id);
    }
  };

  const handleWindowClose = (id) => {
    setOpenWindows(openWindows.filter(window => window.id !== id));
    if (activeWindow === id) {
      setActiveWindow(openWindows.length > 1 ? openWindows[0].id : null);
    }
  };

  const handleWindowClick = (id) => {
    setActiveWindow(id);
  };

  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  };

  const handleStartMenuItemClick = (icon) => {
    handleIconClick(icon);
    setShowStartMenu(false);
  };

  const systemIcons = [
    { 
      id: 'about', 
      title: 'About Me', 
      icon: '/icons/About-me-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <div>
            <p className="mb-2">I'm a Computer Science student at Riphah International University.</p>
            <p>I have experience in C++, PHP, SQL, and shell scripting, and I’ve worked with SAP backend systems during my internship at Riphah HQ.</p>
            <p>My projects include a Windows XP-themed portfolio, a Game Arena with based Game Arena.</p>
            <p>Always eager to learn and explore new technologies.</p>
          </div>
        </div>
      )
    },
    { 
      id: 'my_computer', 
      title: 'My Computer', 
      icon: '/icons/Computer-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">System Information</h2>
          <p className="mb-2">Welcome to my portfolio computer!</p>
          <p className="mb-2">This system is running on React and modern web technologies.</p>
          <p>Feel free to explore and learn more about me and my work.</p>
        </div>
      )
    },
    { 
      id: 'network', 
      title: 'My Network Places', 
      icon: '/icons/Internet-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">My Network</h2>
          <p className="mb-2">Connect with me on various platforms:</p>
          <ul className="list-disc pl-5">
            <li><a href="https://github.com/Faareha59" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn</a></li>
          </ul>
        </div>
      )
    },
    {
      id: 'youtube',
      title: 'YouTube',
      icon: '/public/icons/youtube.png',
      onClick: () => handleRedirect('https://www.youtube.com')
    },
    {
      id: 'google',
      title: 'Google Chrome',
      icon: '/public/icons/google.png',
      onClick: () => handleRedirect('https://www.google.com')
    },
    { 
      id: 'documents',
      title: 'My Documents',
      icon: '/icons/Documents-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">My Documents</h2>
          <p className="mb-2">Here are some of my documents:</p>
          <div className="flex space-x-4">
            <a href="#" onClick={() => handleIconClick({ id: 'resume', title: 'Resume', icon: '/icons/Resume-icon.png', content: <Resume /> })} className="text-blue-500 underline">
              <img src="/icons/Resume-icon.png" alt="Resume" className="w-8 h-8" />
              Resume.pdf
            </a>
           
            <a href="#" onClick={() => handleIconClick({ id: 'videos', title: 'Videos', icon: '/icons/Video-icon.png', content: <Videos /> })} className="text-blue-500 underline">
              <img src="/icons/Video-icon.png" alt="Videos" className="w-8 h-8" />
              Videos
            </a>
          </div>
        </div>
      )
    },
    { 
      id: 'music',
      title: 'Music',
      icon: '/icons/Music-Library-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">My Music</h2>
          <p className="mb-2">Some of my favorite music to code to:</p>
          <ul className="list-disc pl-5">
            <li>
              <button onClick={() => {
                const audio = document.getElementById('California Dreamin');
                if (audio.paused) {
                  audio.play();
                } else {
                  audio.pause();
                }
              }} className="text-blue-500 underline">California Dreamin</button>
              <audio id="California Dreamin" src="/music/The Mamas & The Papas - California Dreamin'.mp3"></audio>
            </li>
          </ul>
        </div>
      )
    },
    { 
      id: 'calculator', 
      title: 'Calculator', 
      icon: '/icons/Calculator-icon.png',
      content: <Calculator /> // Ensure Calculator component is used here
    }
  ];

  const portfolioIcons = [
    {
      id: 'projects',
      title: 'My Projects',
      icon: '/icons/Projects-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">My Projects</h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold">1-Tic Tac Toe Game</h3>
            <p className="mt-2">Tech Stack: C++</p>
            <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/details/projects/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Linkedin Projects</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">2-Flight Reservation System</h3>
            <p className="mt-2">Tech Stack: Object-Oriented Programming (OOP), Java</p>
            <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/details/projects/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Linkedin Projects</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">3-Social Media Marketing</h3>
            <p className="mt-2">Tech Stack: Project Management</p>
            <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/details/projects/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Linkedin Projects</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">4-Student Management System</h3>
            <p className="mt-2">Tech Stack: Java, NetBeans</p>
            <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255/details/projects/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Linkedin Projects</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">5-Art and Heaven</h3>
            <p className="mt-2">Tech Stack: HTML, CSS, JavaScript, PHP, XAMPP</p>
            <a href="https://github.com/Faareha59/Art_and_Heaven" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub Repo</a>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">6-Game Arena-Shell Scripting</h3>
            <p className="mt-2">Tech Stack: Shell Scripting, Git Bash</p>
            <a href="https://github.com/Faareha59/Game_Arena_OS" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub Repo</a>
          </div>
        </div>
      )
    },
    {
      id: 'typing_game',
      title: 'Typing Game',
      icon: '/public/icons/Typing.png',
      content: <TypingGame />
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: '/icons/contacts-icon.png',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <p className="mb-2">
            Email: <a href="mailto:faareharaza59@gmail.com" className="text-blue-500 underline">faareharaza59@gmail.com</a>
          </p>
          <p className="mb-2">
            LinkedIn: <a href="https://www.linkedin.com/in/faareha-raza-08a0b1255" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">www.linkedin.com/in/faareha-raza-08a0b1255</a>
          </p>
          <p className="mb-2">
            GitHub: <a href="https://github.com/Faareha59" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">github.com/Faareha59</a>
          </p>
          
        </div>
      )
    }
  ];

  return (
    <div className="app-container">
      <div className={`relative h-full w-full overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
        <div className={`desktop h-full w-full p-4 overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-900 text-black'}`}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {/* Display only the first 4 icons on the desktop */}
          <div className="flex flex-col items-start">
            {systemIcons.map(icon => (
              <DesktopIcon 
                key={icon.id}
                icon={icon}
                onClick={() => handleIconClick(icon)}
              />
            ))}
          </div>

          {openWindows.map(window => (
            <Window 
              key={window.id}
              window={window}
              isActive={activeWindow === window.id}
              onClose={() => handleWindowClose(window.id)}
              onClick={() => handleWindowClick(window.id)}
            />
          ))}
        </div>

        <Taskbar 
          onStartClick={toggleStartMenu}
          openWindows={openWindows}
          activeWindow={activeWindow}
          onWindowClick={handleWindowClick}
        />

        {showStartMenu && (
          <StartMenu 
            icons={[...systemIcons, ...portfolioIcons]} // Show all icons in the Start menu
            onItemClick={handleStartMenuItemClick}
          />
        )}

        <div className="screen-overlay"></div>
        <div className="crt-effect"></div>
      </div>
    </div>
  );
}

export default App;