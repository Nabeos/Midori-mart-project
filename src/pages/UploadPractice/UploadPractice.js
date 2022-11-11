import React, { useState } from 'react'
import Axios from "axios"
import { TOKEN } from '../../utils/settings/config';

export default function UploadPractice() {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const uploadImage = async (e) => {
        console.log("FILES: ", e.target.files);
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        // data.append('upload_preset', 'darwin');
        setLoading(true);
        const res = Axios({
            url: `http://localhost:5050/api/v1/user-management/users/image/upload?files=${file[0]}`,
            method: 'POST',
            data,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })


        const file = await res.json();
        setImage(file);
        setLoading(false);

    }
    return (
        <div>
            <h1>Upload image</h1>
            <input type="file" name="file" placeholder='Upload an image'
                onChange={uploadImage} />
            {loading ? (<h3>Loading ...</h3>) : (<img src={image} style={{
                width:
                    '300px'
            }} />)}
        </div>
    )
}
