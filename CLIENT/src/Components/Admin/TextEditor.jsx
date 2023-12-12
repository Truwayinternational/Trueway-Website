import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function TextEditor({content, setContent}) {

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike','blockquote','link'],        // toggled buttons
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }], 
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
      ];
    const module = {
        toolbar: toolbarOptions,
    }
  return (
    <div>
        <ReactQuill
        className='my-10 flex flex-col '
        placeholder='Write your content here.....'
        modules={module} 
        theme="snow" 
        value={content} 
        onChange={setContent} />
    </div>
  )
}

export default TextEditor