'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var counter = 0;
	var tmp = collectionA.map(x => {if(x.match(/(?<index>.*)-(?<count>[0-9]*)/)==null){return [x];}else{let {index, count} = x.match(/(?<index>.*)-(?<count>[0-9]*)/).groups; return [...Array(parseInt(count))].map((_, i) => index)}}).reduce((result, part) => result.concat(part));
  return [...new Set(tmp)].map(x => [x, tmp.filter(y => y === x).length]).map(subArr => {return {key: subArr[0], count: subArr[1]}}).map(ele => {if(objectB["value"].includes(ele["key"])){ele["count"]-=((counter%3)+1); counter++} ;return ele});
}