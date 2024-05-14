import React from 'react';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';
import GitHubIcon from '@material-ui/icons/GitHub';

const SingleProject = ({ img, title, git, live, detail }) => {
    return (
        <>
            <div className="card-deck">
                <div className="card mb-2">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{detail}</p>
                    </div>
                    <div className="card-footer">
                        <a href={git} target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ color: "black", width: "40px", marginRight: "5px" }} /></a>
                        <a href={live} target="_blank" rel="noopener noreferrer"><OpenInNewSharpIcon style={{ color: "black", width: "40px", marginRight: "5px" }} /></a>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default SingleProject;