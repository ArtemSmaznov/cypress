import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://google.com';

Given('I open Google page', () => {
	cy.visit(url);
});

Given('I open WebPoker page', () => {
	cy.visit('https://poker.pokerstars.com');
});

When('I login', () => {
	cy.get('#startLogin').click();
	cy.get('.body > .btn').click();
	cy.get(':nth-child(1) > errorscashier > .errors > li')
		.invoke('text')
		.should('include', 'Please enter your Stars ID.');
	cy.get(':nth-child(2) > errorscashier > .errors > li')
		.invoke('text')
		.should('include', 'Please enter your Password.');
	cy.get('#psramusernamepopup').click();
	cy.get(':nth-child(2) > .input-group > input').click();
});

Then(`I see {string} in the title`, (title) => {
	cy.title().should('include', title);
});
