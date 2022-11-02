"use strict";
exports.__esModule = true;
exports.useCountries = void 0;
var axios_1 = require("axios");
var react_1 = require("react");
var useCountries = function () {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState([]), countries = _b[0], setCountries = _b[1];
    react_1.useEffect(function () {
        fetchCountry();
    }, []);
    var fetchCountry = function () {
        setLoading(true);
        axios_1["default"]
            .all([
            axios_1["default"].get("https://countriesnow.space/api/v0.1/countries/codes"),
            axios_1["default"].get("https://countriesnow.space/api/v0.1/countries/flag/images"),
        ])
            .then(function (_a) {
            var _b;
            var res1 = _a[0], res2 = _a[1];
            //@ts-ignore
            var countriesResponse = (_b = res1 === null || res1 === void 0 ? void 0 : res1.data) === null || _b === void 0 ? void 0 : _b.data;
            //@ts-ignore
            var countriesImagesResponse = res2.data.data;
            //@ts-ignore
            var formattedCountries = countriesResponse === null || countriesResponse === void 0 ? void 0 : countriesResponse.map(function (item) {
                var _a;
                var imageLink = (_a = countriesImagesResponse === null || countriesImagesResponse === void 0 ? void 0 : countriesImagesResponse.find(
                //@ts-ignore
                function (imagesItem) { return imagesItem.name === item.name; })) === null || _a === void 0 ? void 0 : _a.flag;
                return {
                    code: item.dial_code,
                    short_name: item.code,
                    name: item.name,
                    imageLink: imageLink
                };
            });
            setCountries(formattedCountries);
        })["catch"](function (error) {
            error;
        })["finally"](function () { return setLoading(false); });
    };
    return {
        loading: loading,
        countries: countries
    };
};
exports.useCountries = useCountries;
