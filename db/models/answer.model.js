const { Model, DataTypes, Sequelize } = require('sequelize')


const ANSWER_TABLE = 'answers'

const AnswerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  answer1: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  answer2: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  answer3: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  comments: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: ''
  },
  sex: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Answer extends Model {
  static associate() {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ANSWER_TABLE,
      modelName: 'Answer',
      timeStamps: false,
    }
  }
}

module.exports = {
  ANSWER_TABLE,
  AnswerSchema,
  Answer
}