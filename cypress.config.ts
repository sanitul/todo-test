import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		viewportWidth: 1280,
		baseUrl: 'http://localhost:3000',
		setupNodeEvents(on, config) {
			require('@cypress/code-coverage/task')(on, config);
			return config;
		},
	},
});
