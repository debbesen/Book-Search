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

  return (
    <div>
        {book.length ? (
            <div> {book.map((books) => (
        <div className="card"key={books.id}>
            <img src="..." className="card-img-top" alt="..."></img>
         
            <h2>{books.volumeInfo.title}</h2>
            <h4>{books.volumeInfo.authors}</h4>
            <p>{books.volumeInfo.description}</p>

          <a href="#" className="btn btn-success">
            Home
          </a>
          <a href="#" className="btn btn-info">
            Save
          </a>
     
      </div>
            ))} </div>): (<div></div>)
            }
     
    </div>
  )}
