var Entity, LocalizedStringRef, r;

r = require('restructure');

Entity = require('../entity');

LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  xp: r.uint32le,
  factor: r.floatle,
  outdoorHours: r.floatle,
  innHours: r.floatle,
  name: LocalizedStringRef,
  threshold: r.floatle
});