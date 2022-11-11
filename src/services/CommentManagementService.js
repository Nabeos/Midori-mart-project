import { baseService } from "./baseServices";

export class CommentManagementServices extends baseService {
    constructor() {
        super();
    }

    addComment = (slug, commentInfo) => {
        return this.postComment(`api/v1/products/${slug}/comments`, commentInfo);
    }

    updateComment = (commentId, commentInfo) => {
        return this.putUpdateComment(`api/v1/products/comments/${commentId}`, commentInfo);
    }

}

export const commentManagementServices = new CommentManagementServices();