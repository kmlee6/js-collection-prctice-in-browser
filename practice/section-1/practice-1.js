'use strict';

function collectSameElements(collectionA, collectionB) {
	return collectionA.filter(ele => collectionB.includes(ele));
}
