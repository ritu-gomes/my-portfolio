import React from 'react';
import './blogSection.css';

const BlogCard = ({img, title, link}) => {
    return (
        <>
            <div class="card-deck">
                <div class="card mb-3">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                    </div>
                    <div class="card-footer">
                        <button className="btn">
                            <a target="_blank" rel="noopener noreferrer" style={{fontWeight: "500"}} href={link}>Read</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;