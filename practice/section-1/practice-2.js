'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(ele => collectionB.map(eleB => eleB.includes(ele)).reduce((result, part) => result + part));
}
