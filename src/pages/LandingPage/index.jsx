import React, { useState } from 'react';
import profileIcon from '../../assets/profileIcon.svg'
import imgIcon from '../../assets/imgIcon.svg'
import broadcastIcon from '../../assets/broadcastIcon.svg'
import closeIcon from '../../assets/closeIcon.svg'

export const LandingPage = () => {
    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState(200);
    const [image, setImage] = useState(null);
    const [textFieldFocus, setTextFieldFocus] = useState(false);

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);

        // Calculate remaining character count
        const remainingCount = 200 - newText.length;
        setCharCount(remainingCount);
    };

    const handleImageUpload = (event) => {
        const uploadedImage = event.target.files[0];
        setImage(URL.createObjectURL(uploadedImage));

        //Reset file input value
        event.target.value = '';
    };

    const handleBroadcast = () => {
        console.log('Broadcasting comment:', text);

        setText('');
        setCharCount(200);
        setImage(null);
    };

    return (
        <div className='w-full min-h-screen flex items-center justify-center p-4'>
            <div className='flex sm:w-4/5 md:w-10/12 lg:w-2/6 min-h-[77] bg-white rounded-2xl p-4'>
                <div className="flex flex-col items-center w-100">
                    <img src={profileIcon} alt='profile-image' className='w-16 h-16 rounded-lg' />

                </div>
                <div className="flex flex-col ml-4 w-full">
                    <div className='mt-2'>
                        <span className="text-lg font-bold font-sf-Pro text-[#4A596D]">Tolu</span>
                        <textarea
                            className='w-full outline-none resize-none overflow-y-hidden'
                            value={text}
                            onChange={handleChange}
                            placeholder="What's happening?"
                            onFocus={() => setTextFieldFocus(true)}
                            onBlur={text === '' && (() => setTextFieldFocus(false))}
                            rows={Math.max(2, Math.ceil(text.length / 50))}
                        />
                        {image && (
                            <div className="relative">
                                <img src={image} alt='profile-image' className='w-full h-80 mt-4 rounded-2xl' />
                                <button
                                    className="absolute top-0 right-0 mt-2 mr-2 p-1 rounded-full"
                                    onClick={() => { setImage(null) }}
                                >
                                    <img src={closeIcon} alt='close-icon' />
                                </button>
                            </div>
                        )}

                    </div>
                    {textFieldFocus && (
                        <div className="flex justify-between items-center mt-5">
                            <div className="">
                                <label htmlFor='image-upload' className='cursor-pointer text-[9px] font-medium mt-1 text-slate-600 hover:text-orange-800'>
                                    <img src={imgIcon} alt='image-icon' />
                                </label>
                                <input
                                    type='file'
                                    id='image-upload'
                                    accept='image/*'
                                    className='hidden'
                                    onChange={handleImageUpload}
                                />
                            </div>

                            <div className='flex items-center'>
                                {charCount !== null && (
                                    <span className={`${charCount < 0 ? 'text-[#C65F4C] animate-bounce' : 'text-[#858585]'} text-base`}>{charCount}</span>
                                )}

                                <button
                                    className={` ${charCount < 0 ? 'pointer-events-none bg-gray-300' : 'bg-black'} flex w-32 h-8 ml-4 text-white px-4 rounded-lg items-center justify-between`}
                                    onClick={handleBroadcast}
                                    disabled={charCount < 0}
                                >
                                    Broadcast <img src={broadcastIcon} alt='image-icon' className='animate-pulse' />
                                </button>
                            </div>

                        </div>

                    )}

                </div>
            </div>
        </div>
    );
};
