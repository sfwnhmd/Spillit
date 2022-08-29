import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Create() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  
  const config = {
    headers: { Authorization: `Bearer da0da731188d4f79d8c265f5c334bc83fece16bcbdc8193f9072d3955044b46e` }
};

  const createPost = e => {
    e.preventDefault();
    axios.post(
      `https://gorest.co.in/public/v2/users/4783/posts`,{
      title,
      body,
    }, config,).then(res => {
      console.log('Response: ', res);
      if(res.status === 201){
        toast("✨ Success creating post");
      }
    })
    .catch(err => console.log(err));
  }
  return (
    <>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Create New Post</h3>

    <p class="py-4 text-sm">Description here</p>
    <div class="form-control w-full ">
    <label class="label">
    <span class="label-text text-gray-400">Post Title</span>
    </label>
    <input type="text" placeholder="Enter the title" class="input font-bold w-full" value={title}
    onChange={(e) => setTitle(e.target.value)}/> 
    <label class="label">
    <span class="label-text text-gray-400">Description</span>
    </label>
    <textarea class="textarea font-bold" placeholder="Enter the description"
    value={body}
    onChange={(e) => setBody(e.target.value)}
    ></textarea> 
    </div>
    <div class="modal-action">
      <label for="my-modal-6" class="btn w-9/12" onClick={createPost}>Spill it!</label>
    <label for="my-modal-6" class="btn btn-outline btn-error w-3/12">Close</label>
    </div>      
  </div>
</div>
<ToastContainer />
    </>
  )
}

export default Create