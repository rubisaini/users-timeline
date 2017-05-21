/**
 * Created by intelligrape on 18/5/17.
 */


const logger = (store) =>(next) =>(action) => {
    console.log(`Fired action is: ${action.type}`);
    next(action);
};

export default logger;