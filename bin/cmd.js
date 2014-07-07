#!/usr/bin/env node

var fs = require('fs')
  , nopt = require('nopt')
  , knownOpts = { help: Boolean
                , version: Boolean
                , places: Number
                , format: Boolean
                }
  , shortHand = { h: ['--help']
                , v: ['--version']
                , p: ['--places']
                , f: ['--format']
                }
  , parsed = nopt(knownOpts, shortHand)
  , change = require('../')

if (parsed.help) {
  usage(0)
  return
}

if (parsed.version) {
  console.log('percent-change', 'v'+require('../package').version)
  return
}

var places = parsed.hasOwnProperty('places')
  ? parsed.places
  : 2

var args = parsed.argv.remain

if (args.length < 2) {
  usage(1)
  return
}

var from = args.shift()
var to = args.shift()

console.log(change(from, to, places, parsed.format))

function usage(code) {
  var rs = fs.createReadStream(__dirname + '/usage.txt')
  rs.pipe(process.stdout)
  rs.on('close', function() {
    if (code) process.exit(code)
  })
}
