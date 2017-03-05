var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var _ = require('underscore');

module.exports =  {
  uuidFilter: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
    Beacons : [
        {
            uuid        : 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
            identifier  : 'Mint Cocktail',
            minor       : 48722,
            major       : 24836,
            present     : false
        },
        {
            uuid        : 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
            identifier  : 'Blueberry Pie',
            minor       : 61890,
            major       : 46430,
            present     : false
        }
    ],
    startMonitoringBeaconsEstimote: function() {
      var _self = this;

      estimote.beacons.requestAlwaysAuthorization();

      estimote.beacons.startRangingBeaconsInRegion(
  			{ uuid: this.uuidFilter }, // Empty region matches all beacons.
  			function(resultBeacons) {
          if (resultBeacons.beacons.length){
            _.each(_self.Beacons, function(beacon, i){
              var beaconEnter = _.findWhere(resultBeacons.beacons, {uuid: beacon.uuid, major: beacon.major});
              if (beaconEnter) {
                if (!beaconEnter.present){
                  beaconEnter.present = true;
                  app.vent.trigger("estimote:enter:region", beacon);
                }else{
                  app.vent.trigger("estimote:exit:region", beacon);
                  beaconEnter.present = false;
                }
              }else{
                if (beacon.present){
                  app.vent.trigger("estimote:exit:region", beacon);
                  beacon.present = false;
                }
              }
            });
          }
        },
  			function(e){
          console.error(e);
        });

    },
    startMonitoringBeacons : function () {
      // All Beacons to track


      var BeaconRegions = [];

// loop Beacons to be used.
    /*  for (var i in Beacons) {
          var b                       = Beacons[i];
          BeaconRegions[b.uuid] = new cordova.plugins.locationManager.BeaconRegion(b.identifier, b.uuid, b.major, b.minor);
      }*///end for



// Beacon Plugin Delegation
            var delegate = new cordova.plugins.locationManager.Delegate();

            delegate.didStartMonitoringForRegion = function (result) {
                app.vent.trigger("estimote:didStartMonitoringForRegion", result.region.uuid);
                // Log to Xcode
                console.log("estimote:didStartMonitoringForRegion", result);

            };
            delegate.monitoringDidFailForRegionWithError = function(result) {
                console.log('monitoringDidFailForRegionWithError', result);
            };
            delegate.didEnterRegion = function (result) {

                // Log to Xcode


                app.vent.trigger("estimote:enter:region", result.region.uuid);
                console.log("estimote:enter:region", result);

                // Start Ranging Beacon When it enters Inside Region
                /*if (BeaconRegions[result.region.identifier]){
                cordova.plugins.locationManager.startRangingBeaconsInRegion(BeaconRegions[result.region.uuid])
                    .fail(console.error)
                    .done();
                }*/
            };

            delegate.didExitRegion = function (result) {

                app.vent.trigger("estimote:exit:region", result.region.uuid);
                console.log("estimote:exit:region", result);

                // Stop Ranging Beacon if Outside Region
                if (BeaconRegions[result.region.uuid]){
                cordova.plugins.locationManager.stopRangingBeaconsInRegion(BeaconRegions[result.region.uuid])
                    .fail(console.error)
                    .done();
                }
            };

            delegate.didDetermineStateForRegion = function (result) {

                // Log to Xcode
                // console.log(">>> DETERMINE " + JSON.stringify(result));

                console.log(">>>|| DETERMINE DEBUG ||<<<", result);

            };
            delegate.peripheralManagerDidStartAdvertising = function(result) {
              console.log('peripheralManagerDidStartAdvertising', result);
            };

            delegate.didRangeBeaconsInRegion = function (result) {

                app.vent.trigger("estimote:recieve:beacon", result);
                console.log("estimote:recieve:beacon", result);

            };
            var uuid  = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D';
            var identifier = 'Mint Cocktail';
            var   minor  = 48722;
            var major = 24836;
            var unBeaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

// Set Methods for Location Manager
            cordova.plugins.locationManager.setDelegate(delegate);

// Ask/Check For Permission
            cordova.plugins.locationManager.requestAlwaysAuthorization();
            // Loop BeaconRegions to setup region monitoring.





            cordova.plugins.locationManager.startMonitoringForRegion(unBeaconRegion)
            .fail(function(e) { console.error(e); })
            .done(function(e){console.log(e); });
            /*for (var i in BeaconRegions) {
                var b = BeaconRegions[i];
                if (b == undefined) continue;
                cordova.plugins.locationManager.startMonitoringForRegion(b)
                .fail(function(e) { console.error(e); })
                .done();
            }*/

    }


};
