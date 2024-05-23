'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pergunta', [
      {
        texto: 'Você altera sua senha a cada 6 mêses?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        texto: 'Você utiliza um gerenciador de senhas?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        texto: 'Você atualiza sempre os sistemas operacionais de seus dispositivos?',
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
