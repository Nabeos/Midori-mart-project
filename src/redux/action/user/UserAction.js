import { history } from "../../../App";
import { userManagementService } from "../../../services/UserManagementService";
import { TOKEN } from "../../../utils/settings/config";
import { LOGIN, USER } from "../../type/user/UserType";
import Swal from 'sweetalert2'

export const loginAction = (userInfo) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.login(userInfo);
            console.log("result login: ", result);
            localStorage.setItem(TOKEN, result.data.user.token);
            localStorage.setItem(USER, JSON.stringify(result.data.user));
            dispatch({
                type: LOGIN,
                userInfo: result
            })
            history.push("/");
        } catch (error) {
            console.log('error', error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Quý khách nhập sai email hoặc mật khẩu !!!',
            })
        }
    }
}