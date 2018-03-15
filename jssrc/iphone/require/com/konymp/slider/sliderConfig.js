define(function() {
    return {
        "properties": [{
            "name": "minValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "maxValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "graduations",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "divisions",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "intervalDisplay",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "startIndex",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "endIndex",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["getSelectedValues"],
        "events": ["onMinChange", "onMinChangeEnd", "onMaxChange", "onMaxChangeEnd"]
    }
});