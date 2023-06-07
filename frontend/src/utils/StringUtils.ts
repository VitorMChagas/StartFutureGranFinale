export const getInitials = (fullName: string):string => {
    var initialOne = ' ', initialTwo = ' ';

    if (fullName) {
        var names = getNames(fullName);
        initialOne = names[0].charAt(0).toUpperCase();
        initialTwo = names[1].charAt(0).toUpperCase();
    }

    return initialOne + initialTwo;
}

export const getNames = (fullName: string):string[] => {
    var firstName = ' ', lastName = ' ';

    var arr = fullName.split(' ');
    if (arr.length > 1) {
        firstName = arr[0];
        lastName = arr[arr.length - 1];
    }
    
    return [firstName, lastName];
}