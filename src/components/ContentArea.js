import React from 'react'

const ContentArea = (props) => {

    const pageData = props.contentData

    return (
        <div className="return-container">
            <div className="container">
                <div className="section-title">
                    <h2 className="section-title">{ pageData.title.rendered }</h2>
                </div>
                {<div dangerouslySetInnerHTML={{ __html:pageData.content.rendered }} />}
            </div>
        </div>
    )

}

export default ContentArea
