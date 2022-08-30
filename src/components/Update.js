import React, { useState } from 'react';

function Update({postID}) {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  console.log('ttt', postID);
  
  return (
    <>
           <input type="checkbox" id="my-modal-7" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Update Post</h3>

    <div class="form-control w-full ">
    <label class="label">
    <span class="label-text text-gray-400">Post Title</span>
    </label>
    <input type="text" placeholder="Enter the title" class="input font-bold w-full input-bordered" value={title}
    onChange={(e) => setTitle(e.target.value)}/> 
    <label class="label">
    <span class="label-text text-gray-400">Description</span>
    </label>
    <textarea class="textarea font-bold input-bordered" placeholder="Enter the description"
    value={body}
    onChange={(e) => setBody(e.target.value)}
    ></textarea> 
    </div>
    <div class="modal-action">
      <label for="my-modal-6" class="btn w-9/12">Spill it!</label>
    <label for="my-modal-6" class="btn btn-outline btn-error w-3/12">Close</label>
    </div>      
  </div>
</div>
    </>
  )
}

export default Update