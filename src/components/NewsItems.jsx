import React, { Component } from 'react'

export default class NewsItems extends Component {

    render() {

        //  title= this.props;
        //  description=this.props;
        let { title, description, imageurl, newsurl, published, source } = this.props;                     //Destructuring


        return (
            <>
                <div>
                    <div className="card">
                        <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{ left: "89%" }}>
                            {source}
                        </span>
                        <img src={imageurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>

                            <p className="card-text">{description}</p>
                            <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                            <p className="card-text mt-2"><small className="text-muted">Published At {new Date(published).toGMTString()}</small></p>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
