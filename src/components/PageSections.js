import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsData } from '../actions/simpleAction'
import Spinner from './Spinner'

export const setPictureLeft = (element) => {
    const urlImage = element.better_featured_image.media_details.sizes.medium.source_url
    const sectionStyle = {
        backgroundImage: `url(${urlImage})`
    }   
    return <div className="section-container">
                <div className="section-1" style={ sectionStyle }>
                    <h3>{ element.title.rendered }</h3>
                </div>
                <div className="section-2">
                    { element.content.rendered }
                </div>
            </div>
}

class PageSections extends Component {

    componentDidMount(){
        this.props.getPostsData()
    }

    setPageSections(){
        const postDataByCategory = this.props.postsReducer.result
        return postDataByCategory.map((el, index) => {
            
            const urlImage = el.better_featured_image.media_details.sizes.medium.source_url
            const sectionStyle = {
                backgroundImage: `url(${urlImage})`
            }  

            const titleAndContent = `<h2>${el.title.rendered}</h2> ${el.content.rendered}`
             
            function isEven(index) {
                return index % 2 === 0 
                    ? <div className="section-container">
                            <div className="section-1" style={ sectionStyle } />
                            <div className="section-2" dangerouslySetInnerHTML={{ __html: titleAndContent }} />
                        </div>
                    : <div className="section-container">
                            <div className="section-2" dangerouslySetInnerHTML={{ __html: titleAndContent }} />
                            <div className="section-1" style={ sectionStyle } />
                        </div>
            }

            return isEven(index)
        })
                
    }

    render() {
        return (
            <div className="section-class">
                {
                this.props.postsReducer.result === undefined
                    ? <Spinner />
                    : this.setPageSections()
                }
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    ...state
  })
  
  export default connect(mapStateToProps, { getPostsData })(PageSections);
