import { Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'

import emotion1 from 

// 1. 모든 일기를 조회하는 Home 페이지
// 2. 새로운 일지를 작성하는 New 페이지
// 3. 일기를 상세히 조회하는 Diary 페이지

function App() {
  return (
    <>
    <div>
      <Link to = {"/"}>Home</Link>
      <Link to = {"/new"}>New</Link>
      <Link to = {"/diary"}>Diary</Link>
    </div>
    <Routes>
      <Route path = "/" element= {<Home />} />
      <Route path = "/new" element= {<New />} />
      <Route path = "/diary" element= {<Diary />} />
      <Route path = "/*" element= {<NotFound />} />
    </Routes>
    </>
  )
}

export default App