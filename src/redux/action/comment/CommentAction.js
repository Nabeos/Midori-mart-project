import axios from 'axios'
import { commentManagementServices } from '../../../services/CommentManagementService';

export const AddCommentAction = (slug, commentInfo) => {
    return async (dispatch) => {
        try {
            const result = await commentManagementServices.addComment(slug, commentInfo);
            console.log("RESULT NEW COMMENT: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const updateCommentAction = (commentId, commentInfo) => {
    return async (dispatch) => {
        try {
            const result = await commentManagementServices.updateComment(commentId, commentInfo);
            console.log("RESULT UPDATE COMMENT: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}


