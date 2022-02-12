const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'a20a218c4d295a7495746e51ac0b4b2f19e08e87',
    options: {
      'sonar.sources': './src',
      'sonar.exclusions': './src/serviceWorkerRegistration.js',
    },
  },
  () => {},
);
