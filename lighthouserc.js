module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn workspace @apartmentsnapshot/snapshot-ui serve:web',
      url: ['http://localhost:5000']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
