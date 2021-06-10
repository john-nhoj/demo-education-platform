import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.schema
    .createTable('accounts', (accountsTable) => {
      accountsTable.increments('id').primary();
      accountsTable.integer('user_id').notNullable().unique();
      accountsTable.string('compound_id').unique();
      accountsTable.string('provider_type');
      accountsTable.string('provider_id').unique();
      accountsTable.string('provider_account_id').unique();
      accountsTable.text('refresh_token');
      accountsTable.text('access_token');
      accountsTable.timestamp('access_token_expires', { useTz: true });
      accountsTable
        .timestamp('created_at', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
      accountsTable
        .timestamp('updated_at', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
    })
    .createTable('sessions', (sessionsTable) => {
      sessionsTable.increments('id').primary();
      sessionsTable.integer('user_id').notNullable();
      sessionsTable.string('session_token').unique();
      sessionsTable.string('access_token').unique();
      sessionsTable.timestamp('expires', { useTz: true });
      sessionsTable
        .timestamp('created_at', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
      sessionsTable
        .timestamp('updated_at', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
    })
    .createTable('users', (usersTable) => {
      usersTable.increments('id').primary();
      usersTable.string('name');
      usersTable.string('email').unique();
      usersTable.text('image');
      usersTable.timestamp('email_verified', { useTz: true });
      usersTable
        .timestamp('created_at', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
      usersTable
        .timestamp('updated_at', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
    })
    .createTable('verification_requests', (verificationRequestsTable) => {
      verificationRequestsTable.increments('id').primary();
      verificationRequestsTable.string('identifier');
      verificationRequestsTable.string('token').unique();
      verificationRequestsTable.timestamp('email_verified', { useTz: true });
      verificationRequestsTable
        .timestamp('created_at', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
      verificationRequestsTable
        .timestamp('updated_at', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema
    .dropTable('verification_requests')
    .dropTable('users')
    .dropTable('sessions')
    .dropTable('accounts');
}
