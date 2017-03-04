var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

module.exports =  {

    startMonitoringBeacons : function () {
        setTimeout(function() {

            // All Beacons to track
            var Beacons = [
                {
                    uuid        : 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
                    identifier  : 'Mint Cocktail',
                    minor       : 48722,
                    major       : 24836
                },
                {
                    uuid        : 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
                    identifier  : 'Blueberry Pie',
                    minor       : 61890,
                    major       : 46430
                }
            ];

            var BeaconRegions = [];

// loop Beacons to be used.
            for (var i in Beacons) {
                var b                       = Beacons[i];
                BeaconRegions[b.identifier] = new cordova.plugins.locationManager.BeaconRegion(b.identifier, b.uuid, b.major, b.minor);
            }//end for

// Beacon Plugin Delegation
            var delegate = new cordova.plugins.locationManager.Delegate();

            delegate.didStartMonitoringForRegion = function (result) {

                // Log to Xcode
                console.log("start region");

            };

            delegate.didEnterRegion = function (result) {

                // Log to Xcode


                app.vent.trigger("estimote:enter:region", result.region.identifier);
                console.log("estimote:enter:region", result.region);

                // Start Ranging Beacon When it enters Inside Region
                cordova.plugins.locationManager.startRangingBeaconsInRegion(BeaconRegions[result.region.identifier])
                    .fail(console.error)
                    .done();

            };

            delegate.didExitRegion = function (result) {

                app.vent.trigger("estimote:exit:region", result.region.identifier);
                console.log("estimote:exit:region", result.region);

                // Stop Ranging Beacon if Outside Region
                cordova.plugins.locationManager.stopRangingBeaconsInRegion(BeaconRegions[result.region.identifier])
                    .fail(console.error)
                    .done();

            };

            delegate.didDetermineStateForRegion = function (result) {

                // Log to Xcode
                // console.log(">>> DETERMINE " + JSON.stringify(result));

                console.log(">>>|| DETERMINE DEBUG ||<<<", result.region.identifier);

            };

            delegate.didRangeBeaconsInRegion = function (result) {

                app.vent.trigger("estimote:enter:beacon", result);
                console.log("estimote:enter:beacon", result);

            };

// Set Methods for Location Manager
            cordova.plugins.locationManager.setDelegate(delegate);

// Ask/Check For Permission
            cordova.plugins.locationManager.requestAlwaysAuthorization();

// Loop BeaconRegions to setup region monitoring.
            for (var i in BeaconRegions) {
                var b = BeaconRegions[i];
                if (b == undefined) continue;
                cordova.plugins.locationManager.startMonitoringForRegion(b);
            }
            
            
            
        }, 1000);

    }


};
