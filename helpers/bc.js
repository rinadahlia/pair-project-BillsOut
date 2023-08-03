const bcrypt = require('bcrypt')

const hashPassword = (plainPass) => {
    return bcrypt.hashSync()
}