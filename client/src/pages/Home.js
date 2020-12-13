import React from 'react';
import BookCard from '../componets/BookCard';

export default function Home() {
    return (
        <div>
            <div className="jumbotron">
        <h1 className="display-4">Google Display</h1>
         <hr className="my-4"></hr>
        <p>
          Click below to see saved books. 
        </p>
        <a className="btn btn-primary btn-lg" href="/save" role="button">
          Save pages
        </a>

      </div>

          <BookCard />


        </div>
    )
}

