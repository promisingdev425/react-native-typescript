module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn workspace @apartmentsnapshot/snapshot-ui web:mock',
      url: ['http://localhost:19006']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
