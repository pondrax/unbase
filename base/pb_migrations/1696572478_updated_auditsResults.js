/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("czusyx7m742cyol")

  collection.options = {
    "query": "SELECT \n  t.id,\n  a.id as aid,\n  a.audit,\n  a.answer,\n  a.finalScore,\n  a.media,\n  a.score,\n  t.code,\n  t.question,\n  t.options,\n  t.hint,\n  t.meta\nFROM templatesQuestions t\nLEFT JOIN auditsDetails a ON a.question = t.id "
  }

  // remove
  collection.schema.removeField("6voqmorn")

  // remove
  collection.schema.removeField("9ydekc8c")

  // remove
  collection.schema.removeField("rq5or23j")

  // remove
  collection.schema.removeField("1pqi0wrk")

  // remove
  collection.schema.removeField("wp2vcfzs")

  // remove
  collection.schema.removeField("qf3w7oxj")

  // remove
  collection.schema.removeField("vgfkzeck")

  // remove
  collection.schema.removeField("on7osuvp")

  // remove
  collection.schema.removeField("snixo4zg")

  // remove
  collection.schema.removeField("qozysuuw")

  // remove
  collection.schema.removeField("gwg06dpc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "caqfmvqh",
    "name": "aid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "range4u1qxh5t2g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lnxd2wnb",
    "name": "audit",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k8ed0v6xl9k5m8p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "svi4hjrj",
    "name": "answer",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbkvgjho",
    "name": "finalScore",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ubgh2vid",
    "name": "media",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q3ffg5jf",
    "name": "score",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mgqan3qk",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lruxngqo",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdacwtlo",
    "name": "options",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e78ht1u8",
    "name": "hint",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vcevmlxw",
    "name": "meta",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("czusyx7m742cyol")

  collection.options = {
    "query": "SELECT \n  t.id,\n  a.id as qid,\n  a.audit,\n  a.answer,\n  a.finalScore,\n  a.media,\n  a.score,\n  t.code,\n  t.question,\n  t.options,\n  t.hint,\n  t.meta\nFROM templatesQuestions t\nLEFT JOIN auditsDetails a ON a.question = t.id "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6voqmorn",
    "name": "qid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "range4u1qxh5t2g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9ydekc8c",
    "name": "audit",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k8ed0v6xl9k5m8p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rq5or23j",
    "name": "answer",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1pqi0wrk",
    "name": "finalScore",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wp2vcfzs",
    "name": "media",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qf3w7oxj",
    "name": "score",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vgfkzeck",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "on7osuvp",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "snixo4zg",
    "name": "options",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qozysuuw",
    "name": "hint",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gwg06dpc",
    "name": "meta",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("caqfmvqh")

  // remove
  collection.schema.removeField("lnxd2wnb")

  // remove
  collection.schema.removeField("svi4hjrj")

  // remove
  collection.schema.removeField("nbkvgjho")

  // remove
  collection.schema.removeField("ubgh2vid")

  // remove
  collection.schema.removeField("q3ffg5jf")

  // remove
  collection.schema.removeField("mgqan3qk")

  // remove
  collection.schema.removeField("lruxngqo")

  // remove
  collection.schema.removeField("pdacwtlo")

  // remove
  collection.schema.removeField("e78ht1u8")

  // remove
  collection.schema.removeField("vcevmlxw")

  return dao.saveCollection(collection)
})
