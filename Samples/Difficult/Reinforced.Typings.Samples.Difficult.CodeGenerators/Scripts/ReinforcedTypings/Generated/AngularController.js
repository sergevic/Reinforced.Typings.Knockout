//     This code was generated by a Reinforced.Typings tool. 
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
///<reference path="models.ts"/>
var Reinforced;
(function (Reinforced) {
    var Typings;
    (function (Typings) {
        var Samples;
        (function (Samples) {
            var Difficult;
            (function (Difficult) {
                var CodeGenerators;
                (function (CodeGenerators) {
                    var Controllers;
                    (function (Controllers) {
                        if (window['app'])
                            window['app'].factory('Api.AngularController', ['$http', function ($http) { return new AngularController($http); }]);
                        /** Result of AngularControllerGenerator activity */
                        var AngularController = (function () {
                            function AngularController($http) {
                                this.http = $http;
                            }
                            /**
                            * Simple controller action that returns integer method
                            *
                            * @returns JSON-ed random integer value
                            */
                            AngularController.prototype.SimpleIntMethod = function () {
                                var params = {};
                                return this.http.post('/Angular/SimpleIntMethod', params)
                                    .then(function (response) { response.data['requestParams'] = params; return response.data; });
                            };
                            /**
                            * Controller action that returns
                            *
                            * @param num Number value
                            * @param s String value
                            * @param boolValue Boolean value
                            * @returns JSON-ed string containing concatenated values
                            */
                            AngularController.prototype.MethodWithParameters = function (num, s, boolValue) {
                                var params = { 'num': num, 's': s, 'boolValue': boolValue };
                                return this.http.post('/Angular/MethodWithParameters', params)
                                    .then(function (response) { response.data['requestParams'] = params; return response.data; });
                            };
                            /**
                            * Controller action that returns our simple object
                            *
                            * @returns JSON-ed simple object
                            */
                            AngularController.prototype.ReturningObject = function () {
                                var params = {};
                                return this.http.post('/Angular/ReturningObject', params)
                                    .then(function (response) { response.data['requestParams'] = params; return response.data; });
                            };
                            /**
                            * Controller action that returns our simple object and consimes parameters
                            *
                            * @param echo Sample parameter
                            * @returns JSON-ed simple object
                            */
                            AngularController.prototype.ReturningObjectWithParameters = function (echo) {
                                var params = { 'echo': echo };
                                return this.http.post('/Angular/ReturningObjectWithParameters', params)
                                    .then(function (response) { response.data['requestParams'] = params; return response.data; });
                            };
                            /**
                            * Controller action that does not return anything but consumes object as parameter
                            *
                            * @param model Object parameter
                            * @returns Nothing
                            */
                            AngularController.prototype.VoidMethodWithParameters = function (model) {
                                var params = { 'model': model };
                                return this.http.post('/Angular/VoidMethodWithParameters', params)
                                    .then(function (response) { response.data['requestParams'] = params; return response.data; });
                            };
                            return AngularController;
                        }());
                        Controllers.AngularController = AngularController;
                    })(Controllers = CodeGenerators.Controllers || (CodeGenerators.Controllers = {}));
                })(CodeGenerators = Difficult.CodeGenerators || (Difficult.CodeGenerators = {}));
            })(Difficult = Samples.Difficult || (Samples.Difficult = {}));
        })(Samples = Typings.Samples || (Typings.Samples = {}));
    })(Typings = Reinforced.Typings || (Reinforced.Typings = {}));
})(Reinforced || (Reinforced = {}));
//# sourceMappingURL=AngularController.js.map