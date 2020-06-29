module.exports = {
  name: 'boiler',
  preset: '../../jest.config.js',
  collectCoverage: false,
  coverageDirectory: '../../coverage/libs/boiler',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
