const Linking = (connection, Sequelize) => {
    return connection.define('Linking', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        macro: { type: Sequelize.STRING, unique: true }
    }, { paranoid: true })
}

module.exports = Linking;