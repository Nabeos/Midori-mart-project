const initialState = {}

export const UserManagementReducer = (state = initialState, action) => {
    switch (action.type) {

        case "first":
            return { ...state }

        default:
            return { ...state }
    }
}
