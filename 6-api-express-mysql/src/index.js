import app from "./app"

/**
 * The main function is a function that listens to the port that the app is running on and logs a
 * message to the console
 */
const main = () =>{
    app.listen(app.get("port"));
    console.log('Server on port : ${app.get("port")}');
};

main();