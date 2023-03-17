export let project = (name) => {
    let list = [];

    let addToList = function(...toDo) {
        for (let arg of toDo) {
            list.push(arg);
        }
    };

    return { name, addToList, list };
};