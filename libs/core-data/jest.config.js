module.exports = {
  name: 'core-data',
  preset: '../../jest.config.js',
  collectCoverage: true,
  coverageDirectory: '../../coverage/libs/core-data',
  collectCoverageFrom: ['!./src/lib/interceptor/**', '!**/jest.config.js'],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
