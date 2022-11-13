import { baseService } from "./baseServices";

export class ImageManagementServices extends baseService {
    constructor() {
        super();
    }

    uploadAvatar = (filesName) => {
        return this.postUploadImage(`api/v1/user-management/users/image/upload`, filesName);
    }



}

export const imageManagementServices = new ImageManagementServices();