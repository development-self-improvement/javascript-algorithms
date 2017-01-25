function HashTable() {

    var data = [];

    var add = function(key, value) {
        // Fill in
    };

    var find = function(key) {
        // Fill in
    };

    var length = function() {
        var count = 0;

        for(var item in data) {
            var info = data[item];
            if(info && info.key) {
                count++;
            }
        }

        return count;
    };

    var calculate = function(key) {
        // Very weak calculation algorithm, but is useful for dealing with matches
        return key.charCodeAt(0);
    };

    return {
        add: add,
        find: find,
        length: length
    };
}