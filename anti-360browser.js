(function(root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        // AMD&CMD
        define(factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Browser = factory();
    }
} (this,
function() {
    var _window = this || {};
    var _navigator = typeof navigator != 'undefined' ? navigator: {};
    var _mime = function(option, value) {
        var mimeTypes = navigator.mimeTypes;
        for (var mt in mimeTypes) {
            if (mimeTypes[mt][option] == value) {
                return true;
            }
        }
        return false;
    };

    return function(userAgent) {
        var u = userAgent || _navigator.userAgent || {};
        var _this = this;

        var match = {
            '360': u.indexOf('QihooBrowser') > -1,
            '360EE': u.indexOf('360EE') > -1,
            '360SE': u.indexOf('360SE') > -1,
        };
    };
}));
if (new Browser().browser == '360' || new Browser().browser == '360SE' || new Browser().browser == '360SE') {
    window.alert('请不要使用360浏览器');
    document.write('<html><body bgcolor="red"><h1>请不要使用360浏览器</h1></body></html>')
}
