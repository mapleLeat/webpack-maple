export default function printMe() {
    console.log('I get called from print.js!');
    import("./promise.js").then(() => {
        console.log("over");
    }).catch(error => 'An error occurred while loading the component');
}