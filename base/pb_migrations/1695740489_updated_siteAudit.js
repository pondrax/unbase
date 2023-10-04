/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u18ewkrnknwvynx")

  collection.name = "sitesAudit"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u18ewkrnknwvynx")

  collection.name = "siteAudit"

  return dao.saveCollection(collection)
})
