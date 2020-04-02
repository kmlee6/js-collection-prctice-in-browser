'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter(ele => objectB["value"].includes(ele));
}
