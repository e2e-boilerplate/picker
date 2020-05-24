module.exports = {
  name: 'constants',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/constants',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
