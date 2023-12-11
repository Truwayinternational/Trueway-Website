import React, { useEffect, useRef, useState } from 'react'
import { userInstance } from '../../axiosInstance';
import { IMG_URL } from '../../constent';


function UploadImage({uploaded, setUploaded}) {

    // const [image, setImage] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    function selectFiles() {
        fileInputRef.current.click();
    }
    async function uploadPhoto(image) {
        const formData = new FormData()
            formData.append('image', image);
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        };
        const { data } = await userInstance.post('/upload', formData, config)
        console.log('upload photos', data);
        setUploaded(data.filename);
        // setImage('');
    }
    // useEffect(() => {
    //     // This block of code will run after each render
    //     uploadPhoto(image);
    // }, [image]);

    function addPhoto(file) {
            if (!file.type.startsWith('image/')) {
                alert('Please select only image files.');
                return
            }
            const maxSize = 2 * 1024 * 1024; // 2MB in bytes
            if (file.size > maxSize) {
                alert('File size exceeds the maximum allowed size of 2MB.');
                return
            }
            // setImage(file)
            uploadPhoto(file)
        }
    function onFileSelect(e) {
        const file = e.target.files[0];
        console.log(e.target.files)
        if (file.length === 0) return;
        console.log('file', file);
        addPhoto(file)
    }
    async function removeImage(name) {
        const { data } = await userInstance.delete('/delete-image/' + name);
        console.log('removed', data);
        setUploaded('');
    }
    function onDragOver(e) {
        e.preventDefault();
        setIsDragging(true);
        e.dataTransfer.dropEffect = 'copy';
    }
    function onDragLeave(e) {
        e.preventDefault();
        setIsDragging(false);
    }
    function onDrop(e) {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        addPhoto(file)
    }


  return (
    <>
        <div className="card flex p-4 overflow-hidden rounded-xl shadow-lg">
            { uploaded && 
                <div className="w-full h-full mt-3 relative ">
                    <p className="delete" onClick={() => removeImage(uploaded)}>
                        &times;
                    </p>
                    <img className="rounded-md w-full h-full" src={IMG_URL + uploaded} alt={uploaded} />
                </div>
            }
            { !uploaded &&
    
                <div className="drag-area w-full h-44 " onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                    {isDragging ? (
                        <b>
                            Drop image here
                        </b>
                    ) : (
                        <>
                            <span>
                                Drag and drop photos here
                            </span>
                            <span>OR</span>
                            <b className="select text-indigo-600 mx-2 cursor-pointer duration-75 hover:opacity-60" role="button" onClick={selectFiles}>
                                Browse
                            </b>
                        </>
                    )}
                    <span className='text-center text-gray-500 text-xs'>*Max file size of 2MB</span>
                    <input type="file" name='image' accept='image/*' className='file' ref={fileInputRef} onChange={onFileSelect} />
                </div>
            }   
        </div>
    </>
  )
}

export default UploadImage