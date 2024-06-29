'use client'
import { useState, useEffect } from 'react';
import useSWR from 'swr'
import Image from 'next/image';
export default function Index() {

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async () => {
            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            const response = await fetch('http://localhost:8000/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ file: base64String, fileName: file.name }),
            });
            const data = await response.json();
            console.log(data);
        };
    };
    const [im, setIm] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/images')
            .then((res) => res.json())
            .then((data) => {
                setIm(data);

            })
    }, []);

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit">Upload</button>
                </form>

            </div>
            <div className=''>

                {im?.map((i) => {
                    console.log(i)
                    return (
                        <>
                            <ul key={i.id}>
                                <Image src={i.fileName} width={100} height={100} alt='' />
                            </ul>
                        </>
                    )
                })}
            </div>
        </>
    );
}