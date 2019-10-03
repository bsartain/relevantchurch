import React from 'react'

const Header = (props) =>  {
    
    const pageData = props.headerData

    const urlImage = !pageData.better_featured_image
        ? 'https://gethope.net/wp-content/uploads/2015/06/lightstock_150821_small_joe_woolworth-1140x760.jpg'
        : pageData.better_featured_image.media_details.sizes.large.source_url
    
    const sectionStyle = {
        backgroundImage: `url(${urlImage})`
    }

    return (

        <div className="image-container" style={ sectionStyle }>
            <div key={pageData.id} className="content-container">
                <h4>Relevant Church</h4>
                <hr/>
                <h1>{ pageData.title.rendered }</h1>
                <hr/>
                {
                    window.location.hash === "#/devotional"
                        ? <h4>My Utmost For His Highest by Oswald Sanders</h4>
                        : <h4>Win, Disciple, Send</h4>
                }
            </div>
            <div className="overlay"></div>
        </div>
    )

}

export default Header
