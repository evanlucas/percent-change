#!/usr/bin/env node

var nopt = require('nopt')
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
  , usage = require('help')()
  , change = require('../')

if (parsed.help) {
  return usage(0)
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
  return usage(1)
}

var from = args.shift()
var to = args.shift()

console.log(change(from, to, places, parsed.format))
