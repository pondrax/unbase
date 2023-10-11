/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "czusyx7m742cyol",
    "created": "2023-10-06 06:03:14.405Z",
    "updated": "2023-10-06 06:03:14.405Z",
    "name": "auditsResults",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bqcbzrny",
        "name": "code",
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
        "id": "airu4jjr",
        "name": "question",
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
        "id": "mmnfewhd",
        "name": "options",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "kzf4pzru",
        "name": "hint",
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
        "id": "tpwmy6un",
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
    "options": {
      "query": "SELECT \n  t.id,\n  t.code,\n  t.question,\n  t.options,\n  t.hint,\n  t.meta\nFROM templatesQuestions t"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("czusyx7m742cyol");

  return dao.deleteCollection(collection);
})
