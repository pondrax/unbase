/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("range4u1qxh5t2g")

  collection.name = "auditsDetails"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("range4u1qxh5t2g")

  collection.name = "resultsDetails"

  return dao.saveCollection(collection)
})
