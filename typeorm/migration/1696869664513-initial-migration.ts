import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class InitialMigration1696869664513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'imageUrl',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'credits',
            type: 'int'
          },
          {
            name: 'tokens',
            type: 'int'
          },
          {
            name: 'isBlocked',
            type: 'boolean'
          },
          {
            name: 'isAdmin',
            type: 'boolean'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
