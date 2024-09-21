
import React, { useState } from "react";
import AdminNavbar from './AdminNavbar';
import Default from '../../assets/Default.png'

const AddWork = () => {
    const [fileNames, setFileNames] = useState([]);
    const [filePreviews, setFilePreviews] = useState([]);

    const handleFileChange = (files) => {
        const names = Array.from(files).map(file => file.name);
        const previews = Array.from(files).map(file => URL.createObjectURL(file));

        setFileNames(prevFileNames => [...prevFileNames, ...names]);
        setFilePreviews(prevPreviews => [...prevPreviews, ...previews]);
    };

    const handleFileInputChange = (e) => {
        handleFileChange(e.target.files);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFileChange(e.dataTransfer.files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Uploaded Files:", fileNames);
    };

    return (
        <>
            <AdminNavbar />
            <div className='flex justify-center'>
                <div className='flex-1 flex justify-center items-center my-16'>
                    <form className="w-full max-w-4xl" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6 gap-y-8">
                            {/* Writing Part */}
                            <div className="w-full md:w-1/2 px-3 gap-y-8">
                                <div className="flex flex-wrap -mx-3 mb-6 gap-y-8">
                                    <div className="w-full px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            Art Name
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title" />
                                    </div>
                                </div>

                                
                                <div className="flex flex-wrap -mx-3 mb-6 gap-y-8">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-art-type">
                                            Art Type
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-art-type" type="text" placeholder="Painting" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-6 gap-y-8">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-art-size">
                                            Art Size
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-art-size" type="text" placeholder="120*200" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-6 gap-y-8">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-medium">
                                            Medium
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-medium" type="text" placeholder="Clay" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-6 gap-y-8">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-year">
                                            Year
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-year" type="text" placeholder="19-02-2000" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-6 gap-y-8">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-description">
                                            Description
                                        </label>
                                        <textarea className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-description" placeholder="" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-2 gap-y-8">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-exhibition">
                                            Exhibition
                                        </label>
                                        <div className="relative">
                                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-exhibition">
                                                <option>Select</option>
                                                <option>Running</option>
                                                <option>Not Running</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-location">
                                            Location
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-location" type="text" placeholder="Albuquerque" />
                                    </div>
                                </div>
                                {/* Additional input fields go here... */}
                            </div>

                            {/* Image Part */}
                            <div className="w-full md:w-1/2 px-3 gap-y-8">
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Product Gallery</label>
                                <div
                                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50"
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                >
                                    <i className="fa-solid fa-image text-4xl text-gray-400 mb-4"></i>
                                    <img src={Default} alt="" />
                                    {/* <p className="text-gray-600">Drop your images here, or browse</p>
                                    <p className="text-sm text-gray-500">JPEG, PNG are allowed</p> */}
                                    <input
                                        type="file"
                                        className="hidden"
                                        id="upload-images"
                                        onChange={handleFileInputChange}
                                        multiple
                                    />
                                    <label
                                        htmlFor="upload-images"
                                        className="cursor-pointer text-blue-600 mt-4 inline-block"
                                    >
                                        Browse
                                    </label>
                                </div>

                                {/* Uploaded file details and previews */}
                                {filePreviews.length > 0 && (
                                    <div className="mt-4">
                                        {fileNames.map((name, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 bg-white shadow rounded-md mb-2">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-10 h-10 bg-gray-300 rounded-md">
                                                        <img src={filePreviews[index]} alt={name} className="w-full h-full object-cover rounded-md" />
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-800 font-medium">{name}</p>
                                                        <div className="w-40 bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <i className="fa-solid fa-check text-blue-600"></i>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center gap-5">
                            <button type="submit" className="mt-6 py-2 px-8 border rounded-md border-white text-white hover:bg-white hover:text-black transition-colors">
                                Add
                            </button>
                            <button type="button" className="mt-6 py-2 px-5 border rounded-md border-white text-white hover:bg-white hover:text-black transition-colors">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddWork;






