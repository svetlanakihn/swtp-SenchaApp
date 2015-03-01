Ext.define('Sencha.view.PresidentList', {
	extend: 'Ext.List',
	xtype: 'presidentlist',
	requires: ['Sencha.store.Presidents'],
	config: {
		title: 'American Presidents (Exercise by Sviatlana Plakhina)',
		grouped: true,
		itemTpl: '{lastName} {firstName}',
		store: 'Presidents',
		onItemDisclosure: true
	}
});