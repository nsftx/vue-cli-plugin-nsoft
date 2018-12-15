module.exports = [
  {
    name: 'name',
    type: 'string',
    required: true,
    message: 'Project Name',
    default: 'NSoft App',
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
  },
  {
    name: `isPrivateRepo`,
    type: 'confirm',
    message: 'Is this a private repository?',
    default: false,
  },
]
