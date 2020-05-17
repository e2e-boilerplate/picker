module.exports = {
  name: 'picker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/picker',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
