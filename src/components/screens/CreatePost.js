import React from 'react';

const CreatePost = () => {
    return (
        <div className="card blue-grey darken-1 create-field">
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Caption"/>
            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Image</span>
                    <input type="file" />
                </div>
                {/* <div className="file-path-wrapper">
                    <input class="file-path validate" type="text" />
                </div> */}
                <br/><br/>
                <button class="btn waves-effect waves-light" type="submit" name="action">Post
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </div>
    );
}

export default CreatePost;