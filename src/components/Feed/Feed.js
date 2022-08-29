import React, { useEffect, useState } from 'react';
import Card from '../Card';
import Paginate from 'react-paginate';
import styles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';


function Feed() {

  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 9;
  const pageVisited = pageNumber * postsPerPage;
  const displayPosts = posts.slice(pageVisited, pageVisited + postsPerPage).map((post) => {
    return (
      <div class="p-6 md:p-10 rounded-xl bg-white shadow-md shadow-gray-200 transform transition duration-300 hover:scale-110">
      <Card title = {post.title} body = {post.body}/>
      </div>
    );
  });

  const getAllPost = async () => {
    try {
      const { data } = await axios.get(
        `https://gorest.co.in/public/v2/posts`,
        )
        setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPost()
  }, [])

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const pageChange = ({selected}) => {
    setPageNumber(selected);
  }

  return (
    <div class="pt-14">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
      {displayPosts}
      </div>
      <Paginate
        containerClassName={styles.pagination}
        pageCount={pageCount}
        onPageChange={pageChange}
        activeClassName={styles.paginationActive}
      />
      
    </div>
  )
}

export default Feed