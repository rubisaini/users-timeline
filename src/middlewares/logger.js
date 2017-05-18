/**
 * Created by intelligrape on 18/5/17.
 */


export default logger = (store) =>(next) =>(action) => {
    console.log(`Fired action is: ${action.type}`);
    next(action);
}