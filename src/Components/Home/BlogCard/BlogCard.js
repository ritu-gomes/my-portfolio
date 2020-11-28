import React from 'react';
import './blogSection.css';

const BlogCard = ({img, title, link}) => {
    return (
        <>
            <div className="card-deck">
                <div className="card mb-3">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <div className="card-footer">
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