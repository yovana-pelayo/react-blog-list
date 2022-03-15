import React, { useEffect, useState } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import getBlogs from '../../services/Blogs';
import './Main.css';

export default function Main() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <span className="loader"></span>;
  return (
    <>
      <div className="main">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </>
  );
}
