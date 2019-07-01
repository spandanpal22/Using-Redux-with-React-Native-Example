const LaunchCheck=(state=1,action)=>{
    switch(action.type)
    {
        case "FirstLaunchCheck":
            return state+1;
        default:
            return state;
    }
}

export default LaunchCheck;