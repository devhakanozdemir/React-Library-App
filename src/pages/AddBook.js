import React, { useEffect } from "react";
import Header from "../components/Header";
import AddBookForm from "../components/AddBookForm";

const AddBook = (props) => {
  useEffect(() => {
    document.title = "Kitaplik - Kitap Ekle";
  }, []);
  return (
    <div>
      <Header />
      <AddBookForm />
    </div>
  );
};

export default AddBook;
