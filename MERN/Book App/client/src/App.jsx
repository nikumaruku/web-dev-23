import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DisplayBook from './pages/DisplayBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/details/:id" element={<DisplayBook />} />
    </Routes>
  );
}
