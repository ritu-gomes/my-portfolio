import React from 'react';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import './ProjectCard'

const ProjectCard = ({img,git,live,detail,title}) => {
    return (
        <>
            <div className="card mb-3 p-1">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src={img} className="card-img" alt="..."/>
                    </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{detail}</p>
                                <a href={git} target="_blank" rel="noopener noreferrer"><GitHubIcon style={{color: "black", width: "40px", marginRight: "5px"}}/></a>
                                <a href={live} target="_blank" rel="noopener noreferrer"><OpenInNewSharpIcon style={{color: "black", width: "40px", marginRight: "5px"}}/></a>
                            </div>
                        </div>
                    </div>
                </div>   
        </>
    );
};

export default ProjectCard;