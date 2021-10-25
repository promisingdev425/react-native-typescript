module.exports = {
  ci: {
    preset: 'lighthouse:recommended',
    collect: {
      numberOfRuns: 2,
      startServerCommand:
        'yarn workspace @apartmentsnapshot/snapshot-ui serve:web',
      url: ['http://localhost:5000'],
      settings: {
        formFactor: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10 * 1024,
          cpuSlowdownMultiplier: 1,
        },
      },
    },
    upload: {
      target: 'temporary-public-storage', //'filesystem',
      //outputDir: '../reports/lighthouse',
    },
    assert: {
      budgetsFile: '../budgets/lighthouse.json',
    },
  },
}
