const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '87'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '64'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Jan 11th 2021, 01:07 AM EST'},
            {label: 'Execution End Time', value: 'Jan 11th 2021, 01:20 AM EST'}
        ]
    }
});