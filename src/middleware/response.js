export default (result) => async (req, res) => {
  try {
    const data = await result(req);
    res.json({ responseData: data, status: 'SUCCRESS' });
  } catch (err) {
    res.json({ error: err, status: 'UNSUCCRESS' });
  }
};
