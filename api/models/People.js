const People = (connection, Sequelize) => {
    return connection.define('People', {
        idPeople: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        calories: { type: Sequelize.INTEGER },
        macro: { type: Sequelize.INTEGER },
        slug: { type: Sequelize.STRING, unique: true },
    }, { paranoid: true })
}

module.exports = People;