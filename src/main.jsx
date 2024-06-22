import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
import './index.css';
import HomePage from './pages/HomePage/HomePage';
import CreateNotePage from './pages/CreateNotePage/CreateNotePage';
import ArchivedPage from './pages/ArchivedPage/ArchivedPage';
import NoteDetailPage from './pages/NoteDetailPage/NoteDetailPage';
import PageNotFound from './pages/PageNotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archives" element={<ArchivedPage />} />
        <Route path="/notes/new" element={<CreateNotePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
