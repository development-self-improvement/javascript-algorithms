function LinkedList() {

    var list = {
        head: undefined,
        tail: undefined,
    };

    var add = function(value) {
        // Fill in
    };

    var find = function(value) {
        // Fill in
    };

    var length = function() {
        // Fill in
    };

    return {
        add: add,
        find: find,
        length: length
    };
}

function LinkedListItem(value) {
    var data = {
        next: undefined,
        value: value,
    };

    return {
        next: data.next,
        value: data.value
    };
}