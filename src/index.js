function capatalize(string) {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1);
}


export {capatalize};