// import {BUY_CAKE} from './cakeType';
// import {BUY_CAKE} from './cakeAction';

// const [intst, setintst] = useState(10)

const initialState = {
    numofCakes: 10,
    prof_num:1,
    user_id: "nulll",
    current_User_Id: "sony",
    nav_state: "0px",
    window_width: 1000,
    logged_User: "non"
}


const Data_reducer = (state = initialState, action)=>{
    // if(state.numofCakes==15){
    //     state.numofCakes=10;
    // }
    switch(action.type){
        // case BUY_CAKE: return {
            case "BUY_CAKE": return {
            ...state,
            numofCakes: state.numofCakes - 1
        }
        case "SELL_CAKE": return {
            ...state,
            numofCakes: action.form_dt2
        }
        case "CHANGE_TAB": return {
            ...state,
            // prof_num: state.prof_num + 1
            prof_num: action.data_dt
        }
        case "User_id_container": return {
            ...state,
            // prof_num: state.prof_num + 1
            user_id: action.data_id
        }
        case "current_User_Id": return {
            ...state,
            current_User_Id: action.current_User_Id
        }
        case "nav_Toggle": return {
            ...state,
            nav_state: action.nav_dt2
        }
        case "window_Width": return {
            ...state,
            window_width: action.win_wd
        }
        case "logged_User": return {
            ...state,
            logged_User: action.logged_User
        }
        default: return state
    }
}

export default Data_reducer