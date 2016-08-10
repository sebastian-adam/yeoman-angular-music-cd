System.register(['@angular/core', '@angular/http', 'rxjs/Rx', './tech'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, tech_1;
    var Tech, Techs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (tech_1_1) {
                tech_1 = tech_1_1;
            }],
        execute: function() {
            Tech = (function () {
                function Tech(logo, title, text1, text2) {
                    this.logo = logo;
                    this.title = title;
                    this.text1 = text1;
                    this.text2 = text2;
                }
                return Tech;
            }());
            exports_1("Tech", Tech);
            Techs = (function () {
                function Techs(http) {
                    var _this = this;
                    this.http = http;
                    this.onAlbumSelect = new core_1.EventEmitter();
                    this.getTechs().subscribe(function (result) { return _this.techs = result; });
                }
                Techs.prototype.getTechs = function () {
                    return this.http
                        .get('app/techs/techs.json')
                        .map(function (response) { return response.json(); });
                };
                Techs.prototype.albumClicked = function (album) {
                    this.selectedAlbum = album;
                    this.onAlbumSelect.emit(album);
                };
                Techs = __decorate([
                    core_1.Component({
                        selector: 'Techs',
                        outputs: ['onAlbumSelect'],
                        template: require('./techs.html'),
                        directives: [tech_1.TechComponent],
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Techs);
                return Techs;
            }());
            exports_1("Techs", Techs);
        }
    }
});
//# sourceMappingURL=techs.js.map