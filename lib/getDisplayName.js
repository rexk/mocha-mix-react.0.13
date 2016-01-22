function getDisplayName(tagName, name) {
  if (name) {
    return 'MixStub(' + tagName.toLowerCase() + '.' + name +')';
  }

  return 'MixStub(' + tagName.toLowerCase() + ')';
}

module.exports = getDisplayName;
