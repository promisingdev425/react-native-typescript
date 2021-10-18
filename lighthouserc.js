module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn web:mock',
      url: ['http://localhost:19006']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
