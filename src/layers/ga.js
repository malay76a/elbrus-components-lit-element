export function addData(eventAct, eventCat, obj, event) {
    let dataLayerEvent = {
        "event" : "LeroyMerlin",
        "eventAction" : eventAct,
        "eventCategory" : eventCat,
        "eventCategoryId" : obj.dataCategoryId,
        "eventCategoryName" : obj.dataCategory,
        "eventDivision" : obj.dataDivision,
        "eventSubdivision" : obj.dataSubDivision,
        "eventLabel" : event.detail.buttonType,
        "eventLocation" : obj.dataProductLocation,
        "eventPosition" : obj.dataPosition,
        "eventProductId" : obj.dataProductId,
        "eventProductName" : obj.dataProductName,
        "eventProductPrice" : obj.dataProductPrice,
    };

    if(obj.ecommerce) {
        dataLayerEvent.ecommerce = obj.ecommerce;
    }

    for (let event in dataLayerEvent) {
        dataLayerEvent[event] = dataLayerEvent[event] || "not set";
    }

    return dataLayerEvent;
}

