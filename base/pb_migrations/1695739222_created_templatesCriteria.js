/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4gk06mtkz5sc8nf",
    "created": "2023-09-26 14:40:22.889Z",
    "updated": "2023-09-26 14:40:22.889Z",
    "name": "templatesCriteria",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tz151mum",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gm8vf9wh",
        "name": "description",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "pasfgd4h",
        "name": "meta",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4gk06mtkz5sc8nf");

  return dao.deleteCollection(collection);
})
