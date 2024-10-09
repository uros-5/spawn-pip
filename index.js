const process = require("child_process")
const installation = process.spawn(".venv/bin/python", ['-m', 'pip', 'install', '--upgrade', 'aijson-meta']);
installation.stderr.on('close', (code) => {
  console.log("upgrade aijson-meta")
})
