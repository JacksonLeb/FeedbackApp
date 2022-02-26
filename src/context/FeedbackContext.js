import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is Feedback Item 1',
            rating: 1,
        },
        {
            id: 2,
            text: 'This is Feedback Item 2',
            rating: 2,
        },
        {
            id: 3,
            text: 'This is Feedback Item 3',
            rating: 3,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    //to delete feedback
    const deleteFeedback = (id)  => {
        if(window.confirm("Are you sure you want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //to add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback.id)
        setFeedback([newFeedback, ...feedback])
    }

    //set item to be edited
    const editFeedback = (item) => {
        setFeedback({
            item,
            edit: true,
        })
    }

    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                deleteFeedback,
                addFeedback, 
                editFeedback,
                feedbackEdit,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext