var getMetricEmitter = require('@newrelic/native-metrics')

var emitter = getMetricEmitter()

console.log(emitter);