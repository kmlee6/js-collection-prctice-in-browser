'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(ele => {ele["count"]=objectB["value"].includes(ele["key"])?ele["count"]-1:ele["count"];return ele});
}
