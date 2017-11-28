function storeRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.store',
			url: 'store',
			component: 'store'
		})
		.state({
			name: 'app.articles',
			url: 'store',
			component: 'store'
		});
}

angular.module('RowdyMermaid-site.store')
	.config(storeRoute);

storeRoute.$inject = ['$stateProvider'];
