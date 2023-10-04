/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9aqmzkk98f2fwzt")

  collection.listRule = "@request.auth.role.permissions ~ '/app/messages' ||\n@request.auth.role.permissions ~ '/app/*'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9aqmzkk98f2fwzt")

  collection.listRule = "@request.auth.role.permissions ~ '/app/*'"

  return dao.saveCollection(collection)
})
