import { ADD_COMMENT } from "../../type/comment/CommentType"

const initialState = {
    commentList: []
}

export const CommentReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_COMMENT:

            return { ...state }

        default:
            return { ...state }
    }
}
