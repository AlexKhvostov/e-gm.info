

anychart.onDocumentReady(function () {

    // create a stage
    var stage = anychart.graphics.create("thermometer-1d");

    // create data
    var data = [170, 210, 130, 310];

    // // set the gauge type
    // linear = anychart.gauges.linear();
    //
    // // set data for the gauge
    // linear.data(data);
    //
    // // add the default pointer
    // linear.addPointer(0);
    //
    // // set the size and position
    // linear.bounds(0, 0, "25%", "100%");
    //
    // // set the container id
    // linear.container(stage);
    //
    // // initiate drawing the gauge
    // linear.draw();
    //
    // // set the gauge type
    // tank = anychart.gauges.tank();
    //
    // // set data for the gauge
    // tank.data(data);
    //
    // // add the default pointer
    // tank.addPointer(1);
    //
    // // set the size and position
    // tank.bounds("25%", 0, "25%", "100%");
    //
    // // set the container id
    // tank.container(stage);
    //
    // // initiate drawing the gauge
    // tank.draw();

    // set the gauge type
    led = anychart.gauges.led();

    // set data for the gauge
    led.data(data);

    // add the default pointer
    led.addPointer(2);

    // set the size and position
    led.bounds("50%", 0, "25%", "100%");

    // set the container id
    led.container(stage);

    // initiate the gauge drawing
    led.draw();

    // // set the gauge type
    // thermometer = anychart.gauges.thermometer();
    //
    // // set data for the gauge
    // thermometer.data(data);
    //
    // // add the default pointer
    // thermometer.addPointer(3);
    //
    // // set the size and position
    // thermometer.bounds("75%", 0, "25%", "100%");
    //
    // // set the container id
    // thermometer.container(stage);
    //
    // // initiate drawing the gauge
    // thermometer.draw();
});