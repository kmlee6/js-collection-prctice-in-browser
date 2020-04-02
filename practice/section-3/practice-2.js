'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var counter=0;
  return collectionA.map(ele => {if(objectB["value"].includes(ele["key"])){ele["count"]-=((counter%3)+1); counter++} ;return ele});
}
