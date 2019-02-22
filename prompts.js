module.exports = [
  {
    name: 'name',
    type: 'string',
    required: true,
    message: 'Project Name',
    default: 'nsoft-app',
  },
  {
    name: 'description',
    type: 'string',
    message: 'Project Description',
    default: 'NSoft Project',
  },
  {
    name: 'author',
    type: 'string',
    message: 'Author',
    default: 'NSoft',
  },
  {
    name: 'sevenGravityGateway',
    type: 'confirm',
    message: 'Do you want to include Seven Gravity Gateway',
    default: false
  },
]
