const Macros = (connection, Sequelize) => {
    return connection.define('Macros', {
        idMacro: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        carb: { type: Sequelize.INTEGER },
        protein: { type: Sequelize.INTEGER },
        fat: { type: Sequelize.INTEGER },
        slug: { type: Sequelize.STRING, unique: true },
    }, { paranoid: true })
}

module.exports = Macros;