import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        .then(res => res.json())
        .then(data => {
          setPosts([...posts, ...data]);
          setLoading(false);
          setTotalPages(data.length);
        })
    };

    fetchPosts();
  }, [page]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Posts from JSONPlaceholder API</h1>
      <div className="row">
        {posts.map((post, i) => (
          <div className="col-md-4" key={i}>
            <div className="card mb-2 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-truncate">{post.title}</h5>
                <p className="card-text"  >{post.body}</p>
              </div>
              <div className="card-footer ">
                <div className="float-end">
                  <a href="#" 
                    className="btn btn-sm btn-primary me-2">Card link</a>
                  <a href="#" className="btn btn-sm btn-danger">Another link</a>
                </div>

              </div>
            </div>
          </div>
        ))}
        {/* load More */}

        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary mb-3"
              onClick={() => setPage(page + 1)}
            >
              Load More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
