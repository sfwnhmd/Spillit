import React, { useEffect, useState } from 'react';
import Card from '../Card';
import Paginate from 'react-paginate';
import styles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';


function Feed() {

  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const config = {
    headers: { Authorization: `Bearer da0da731188d4f79d8c265f5c334bc83fece16bcbdc8193f9072d3955044b46e` }
}; 
  
  const getAllPost = () => {
    try {
      axios.get(
        `https://gorest.co.in/public/v2/posts?page=1&limit=9`,
        config,).then(function (res){
          setPosts(res.data)
          console.log(res.headers['x-pagination-page'])
          console.log(res.headers['x-pagination-pages'])
          console.log(res.headers['x-pagination-total']/10)
          setPageNumber(res.headers['x-pagination-pages'])
        })
        console.log(pageNumber)
      } catch (error) {
        console.log(error)
      }
    }

    const loadPost = async (currentPage) => {
      try {
        const { data } = await axios.get(
          `https://gorest.co.in/public/v2/posts?page=${currentPage}`,
          config,
          )
          setPosts(data)
        } catch (error) {
          console.log(error)
        }
      }
    

  useEffect(() => {
    getAllPost()
  }, [])

  const pageCount = Math.ceil(pageNumber);

  const pageChange = async ({selected}) => {
    
    let currentPage = selected + 1;
 
    loadPost(currentPage);


  }

  return (
    <div class="pt-14">
      <Card posts={posts}/>
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