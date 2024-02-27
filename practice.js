const { pool } = require('./config');

const getArticles = async (req, res, next) => {
  try {
    const data = await pool.query(
      'SELECT * FROM article ORDER BY created_on DESC;',
    );
    if (data.rowCount == 0) return res.status(404).send('No article exists');
    return res.status(200).json({
      status: 200,
      message: 'All articles:',
      data: data.rows,
    });
  } catch (error) {
    return next(error);
  }
};
