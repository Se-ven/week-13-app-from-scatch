const FoodGroups = (connection, Sequelize) => {
    return connection.define('FoodGroups', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        serving: { type: Sequelize.INTEGER },
        calories: { type: Sequelize.INTEGER },
        slug: { type: Sequelize.STRING, unique: true },
    }, { paranoid: true })
}

module.exports = FoodGroups;