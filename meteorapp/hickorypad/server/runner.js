exec = Npm.require('child_process').exec;


runCommand = function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);

    if (error !== null) {
        console.log('exec error: ' + error);
    }
};

Meteor.startup(function () {
    if (Meteor.isServer) {
        //var Gear = Meteor.npmRequire('gearman');
        //gearm = new Gear();
        //ImageProcessor.init();
    }
});
//var gear = Npm.require('node-gearman');
//var Gearman = Meteor.npmRequire('node-gearman');

Meteor.methods({
    submitJob: function () {
        var Gearman = Meteor.npmRequire('gearman').Gearman;
        var client = new Gearman("10.0.1.39", 4730, {timeout: 3000000});
        //var gearman = Gearman.Gearman('10.0.1.39', 4730);

        //var job = client.submitJob("hickory", "run");

        //job.on("data", function (data) {
        //    console.log(data.toString("utf-8")); // gnirts tset
        //});
        //
        //job.on("end", function () {
        //    console.log("Job completed!");
        //});
        //
        //job.on("error", function (error) {
        //    console.log(error.message);
        //});

        client.on('timeout', function () {
            console.log('Timeout occurred...');
            return client.close();
        });

        client.on('WORK_COMPLETE', function (job) {
            console.log('job completed, result:', job.payload.toString());
            return client.close();
        });

        client.connect(function () {
            return client.submitJob('hickory', 'run');
        });


    }
});

//exec("/Users/mike/.virtualenvs/base-venv/bin/python /Users/mike/webapps/hickorypad/both/scripts/rule_worker.py", runCommand);