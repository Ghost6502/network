import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/messages/*' element={<Dialogs />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
