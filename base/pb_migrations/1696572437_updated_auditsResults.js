/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("czusyx7m742cyol")

  collection.options = {
    "query": "SELECT \n  a.id,\n  a.audit,\n  a.answer,\n  a.finalScore,\n  a.media,\n  a.score,\n  t.code,\n  t.question,\n  t.options,\n  t.hint,\n  t.meta\nFROM templatesQuestions t\nLEFT JOIN auditsDetails a ON a.question = t.id "
  }

  // remove
  collection.schema.removeField("i8lsqjvn")

  // remove
  collection.schema.removeField("j8bronvh")

  // remove
  collection.schema.removeField("4sizzaw1")

  // remove
  collection.schema.removeField("jikfkg5k")

  // remove
  collection.schema.removeField("e2iilrhh")

  // remove
  collection.schema.removeField("knrbhzvu")

  // remove
  collection.schema.removeField("wvf3uyti")

  // remove
  collection.schema.removeField("n4gdrnkp")

  // remove
  collection.schema.removeField("phq0fswr")

  // remove
  collection.schema.removeField("qh6v6g35")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dmuhibu1",
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
    "id": "htzw75tu",
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
    "id": "l3wycyei",
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
    "id": "jf5qq3ie",
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
    "id": "ph4qboaj",
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
    "id": "mgbsepqp",
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
    "id": "mubjflzr",
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
    "id": "7myrmunc",
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
    "id": "vgpjep3c",
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
    "id": "hcaszkwg",
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
    "query": "SELECT \n  a.audit,\n  a.answer,\n  a.finalScore,\n  a.media,\n  a.score,\n  t.id,\n  t.code,\n  t.question,\n  t.options,\n  t.hint,\n  t.meta\nFROM templatesQuestions t\nLEFT JOIN auditsDetails a ON a.question = t.id "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i8lsqjvn",
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
    "id": "j8bronvh",
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
    "id": "4sizzaw1",
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
    "id": "jikfkg5k",
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
    "id": "e2iilrhh",
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
    "id": "knrbhzvu",
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
    "id": "wvf3uyti",
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
    "id": "n4gdrnkp",
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
    "id": "phq0fswr",
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
    "id": "qh6v6g35",
    "name": "meta",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("dmuhibu1")

  // remove
  collection.schema.removeField("htzw75tu")

  // remove
  collection.schema.removeField("l3wycyei")

  // remove
  collection.schema.removeField("jf5qq3ie")

  // remove
  collection.schema.removeField("ph4qboaj")

  // remove
  collection.schema.removeField("mgbsepqp")

  // remove
  collection.schema.removeField("mubjflzr")

  // remove
  collection.schema.removeField("7myrmunc")

  // remove
  collection.schema.removeField("vgpjep3c")

  // remove
  collection.schema.removeField("hcaszkwg")

  return dao.saveCollection(collection)
})
