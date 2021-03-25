const fs = require('fs')
const {
    exec,
} = require('child_process')

const {
    name,
    version: versionInPackageJSON,
} = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

function isVersionUpdated(older, newer) {
    const oldSplitted = older.split('.')
    const newSplitted = newer.split('.')

    for (let i = 0; i < oldSplitted.length; i += 1) {
        const oldVersion = parseInt(oldSplitted[i], 10)
        const newVersion = parseInt(newSplitted[i], 10)

        if (newVersion > oldVersion) {
            return true
        } if (oldVersion > newVersion) {
            return false
        }
    }

    return false
}

exec(`npm show ${name} version`, (error, versionInNPM, stderr) => {
    if (error) {
        throw new Error(error)
    }
    if (stderr) {
        throw new Error(stderr)
    }

    if (!isVersionUpdated(versionInNPM, versionInPackageJSON)) {
        throw new Error('Please update package.json')
    }

    console.log(`new version: ${versionInPackageJSON}`)
})
