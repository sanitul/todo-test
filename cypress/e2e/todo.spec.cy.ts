describe('Todo spec', () => {
	before(() => {
		cy.visit('/');
	});

	afterEach(() => {
		// cy.wait(2000);
	});

	it('Verify page url include dashboard', () => {
		cy.url().should('include', '/');
	});
	it('Page title contains Todo Ap', () => {
		cy.title().should('eq', 'Todo App');
	});
	it('Landing page title read as My Tasks', () => {
		cy.get('h1.app-title').should('exist').should('have.text', 'My Tasks');
	});

	context('Input Box- Add task', () => {
		it('Input box and submit button exist', () => {
			cy.get('input').should('exist');
			cy.get('button[type=submit]').should('exist');
		});

		it('Default input box empty and button disabled', () => {
			cy.get('input').should('have.value', '');
			cy.get('button[type=submit]').should('be.disabled');
		});

		it('Default input box should not accept empty/whitespace', () => {
			cy.get('input').type('       ');
			cy.get('button[type=submit]').should('be.disabled');
		});

		it('Add a new task by typing in input box and enter', () => {
			cy.get('input').type('Hello world 1 {enter}');
		});

		it('Add a new task by typing in input box and press save button', () => {
			cy.get('input').type('Hello world 2');
			cy.get('button[type=submit]').should('not.be.disabled').click();
		});
	});

	context('Task list', () => {
		it('Cleanup list', () => {
			cy.visit('/');
		});
		it('Add three tasks into the list', () => {
			cy.get('input').type('My Task 1 {enter}');
			cy.get('input').type('My Task 2 {enter}');
			cy.get('input').type('My Task 3 {enter}');
			cy.get('ul').children().should('have.length', 3);
		});
		it('Delete 2nd task from the list', () => {
			cy.get('ul').children().should('have.length', 3);
			cy.get('ul').children().eq(1).find('button').click();
			cy.get('ul').children().should('have.length', 2);
		});
	});
});

export default {};
