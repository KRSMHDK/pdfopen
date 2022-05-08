import './App.css';
import Ebook from './Components/Ebook';
import Layout from './Components/Layout';
import EbookList from './Components/EbookList';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<EbookList />} />
          <Route path="ebook" element={<Ebook />}>
            <Route path=":ebookid" element={<Ebook />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
