/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9aqmzkk98f2fwzt")

  collection.listRule = "@request.auth.role.permissions ~ '/app/messages'"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wxuydupc",
    "name": "to",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pkd9tyga",
    "name": "owner",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9aqmzkk98f2fwzt")

  collection.listRule = "@request.auth.id = user.id &&\n@request.auth.role.permissions ~ '/app/messages' ||\n@request.auth.role.permissions ~ '/app/*'\n"

  // remove
  collection.schema.removeField("wxuydupc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pkd9tyga",
    "name": "user",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
