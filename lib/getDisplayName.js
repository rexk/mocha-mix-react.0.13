function getDisplayName(tagName, name) {
  if (name) {
    return 'MixStub(' + name + '.' + tagName.toLowerCase() +')';
  }

  return 'MixStub(' + tagName.toLowerCase() + ')';
}

module.exports = getDisplayName;
