import React, { useEffect, useState } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import getBlogs from '../../services/Blogs';

export default function Main() {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getBlogs();
        setBlogs(resp);
      } catch (e) {
        setErrorMessage('Something went wrong. Refresh the page');
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <p className="error">{errorMessage}</p>
      <div className="main">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </>
  );
}
