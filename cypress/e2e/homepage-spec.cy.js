describe('Homepage Flows', () => {

  beforeEach(() => {
    cy.intercept('GET', "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hmnMnvdrsTLgtLuLtFHwxdb5jQhBzJ2J", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'Homepage'
    });
    cy.visit('http://localhost:3000/')
  })

  it('Should see all initial elements on page and navigate to article details.', () => {
    cy.get('.nav-title').should('have.text', 'Modern Feed')
    cy.get('.article-title').should('have.text', 'Top Articles for this month')
    cy.get('.article-link .article-card-title').eq(0).should('have.text', 'Russia Says It Will Quit the International Space Station After 2024')
    cy.get('.article-link .article-card-date').eq(0).should('have.text', '2022-07-26')

    cy.get('.article-link').eq(0).click()
    cy.get('.info-container .detail-title').should('have.text', 'Russia Says It Will Quit the International Space Station After 2024')
    cy.get('.info-container .detail-abstract').should('have.text', 'Abstract: The announcement could lead to the end of two decades of post-Cold War cooperation in space between the United States and Russia, which jointly built and operate the station.')
    cy.get('img').should('exist')
  })

  it('Should be able to navigate to a seperate article.', () => {
    cy.get('.article-link .article-card-title').eq(2).should('have.text', 'Is Recession Staring Us Down? Already Upon Us? Here’s Why It’s Hard to Say.')
    cy.get('.article-link .article-card-date').eq(2).should('have.text', '2022-07-26')

    cy.get('.article-link').eq(2).click()
    cy.get('.info-container .detail-title').should('have.text', 'Is Recession Staring Us Down? Already Upon Us? Here’s Why It’s Hard to Say.')
    cy.get('.info-container .detail-abstract').should('have.text', 'Abstract: The U.S. may register a second straight quarter of economic contraction, one benchmark of a recession. But that won’t be the last word.')
    cy.get('img').should('exist')
  })

  it('Should be able to select filter and see new articles.', () => {
    cy.intercept('GET', "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=hmnMnvdrsTLgtLuLtFHwxdb5jQhBzJ2J", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'Arts'
    });

    cy.get('.form-select').select(1).should('have.value', 'arts')
    cy.get('.form-button').click()

    cy.get('.article-link .article-card-title').eq(0).should('have.text', 'The Role of Art in a Time of War')
    cy.get('.article-link .article-card-date').eq(0).should('have.text', '2022-07-28')

    cy.get('.article-link').eq(0).click()
    cy.get('.info-container .detail-title').should('have.text', 'The Role of Art in a Time of War')
    cy.get('.info-container .detail-abstract').should('have.text', 'Abstract: Painting will not stop missiles. Music will not end suffering. But culture is not powerless — and a visit to Ukraine reaffirmed what it can do at its best.')
    cy.get('img').should('exist')
    
    cy.get('.nav-button').click()

    cy.get('.article-link .article-card-title').eq(2).should('have.text', 'What’s the Deal With Water Bottles?')
    cy.get('.article-link .article-card-date').eq(2).should('have.text', '2022-07-28')

    cy.get('.article-link').eq(2).click()
    cy.get('.info-container .detail-title').should('have.text', 'What’s the Deal With Water Bottles?')
    cy.get('.info-container .detail-abstract').should('have.text', 'Abstract: A standup comedian’s drink is much more than a prop or a thirst quencher. It’s a stealth statement.')
    cy.get('img').should('exist')
  })

})