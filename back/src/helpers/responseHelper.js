function responseHelper(res, status, success, message = null, data = null) {
  return res.status(status).json({
    success,
    message,
    data
  });
}

export default responseHelper;