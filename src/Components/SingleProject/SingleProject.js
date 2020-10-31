import React from 'react';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';
import GitHubIcon from '@material-ui/icons/GitHub';

const SingleProject = ({ img, title, git, live, detail }) => {
    return (
        <>
            <div class="card-deck">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{detail}</p>
                    </div>
                    <div class="card-footer">
                        <a href={git} target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ color: "black", width: "40px", marginRight: "5px" }} /></a>
                        <a href={live} target="_blank" rel="noopener noreferrer"><OpenInNewSharpIcon style={{ color: "black", width: "40px", marginRight: "5px" }} /></a>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default SingleProject;