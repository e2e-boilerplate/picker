module.exports = {
  name: 'services',
  preset: '../../jest.config.js',
  collectCoverage: true,
  coverageDirectory: '../../coverage/libs/services',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
