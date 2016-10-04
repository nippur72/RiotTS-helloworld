"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var riot = require("riot/riot+compiler");
var Riot = require("riot-typescript");
var HelloWorldTag = (function (_super) {
    __extends(HelloWorldTag, _super);
    function HelloWorldTag(opts) {
        var _this = _super.call(this) || this;
        _this.greet = "Hello";
        _this.who = "World";
        if (opts.who) {
            _this.who = opts.who;
        }
        return _this;
    }
    HelloWorldTag.prototype.changeGreeting = function () {
        this.greet = "Holà";
        this.who = "amigo";
    };
    return HelloWorldTag;
}(Riot.Element));
HelloWorldTag = __decorate([
    Riot.template("\n<hello-world>\n\t<div>{greet}, {who}!</div>\n\t<button onclick={changeGreeting}>change greet</button>\n</hello-world>\n")
], HelloWorldTag);
function main() {
    riot.mount("*");
}
window["main"] = main;
//# sourceMappingURL=hello-world.js.map