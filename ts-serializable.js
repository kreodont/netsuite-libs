(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ts-serializable"] = {}));
})(this, (function (exports) { 'use strict';

    const jsonIgnore = () => (target, propertyKey) => {
        Reflect.defineMetadata("ts-serializable:jsonIgnore", true, target, propertyKey);
    };

    const jsonName = (jsonPropertyName) => (target, propertyKey) => {
        Reflect.defineMetadata("ts-serializable:jsonName", jsonPropertyName, target, propertyKey);
    };

    exports.LogLevels = void 0;
    (function (LogLevels) {
        LogLevels[LogLevels["Trace"] = 0] = "Trace";
        LogLevels[LogLevels["Debug"] = 1] = "Debug";
        LogLevels[LogLevels["Information"] = 2] = "Information";
        LogLevels[LogLevels["Warning"] = 3] = "Warning";
        LogLevels[LogLevels["Error"] = 4] = "Error";
        LogLevels[LogLevels["Critical"] = 5] = "Critical";
        LogLevels[LogLevels["None"] = 6] = "None";
    })(exports.LogLevels || (exports.LogLevels = {}));

    exports.DefaultValueHandling = void 0;
    (function (DefaultValueHandling) {
        DefaultValueHandling[DefaultValueHandling["Include"] = 0] = "Include";
        DefaultValueHandling[DefaultValueHandling["Ignore"] = 1] = "Ignore";
        DefaultValueHandling[DefaultValueHandling["Populate"] = 2] = "Populate";
        DefaultValueHandling[DefaultValueHandling["IgnoreAndPopulate"] = 3] = "IgnoreAndPopulate"; // Not supported yet
    })(exports.DefaultValueHandling || (exports.DefaultValueHandling = {}));

    exports.NullValueHandling = void 0;
    (function (NullValueHandling) {
        NullValueHandling[NullValueHandling["Include"] = 0] = "Include";
        NullValueHandling[NullValueHandling["Ignore"] = 1] = "Ignore"; // Not supported yet
    })(exports.NullValueHandling || (exports.NullValueHandling = {}));

    exports.ReferenceLoopHandling = void 0;
    (function (ReferenceLoopHandling) {
        ReferenceLoopHandling[ReferenceLoopHandling["Error"] = 0] = "Error";
        ReferenceLoopHandling[ReferenceLoopHandling["Ignore"] = 1] = "Ignore";
        ReferenceLoopHandling[ReferenceLoopHandling["Serialize"] = 2] = "Serialize";
    })(exports.ReferenceLoopHandling || (exports.ReferenceLoopHandling = {}));

    exports.MissingMemberHandling = void 0;
    (function (MissingMemberHandling) {
        MissingMemberHandling[MissingMemberHandling["Ignore"] = 0] = "Ignore";
        MissingMemberHandling[MissingMemberHandling["Error"] = 1] = "Error"; // Not supported yet
    })(exports.MissingMemberHandling || (exports.MissingMemberHandling = {}));

    exports.DateFormatHandling = void 0;
    (function (DateFormatHandling) {
        DateFormatHandling[DateFormatHandling["IsoDateFormat"] = 0] = "IsoDateFormat";
        DateFormatHandling[DateFormatHandling["MicrosoftDateFormat"] = 1] = "MicrosoftDateFormat"; // Not supported yet
    })(exports.DateFormatHandling || (exports.DateFormatHandling = {}));

    // From newtonsoft https://www.newtonsoft.com/json/help/html/SerializationSettings.htm
    class SerializationSettings {
        constructor() {
            this.dateFormatHandling = exports.DateFormatHandling.IsoDateFormat;
            this.missingMemberHandling = exports.MissingMemberHandling.Ignore;
            this.referenceLoopHandling = exports.ReferenceLoopHandling.Serialize;
            this.nullValueHandling = exports.NullValueHandling.Include;
            this.defaultValueHandling = exports.DefaultValueHandling.Ignore;
            this.namingStrategy = null;
            this.logLevel = exports.LogLevels.Warning;
        }
    }

    /* eslint-disable max-lines */
    /**
     * Class how help you deserialize object to classes.
     *
     * @export
     * @class Serializable
     */
    class Serializable {
        /**
         * Deserialize object from static method.
         *
         * Example:
         * const obj: MyObject = MyObject.fromJSON({...data});
         *
         * @static
         * @param {object} json
         * @returns {object}
         * @memberof Serializable
         */
        static fromJSON(json, settings) {
            return new this().fromJSON(json, settings);
        }
        /**
         * Deserialize object from static method.
         *
         * Example:
         * const obj: MyObject = MyObject.fromString({...data});
         *
         * @static
         * @param {object} json
         * @returns {object}
         * @memberof Serializable
         */
        static fromString(str, settings) {
            return new this().fromJSON(JSON.parse(str), settings);
        }
        /**
         * Fill property of current model by data from string.
         *
         * Example:
         * const obj: MyObject = new MyObject().fromString("{...data}"");
         *
         * @param {string} str
         * @returns {this}
         * @memberof Serializable
         */
        fromString(str, settings) {
            return this.fromJSON(JSON.parse(str), settings);
        }
        /**
         * Fill property of current model by data from json.
         *
         * Example:
         * const obj: MyObject = new MyObject().fromJSON({...data});
         *
         * @param {object} json
         * @returns {this}
         * @memberof Serializable
         */
        fromJSON(json, settings) {
            const unknownJson = json;
            if (unknownJson === null ||
                Array.isArray(unknownJson) ||
                typeof unknownJson !== "object") {
                this.onWrongType(String(unknownJson), "is not object", unknownJson);
                return this;
            }
            // eslint-disable-next-line guard-for-in
            for (const thisProp in this) {
                // Naming strategy and jsonName decorator
                let jsonProp = this.getJsonPropertyName(thisProp, settings);
                // For deep copy
                if (!unknownJson?.hasOwnProperty(jsonProp) && unknownJson?.hasOwnProperty(thisProp)) {
                    jsonProp = thisProp;
                }
                if (unknownJson?.hasOwnProperty(jsonProp) &&
                    this.hasOwnProperty(thisProp) &&
                    Reflect.hasMetadata("ts-serializable:jsonTypes", this.constructor.prototype, thisProp)) {
                    const acceptedTypes = Reflect.getMetadata("ts-serializable:jsonTypes", this.constructor.prototype, thisProp);
                    const jsonValue = Reflect.get(unknownJson, jsonProp);
                    const extractedValue = this.deserializeProperty(thisProp, acceptedTypes, jsonValue, settings);
                    Reflect.set(this, thisProp, extractedValue);
                }
            }
            return this;
        }
        /**
         * Process serialization for @jsonIgnore decorator
         *
         * @returns {object}
         * @memberof Serializable
         */
        toJSON() {
            const fromJson = { ...this };
            const toJson = {};
            for (const prop in fromJson) {
                // Json.hasOwnProperty(prop) - preserve for deserialization for other classes with methods
                if (fromJson.hasOwnProperty(prop) && this.hasOwnProperty(prop)) {
                    if (Reflect.getMetadata("ts-serializable:jsonIgnore", this.constructor.prototype, prop) !== true) {
                        const toProp = this.getJsonPropertyName(prop);
                        Reflect.set(toJson, toProp, Reflect.get(fromJson, prop));
                    }
                }
            }
            return toJson;
        }
        /**
         * Process serialization for @jsonIgnore decorator
         *
         * @returns {string}
         * @memberof Serializable
         */
        toString() {
            return JSON.stringify(this.toJSON());
        }
        /**
         * Process exceptions from wrong types.
         * By default just print warning in console, but can by override for drop exception or logging to backend.
         *
         * @protected
         * @param {string} prop
         * @param {string} message
         * @param {(unknown)} jsonValue
         * @memberof Serializable
         */
        onWrongType(prop, message, jsonValue) {
            // eslint-disable-next-line no-console
            console.error(`${this.constructor.name}.fromJSON: json.${prop} ${message}:`, jsonValue);
        }
        /**
         * //todo: write jsdoc
         *
         * @private
         * @param {object} object
         * @param {string} prop
         * @param {AcceptedTypes[]} acceptedTypes
         * @param {(unknown)} jsonValue
         * @returns {(Object | null | void)}
         * @memberof Serializable
         */
        deserializeProperty(prop, acceptedTypes, jsonValue, settings) {
            for (const acceptedType of acceptedTypes) { // Type Symbol is not a property
                if ( // Null
                acceptedType === null &&
                    jsonValue === null) {
                    return null;
                }
                else if ( // Void, for deep copy classes only, json don't have void type
                acceptedType === void 0 &&
                    jsonValue === void 0) {
                    return void 0;
                }
                else if ( // Boolean, Boolean
                acceptedType === Boolean &&
                    (typeof jsonValue === "boolean" || jsonValue instanceof Boolean)) {
                    return Boolean(jsonValue);
                }
                else if ( // Number, Number
                acceptedType === Number &&
                    (typeof jsonValue === "number" || jsonValue instanceof Number)) {
                    return Number(jsonValue);
                }
                else if ( // String, String
                acceptedType === String &&
                    (typeof jsonValue === "string" || jsonValue instanceof String)) {
                    return String(jsonValue);
                }
                else if ( // Object, Object
                acceptedType === Object &&
                    (typeof jsonValue === "object")) {
                    return Object(jsonValue);
                }
                else if ( // Date
                acceptedType === Date &&
                    (typeof jsonValue === "string" || jsonValue instanceof String || jsonValue instanceof Date)) {
                    // 0 year, 0 month, 0 days, 0 hours, 0 minutes, 0 seconds
                    let unicodeTime = new Date("0000-01-01T00:00:00.000").getTime();
                    if (typeof jsonValue === "string") {
                        unicodeTime = Date.parse(jsonValue);
                    }
                    else if (jsonValue instanceof String) {
                        unicodeTime = Date.parse(String(jsonValue));
                    }
                    else if (jsonValue instanceof Date) {
                        unicodeTime = jsonValue.getTime();
                    }
                    if (isNaN(unicodeTime)) { // Preserve invalid time
                        this.onWrongType(prop, "is invalid date", jsonValue);
                    }
                    return new Date(unicodeTime);
                }
                else if ( // Array
                Array.isArray(acceptedType) &&
                    Array.isArray(jsonValue)) {
                    if (acceptedType[0] === void 0) {
                        this.onWrongType(prop, "invalid type", jsonValue);
                    }
                    return jsonValue.map((arrayValue) => this.deserializeProperty(prop, acceptedType, arrayValue, settings));
                }
                else if ( // Serializable
                acceptedType !== null &&
                    acceptedType !== void 0 &&
                    !Array.isArray(acceptedType) &&
                    (acceptedType.prototype instanceof Serializable ||
                        Boolean(Reflect.getMetadata("ts-serializable:jsonObjectExtended", acceptedType))) &&
                    jsonValue !== null &&
                    jsonValue !== void 0 &&
                    typeof jsonValue === "object" && !Array.isArray(jsonValue)) {
                    const TypeConstructor = acceptedType;
                    return new TypeConstructor().fromJSON(jsonValue, settings);
                }
                else if ( // Instance any other class, not Serializable, for parse from other classes instance
                acceptedType instanceof Function &&
                    jsonValue instanceof acceptedType) {
                    return jsonValue;
                }
            }
            // Process wrong type and return default value
            this.onWrongType(prop, "is invalid", jsonValue);
            return Reflect.get(this, prop);
        }
        getJsonPropertyName(thisProperty, settings) {
            if (Reflect.hasMetadata("ts-serializable:jsonName", this.constructor.prototype, thisProperty)) {
                return Reflect.getMetadata("ts-serializable:jsonName", this.constructor.prototype, thisProperty);
            }
            if (settings?.namingStrategy) {
                return settings.namingStrategy.toJsonName(thisProperty);
            }
            if (Reflect.hasMetadata("ts-serializable:jsonObject", this.constructor)) {
                const objectSettings = Reflect.getMetadata("ts-serializable:jsonObject", this.constructor);
                return objectSettings.namingStrategy?.toJsonName(thisProperty) ?? thisProperty;
            }
            if (Serializable.defaultSettings.namingStrategy) {
                const { namingStrategy } = Serializable.defaultSettings;
                return namingStrategy.toJsonName(thisProperty) ?? thisProperty;
            }
            return thisProperty;
        }
    }
    /**
     * Global setting for serialization and deserialization
     *
     * @static
     * @type {SerializationSettings}
     * @memberof Serializable
     */
    Serializable.defaultSettings = new SerializationSettings();

    const jsonObject = (settings, extend) => (target) => {
        if (extend === true) {
            Reflect.set(target, "defaultSettings", Serializable.defaultSettings);
            Reflect.set(target, "fromJSON", Serializable.fromJSON);
            Reflect.set(target.prototype, "fromJSON", Serializable.prototype.fromJSON);
            Reflect.set(target.prototype, "deserializeProperty", Serializable.prototype.deserializeProperty);
            Reflect.set(target.prototype, "getJsonPropertyName", Serializable.prototype.getJsonPropertyName);
            Reflect.set(target.prototype, "onWrongType", Serializable.prototype.onWrongType);
            Reflect.set(target.prototype, "toJSON", Serializable.prototype.toJSON);
            Reflect.defineMetadata("ts-serializable:jsonObjectExtended", true, target);
        }
        if (settings) {
            Reflect.defineMetadata("ts-serializable:jsonObject", settings, target);
        }
    };

    const jsonProperty = (...args) => (target, propertyKey) => {
        Reflect.defineMetadata("ts-serializable:jsonTypes", args, target, propertyKey);
    };

    class SnakeCaseNamingStrategy {
        fromJsonName(name) {
            return name.replace(/_\w/gu, (group) => group[1].toUpperCase());
        }
        toJsonName(name) {
            return name
                .split(/(?=[A-Z])/u)
                .join("_")
                .toLowerCase();
        }
    }

    class PascalCaseNamingStrategy {
        fromJsonName(name) {
            return name.slice(0, 1).toLowerCase() + name.slice(1, name.length);
        }
        toJsonName(name) {
            return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
        }
    }

    class KebabCaseNamingStrategy {
        fromJsonName(name) {
            return name.replace(/-\w/gu, (group) => group[1].toUpperCase());
        }
        toJsonName(name) {
            return name
                .split(/(?=[A-Z])/u)
                .join("-")
                .toLowerCase();
        }
    }

    exports.KebabCaseNamingStrategy = KebabCaseNamingStrategy;
    exports.PascalCaseNamingStrategy = PascalCaseNamingStrategy;
    exports.Serializable = Serializable;
    exports.SerializationSettings = SerializationSettings;
    exports.SnakeCaseNamingStrategy = SnakeCaseNamingStrategy;
    exports.jsonIgnore = jsonIgnore;
    exports.jsonName = jsonName;
    exports.jsonObject = jsonObject;
    exports.jsonProperty = jsonProperty;

}));
//# sourceMappingURL=bundle.js.map
