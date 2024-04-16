var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
/**
 * Generated class for the FilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FilterComponent = /** @class */ (function () {
    function FilterComponent(form) {
        this.form = form;
        this.filterform = this.form.group({
            location: '',
            minprice: '',
            maxprice: '',
            radius: '',
            purpose: '',
            spacetype: ''
        });
    }
    FilterComponent.prototype.filterin = function () {
        console.log(this.filterform.value);
    };
    FilterComponent = __decorate([
        Component({
            selector: 'filter',
            templateUrl: 'filter.html'
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], FilterComponent);
    return FilterComponent;
}());
export { FilterComponent };
//# sourceMappingURL=filter.js.map