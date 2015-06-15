'use strict';
(function(){
    window.BW = {
      Models : {},
      Views : {}
    };

    BW.Models.Car = Backbone.Model.extend({
        defaults : {
            carModel : "",
            mileage : 0,
            price : 0,
            dealer : ""
        },

        validate : function (attr, opts) {
            if ( !attr.carModel ){
                return "Title shouldn't be empty";
            }
        }
    });

    BW.Views.Car = Backbone.View.extend({
        el : $('#carDiv'),

        model : BW.Models.Car,

        render : function () {
            this.$el.html ( this.model.get('carModel') );
        }

    });
    //
    //
    //// using application
    //window.honda = new BW.Models.Car({
    //    carModel : "Honda Cruize",
    //    mileage : 130000,
    //    price : 14000,
    //    dealer : ""
    //});
    //var carVju = new BW.Views.Car({ model : honda });
    //carVju.render();
    //
    //setInterval( function(){
    //    carVju.render();
    //}, 3000);

}());