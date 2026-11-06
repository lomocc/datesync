let _ts = 0;
function parseTime(value) {
  if (typeof value !== 'number') {
    if (typeof value === 'string') {
      value = Date.parse(value);
    } else if (value instanceof Date) {
      value = value.getTime();
    } else {
      throw new Error('value should be number(length=13)');
    }
  } else if (value < 1e10) {
    value = value * 1000;
  }
  return value;
}
function DateSync(value) {
  if (value != null) {
    _ts = parseTime(value) - Date.now();
  }
  return _ts + Date.now();
}
DateSync.now = DateSync;
DateSync.setTime = DateSync;
DateSync.getTime = DateSync;

module.exports = DateSync;
