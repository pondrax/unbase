/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1zrb3vpohyujrnt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apiv8mda",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1zrb3vpohyujrnt")

  // remove
  collection.schema.removeField("apiv8mda")

  return dao.saveCollection(collection)
})
