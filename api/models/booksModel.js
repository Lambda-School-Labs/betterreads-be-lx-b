const db = require('../../data/db-config');

const findAll = async () => {
  return await db('books');
};

const findBy = (filter) => {
  return db('books').where(filter);
};

const findById = async (id) => {
  return db('books').where({ id }).first();
  // .select(
  //   'id',
  //   'googleId',
  //   'title',
  //   'eTag',
  //   'authors',
  //   'publisher',
  //   'publishDate',
  //   'description',
  //   'isbn10',
  //   'isbn13',
  //   'pageCount',
  //   'categories',
  //   'maturityRating',
  //   'thumbnail',
  //   'smallThumbnail',
  //   'language',
  //   'webReaderLink',
  //   'textSnippet',
  //   'bookFormats',
  //   'retailPrice'
  // );
};

const create = async (book) => {
  const [id] = await db('books').insert(book).returning('id');
  return findById(id);
};

const update = (id, book) => {
  return db('books').where({ id: id }).first().update(book).returning('*');
};

const remove = async (id) => {
  return await db('profiles').where({ id }).del();
};

module.exports = { findAll, findBy, findById, create, update, remove };
