export const HOME_DATA = 'HOME_DATA' 
export const SERMON_DATA = 'SERMON_DATA'
export const DAILY_DEVOTION = 'DAILY_DEVOTION'
export const POSTS_DATA = 'POSTS_DATA'
export const BULLETIN_DATA = 'BULLETIN_DATA'

export const getHomeData = () => async dispatch => {
    
    const response = await fetch('https://brettsartain.org/relevant/wp-json/wp/v2/pages');
    const json = await response.json();

    dispatch({
        type: HOME_DATA,
        payload: json
    })
}

export const getSermons = () => async dispatch => {
    
    const response = await fetch('https://mediaplayer.cloversites.com/players/7afe9a05-bd32-4910-b3c8-bc7a9ff60803?draft=0')
    const json = await response.json()
    
    dispatch({
        type: SERMON_DATA,
        payload: json
    })
}

export const getDailyDevotional = () => async dispatch => {
    
    const response = await fetch('https://utmost.org/wp-json/wp/v2/posts')
    const json = await response.json()
    
    dispatch({
        type: DAILY_DEVOTION,
        payload: json
    })
}

export const getPostsData = () => async dispatch => {

    const response = await fetch('https://brettsartain.org/relevant/wp-json/wp/v2/posts?filter[cat]=8&9')
    const json = await response.json()

    dispatch({
        type: POSTS_DATA,
        payload: json
    })
}

export const getBulletinData = () => async dispatch => {

    const response = await fetch('https://brettsartain.org/relevant/wp-json/tribe/events/v1/events')
    const json = await response.json()

    dispatch({
        type: BULLETIN_DATA,
        payload: json
    })
}

export const getUsers = () => async dispatch => {

    const response = await fetch('/users')
    const json = await response.json()

    dispatch({
        type: BULLETIN_DATA,
        payload: 'json'
    })
}