DXAJS.Regions = {
  getRegionData(pageData) {
    const regionData = {};

    pageData.Regions.forEach((region) => {
      const regionName = region.MvcData.ViewName;
      delete region.MvcData;

      regionData[regionName] = region;
    });

    return regionData;
  },
  getRegionsFromMarkup() {
    return [...document.querySelectorAll('[data-region]')];
  },
  getEntityByCT(entityName, entityData) {
    let result;

    entityData.forEach((entity) => {
      if (entity.ComponentTemplate.Metadata.view === entityName) {
        result = entity;
      }
    });

    return result;
  },
  getEntities(regionName, regionData) {
    return regionData[regionName].Entities;
  },
  renderEntities(entities, regionElement) {
    entities.forEach((entity) => {
      const componentPresentation = DXAJS.Views[entity.ComponentTemplate.Title](entity.Content);
      DXAJS.Controllers.mount(regionElement, componentPresentation);
    });
  },
  renderRegions(pageData) {
    const regionElements = this.getRegionsFromMarkup();
    const regionData = this.getRegionData(pageData);

    regionElements.forEach((regionElement) => {
      const regionName = regionElement.dataset.region;
      const entities = this.getEntities(regionName, regionData);

      this.renderEntities(entities, regionElement);
    });
  },
};
