module.exports = {
  default: {
    parallel: 2,
    format: ['html:cucumber-report.html'],
    require: [
        'steps/**/*.steps.js',
        'support/**/*.js'
    ],
    paths: ['features/**/*.feature']
  },
  simples:{
    parallel: 4,
    format: ['html:cucumber-report.html'],
    require: [
        'steps/**/*.steps.js',
        'support/**/*.js'
    ],
    paths: ['features/**/*.feature']
  }
}