import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>__itsvikash</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
                </div>
                <div className="card-content">
                    <i className="material-icons">favorite</i>
                    <i className="material-icons">comment</i>
                    <i className="material-icons">send</i>
                    <h6>title</h6>
                    <p>This is amazing post</p>
                    <input type="text" placeholder="add a comment" /> 
                </div>
            </div>
        </div>
    );
}

export default Home;