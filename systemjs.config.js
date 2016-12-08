/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
	// map tells the System loader where to look for things
	var map = {
		'app':                        'client/dist', // 'dist',
		'@angular':                   'node_modules/@angular',
		'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
		'rxjs':                       'node_modules/rxjs',
		'@angular2-material':         'node_modules/@angular/material',
		'ng2-charts':                 'node_modules/ng2-charts'
	};
	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app':                        { main: 'main.js',  defaultExtension: 'js' },
		'rxjs':                       { defaultExtension: 'js' },
		'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
		'ng2-charts':                 { main: 'ng2-charts.js', defaultExtension: 'js' },
	};
	var materialPackageName = [
		'material'
	];
	var ngPackageNames = [
		'common',
		'compiler',
		'core',
		'forms',
		'http',
		'platform-browser',
		'platform-browser-dynamic',
		'router',
		'upgrade'
	];
	var materialPkgs = [
		'core',
		'button',
		'sidenav',
		'toolbar',
		'card',
		'grid-list',
		'icon',
		'input'
	];

	function materialPack(pkg) {
		packages['@angular2-material/' + pkg] = { main: pkg + '.js'};
	};
	// Individual files (~300 requests):
	function packIndex(pkgName) {
		packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
	}
	// Bundled (~40 requests):
	function packUmd(pkgName) {
		packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
	};

	function packUmdMaterial(pkgName){
		packages['@angular/'+pkgName] = { main: '/' + pkgName + '.umd.js', defaultExtension: 'js' };
	}


	// Most environments should use UMD; some (Karma) need the individual index files
	var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

	// Add package entries for angular packages
	ngPackageNames.forEach(setPackageConfig);
	materialPkgs.forEach(materialPack);
	materialPackageName.forEach(packUmdMaterial);


	var config = {
		map: map,
		packages: packages
	};
	System.config(config);
})(this);