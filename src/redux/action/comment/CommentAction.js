import axios from 'axios'
import { commentManagementServices } from '../../../services/CommentManagementService';
import { notification } from "antd";

const openNotificationAddCommentForCustomer = (placement) => {
    notification.success({
        message: `Thêm bình luận sản phẩm thành công !`,
        placement,
        duration: 2
    });
};

const openNotificationAddCommentForCustomerError = (placement) => {
    notification.error({
        message: `Thêm bình luận sản phẩm thất bại ! Quý khách phải mua sản phẩm thì mới được phép bình luận.`,
        placement,
        duration: 2
    });
};
export const AddCommentAction = (slug, commentInfo) => {
    return async (dispatch) => {
        try {
            const result = await commentManagementServices.addComment(slug, commentInfo);
            openNotificationAddCommentForCustomer('bottomRight');
            console.log("RESULT NEW COMMENT: ", result);
        } catch (error) {
            openNotificationAddCommentForCustomerError('bottomRight');
            console.log('error', error.response.data);
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


