"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8900],{8481:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(4848),s=t(8453);const r=[];function o(e){const n={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},9659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var i=t(4848),s=t(8453),r=t(8481);const o={sidebar_position:16,title:"Json Form"},a=void 0,c={id:"mock-apps/components/json-form",title:"Json Form",description:"Description",source:"@site/docs/mock-apps/components/json-form.md",sourceDirName:"mock-apps/components",slug:"/mock-apps/components/json-form",permalink:"/docs/next/mock-apps/components/json-form",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/components/json-form.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,title:"Json Form"},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/docs/next/mock-apps/components/"},next:{title:"Custom Button",permalink:"/docs/next/mock-apps/components/custom-button"}},d={},h=[...r.RM,{value:"Description",id:"description",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Props",id:"props",level:2},{value:"Example",id:"example",level:2},{value:"Manual schema input:",id:"manual-schema-input",level:3},{value:"Remote schema URL",id:"remote-schema-url",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The JsonForm component renders a dynamic form based on a provided JSON schema. It allows for flexible form creation and data entry, supporting various field types and structures defined in the schema. The component can be initialised with default data and customised with CSS classes and styles. It also supports advanced features like data construction rules and external schema references, making it suitable for complex form scenarios."}),"\n",(0,i.jsx)(n.p,{children:"As a developer using the mock app system, you can now provide a remote schema URI to the JsonForm component or manually specify a local schema. This allows for the dynamic rendering of forms based on externally hosted schemas or custom local schemas, making the system more flexible and adaptable."}),"\n",(0,i.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:'The name of the component (should be "JsonForm")'}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:'The type of the component (should be "EntryData")'}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/component-type",children:"ComponentType"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"props"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"The properties for the JsonForm component"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/mock-apps/components/json-form#props",children:"Props"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"schema"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"The JSON schema that defines the structure of the form. It can either be a local object or an object with a URL property pointing to an external schema."}),(0,i.jsxs)(n.td,{children:["Object or ",(0,i.jsx)(n.code,{children:"{ url: string }"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"constructData"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Defines the schema for constructing event data, including field mappings, default values, and data generation rules."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/mock-apps/common/construct-data",children:"ConstructData"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"data"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"The initial data for the form"}),(0,i.jsx)(n.td,{children:"Object"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"className"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"CSS class name for styling the form"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"style"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"CSS styles to apply to the form"}),(0,i.jsx)(n.td,{children:"Object"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.h3,{id:"manual-schema-input",children:"Manual schema input:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "name": "JsonForm",\n    "type": "EntryData",\n    "props": {\n        "schema": {\n            "type": "object",\n            "additionalProperties": false,\n            "properties": {\n                "sourceParty": {\n                "$ref": "#/$defs/Party",\n                "description": "The source party for this supply chain transaction - typically the seller party"\n                },\n                "destinationParty": {\n                "$ref": "#/$defs/Party",\n                "description": "The destination party for this supply chain transaction - typically the buyer party."\n                },\n                "epcList": {\n                "type": "array",\n                "items": { "$ref": "#/$defs/Item" },\n                "description": "The list of uniquely identified trade items included in this supply chain transaction."\n                },\n                "quantityList": {\n                "type": "array",\n                "items": { "$ref": "#/$defs/QuantityElement" },\n                "description": "List of quantified product classes that are included in this transaction.  Used when the trade items do not have unique identifiers (eg 100 reels of yarn)"\n                },\n                "referenceDocument": {\n                "$ref": "#/$defs/TradeDocument",\n                "description": "The supply chain document reference for this transaction event - eg the invoice, order, or dispatch advice"\n                },\n                "eventID": {\n                "x-jargon-isKey": true,\n                "readOnly": true,\n                "type": "string",\n                "description": "The unique identifier of this event - SHOULD be a UUID"\n                },\n                "eventTime": {\n                "type": "string",\n                "format": "date-time",\n                "description": "The ISO-8601 date time when the event occurred."\n                },\n                "action": {\n                "type": "string",\n                "enum": ["observe", "add", "delete"],\n                "example": "observe",\n                "description": "Code describing how an event relates to the lifecycle of the entity impacted by the event."\n                },\n                "disposition": {\n                "type": "string",\n                "x-external-enumeration": "https://ref.gs1.org/cbv/Disp",\n                "description": "Disposition code describing the state of the item after the event. \\n\\n    This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/Disp\\n    "\n                },\n                "bizStep": {\n                "type": "string",\n                "x-external-enumeration": "https://ref.gs1.org/cbv/BizStep",\n                "description": "A business step code drawn from a controlled vocabulary. \\n\\n    This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/BizStep\\n    "\n                },\n                "bizLocation": {\n                "type": "string",\n                "format": "uri",\n                "description": "A Business Location is a uniquely identified and discretely recorded geospatial location that is meant to designate the specific place where an object is assumed to be following an EPCIS event until it is reported to be at a different Business Location by a subsequent EPCIS event. The bizLocation must be a resolvable URI that links to facility information and geolocation data."\n                },\n                "sensorElementList": {\n                "type": "array",\n                "items": { "$ref": "#/$defs/SensorElement" },\n                "description": "An array (one for each sensor) of sensor device data sets associated with the event. "\n                }\n            },\n            "description": "Transaction represents an event in which one or more objects become associated or disassociated with one or more identified business transactions - such as the purchase / shipment of goods between buyer and seller.",\n            "$schema": "https://json-schema.org/draft/2020-12/schema",\n            "$defs": {\n                "TransactionEvent": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "sourceParty": {\n                    "$ref": "#/$defs/Party",\n                    "description": "The source party for this supply chain transaction - typically the seller party"\n                    },\n                    "destinationParty": {\n                    "$ref": "#/$defs/Party",\n                    "description": "The destination party for this supply chain transaction - typically the buyer party."\n                    },\n                    "epcList": {\n                    "type": "array",\n                    "items": { "$ref": "#/$defs/Item" },\n                    "description": "The list of uniquely identified trade items included in this supply chain transaction."\n                    },\n                    "quantityList": {\n                    "type": "array",\n                    "items": { "$ref": "#/$defs/QuantityElement" },\n                    "description": "List of quantified product classes that are included in this transaction.  Used when the trade items do not have unique identifiers (eg 100 reels of yarn)"\n                    },\n                    "referenceDocument": {\n                    "$ref": "#/$defs/TradeDocument",\n                    "description": "The supply chain document reference for this transaction event - eg the invoice, order, or dispatch advice"\n                    },\n                    "eventID": {\n                    "x-jargon-isKey": true,\n                    "readOnly": true,\n                    "type": "string",\n                    "description": "The unique identifier of this event - SHOULD be a UUID"\n                    },\n                    "eventTime": {\n                    "type": "string",\n                    "format": "date-time",\n                    "description": "The ISO-8601 date time when the event occurred."\n                    },\n                    "action": {\n                    "type": "string",\n                    "enum": ["observe", "add", "delete"],\n                    "example": "observe",\n                    "description": "Code describing how an event relates to the lifecycle of the entity impacted by the event."\n                    },\n                    "disposition": {\n                    "type": "string",\n                    "x-external-enumeration": "https://ref.gs1.org/cbv/Disp",\n                    "description": "Disposition code describing the state of the item after the event. \\n\\n    This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/Disp\\n    "\n                    },\n                    "bizStep": {\n                    "type": "string",\n                    "x-external-enumeration": "https://ref.gs1.org/cbv/BizStep",\n                    "description": "A business step code drawn from a controlled vocabulary. \\n\\n    This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/BizStep\\n    "\n                    },\n                    "bizLocation": {\n                    "type": "string",\n                    "format": "uri",\n                    "description": "A Business Location is a uniquely identified and discretely recorded geospatial location that is meant to designate the specific place where an object is assumed to be following an EPCIS event until it is reported to be at a different Business Location by a subsequent EPCIS event. The bizLocation must be a resolvable URI that links to facility information and geolocation data."\n                    },\n                    "sensorElementList": {\n                    "type": "array",\n                    "items": { "$ref": "#/$defs/SensorElement" },\n                    "description": "An array (one for each sensor) of sensor device data sets associated with the event. "\n                    }\n                },\n                "description": "Transaction represents an event in which one or more objects become associated or disassociated with one or more identified business transactions - such as the purchase / shipment of goods between buyer and seller."\n                },\n                "Party": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "id": {\n                    "type": "string",\n                    "description": "The decentralised identifier of the party - must be a W3C DID."\n                    },\n                    "name": {\n                    "type": "string",\n                    "description": "The name of the organization or company, represented as a text string."\n                    },\n                    "identifiers": {\n                    "type": "array",\n                    "items": { "$ref": "#/$defs/Identifier" },\n                    "description": "A list of unique business identifiers assigned to the party - such as tax registration numbers."\n                    }\n                },\n                "description": "The Party class represents an entity such as an organization, or a company that manufactured the product."\n                },\n                "Identifier": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "scheme": {\n                    "type": "string",\n                    "format": "uri",\n                    "description": "the identifier scheme as defined by the registrar that manages the identifier registry. If the identifier scheme is registered with UNTP then this URI can use used to dicsover the resolution method (to get more data) and the verification method (to prove ownership)."\n                    },\n                    "identifierValue": {\n                    "type": "string",\n                    "description": "The value of the identifier within the scheme"\n                    },\n                    "binding": {\n                    "$ref": "#/$defs/Evidence",\n                    "description": "Link to evidence that attests to the validity and ownership of the identifer. "\n                    }\n                },\n                "description": "An identifier of a party, product, or facility that is defined by an identifier scheme and idenfier value and, optinally, verification evidence "\n                },\n                "Evidence": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "type": {\n                    "type": "string",\n                    "enum": ["w3c_vc", "iso_mdl", "document", "website", "other"],\n                    "example": "w3c_vc",\n                    "description": "Format of the evidence (verifiable credential, document, website, etc)"\n                    },\n                    "assuranceLevel": {\n                    "type": "string",\n                    "enum": ["Self", "Commercial", "Buyer", "Membership", "Unspecified", "3rdParty"],\n                    "example": "Self",\n                    "description": "The assurance level of the evidence (self declaration, 2nd party, 3rd party, accredited auditor)"\n                    },\n                    "reference": {\n                    "type": "string",\n                    "format": "uri",\n                    "description": "The URL at which the evidence data can be found.  "\n                    }\n                },\n                "description": "Evidence to support a conformity or identity claim. "\n                },\n                "Item": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "itemID": {\n                    "x-jargon-isKey": true,\n                    "type": "string",\n                    "format": "uri",\n                    "description": "The globally unique identifier (eg GS1 GTIN or digital link) of the product item.  "\n                    },\n                    "name": {\n                    "type": "string",\n                    "description": "The name of the product class to which the product item belongs.  "\n                    }\n                },\n                "description": "A specific trade item /product code which could be either a product serial number or a consignment identifier "\n                },\n                "QuantityElement": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "epcClass": {\n                    "type": "string",\n                    "format": "uri",\n                    "description": "THe identifier of a product class (as opposed to a product instance) such as a GTIN code for a manufactured product."\n                    },\n                    "quantity": {\n                    "type": "number",\n                    "description": "The numeric quantity of the product class (eg 100 kg of cotton)"\n                    },\n                    "uom": {\n                    "type": "string",\n                    "x-external-enumeration": "https://vocabulary.uncefact.org/UnitMeasureCode",\n                    "description": "The unit of measure for the quantity value (eg Kg or meters etc) using the UNECE Rec 20 unit of measure codelist.\\n\\n    This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://vocabulary.uncefact.org/UnitMeasureCode\\n    "\n                    }\n                },\n                "description": "The quantity element is used to define the quantities (eg 100), units of measure (eg Kg) and product class (eg GTIN or other class identifier) of products that are inputs or outputs or the subject of supply chain events.  ",\n                "required": ["quantity"]\n                },\n                "TradeDocument": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "type": {\n                    "type": "string",\n                    "x-external-enumeration": "https://ref.gs1.org/cbv/BTT",\n                    "description": "The document type representing the trade transaction drawn from the business transaction type vocabulary.\\n\\n    This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://ref.gs1.org/cbv/BTT\\n    "\n                    },\n                    "identifier": {\n                    "type": "string",\n                    "description": "The identifier of the trade transaction document - eg an invoice number or bill of lading number.  Must be unique for a given source party"\n                    },\n                    "documentURL": {\n                    "type": "string",\n                    "format": "uri",\n                    "description": "The URL of the referenced trade document. For integrity reasons, it is recommended (but not required) that the documentURL is a hashlink (https://w3c-ccg.github.io/hashlink/) so that if the document the URL is changed then the hash verification will fail."\n                    }\n                },\n                "description": "A trade transaction between two parties such as an invoice, purchase order, or shipping notification."\n                },\n                "SensorElement": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "sensorMetadata": {\n                    "$ref": "#/$defs/Sensor",\n                    "description": "Data that describes the physical sensor that recorded the sensor data set."\n                    },\n                    "sensorReport": {\n                    "type": "array",\n                    "items": { "$ref": "#/$defs/SensorData" },\n                    "description": "A list of sensor readings from the given sensor relevant to the traceability event context."\n                    },\n                    "sensorIntegrityProof": {\n                    "type": "string",\n                    "format": "uri",\n                    "description": "An optional reference to a verifiable credential signed by the sensor device or device manufacturer that contains the digitally signed raw data associated with this sensor report."\n                    }\n                },\n                "description": "A SensorElement is used to carry data related to an event that is captured one sensor such as an IoT device. Include one sensor property and an array of sensor data values."\n                },\n                "Sensor": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "device": {\n                    "$ref": "#/$defs/Item",\n                    "description": "The device Identifier for the sensor as a URI (typically an EPC)"\n                    },\n                    "dataProcessingMethod": {\n                    "type": "string",\n                    "format": "uri",\n                    "description": "The data processing method used by the sensor - should reference a documented standard criteria as a URI"\n                    }\n                },\n                "description": "A physical sensor that records a sensor data set."\n                },\n                "SensorData": {\n                "type": "object",\n                "additionalProperties": false,\n                "properties": {\n                    "time": {\n                    "type": "string",\n                    "format": "date-time",\n                    "description": "the timestamp at which the sensor reading was made."\n                    },\n                    "type": {\n                    "type": "string",\n                    "format": "uri",\n                    "description": "the measurement type of the sensor reading, as a URI reference to a measurement method specification."\n                    },\n                    "value": { "type": "number", "description": "the sensor reading" },\n                    "uom": {\n                    "type": "string",\n                    "x-external-enumeration": "https://vocabulary.uncefact.org/UnitMeasureCode",\n                    "description": "the unit of measure for the sensor reading\\n\\n    This is an enumerated value, but the list of valid values are too big, or change too often to include here. You can access the list of allowable values at this URL:  https://vocabulary.uncefact.org/UnitMeasureCode\\n    "\n                    }\n                },\n                "description": "A data point read by a sensor."\n                }\n            }\n        }\n    },\n    "constructData": {\n        "mappingFields": [\n        {\n            "sourcePath": "/vc/credentialSubject/productIdentifier/0/identifierValue",\n            "destinationPath": "/eventID"\n        },\n        {\n            "sourcePath": "/vc/credentialSubject/productIdentifier/0/identifierValue",\n            "destinationPath": "/epcList/index/name"\n        },\n        {\n            "sourcePath": "/linkResolver",\n            "destinationPath": "/epcList/index/itemID"\n        }\n        ],\n        "dummyFields": [\n        {\n            "path": "/action",\n            "data": "observe"\n        },\n        {\n            "path": "/disposition",\n            "data": "https://ref.gs1.org/cbv/Disp/in_transit"\n        },\n        {\n            "path": "/bizStep",\n            "data": "https://ref.gs1.org/cbv/BizStep/receiving"\n        },\n        {\n            "path": "/bizLocation",\n            "data": "https://example.com/warehouse"\n        },\n        {\n            "path": "/sourceParty",\n            "data": {\n            "id": "did:web:example.com",\n            "name": "Steel Mill 1",\n            "identifiers": [\n                {\n                "scheme": "https://example.com/scheme/source",\n                "identifierValue": "SRC123456",\n                "binding": {\n                    "type": "w3c_vc",\n                    "assuranceLevel": "3rdParty",\n                    "reference": "https://example.com/source_evidence"\n                }\n                }\n            ]\n            }\n        },\n        {\n            "path": "/destinationParty",\n            "data": {\n            "id": "did:web:example.com",\n            "name": "Steel Processor",\n            "identifiers": [\n                {\n                "scheme": "https://example.com/scheme/destination",\n                "identifierValue": "DST7891011",\n                "binding": {\n                    "type": "w3c_vc",\n                    "assuranceLevel": "3rdParty",\n                    "reference": "https://example.com/destination_evidence"\n                }\n                }\n            ]\n            }\n        }\n        ],\n        "generationFields": [\n        {\n            "path": "/eventID",\n            "handler": "generateIdWithSerialNumber"\n        },\n        {\n            "path": "/eventTime",\n            "handler": "generateCurrentDatetime"\n        }\n        ]\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"remote-schema-url",children:"Remote schema URL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n        "name": "JsonForm",\n        "type": "EntryData",\n        "props": {\n            "schema": {\n                "url": "https://jargon.sh/user/unece/DigitalProductPassport/v/0.0.1/artefacts/jsonSchemas/render.json?class=ProductPassport"\n            }\n        }\n        ...\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);