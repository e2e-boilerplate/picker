module.exports = {
  name: 'material',
  preset: '../../jest.config.js',
  collectCoverage: true,
  coverageDirectory: '../../coverage/libs/material',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
