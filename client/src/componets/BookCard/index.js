import React, { useEffect, useState } from "react";
import API from "../../utils/";

export default function BookCard() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    API.getBooks().then((res) => {
      console.log("response from db:", res.data.items);
      setBook(res.data.items);
    }, []);
  });


function viewBook(books) {
    if (books.volumeInfo) {
        return window.location.assign(books.volumeInfo.previewLink)
         }
         
}



  return (
    <div>
        {book.length ? (
            <div> {book.map((books) => (
        <div className="card"key={books.id}>
            <img src={books.volumeInfo.imageLinks.thumbnail} alt={"thumbnail of book cover"}></img>
         
            <h2>{books.volumeInfo.title}</h2>
            <h4>{books.volumeInfo.authors}</h4>
            <p>{books.volumeInfo.description}</p>

          <button  onclick={() => viewBook(books)}className="btn btn-success">
            View Book
          </button>
          <button  className="btn btn-info">
            Save Book
          </button>
     
      </div>
            ))} </div>): (<div></div>)
            }
     
    </div>
  )}
