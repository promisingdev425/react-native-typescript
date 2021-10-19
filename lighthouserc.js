module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn workspace @apartmentsnapshot/snapshot-ui start:mock:webstatic',
      url: ['http://localhost:5000']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
