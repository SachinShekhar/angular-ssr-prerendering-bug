module.exports = {
  name: 'artificial-intelligence',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/artificial-intelligence',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
