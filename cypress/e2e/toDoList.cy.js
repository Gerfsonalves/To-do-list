/// <reference types="cypress" />

describe('Navegação To do list', () => {

  beforeEach('Acessar site', () => {
    cy.visit('./navigator/index.html')
  })

  it('Adicionar e excluir tafera', () => {
    cy.get('#input-new-task').type('Mercado')
    cy.get('#btn-new-task').click()
    cy.contains('ul#to-do-list li', 'Mercado').should('be.visible')

    //Excluir tarefa


    cy.get('#btn-ok').click()
    cy.get('ul#to-do-list').should('not.be.visible')

  })

  it('Adicionar tarefa vazia, erro', () => {
    cy.get('#btn-new-task').click()
    cy.get('ul#to-do-list') // Seleciona a lista
      .should('not.be.visible')
  });

  it('Adiciona 2 tarefas e exclui a segunda', () => {
    cy.get('#input-new-task').type('Aniversário')
    cy.get('#btn-new-task').click()
    cy.get('#input-new-task').type('academia')
    cy.get('#btn-new-task').click()

    cy.contains('ul#to-do-list li', 'Aniversário').should('be.visible')
    cy.contains('ul#to-do-list li', 'academia').should('be.visible')

    cy.get('ul#to-do-list li').eq(1).find('#btn-ok').click()
    cy.contains('ul#to-do-list li', 'Aniversário').should('be.visible')
    cy.contains('ul#to-do-list li', 'academia').should('not.exist')
  });




})
