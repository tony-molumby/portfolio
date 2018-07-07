import { RECEIVE_MEETINGS, SET_TOTAL_MEETINGS } from './types'
import { isFetching } from './fetchingActions'
import { setTotalPages, setCurrentPage } from './pageActions'
import { setDisplay, scrollToDisplay } from './routerActions'
import { setWarning } from './warningActions'

//receive meetings is also used by paging actions
export function receiveMeetings(meetings){
    return {
        type: RECEIVE_MEETINGS,
        payload: meetings
    }
}

function setTotalMeetings(count){
    return {
        type: SET_TOTAL_MEETINGS,
        payload: count
    }
}

export function fetchMeetings(query){
    return (dispatch) => {
        dispatch(isFetching(true))
        fetch('api/search', { 
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(query)
        })
        .then(res => res.json(),
            error => {
                return {
                    success: false,
                    message: 'Error getting list of meetings.'
                }
            }
        )
        .then(meetings => {
            if(meetings[0] !== undefined && meetings[0].results.length > 0){
                dispatch(receiveMeetings(meetings[0].results))
                dispatch(setTotalPages(Math.ceil(meetings[0].total / query.limit)))
                dispatch(setTotalMeetings(meetings[0].total))
                dispatch(setCurrentPage(0))
                dispatch(isFetching(false))
                dispatch(setDisplay("Search", "Search"))
                scrollToDisplay("Search")
                dispatch(setWarning(0))
            } else {
                dispatch(setWarning(1))
                dispatch(setDisplay("Home", "Home"))
            }
        })
    }
           
}