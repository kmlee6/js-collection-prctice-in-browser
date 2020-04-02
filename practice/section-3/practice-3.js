'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var counter = 0;
  return [...new Set(collectionA)].map(x => [x, collectionA.filter(y => y === x).length]).map(subArr => {return {key: subArr[0], count: subArr[1]}}).map(ele => {if(objectB["value"].includes(ele["key"])){ele["count"]-=((counter%3)+1); counter++} ;return ele});
}
