const {SpecReporter} = require('jasmine-spec-reporter');

jasmine.getEnv().clearReporters();               // remove default reporter logs
jasmine.getEnv().addReporter(new SpecReporter({  // add jasmine-spec-reporter
    spec: {
        displayPending: true,
        displayStacktrace: 'raw'
    }
}));
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;