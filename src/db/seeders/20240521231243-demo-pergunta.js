'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pergunta', [
      {
        texto: 'Você altera sua senha a cada 6 mêses?',
        dica: 'Ao alternar a senha a cada 6 mêses, é possível diminuir o risco de ter a conta acessada indevidamente, pois, vazamentos de dados em empresas são uma possibilidade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        texto: 'Você utiliza um gerenciador de senhas?',
        dica: 'Um gerenciador de senhas pode facilitar o armazamento de senhas do usuário de forma segra, e também auxilia na geração de novas senhas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        texto: 'Você atualiza sempre os sistemas operacionais de seus dispositivos?',
        dica: 'Ao atualizar os sistemas operacionais, é possível mitigar o risco de alguma vulnerabilidade de software presente em versões antigas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Pergunta', null, {});
  }
};
