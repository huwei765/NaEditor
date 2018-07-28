import { SHOW_CONFIG, HIDE_CONFIG, SAVE_CONFIG_REQUEST } from "../actions";


export default (state = { isVisiable: false, configData: {} }, action) => {

    switch (action.type) {
        case SHOW_CONFIG:
            {
                const { moduleData } = action;
                const moduleConfig = {
                    isVisiable: true,
                    moduleData,
                }
                const result = moduleConfig;
                console.log(result);
                return result;
            }
            break;
        case HIDE_CONFIG:
            return Object.assign({ isVisiable: false, })
        case SAVE_CONFIG_REQUEST:
            const { configData } = action;
            return Object.assign({}, state, {
                configData,
            })
        default:
            return state;
    }
}