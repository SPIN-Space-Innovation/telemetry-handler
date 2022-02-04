const fs = require('fs')
const readline = require('readline')
const influxdbLogger = require('./loggers/influxdb')

const fileStream = fs.createReadStream('./FLIGHT.LOG')
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
})

const startTime = new Date()
const messages = []
rl.on('line', (line) => {
  messages.push(JSON.stringify({message: line, rssi: 0}))
})

fileStream.on('end', async () => {
  for (const message of messages) {
    await influxdbLogger(message)
  }
})
