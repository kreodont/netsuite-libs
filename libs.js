define(['exports', 'N/log', 'N/query', 'N/url', 'N/email', 'N', 'N/file'], (function (exports, log$3, query, url, email, N, file) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
      e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
        if (k !== 'default' && !(k in n)) {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    });
    return Object.freeze(n);
  }

  var log__default = /*#__PURE__*/_interopDefaultLegacy(log$3);
  var query__default = /*#__PURE__*/_interopDefaultLegacy(query);
  var url__default = /*#__PURE__*/_interopDefaultLegacy(url);
  var email__default = /*#__PURE__*/_interopDefaultLegacy(email);
  var file__default = /*#__PURE__*/_interopDefaultLegacy(file);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var fails$W = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$V = fails$W;
  var functionBindNative = !fails$V(function () {
    // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
    var test = function () {
      /* empty */
    }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;
  var FunctionPrototype$3 = Function.prototype;
  var bind$b = FunctionPrototype$3.bind;
  var call$x = FunctionPrototype$3.call;
  var uncurryThis$M = NATIVE_BIND$3 && bind$b.bind(call$x, call$x);
  var functionUncurryThis = NATIVE_BIND$3 ? function (fn) {
    return fn && uncurryThis$M(fn);
  } : function (fn) {
    return fn && function () {
      return call$x.apply(fn, arguments);
    };
  };

  var uncurryThis$L = functionUncurryThis;
  var toString$h = uncurryThis$L({}.toString);
  var stringSlice$a = uncurryThis$L(''.slice);

  var classofRaw$1 = function classofRaw(it) {
    return stringSlice$a(toString$h(it), 8, -1);
  };

  var classof$g = classofRaw$1; // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es-x/no-array-isarray -- safe

  var isArray$4 = Array.isArray || function isArray(argument) {
    return classof$g(argument) == 'Array';
  };

  // https://tc39.es/ecma262/#sec-iscallable

  var isCallable$t = function isCallable(argument) {
    return typeof argument == 'function';
  };

  var isCallable$s = isCallable$t;

  var isObject$r = function isObject(it) {
    return _typeof(it) == 'object' ? it !== null : isCallable$s(it);
  };

  var $TypeError$i = TypeError; // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible$a = function requireObjectCoercible(it) {
    if (it == undefined) throw $TypeError$i("Can't call method on " + it);
    return it;
  };

  var requireObjectCoercible$9 = requireObjectCoercible$a;
  var $Object$4 = Object; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject

  var toObject$g = function toObject(argument) {
    return $Object$4(requireObjectCoercible$9(argument));
  };

  var $$T = _export;
  var trunc$1 = mathTrunc; // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc

  $$T({
    target: 'Math',
    stat: true
  }, {
    trunc: trunc$1
  });

  var ceil = Math.ceil;
  var floor$8 = Math.floor; // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es-x/no-math-trunc -- safe

  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$8 : ceil)(n);
  };

  var trunc = mathTrunc; // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity

  var toIntegerOrInfinity$b = function toIntegerOrInfinity(argument) {
    var number = +argument; // eslint-disable-next-line no-self-compare -- NaN check

    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$a = toIntegerOrInfinity$b;
  var min$6 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength$9 = function toLength(argument) {
    return argument > 0 ? min$6(toIntegerOrInfinity$a(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$8 = toLength$9; // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike

  var lengthOfArrayLike$g = function lengthOfArrayLike(obj) {
    return toLength$8(obj.length);
  };

  var $TypeError$h = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$2 = function doesNotExceedSafeInteger(it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$h('Maximum allowed index exceeded');
    return it;
  };

  var NATIVE_BIND$2 = functionBindNative;
  var call$w = Function.prototype.call;
  var functionCall = NATIVE_BIND$2 ? call$w.bind(call$w) : function () {
    return call$w.apply(call$w, arguments);
  };

  var global$H = global$p;
  var isCallable$r = isCallable$t;

  var aFunction = function aFunction(argument) {
    return isCallable$r(argument) ? argument : undefined;
  };

  var getBuiltIn$c = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction(global$H[namespace]) : global$H[namespace] && global$H[namespace][method];
  };

  var uncurryThis$K = functionUncurryThis;
  var objectIsPrototypeOf = uncurryThis$K({}.isPrototypeOf);

  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var global$G = global$p;
  var isObject$q = isObject$r;
  var document$3 = global$G.document; // typeof document.createElement is 'object' in old IE

  var EXISTS$1 = isObject$q(document$3) && isObject$q(document$3.createElement);

  var documentCreateElement$2 = function documentCreateElement(it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var documentCreateElement$1 = documentCreateElement$2;
  var classList = documentCreateElement$1('span').classList;
  var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;
  var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

  var $String$4 = String;

  var tryToString$7 = function tryToString(argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$q = isCallable$t;
  var tryToString$6 = tryToString$7;
  var $TypeError$g = TypeError; // `Assert: IsCallable(argument) is true`

  var aCallable$b = function aCallable(argument) {
    if (isCallable$q(argument)) return argument;
    throw $TypeError$g(tryToString$6(argument) + ' is not a function');
  };

  var uncurryThis$J = functionUncurryThis;
  var aCallable$a = aCallable$b;
  var NATIVE_BIND$1 = functionBindNative;
  var bind$a = uncurryThis$J(uncurryThis$J.bind); // optional / simple context binding

  var functionBindContext = function functionBindContext(fn, that) {
    aCallable$a(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$a(fn, that) : function
      /* ...args */
    () {
      return fn.apply(that, arguments);
    };
  };

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$p = isCallable$t;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$v = wellKnownSymbol$b;
  var TO_STRING_TAG$4 = wellKnownSymbol$v('toStringTag');
  var $Object$3 = Object; // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof$f = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$3(it), TO_STRING_TAG$4)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$p(O.callee) ? 'Arguments' : result;
  };

  var fails$U = fails$W; // Detect IE8's incomplete defineProperty implementation

  var descriptors = !fails$U(function () {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] != 7;
  });

  var fails$T = fails$W;
  var isCallable$o = isCallable$t;
  var replacement = /#|\.prototype\./;

  var isForced$5 = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable$o(detection) ? fails$T(detection) : !!detection;
  };

  var normalize = isForced$5.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$5.data = {};
  var NATIVE = isForced$5.NATIVE = 'N';
  var POLYFILL = isForced$5.POLYFILL = 'P';
  var isForced_1 = isForced$5;

  var $$S = _export;
  var setPrototypeOf$6 = objectSetPrototypeOf; // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof

  $$S({
    target: 'Object',
    stat: true
  }, {
    setPrototypeOf: setPrototypeOf$6
  });

  var isObject$p = isObject$r;
  var $String$3 = String;
  var $TypeError$f = TypeError; // `Assert: Type(argument) is Object`

  var anObject$q = function anObject(argument) {
    if (isObject$p(argument)) return argument;
    throw $TypeError$f($String$3(argument) + ' is not an object');
  };

  var isCallable$n = isCallable$t;
  var $String$2 = String;
  var $TypeError$e = TypeError;

  var aPossiblePrototype$1 = function aPossiblePrototype(argument) {
    if (_typeof(argument) == 'object' || isCallable$n(argument)) return argument;
    throw $TypeError$e("Can't set " + $String$2(argument) + ' as a prototype');
  };

  var uncurryThis$I = functionUncurryThis;
  var anObject$p = anObject$q;
  var aPossiblePrototype = aPossiblePrototype$1; // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es-x/no-object-setprototypeof -- safe

  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
      setter = uncurryThis$I(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject$p(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var isCallable$m = isCallable$t;
  var isObject$o = isObject$r;
  var setPrototypeOf$5 = objectSetPrototypeOf; // makes subclassing work correct for wrapped built-ins

  var inheritIfRequired$4 = function inheritIfRequired($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if ( // it can work only with native `setPrototypeOf`
    setPrototypeOf$5 && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$m(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$o(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$5($this, NewTargetPrototype);
    return $this;
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$n = descriptors;
  var fails$S = fails$W;
  var createElement$1 = documentCreateElement$2; // Thanks to IE8 for its funny defineProperty

  var ie8DomDefine = !DESCRIPTORS$n && !fails$S(function () {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var DESCRIPTORS$m = descriptors;
  var fails$R = fails$W; // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334

  var v8PrototypeDefineBug = DESCRIPTORS$m && fails$R(function () {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {
      /* empty */
    }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var DESCRIPTORS$l = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$o = anObject$q;
  var toPropertyKey$5 = toPropertyKey$3;
  var $TypeError$d = TypeError; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

  var $defineProperty$1 = Object.defineProperty; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable'; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  objectDefineProperty.f = DESCRIPTORS$l ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$o(O);
    P = toPropertyKey$5(P);
    anObject$o(Attributes);

    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$2(O, P);

      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }

    return $defineProperty$1(O, P, Attributes);
  } : $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$o(O);
    P = toPropertyKey$5(P);
    anObject$o(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$d('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var createPropertyDescriptor$8 = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$k = descriptors;
  var definePropertyModule$7 = objectDefineProperty;
  var createPropertyDescriptor$7 = createPropertyDescriptor$8;
  var createNonEnumerableProperty$b = DESCRIPTORS$k ? function (object, key, value) {
    return definePropertyModule$7.f(object, key, createPropertyDescriptor$7(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var objectGetOwnPropertyNamesExternal = {};

  var toIntegerOrInfinity$9 = toIntegerOrInfinity$b;
  var max$4 = Math.max;
  var min$5 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex$8 = function toAbsoluteIndex(index, length) {
    var integer = toIntegerOrInfinity$9(index);
    return integer < 0 ? max$4(integer + length, 0) : min$5(integer, length);
  };

  var toAbsoluteIndex$7 = toAbsoluteIndex$8;
  var lengthOfArrayLike$f = lengthOfArrayLike$g;
  var createProperty$5 = createProperty$3;
  var $Array$4 = Array;
  var max$3 = Math.max;

  var arraySliceSimple = function arraySliceSimple(O, start, end) {
    var length = lengthOfArrayLike$f(O);
    var k = toAbsoluteIndex$7(start, length);
    var fin = toAbsoluteIndex$7(end === undefined ? length : end, length);
    var result = $Array$4(max$3(fin - k, 0));

    for (var n = 0; k < fin; k++, n++) {
      createProperty$5(result, n, O[k]);
    }

    result.length = n;
    return result;
  };

  var classof$e = classofRaw$1;
  var toIndexedObject$c = toIndexedObject$4;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$a = arraySliceSimple;
  var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function getWindowNames(it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$a(windowNames);
    }
  }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$e(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$c(it));
  };

  var $$R = _export;
  var fails$Q = fails$W;
  var getOwnPropertyNames$4 = objectGetOwnPropertyNamesExternal.f; // eslint-disable-next-line es-x/no-object-getownpropertynames -- required for testing

  var FAILS_ON_PRIMITIVES$7 = fails$Q(function () {
    return !Object.getOwnPropertyNames(1);
  }); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames

  $$R({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$7
  }, {
    getOwnPropertyNames: getOwnPropertyNames$4
  });

  var objectGetOwnPropertyNames = {};

  var uncurryThis$H = functionUncurryThis;
  var toObject$f = toObject$g;
  var hasOwnProperty = uncurryThis$H({}.hasOwnProperty); // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es-x/no-object-hasown -- safe

  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$f(it), key);
  };

  var toIndexedObject$b = toIndexedObject$4;
  var toAbsoluteIndex$6 = toAbsoluteIndex$8;
  var lengthOfArrayLike$e = lengthOfArrayLike$g; // `Array.prototype.{ indexOf, includes }` methods implementation

  var createMethod$4 = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$b($this);
      var length = lengthOfArrayLike$e(O);
      var index = toAbsoluteIndex$6(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$4(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$4(false)
  };

  var hiddenKeys$6 = {};

  var uncurryThis$G = functionUncurryThis;
  var hasOwn$p = hasOwnProperty_1;
  var toIndexedObject$a = toIndexedObject$4;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$5 = hiddenKeys$6;
  var push$8 = uncurryThis$G([].push);

  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject$a(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      !hasOwn$p(hiddenKeys$5, key) && hasOwn$p(O, key) && push$8(result, key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (hasOwn$p(O, key = names[i++])) {
        ~indexOf$1(result, key) || push$8(result, key);
      }
    }

    return result;
  };

  var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;
  var hiddenKeys$4 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es-x/no-object-getownpropertynames -- safe

  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$4);
  };

  var isObject$n = isObject$r;
  var classof$d = classofRaw$1;
  var wellKnownSymbol$u = wellKnownSymbol$b;
  var MATCH$2 = wellKnownSymbol$u('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp

  var isRegexp = function isRegexp(it) {
    var isRegExp;
    return isObject$n(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$d(it) == 'RegExp');
  };

  var classof$c = classof$f;
  var $String$1 = String;

  var toString$g = function toString(argument) {
    if (classof$c(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  var $$Q = _export;
  var functionApply$1 = functionApply;
  var aCallable$9 = aCallable$b;
  var anObject$n = anObject$q;
  var fails$P = fails$W; // MS Edge argumentsList argument is optional

  var OPTIONAL_ARGUMENTS_LIST = !fails$P(function () {
    // eslint-disable-next-line es-x/no-reflect -- required for testing
    Reflect.apply(function () {
      /* empty */
    });
  }); // `Reflect.apply` method
  // https://tc39.es/ecma262/#sec-reflect.apply

  $$Q({
    target: 'Reflect',
    stat: true,
    forced: OPTIONAL_ARGUMENTS_LIST
  }, {
    apply: function apply(target, thisArgument, argumentsList) {
      return functionApply$1(aCallable$9(target), thisArgument, anObject$n(argumentsList));
    }
  });

  var NATIVE_BIND = functionBindNative;
  var FunctionPrototype$2 = Function.prototype;
  var apply$7 = FunctionPrototype$2.apply;
  var call$v = FunctionPrototype$2.call; // eslint-disable-next-line es-x/no-reflect -- safe

  var functionApply = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && Reflect.apply || (NATIVE_BIND ? call$v.bind(apply$7) : function () {
    return call$v.apply(apply$7, arguments);
  });

  var DESCRIPTORS$j = descriptors;
  var hasOwn$o = hasOwnProperty_1;
  var FunctionPrototype$1 = Function.prototype; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

  var getDescriptor = DESCRIPTORS$j && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn$o(FunctionPrototype$1, 'name'); // additional protection from minified / mangled / dropped function names

  var PROPER = EXISTS && function something() {
    /* empty */
  }.name === 'something';

  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$j || DESCRIPTORS$j && getDescriptor(FunctionPrototype$1, 'name').configurable);
  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var DESCRIPTORS$i = descriptors;
  var FUNCTION_NAME_EXISTS = functionName.EXISTS;
  var uncurryThis$F = functionUncurryThis;
  var defineProperty$f = objectDefineProperty.f;
  var FunctionPrototype = Function.prototype;
  var functionToString$1 = uncurryThis$F(FunctionPrototype.toString);
  var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
  var regExpExec$3 = uncurryThis$F(nameRE.exec);
  var NAME$1 = 'name'; // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name

  if (DESCRIPTORS$i && !FUNCTION_NAME_EXISTS) {
    defineProperty$f(FunctionPrototype, NAME$1, {
      configurable: true,
      get: function get() {
        try {
          return regExpExec$3(nameRE, functionToString$1(this))[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  var global$F = global$p; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

  var defineProperty$e = Object.defineProperty;

  var defineGlobalProperty$3 = function defineGlobalProperty(key, value) {
    try {
      defineProperty$e(global$F, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$F[key] = value;
    }

    return value;
  };

  var isCallable$l = isCallable$t;
  var createNonEnumerableProperty$a = createNonEnumerableProperty$b;
  var makeBuiltIn$3 = makeBuiltIn$2.exports;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var defineBuiltIn$j = function defineBuiltIn(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$l(value)) makeBuiltIn$3(value, name, options);

    if (options.global) {
      if (simple) O[key] = value;else defineGlobalProperty$2(key, value);
    } else {
      if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
      if (simple) O[key] = value;else createNonEnumerableProperty$a(O, key, value);
    }

    return O;
  };

  var uncurryThis$E = functionUncurryThis;
  var defineBuiltIn$i = defineBuiltIn$j;
  var regexpExec$3 = regexpExec;
  var fails$O = fails$W;
  var wellKnownSymbol$t = wellKnownSymbol$b;
  var createNonEnumerableProperty$9 = createNonEnumerableProperty$b;
  var SPECIES$6 = wellKnownSymbol$t('species');
  var RegExpPrototype$4 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$t(KEY);
    var DELEGATES_TO_SYMBOL = !fails$O(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$O(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.

        re.constructor = {};

        re.constructor[SPECIES$6] = function () {
          return re;
        };

        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var uncurriedNativeRegExpMethod = uncurryThis$E(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$E(nativeMethod);
        var $exec = regexp.exec;

        if ($exec === regexpExec$3 || $exec === RegExpPrototype$4.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: uncurriedNativeRegExpMethod(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: uncurriedNativeMethod(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      defineBuiltIn$i(String.prototype, KEY, methods[0]);
      defineBuiltIn$i(RegExpPrototype$4, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$9(RegExpPrototype$4[SYMBOL], 'sham', true);
  };

  var isConstructor$4 = isConstructor$2;
  var tryToString$5 = tryToString$7;
  var $TypeError$c = TypeError; // `Assert: IsConstructor(argument) is true`

  var aConstructor$2 = function aConstructor(argument) {
    if (isConstructor$4(argument)) return argument;
    throw $TypeError$c(tryToString$5(argument) + ' is not a constructor');
  };

  var anObject$m = anObject$q;
  var aConstructor$1 = aConstructor$2;
  var wellKnownSymbol$s = wellKnownSymbol$b;
  var SPECIES$5 = wellKnownSymbol$s('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor

  var speciesConstructor$5 = function speciesConstructor(O, defaultConstructor) {
    var C = anObject$m(O).constructor;
    var S;
    return C === undefined || (S = anObject$m(C)[SPECIES$5]) == undefined ? defaultConstructor : aConstructor$1(S);
  };

  var uncurryThis$D = functionUncurryThis;
  var toIntegerOrInfinity$8 = toIntegerOrInfinity$b;
  var toString$f = toString$g;
  var requireObjectCoercible$8 = requireObjectCoercible$a;
  var charAt$8 = uncurryThis$D(''.charAt);
  var charCodeAt$3 = uncurryThis$D(''.charCodeAt);
  var stringSlice$9 = uncurryThis$D(''.slice);

  var createMethod$3 = function createMethod(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$f(requireObjectCoercible$8($this));
      var position = toIntegerOrInfinity$8(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$3(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$3(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$8(S, position) : first : CONVERT_TO_STRING ? stringSlice$9(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$3(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$3(true)
  };

  var charAt$7 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex

  var advanceStringIndex$3 = function advanceStringIndex(S, index, unicode) {
    return index + (unicode ? charAt$7(S, index).length : 1);
  };

  var aCallable$8 = aCallable$b; // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod

  var getMethod$7 = function getMethod(V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable$8(func);
  };

  var call$u = functionCall;
  var anObject$l = anObject$q;
  var isCallable$k = isCallable$t;
  var classof$b = classofRaw$1;
  var regexpExec$2 = regexpExec;
  var $TypeError$b = TypeError; // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec

  var regexpExecAbstract = function regexpExecAbstract(R, S) {
    var exec = R.exec;

    if (isCallable$k(exec)) {
      var result = call$u(exec, R, S);
      if (result !== null) anObject$l(result);
      return result;
    }

    if (classof$b(R) === 'RegExp') return call$u(regexpExec$2, R, S);
    throw $TypeError$b('RegExp#exec called on incompatible receiver');
  };

  var fails$N = fails$W;
  var global$E = global$p; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

  var $RegExp$2 = global$E.RegExp;
  var UNSUPPORTED_Y$3 = fails$N(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  }); // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008

  var MISSED_STICKY$1 = UNSUPPORTED_Y$3 || fails$N(function () {
    return !$RegExp$2('a', 'y').sticky;
  });
  var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$N(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$1,
    UNSUPPORTED_Y: UNSUPPORTED_Y$3
  };

  var apply$6 = functionApply;
  var call$t = functionCall;
  var uncurryThis$C = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
  var isRegExp$2 = isRegexp;
  var anObject$k = anObject$q;
  var requireObjectCoercible$7 = requireObjectCoercible$a;
  var speciesConstructor$4 = speciesConstructor$5;
  var advanceStringIndex$2 = advanceStringIndex$3;
  var toLength$7 = toLength$9;
  var toString$e = toString$g;
  var getMethod$6 = getMethod$7;
  var arraySlice$9 = arraySliceSimple;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec$1 = regexpExec;
  var stickyHelpers$2 = regexpStickyHelpers;
  var fails$M = fails$W;
  var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$4 = Math.min;
  var $push = [].push;
  var exec$6 = uncurryThis$C(/./.exec);
  var push$7 = uncurryThis$C($push);
  var stringSlice$8 = uncurryThis$C(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$M(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  }); // @@split logic

  fixRegExpWellKnownSymbolLogic$3('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = toString$e(requireObjectCoercible$7(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegExp$2(separator)) {
          return call$t(nativeSplit, string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = call$t(regexpExec$1, separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            push$7(output, stringSlice$8(string, lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) apply$6($push, output, arraySlice$9(match, 1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !exec$6(separatorCopy, '')) push$7(output, '');
        } else push$7(output, stringSlice$8(string, lastLastIndex));

        return output.length > lim ? arraySlice$9(output, 0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : call$t(nativeSplit, this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$7(this);
      var splitter = separator == undefined ? undefined : getMethod$6(separator, SPLIT);
      return splitter ? call$t(splitter, separator, O, limit) : call$t(internalSplit, toString$e(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$k(this);
      var S = toString$e(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var C = speciesConstructor$4(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y$2 ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(UNSUPPORTED_Y$2 ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y$2 ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y$2 ? stringSlice$8(S, q) : S);
        var e;

        if (z === null || (e = min$4(toLength$7(splitter.lastIndex + (UNSUPPORTED_Y$2 ? q : 0)), S.length)) === p) {
          q = advanceStringIndex$2(S, q, unicodeMatching);
        } else {
          push$7(A, stringSlice$8(S, p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            push$7(A, z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      push$7(A, stringSlice$8(S, p));
      return A;
    }];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y$2);

  var call$s = functionCall;
  var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
  var anObject$j = anObject$q;
  var toLength$6 = toLength$9;
  var toString$d = toString$g;
  var requireObjectCoercible$6 = requireObjectCoercible$a;
  var getMethod$5 = getMethod$7;
  var advanceStringIndex$1 = advanceStringIndex$3;
  var regExpExec$2 = regexpExecAbstract; // @@match logic

  fixRegExpWellKnownSymbolLogic$2('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$6(this);
      var matcher = regexp == undefined ? undefined : getMethod$5(regexp, MATCH);
      return matcher ? call$s(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$d(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$j(this);
      var S = toString$d(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regExpExec$2(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = regExpExec$2(rx, S)) !== null) {
        var matchStr = toString$d(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$6(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  var getBuiltIn$b = getBuiltIn$c;
  var engineUserAgent = getBuiltIn$b('navigator', 'userAgent') || '';

  var global$D = global$p;
  var userAgent$5 = engineUserAgent;
  var process$4 = global$D.process;
  var Deno$1 = global$D.Deno;
  var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us

    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  } // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0


  if (!version && userAgent$5) {
    match = userAgent$5.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = userAgent$5.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  var fails$L = fails$W;
  var wellKnownSymbol$r = wellKnownSymbol$b;
  var V8_VERSION$3 = engineV8Version;
  var SPECIES$4 = wellKnownSymbol$r('species');

  var arrayMethodHasSpeciesSupport$5 = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$3 >= 51 || !fails$L(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$4] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var uncurryThis$B = functionUncurryThis;
  var arraySlice$8 = uncurryThis$B([].slice);

  var $$P = _export;
  var isArray$3 = isArray$4;
  var isConstructor$3 = isConstructor$2;
  var isObject$m = isObject$r;
  var toAbsoluteIndex$5 = toAbsoluteIndex$8;
  var lengthOfArrayLike$d = lengthOfArrayLike$g;
  var toIndexedObject$9 = toIndexedObject$4;
  var createProperty$4 = createProperty$3;
  var wellKnownSymbol$q = wellKnownSymbol$b;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
  var un$Slice = arraySlice$8;
  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$4('slice');
  var SPECIES$3 = wellKnownSymbol$q('species');
  var $Array$3 = Array;
  var max$2 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  $$P({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$9(this);
      var length = lengthOfArrayLike$d(O);
      var k = toAbsoluteIndex$5(start, length);
      var fin = toAbsoluteIndex$5(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray$3(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (isConstructor$3(Constructor) && (Constructor === $Array$3 || isArray$3(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$m(Constructor)) {
          Constructor = Constructor[SPECIES$3];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === $Array$3 || Constructor === undefined) {
          return un$Slice(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? $Array$3 : Constructor)(max$2(fin - k, 0));

      for (n = 0; k < fin; k++, n++) {
        if (k in O) createProperty$4(result, n, O[k]);
      }

      result.length = n;
      return result;
    }
  });

  var fails$K = fails$W;

  var arrayMethodIsStrict$4 = function arrayMethodIsStrict(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$K(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () {
        return 1;
      }, 1);
    });
  };

  var $$O = _export;
  var uncurryThis$A = functionUncurryThis;
  var IndexedObject$4 = indexedObject;
  var toIndexedObject$8 = toIndexedObject$4;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;
  var un$Join = uncurryThis$A([].join);
  var ES3_STRINGS = IndexedObject$4 != Object;
  var STRICT_METHOD$3 = arrayMethodIsStrict$3('join', ','); // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join

  $$O({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || !STRICT_METHOD$3
  }, {
    join: function join(separator) {
      return un$Join(toIndexedObject$8(this), separator === undefined ? ',' : separator);
    }
  });

  var makeBuiltIn$2 = {exports: {}};

  var global$C = global$p;
  var isCallable$j = isCallable$t;
  var inspectSource$4 = inspectSource$2;
  var WeakMap$2 = global$C.WeakMap;
  var nativeWeakMap = isCallable$j(WeakMap$2) && /native code/.test(inspectSource$4(WeakMap$2));

  var global$B = global$p;
  var defineGlobalProperty$1 = defineGlobalProperty$3;
  var SHARED = '__core-js_shared__';
  var store$3 = global$B[SHARED] || defineGlobalProperty$1(SHARED, {});
  var sharedStore = store$3;

  var shared$7 = {exports: {}};

  var isPure = false;

  var store$2 = sharedStore;
  (shared$7.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.22.8',
    mode: 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var uncurryThis$z = functionUncurryThis;
  var id$2 = 0;
  var postfix = Math.random();
  var toString$c = uncurryThis$z(1.0.toString);

  var uid$5 = function uid(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$c(++id$2 + postfix, 36);
  };

  var shared$6 = shared$7.exports;
  var uid$4 = uid$5;
  var keys$3 = shared$6('keys');

  var sharedKey$4 = function sharedKey(key) {
    return keys$3[key] || (keys$3[key] = uid$4(key));
  };

  var NATIVE_WEAK_MAP$1 = nativeWeakMap;
  var global$A = global$p;
  var uncurryThis$y = functionUncurryThis;
  var isObject$l = isObject$r;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$b;
  var hasOwn$n = hasOwnProperty_1;
  var shared$5 = sharedStore;
  var sharedKey$3 = sharedKey$4;
  var hiddenKeys$3 = hiddenKeys$6;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$7 = global$A.TypeError;
  var WeakMap$1 = global$A.WeakMap;
  var set$3, get$2, has;

  var enforce = function enforce(it) {
    return has(it) ? get$2(it) : set$3(it, {});
  };

  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;

      if (!isObject$l(it) || (state = get$2(it)).type !== TYPE) {
        throw TypeError$7('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (NATIVE_WEAK_MAP$1 || shared$5.state) {
    var store$1 = shared$5.state || (shared$5.state = new WeakMap$1());
    var wmget = uncurryThis$y(store$1.get);
    var wmhas = uncurryThis$y(store$1.has);
    var wmset = uncurryThis$y(store$1.set);

    set$3 = function set(it, metadata) {
      if (wmhas(store$1, it)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset(store$1, it, metadata);
      return metadata;
    };

    get$2 = function get(it) {
      return wmget(store$1, it) || {};
    };

    has = function has(it) {
      return wmhas(store$1, it);
    };
  } else {
    var STATE = sharedKey$3('state');
    hiddenKeys$3[STATE] = true;

    set$3 = function set(it, metadata) {
      if (hasOwn$n(it, STATE)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$8(it, STATE, metadata);
      return metadata;
    };

    get$2 = function get(it) {
      return hasOwn$n(it, STATE) ? it[STATE] : {};
    };

    has = function has(it) {
      return hasOwn$n(it, STATE);
    };
  }

  var internalState = {
    set: set$3,
    get: get$2,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var fails$J = fails$W;
  var isCallable$i = isCallable$t;
  var hasOwn$m = hasOwnProperty_1;
  var DESCRIPTORS$h = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
  var inspectSource$3 = inspectSource$2;
  var InternalStateModule$a = internalState;
  var enforceInternalState$2 = InternalStateModule$a.enforce;
  var getInternalState$6 = InternalStateModule$a.get; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

  var defineProperty$d = Object.defineProperty;
  var CONFIGURABLE_LENGTH = DESCRIPTORS$h && !fails$J(function () {
    return defineProperty$d(function () {
      /* empty */
    }, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;

    if (!hasOwn$m(value, 'name') || CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name) {
      defineProperty$d(value, 'name', {
        value: name,
        configurable: true
      });
    }

    if (CONFIGURABLE_LENGTH && options && hasOwn$m(options, 'arity') && value.length !== options.arity) {
      defineProperty$d(value, 'length', {
        value: options.arity
      });
    }

    try {
      if (options && hasOwn$m(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$h) defineProperty$d(value, 'prototype', {
          writable: false
        }); // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {
      /* empty */
    }

    var state = enforceInternalState$2(value);

    if (!hasOwn$m(state, 'source')) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }

    return value;
  }; // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required


  Function.prototype.toString = makeBuiltIn$1(function toString() {
    return isCallable$i(this) && getInternalState$6(this).source || inspectSource$3(this);
  }, 'toString');

  var makeBuiltIn = makeBuiltIn$2.exports;
  var defineProperty$c = objectDefineProperty;

  var defineBuiltInAccessor$2 = function defineBuiltInAccessor(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
      getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
      setter: true
    });
    return defineProperty$c.f(target, name, descriptor);
  };

  var anObject$i = anObject$q; // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  var regexpFlags$1 = function regexpFlags() {
    var that = anObject$i(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var DESCRIPTORS$g = descriptors;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
  var regExpFlags$1 = regexpFlags$1;
  var fails$I = fails$W;
  var RegExpPrototype$3 = RegExp.prototype;
  var FORCED$8 = DESCRIPTORS$g && fails$I(function () {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    return Object.getOwnPropertyDescriptor(RegExpPrototype$3, 'flags').get.call({
      dotAll: true,
      sticky: true
    }) !== 'sy';
  }); // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  if (FORCED$8) defineBuiltInAccessor$1(RegExpPrototype$3, 'flags', {
    configurable: true,
    get: regExpFlags$1
  });

  var call$r = functionCall;
  var hasOwn$l = hasOwnProperty_1;
  var isPrototypeOf$9 = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;
  var RegExpPrototype$2 = RegExp.prototype;

  var regexpGetFlags = function regexpGetFlags(R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$l(R, 'flags') && isPrototypeOf$9(RegExpPrototype$2, R) ? call$r(regExpFlags, R) : flags;
  };

  var defineProperty$b = objectDefineProperty.f;

  var proxyAccessor$1 = function proxyAccessor(Target, Source, key) {
    key in Target || defineProperty$b(Target, key, {
      configurable: true,
      get: function get() {
        return Source[key];
      },
      set: function set(it) {
        Source[key] = it;
      }
    });
  };

  var getBuiltIn$a = getBuiltIn$c;
  var definePropertyModule$6 = objectDefineProperty;
  var wellKnownSymbol$p = wellKnownSymbol$b;
  var DESCRIPTORS$f = descriptors;
  var SPECIES$2 = wellKnownSymbol$p('species');

  var setSpecies$5 = function setSpecies(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$a(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule$6.f;

    if (DESCRIPTORS$f && Constructor && !Constructor[SPECIES$2]) {
      defineProperty(Constructor, SPECIES$2, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };

  var fails$H = fails$W;
  var global$z = global$p; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

  var $RegExp$1 = global$z.RegExp;
  var regexpUnsupportedDotAll = fails$H(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$G = fails$W;
  var global$y = global$p; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

  var $RegExp = global$y.RegExp;
  var regexpUnsupportedNcg = fails$G(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });

  var DESCRIPTORS$e = descriptors;
  var global$x = global$p;
  var uncurryThis$x = functionUncurryThis;
  var isForced$4 = isForced_1;
  var inheritIfRequired$3 = inheritIfRequired$4;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$b;
  var getOwnPropertyNames$3 = objectGetOwnPropertyNames.f;
  var isPrototypeOf$8 = objectIsPrototypeOf;
  var isRegExp$1 = isRegexp;
  var toString$b = toString$g;
  var getRegExpFlags$1 = regexpGetFlags;
  var stickyHelpers$1 = regexpStickyHelpers;
  var proxyAccessor = proxyAccessor$1;
  var defineBuiltIn$h = defineBuiltIn$j;
  var fails$F = fails$W;
  var hasOwn$k = hasOwnProperty_1;
  var enforceInternalState$1 = internalState.enforce;
  var setSpecies$4 = setSpecies$5;
  var wellKnownSymbol$o = wellKnownSymbol$b;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;
  var MATCH$1 = wellKnownSymbol$o('match');
  var NativeRegExp = global$x.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var SyntaxError = global$x.SyntaxError;
  var exec$5 = uncurryThis$x(RegExpPrototype$1.exec);
  var charAt$6 = uncurryThis$x(''.charAt);
  var replace$8 = uncurryThis$x(''.replace);
  var stringIndexOf$2 = uncurryThis$x(''.indexOf);
  var stringSlice$7 = uncurryThis$x(''.slice); // TODO: Use only propper RegExpIdentifierName

  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug

  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
  var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$e && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1 || fails$F(function () {
    re2[MATCH$1] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

  var handleDotAll = function handleDotAll(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;

    for (; index <= length; index++) {
      chr = charAt$6(string, index);

      if (chr === '\\') {
        result += chr + charAt$6(string, ++index);
        continue;
      }

      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        }

        result += chr;
      }
    }

    return result;
  };

  var handleNCG = function handleNCG(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = {};
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;

    for (; index <= length; index++) {
      chr = charAt$6(string, index);

      if (chr === '\\') {
        chr = chr + charAt$6(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;

        case chr === '(':
          if (exec$5(IS_NCG, stringSlice$7(string, index + 1))) {
            index += 2;
            ncg = true;
          }

          result += chr;
          groupid++;
          continue;

        case chr === '>' && ncg:
          if (groupname === '' || hasOwn$k(names, groupname)) {
            throw new SyntaxError('Invalid capture group name');
          }

          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }

      if (ncg) groupname += chr;else result += chr;
    }

    return [result, named];
  }; // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor


  if (isForced$4('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = isPrototypeOf$8(RegExpPrototype$1, this);
      var patternIsRegExp = isRegExp$1(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;

      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }

      if (patternIsRegExp || isPrototypeOf$8(RegExpPrototype$1, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
      }

      pattern = pattern === undefined ? '' : toString$b(pattern);
      flags = flags === undefined ? '' : toString$b(flags);
      rawPattern = pattern;

      if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$2(flags, 's') > -1;
        if (dotAll) flags = replace$8(flags, /s/g, '');
      }

      rawFlags = flags;

      if (MISSED_STICKY && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$2(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y$1) flags = replace$8(flags, /y/g, '');
      }

      if (UNSUPPORTED_NCG$1) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired$3(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

      if (dotAll || sticky || groups.length) {
        state = enforceInternalState$1(result);

        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }

        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }

      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty$7(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {
        /* empty */
      }
      return result;
    };

    for (var keys$2 = getOwnPropertyNames$3(NativeRegExp), index$1 = 0; keys$2.length > index$1;) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys$2[index$1++]);
    }

    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    defineBuiltIn$h(global$x, 'RegExp', RegExpWrapper, {
      constructor: true
    });
  } // https://tc39.es/ecma262/#sec-get-regexp-@@species


  setSpecies$4('RegExp');

  var PROPER_FUNCTION_NAME$3 = functionName.PROPER;
  var defineBuiltIn$g = defineBuiltIn$j;
  var anObject$h = anObject$q;
  var $toString$3 = toString$g;
  var fails$E = fails$W;
  var getRegExpFlags = regexpGetFlags;
  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var n$ToString = RegExpPrototype[TO_STRING];
  var NOT_GENERIC = fails$E(function () {
    return n$ToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name

  var INCORRECT_NAME = PROPER_FUNCTION_NAME$3 && n$ToString.name != TO_STRING; // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn$g(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$h(this);
      var pattern = $toString$3(R.source);
      var flags = $toString$3(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, {
      unsafe: true
    });
  }

  var uncurryThis$w = functionUncurryThis;
  var isCallable$h = isCallable$t;
  var store = sharedStore;
  var functionToString = uncurryThis$w(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

  if (!isCallable$h(store.inspectSource)) {
    store.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store.inspectSource;

  var uncurryThis$v = functionUncurryThis;
  var fails$D = fails$W;
  var isCallable$g = isCallable$t;
  var classof$a = classof$f;
  var getBuiltIn$9 = getBuiltIn$c;
  var inspectSource$1 = inspectSource$2;

  var noop = function noop() {
    /* empty */
  };

  var empty = [];
  var construct = getBuiltIn$9('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$4 = uncurryThis$v(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$g(argument)) return false;

    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$g(argument)) return false;

    switch (classof$a(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
    }

    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$4(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor

  var isConstructor$2 = !construct || fails$D(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$2 = isArray$4;
  var isConstructor$1 = isConstructor$2;
  var isObject$k = isObject$r;
  var wellKnownSymbol$n = wellKnownSymbol$b;
  var SPECIES$1 = wellKnownSymbol$n('species');
  var $Array$2 = Array; // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesConstructor$1 = function arraySpeciesConstructor(originalArray) {
    var C;

    if (isArray$2(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (isConstructor$1(C) && (C === $Array$2 || isArray$2(C.prototype))) C = undefined;else if (isObject$k(C)) {
        C = C[SPECIES$1];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? $Array$2 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate$3 = function arraySpeciesCreate(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var bind$9 = functionBindContext;
  var uncurryThis$u = functionUncurryThis;
  var IndexedObject$3 = indexedObject;
  var toObject$e = toObject$g;
  var lengthOfArrayLike$c = lengthOfArrayLike$g;
  var arraySpeciesCreate$2 = arraySpeciesCreate$3;
  var push$6 = uncurryThis$u([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

  var createMethod$2 = function createMethod(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$e($this);
      var self = IndexedObject$3(O);
      var boundFunction = bind$9(callbackfn, that);
      var length = lengthOfArrayLike$c(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$2;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);

          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return value;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                push$6(target, value);
              // filter
            } else switch (TYPE) {
              case 4:
                return false;
              // every

              case 7:
                push$6(target, value);
              // filterReject
            }
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$2(7)
  };

  var $forEach$2 = arrayIteration.forEach;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$4;
  var STRICT_METHOD$2 = arrayMethodIsStrict$2('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach

  var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach$2(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$w = global$p;
  var DOMIterables$1 = domIterables;
  var DOMTokenListPrototype$1 = domTokenListPrototype;
  var forEach$1 = arrayForEach;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$b;

  var handlePrototype$1 = function handlePrototype(CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach$1) try {
      createNonEnumerableProperty$6(CollectionPrototype, 'forEach', forEach$1);
    } catch (error) {
      CollectionPrototype.forEach = forEach$1;
    }
  };

  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    if (DOMIterables$1[COLLECTION_NAME$1]) {
      handlePrototype$1(global$w[COLLECTION_NAME$1] && global$w[COLLECTION_NAME$1].prototype);
    }
  }

  handlePrototype$1(DOMTokenListPrototype$1);

  var objectGetOwnPropertySymbols = {};

  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$8 = getBuiltIn$c;
  var uncurryThis$t = functionUncurryThis;
  var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
  var anObject$g = anObject$q;
  var concat$2 = uncurryThis$t([].concat); // all object keys, includes non-enumerable and symbols

  var ownKeys$1 = getBuiltIn$8('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$2.f(anObject$g(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
    return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$j = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule$4 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$5 = objectDefineProperty;

  var copyConstructorProperties$2 = function copyConstructorProperties(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$5.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$4.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (!hasOwn$j(target, key) && !(exceptions && hasOwn$j(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var $$N = _export;
  var DESCRIPTORS$d = descriptors;
  var global$v = global$p;
  var uncurryThis$s = functionUncurryThis;
  var hasOwn$i = hasOwnProperty_1;
  var isCallable$f = isCallable$t;
  var isPrototypeOf$7 = objectIsPrototypeOf;
  var toString$a = toString$g;
  var defineProperty$a = objectDefineProperty.f;
  var copyConstructorProperties$1 = copyConstructorProperties$2;
  var NativeSymbol = global$v.Symbol;
  var SymbolPrototype$1 = NativeSymbol && NativeSymbol.prototype;

  if (DESCRIPTORS$d && isCallable$f(NativeSymbol) && (!('description' in SymbolPrototype$1) || // Safari 12 bug
  NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

    var SymbolWrapper = function _Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$a(arguments[0]);
      var result = isPrototypeOf$7(SymbolPrototype$1, this) ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };

    copyConstructorProperties$1(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype$1;
    SymbolPrototype$1.constructor = SymbolWrapper;
    var NATIVE_SYMBOL$6 = String(NativeSymbol('test')) == 'Symbol(test)';
    var symbolToString = uncurryThis$s(SymbolPrototype$1.toString);
    var symbolValueOf = uncurryThis$s(SymbolPrototype$1.valueOf);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$7 = uncurryThis$s(''.replace);
    var stringSlice$6 = uncurryThis$s(''.slice);
    defineProperty$a(SymbolPrototype$1, 'description', {
      configurable: true,
      get: function description() {
        var symbol = symbolValueOf(this);
        var string = symbolToString(symbol);
        if (hasOwn$i(EmptyStringDescriptionStore, symbol)) return '';
        var desc = NATIVE_SYMBOL$6 ? stringSlice$6(string, 7, -1) : replace$7(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$N({
      global: true,
      constructor: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  }

  var V8_VERSION$2 = engineV8Version;
  var fails$C = fails$W; // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$C(function () {
    var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
  });

  var objectDefineProperties = {};

  var $$M = _export;
  var toObject$d = toObject$g;
  var nativeKeys = objectKeys$3;
  var fails$B = fails$W;
  var FAILS_ON_PRIMITIVES$6 = fails$B(function () {
    nativeKeys(1);
  }); // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys

  $$M({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$6
  }, {
    keys: function keys(it) {
      return nativeKeys(toObject$d(it));
    }
  });

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es-x/no-object-keys -- safe

  var objectKeys$3 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$c = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$4 = objectDefineProperty;
  var anObject$f = anObject$q;
  var toIndexedObject$7 = toIndexedObject$4;
  var objectKeys$2 = objectKeys$3; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es-x/no-object-defineproperties -- safe

  objectDefineProperties.f = DESCRIPTORS$c && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$f(O);
    var props = toIndexedObject$7(Properties);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) {
      definePropertyModule$4.f(O, key = keys[index++], props[key]);
    }

    return O;
  };

  var getBuiltIn$7 = getBuiltIn$c;
  var html$2 = getBuiltIn$7('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */
  var anObject$e = anObject$q;
  var definePropertiesModule$1 = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$2 = hiddenKeys$6;
  var html$1 = html$2;
  var documentCreateElement = documentCreateElement$2;
  var sharedKey$2 = sharedKey$4;
  var GT = '>';
  var LT = '<';
  var PROTOTYPE$2 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');

  var EmptyConstructor = function EmptyConstructor() {
    /* empty */
  };

  var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


  var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak

    return temp;
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


  var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }; // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug


  var activeXDocument;

  var _NullProtoObject = function NullProtoObject() {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }

    _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

    var length = enumBugKeys.length;

    while (length--) {
      delete _NullProtoObject[PROTOTYPE$2][enumBugKeys[length]];
    }

    return _NullProtoObject();
  };

  hiddenKeys$2[IE_PROTO$1] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es-x/no-object-create -- safe

  var objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      EmptyConstructor[PROTOTYPE$2] = anObject$e(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$2] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = _NullProtoObject();

    return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable$1.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$4(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$m = wellKnownSymbol$b;
  wellKnownSymbolWrapped.f = wellKnownSymbol$m;

  var global$u = global$p;
  var path$1 = global$u;

  var path = path$1;
  var hasOwn$h = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$9 = objectDefineProperty.f;

  var defineWellKnownSymbol$4 = function defineWellKnownSymbol(NAME) {
    var _Symbol = path.Symbol || (path.Symbol = {});

    if (!hasOwn$h(_Symbol, NAME)) defineProperty$9(_Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var call$q = functionCall;
  var getBuiltIn$6 = getBuiltIn$c;
  var wellKnownSymbol$l = wellKnownSymbol$b;
  var defineBuiltIn$f = defineBuiltIn$j;

  var symbolDefineToPrimitive = function symbolDefineToPrimitive() {
    var _Symbol = getBuiltIn$6('Symbol');

    var SymbolPrototype = _Symbol && _Symbol.prototype;
    var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
    var TO_PRIMITIVE = wellKnownSymbol$l('toPrimitive');

    if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
      // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
      // eslint-disable-next-line no-unused-vars -- required for .length
      defineBuiltIn$f(SymbolPrototype, TO_PRIMITIVE, function (hint) {
        return call$q(valueOf, this);
      }, {
        arity: 1
      });
    }
  };

  var defineProperty$8 = objectDefineProperty.f;
  var hasOwn$g = hasOwnProperty_1;
  var wellKnownSymbol$k = wellKnownSymbol$b;
  var TO_STRING_TAG$3 = wellKnownSymbol$k('toStringTag');

  var setToStringTag$8 = function setToStringTag(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;

    if (target && !hasOwn$g(target, TO_STRING_TAG$3)) {
      defineProperty$8(target, TO_STRING_TAG$3, {
        configurable: true,
        value: TAG
      });
    }
  };

  var $$L = _export;
  var global$t = global$p;
  var call$p = functionCall;
  var uncurryThis$r = functionUncurryThis;
  var DESCRIPTORS$b = descriptors;
  var NATIVE_SYMBOL$5 = nativeSymbol;
  var fails$A = fails$W;
  var hasOwn$f = hasOwnProperty_1;
  var isPrototypeOf$6 = objectIsPrototypeOf;
  var anObject$d = anObject$q;
  var toIndexedObject$6 = toIndexedObject$4;
  var toPropertyKey$4 = toPropertyKey$3;
  var $toString$2 = toString$g;
  var createPropertyDescriptor$6 = createPropertyDescriptor$8;
  var nativeObjectCreate = objectCreate;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$3 = objectDefineProperty;
  var definePropertiesModule = objectDefineProperties;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var defineBuiltIn$e = defineBuiltIn$j;
  var shared$4 = shared$7.exports;
  var sharedKey$1 = sharedKey$4;
  var hiddenKeys$1 = hiddenKeys$6;
  var uid$3 = uid$5;
  var wellKnownSymbol$j = wellKnownSymbol$b;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol$3 = defineWellKnownSymbol$4;
  var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
  var setToStringTag$7 = setToStringTag$8;
  var InternalStateModule$9 = internalState;
  var $forEach$1 = arrayIteration.forEach;
  var HIDDEN = sharedKey$1('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE$1 = 'prototype';
  var setInternalState$9 = InternalStateModule$9.set;
  var getInternalState$5 = InternalStateModule$9.getterFor(SYMBOL);
  var ObjectPrototype$3 = Object[PROTOTYPE$1];
  var $Symbol = global$t.Symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE$1];
  var TypeError$6 = global$t.TypeError;
  var QObject = global$t.QObject;
  var nativeGetOwnPropertyDescriptor$2 = getOwnPropertyDescriptorModule$3.f;
  var nativeDefineProperty$1 = definePropertyModule$3.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$2.f;
  var push$5 = uncurryThis$r([].push);
  var AllSymbols = shared$4('symbols');
  var ObjectPrototypeSymbols = shared$4('op-symbols');
  var WellKnownSymbolsStore$1 = shared$4('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDescriptor = DESCRIPTORS$b && fails$A(function () {
    return nativeObjectCreate(nativeDefineProperty$1({}, 'a', {
      get: function get() {
        return nativeDefineProperty$1(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$3, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$3[P];
    nativeDefineProperty$1(O, P, Attributes);

    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$3) {
      nativeDefineProperty$1(ObjectPrototype$3, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty$1;

  var wrap = function wrap(tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
    setInternalState$9(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$b) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$3) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$d(O);
    var key = toPropertyKey$4(P);
    anObject$d(Attributes);

    if (hasOwn$f(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn$f(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor$6(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$f(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor$6(0, false)
        });
      }

      return setSymbolDescriptor(O, key, Attributes);
    }

    return nativeDefineProperty$1(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$d(O);
    var properties = toIndexedObject$6(Properties);
    var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
    $forEach$1(keys, function (key) {
      if (!DESCRIPTORS$b || call$p($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey$4(V);
    var enumerable = call$p(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype$3 && hasOwn$f(AllSymbols, P) && !hasOwn$f(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$f(this, P) || !hasOwn$f(AllSymbols, P) || hasOwn$f(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$6(O);
    var key = toPropertyKey$4(P);
    if (it === ObjectPrototype$3 && hasOwn$f(AllSymbols, key) && !hasOwn$f(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);

    if (descriptor && hasOwn$f(AllSymbols, key) && !(hasOwn$f(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }

    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$6(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (!hasOwn$f(AllSymbols, key) && !hasOwn$f(hiddenKeys$1, key)) push$5(result, key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$3;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$6(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (hasOwn$f(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$f(ObjectPrototype$3, key))) {
        push$5(result, AllSymbols[key]);
      }
    });
    return result;
  }; // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor


  if (!NATIVE_SYMBOL$5) {
    $Symbol = function _Symbol() {
      if (isPrototypeOf$6(SymbolPrototype, this)) throw TypeError$6('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$2(arguments[0]);
      var tag = uid$3(description);

      var setter = function setter(value) {
        if (this === ObjectPrototype$3) call$p(setter, ObjectPrototypeSymbols, value);
        if (hasOwn$f(this, HIDDEN) && hasOwn$f(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor$6(1, value));
      };

      if (DESCRIPTORS$b && USE_SETTER) setSymbolDescriptor(ObjectPrototype$3, tag, {
        configurable: true,
        set: setter
      });
      return wrap(tag, description);
    };

    SymbolPrototype = $Symbol[PROTOTYPE$1];
    defineBuiltIn$e(SymbolPrototype, 'toString', function toString() {
      return getInternalState$5(this).tag;
    });
    defineBuiltIn$e($Symbol, 'withoutSetter', function (description) {
      return wrap(uid$3(description), description);
    });
    propertyIsEnumerableModule$2.f = $propertyIsEnumerable;
    definePropertyModule$3.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule$3.f = $getOwnPropertyDescriptor$1;
    getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$j(name), name);
    };

    if (DESCRIPTORS$b) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty$1(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$5(this).description;
        }
      });

      {
        defineBuiltIn$e(ObjectPrototype$3, 'propertyIsEnumerable', $propertyIsEnumerable, {
          unsafe: true
        });
      }
    }
  }

  $$L({
    global: true,
    constructor: true,
    wrap: true,
    forced: !NATIVE_SYMBOL$5,
    sham: !NATIVE_SYMBOL$5
  }, {
    Symbol: $Symbol
  });
  $forEach$1(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol$3(name);
  });
  $$L({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL$5
  }, {
    useSetter: function useSetter() {
      USE_SETTER = true;
    },
    useSimple: function useSimple() {
      USE_SETTER = false;
    }
  });
  $$L({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$5,
    sham: !DESCRIPTORS$b
  }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1
  });
  $$L({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$5
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames
  }); // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive

  defineSymbolToPrimitive$1(); // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag

  setToStringTag$7($Symbol, SYMBOL);
  hiddenKeys$1[HIDDEN] = true;

  var NATIVE_SYMBOL$4 = nativeSymbol;
  /* eslint-disable es-x/no-symbol -- safe */

  var nativeSymbolRegistry = NATIVE_SYMBOL$4 && !!Symbol['for'] && !!Symbol.keyFor;

  var $$K = _export;
  var getBuiltIn$5 = getBuiltIn$c;
  var hasOwn$e = hasOwnProperty_1;
  var toString$9 = toString$g;
  var shared$3 = shared$7.exports;
  var NATIVE_SYMBOL_REGISTRY$1 = nativeSymbolRegistry;
  var StringToSymbolRegistry = shared$3('string-to-symbol-registry');
  var SymbolToStringRegistry$1 = shared$3('symbol-to-string-registry'); // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for

  $$K({
    target: 'Symbol',
    stat: true,
    forced: !NATIVE_SYMBOL_REGISTRY$1
  }, {
    'for': function _for(key) {
      var string = toString$9(key);
      if (hasOwn$e(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = getBuiltIn$5('Symbol')(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry$1[symbol] = string;
      return symbol;
    }
  });

  var $$J = _export;
  var hasOwn$d = hasOwnProperty_1;
  var isSymbol$6 = isSymbol$4;
  var tryToString$4 = tryToString$7;
  var shared$2 = shared$7.exports;
  var NATIVE_SYMBOL_REGISTRY = nativeSymbolRegistry;
  var SymbolToStringRegistry = shared$2('symbol-to-string-registry'); // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor

  $$J({
    target: 'Symbol',
    stat: true,
    forced: !NATIVE_SYMBOL_REGISTRY
  }, {
    keyFor: function keyFor(sym) {
      if (!isSymbol$6(sym)) throw TypeError(tryToString$4(sym) + ' is not a symbol');
      if (hasOwn$d(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    }
  });

  var $$I = _export;
  var getBuiltIn$4 = getBuiltIn$c;
  var apply$5 = functionApply;
  var call$o = functionCall;
  var uncurryThis$q = functionUncurryThis;
  var fails$z = fails$W;
  var isArray$1 = isArray$4;
  var isCallable$e = isCallable$t;
  var isObject$j = isObject$r;
  var isSymbol$5 = isSymbol$4;
  var arraySlice$7 = arraySlice$8;
  var NATIVE_SYMBOL$3 = nativeSymbol;
  var $stringify = getBuiltIn$4('JSON', 'stringify');
  var exec$3 = uncurryThis$q(/./.exec);
  var charAt$5 = uncurryThis$q(''.charAt);
  var charCodeAt$2 = uncurryThis$q(''.charCodeAt);
  var replace$6 = uncurryThis$q(''.replace);
  var numberToString$1 = uncurryThis$q(1.0.toString);
  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;
  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$3 || fails$z(function () {
    var symbol = getBuiltIn$4('Symbol')(); // MS Edge converts symbol values to JSON as {}

    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
    || $stringify({
      a: symbol
    }) != '{}' // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
  }); // https://github.com/tc39/proposal-well-formed-stringify

  var ILL_FORMED_UNICODE = fails$z(function () {
    return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
  });

  var stringifyWithSymbolsFix = function stringifyWithSymbolsFix(it, replacer) {
    var args = arraySlice$7(arguments);
    var $replacer = replacer;
    if (!isObject$j(replacer) && it === undefined || isSymbol$5(it)) return; // IE8 returns string on undefined

    if (!isArray$1(replacer)) replacer = function replacer(key, value) {
      if (isCallable$e($replacer)) value = call$o($replacer, this, key, value);
      if (!isSymbol$5(value)) return value;
    };
    args[1] = replacer;
    return apply$5($stringify, null, args);
  };

  var fixIllFormed = function fixIllFormed(match, offset, string) {
    var prev = charAt$5(string, offset - 1);
    var next = charAt$5(string, offset + 1);

    if (exec$3(low, match) && !exec$3(hi, next) || exec$3(hi, match) && !exec$3(low, prev)) {
      return "\\u" + numberToString$1(charCodeAt$2(match, 0), 16);
    }

    return match;
  };

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    $$I({
      target: 'JSON',
      stat: true,
      arity: 3,
      forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$7(arguments);
        var result = apply$5(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
        return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$6(result, tester, fixIllFormed) : result;
      }
    });
  }

  var $$H = _export;
  var NATIVE_SYMBOL$2 = nativeSymbol;
  var fails$y = fails$W;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var toObject$c = toObject$g; // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  var FORCED$7 = !NATIVE_SYMBOL$2 || fails$y(function () {
    getOwnPropertySymbolsModule$1.f(1);
  }); // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols

  $$H({
    target: 'Object',
    stat: true,
    forced: FORCED$7
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
      return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$c(it)) : [];
    }
  });

  var defineWellKnownSymbol$2 = defineWellKnownSymbol$4; // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator

  defineWellKnownSymbol$2('iterator');

  var wellKnownSymbol$i = wellKnownSymbol$b;
  var create$5 = objectCreate;
  var defineProperty$7 = objectDefineProperty.f;
  var UNSCOPABLES = wellKnownSymbol$i('unscopables');
  var ArrayPrototype$1 = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    defineProperty$7(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$5(null)
    });
  } // add a key to Array.prototype[@@unscopables]


  var addToUnscopables$6 = function addToUnscopables(key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var global$s = global$p;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$b;
  var wellKnownSymbol$h = wellKnownSymbol$b;
  var ITERATOR$8 = wellKnownSymbol$h('iterator');
  var TO_STRING_TAG$2 = wellKnownSymbol$h('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$8] !== ArrayValues) try {
        createNonEnumerableProperty$5(CollectionPrototype, ITERATOR$8, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$8] = ArrayValues;
      }

      if (!CollectionPrototype[TO_STRING_TAG$2]) {
        createNonEnumerableProperty$5(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
      }

      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$5(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(global$s[COLLECTION_NAME] && global$s[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  var fails$x = fails$W;
  var correctPrototypeGetter = !fails$x(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null; // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing

    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var $$G = _export;
  var fails$w = fails$W;
  var toObject$b = toObject$g;
  var nativeGetPrototypeOf = objectGetPrototypeOf;
  var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
  var FAILS_ON_PRIMITIVES$5 = fails$w(function () {
    nativeGetPrototypeOf(1);
  }); // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof

  $$G({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$5,
    sham: !CORRECT_PROTOTYPE_GETTER$1
  }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return nativeGetPrototypeOf(toObject$b(it));
    }
  });

  var hasOwn$c = hasOwnProperty_1;
  var isCallable$d = isCallable$t;
  var toObject$a = toObject$g;
  var sharedKey = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object$2 = Object;
  var ObjectPrototype$2 = $Object$2.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es-x/no-object-getprototypeof -- safe

  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$2.getPrototypeOf : function (O) {
    var object = toObject$a(O);
    if (hasOwn$c(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;

    if (isCallable$d(constructor) && object instanceof constructor) {
      return constructor.prototype;
    }

    return object instanceof $Object$2 ? ObjectPrototype$2 : null;
  };

  var fails$v = fails$W;
  var isCallable$c = isCallable$t;
  var getPrototypeOf$5 = objectGetPrototypeOf;
  var defineBuiltIn$d = defineBuiltIn$j;
  var wellKnownSymbol$g = wellKnownSymbol$b;
  var ITERATOR$7 = wellKnownSymbol$g('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object

  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
  /* eslint-disable es-x/no-array-prototype-keys -- safe */

  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$5(getPrototypeOf$5(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$v(function () {
    var test = {}; // FF44- legacy iterators case

    return IteratorPrototype$2[ITERATOR$7].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

  if (!isCallable$c(IteratorPrototype$2[ITERATOR$7])) {
    defineBuiltIn$d(IteratorPrototype$2, ITERATOR$7, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$4 = objectCreate;
  var createPropertyDescriptor$5 = createPropertyDescriptor$8;
  var setToStringTag$6 = setToStringTag$8;
  var Iterators$4 = iterators;

  var returnThis$1 = function returnThis() {
    return this;
  };

  var createIteratorConstructor$2 = function createIteratorConstructor(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$4(IteratorPrototype$1, {
      next: createPropertyDescriptor$5(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag$6(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$4[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var $$F = _export;
  var call$n = functionCall;
  var FunctionName$1 = functionName;
  var isCallable$b = isCallable$t;
  var createIteratorConstructor$1 = createIteratorConstructor$2;
  var getPrototypeOf$4 = objectGetPrototypeOf;
  var setPrototypeOf$4 = objectSetPrototypeOf;
  var setToStringTag$5 = setToStringTag$8;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$b;
  var defineBuiltIn$c = defineBuiltIn$j;
  var wellKnownSymbol$f = wellKnownSymbol$b;
  var Iterators$3 = iterators;
  var IteratorsCore = iteratorsCore;
  var PROPER_FUNCTION_NAME$2 = FunctionName$1.PROPER;
  var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$6 = wellKnownSymbol$f('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function returnThis() {
    return this;
  };

  var defineIterator$3 = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor$1(IteratorConstructor, NAME, next);

    var getIterationMethod = function getIterationMethod(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };

        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };

        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }

      return function () {
        return new IteratorConstructor(this);
      };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$6] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$4(anyNativeIterator.call(new Iterable()));

      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf$4(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$4) {
            setPrototypeOf$4(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$b(CurrentIteratorPrototype[ITERATOR$6])) {
            defineBuiltIn$c(CurrentIteratorPrototype, ITERATOR$6, returnThis);
          }
        } // Set @@toStringTag to native iterators


        setToStringTag$5(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


    if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME$1) {
        createNonEnumerableProperty$4(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;

        defaultIterator = function values() {
          return call$n(nativeIterator, this);
        };
      }
    } // export additional methods


    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$c(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$F({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    } // define iterator


    if (IterablePrototype[ITERATOR$6] !== defaultIterator) {
      defineBuiltIn$c(IterablePrototype, ITERATOR$6, defaultIterator, {
        name: DEFAULT
      });
    }

    Iterators$3[NAME] = defaultIterator;
    return methods;
  };

  var toIndexedObject$5 = toIndexedObject$4;
  var addToUnscopables$5 = addToUnscopables$6;
  var Iterators$2 = iterators;
  var InternalStateModule$8 = internalState;
  var defineProperty$6 = objectDefineProperty.f;
  var defineIterator$2 = defineIterator$3;
  var DESCRIPTORS$a = descriptors;
  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$8 = InternalStateModule$8.set;
  var getInternalState$4 = InternalStateModule$8.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
    setInternalState$8(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$5(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$4(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;

    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject

  var values = Iterators$2.Arguments = Iterators$2.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$5('keys');
  addToUnscopables$5('values');
  addToUnscopables$5('entries'); // V8 ~ Chrome 45- bug

  if (DESCRIPTORS$a && values.name !== 'values') try {
    defineProperty$6(values, 'name', {
      value: 'values'
    });
  } catch (error) {
    /* empty */
  }

  var charAt$4 = stringMultibyte.charAt;
  var toString$8 = toString$g;
  var InternalStateModule$7 = internalState;
  var defineIterator$1 = defineIterator$3;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$7 = InternalStateModule$7.set;
  var getInternalState$3 = InternalStateModule$7.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

  defineIterator$1(String, 'String', function (iterated) {
    setInternalState$7(this, {
      type: STRING_ITERATOR,
      string: toString$8(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$3(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt$4(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });

  var NATIVE_SYMBOL$1 = nativeSymbol;
  var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';

  var getBuiltIn$3 = getBuiltIn$c;
  var isCallable$a = isCallable$t;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var $Object$1 = Object;
  var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return _typeof(it) == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$a($Symbol) && isPrototypeOf$5($Symbol.prototype, $Object$1(it));
  };

  var call$m = functionCall;
  var isCallable$9 = isCallable$t;
  var isObject$i = isObject$r;
  var $TypeError$a = TypeError; // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive

  var ordinaryToPrimitive$2 = function ordinaryToPrimitive(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$i(val = call$m(fn, input))) return val;
    if (isCallable$9(fn = input.valueOf) && !isObject$i(val = call$m(fn, input))) return val;
    if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$i(val = call$m(fn, input))) return val;
    throw $TypeError$a("Can't convert object to primitive value");
  };

  var call$l = functionCall;
  var isObject$h = isObject$r;
  var isSymbol$3 = isSymbol$4;
  var getMethod$4 = getMethod$7;
  var ordinaryToPrimitive$1 = ordinaryToPrimitive$2;
  var wellKnownSymbol$e = wellKnownSymbol$b;
  var $TypeError$9 = TypeError;
  var TO_PRIMITIVE$1 = wellKnownSymbol$e('toPrimitive'); // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive

  var toPrimitive$3 = function toPrimitive(input, pref) {
    if (!isObject$h(input) || isSymbol$3(input)) return input;
    var exoticToPrim = getMethod$4(input, TO_PRIMITIVE$1);
    var result;

    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$l(exoticToPrim, input, pref);
      if (!isObject$h(result) || isSymbol$3(result)) return result;
      throw $TypeError$9("Can't convert object to primitive value");
    }

    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive$1(input, pref);
  };

  var toPrimitive$2 = toPrimitive$3;
  var isSymbol$2 = isSymbol$4; // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey

  var toPropertyKey$3 = function toPropertyKey(argument) {
    var key = toPrimitive$2(argument, 'string');
    return isSymbol$2(key) ? key : key + '';
  };

  var toPropertyKey$2 = toPropertyKey$3;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor$4 = createPropertyDescriptor$8;

  var createProperty$3 = function createProperty(object, key, value) {
    var propertyKey = toPropertyKey$2(key);
    if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$4(0, value));else object[propertyKey] = value;
  };

  var $$E = _export;
  var fails$u = fails$W;
  var isArray = isArray$4;
  var isObject$g = isObject$r;
  var toObject$9 = toObject$g;
  var lengthOfArrayLike$b = lengthOfArrayLike$g;
  var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
  var createProperty$2 = createProperty$3;
  var arraySpeciesCreate$1 = arraySpeciesCreate$3;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$d = wellKnownSymbol$b;
  var V8_VERSION$1 = engineV8Version;
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$d('isConcatSpreadable'); // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$u(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$3('concat');

  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$g(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$6 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  $$E({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED$6
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$9(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$b(E);
          doesNotExceedSafeInteger$1(n + len);

          for (k = 0; k < len; k++, n++) {
            if (k in E) createProperty$2(A, n, E[k]);
          }
        } else {
          doesNotExceedSafeInteger$1(n + 1);
          createProperty$2(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var uncurryThis$p = functionUncurryThis;
  var toObject$8 = toObject$g;
  var floor$7 = Math.floor;
  var charAt$3 = uncurryThis$p(''.charAt);
  var replace$5 = uncurryThis$p(''.replace);
  var stringSlice$5 = uncurryThis$p(''.slice);
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution

  var getSubstitution$1 = function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject$8(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return replace$5(replacement, symbols, function (match, ch) {
      var capture;

      switch (charAt$3(ch, 0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return stringSlice$5(str, 0, position);

        case "'":
          return stringSlice$5(str, tailPos);

        case '<':
          capture = namedCaptures[stringSlice$5(ch, 1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor$7(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$3(ch, 1) : captures[f - 1] + charAt$3(ch, 1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  };

  var apply$4 = functionApply;
  var call$k = functionCall;
  var uncurryThis$o = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var fails$t = fails$W;
  var anObject$c = anObject$q;
  var isCallable$8 = isCallable$t;
  var toIntegerOrInfinity$7 = toIntegerOrInfinity$b;
  var toLength$5 = toLength$9;
  var toString$7 = toString$g;
  var requireObjectCoercible$5 = requireObjectCoercible$a;
  var advanceStringIndex = advanceStringIndex$3;
  var getMethod$3 = getMethod$7;
  var getSubstitution = getSubstitution$1;
  var regExpExec$1 = regexpExecAbstract;
  var wellKnownSymbol$c = wellKnownSymbol$b;
  var REPLACE = wellKnownSymbol$c('replace');
  var max$1 = Math.max;
  var min$3 = Math.min;
  var concat$1 = uncurryThis$o([].concat);
  var push$4 = uncurryThis$o([].push);
  var stringIndexOf$1 = uncurryThis$o(''.indexOf);
  var stringSlice$4 = uncurryThis$o(''.slice);

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }

    return false;
  }();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$t(function () {
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    }; // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive


    return ''.replace(re, '$<a>') !== '7';
  }); // @@replace logic

  fixRegExpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [// `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$5(this);
      var replacer = searchValue == undefined ? undefined : getMethod$3(searchValue, REPLACE);
      return replacer ? call$k(replacer, searchValue, O, replaceValue) : call$k(nativeReplace, toString$7(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$c(this);
      var S = toString$7(string);

      if (typeof replaceValue == 'string' && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, '$<') === -1) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$8(replaceValue);
      if (!functionalReplace) replaceValue = toString$7(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null) break;
        push$4(results, result);
        if (!global) break;
        var matchStr = toString$7(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$5(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$7(result[0]);
        var position = max$1(min$3(toIntegerOrInfinity$7(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) {
          push$4(captures, maybeToString(result[j]));
        }

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = concat$1([matched], captures, position, S);
          if (namedCaptures !== undefined) push$4(replacerArgs, namedCaptures);
          var replacement = toString$7(apply$4(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$4(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice$4(S, nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

  /* eslint-disable regexp/no-useless-quantifier -- testing */


  var call$j = functionCall;
  var uncurryThis$n = functionUncurryThis;
  var toString$6 = toString$g;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var shared$1 = shared$7.exports;
  var create$3 = objectCreate;
  var getInternalState$2 = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;
  var nativeReplace = shared$1('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$2 = uncurryThis$n(''.charAt);
  var indexOf = uncurryThis$n(''.indexOf);
  var replace$4 = uncurryThis$n(''.replace);
  var stringSlice$3 = uncurryThis$n(''.slice);

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$j(nativeExec, re1, 'a');
    call$j(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();

  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$2(re);
      var str = toString$6(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$j(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = call$j(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$4(flags, 'y', '');

        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$3(str, re.lastIndex); // Support anchored sticky behavior.

        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        } // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.


        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = call$j(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$3(match.input, charsAdded);
          match[0] = stringSlice$3(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        call$j(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create$3(null);

        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  var $$D = _export;
  var exec$2 = regexpExec; // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec

  $$D({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$2
  }, {
    exec: exec$2
  });

  var uncurryThis$m = functionUncurryThis;
  var fails$s = fails$W;
  var classof$9 = classofRaw$1;
  var $Object = Object;
  var split$3 = uncurryThis$m(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails$s(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$9(it) == 'String' ? split$3(it, '') : $Object(it);
  } : $Object;

  var IndexedObject$2 = indexedObject;
  var requireObjectCoercible$4 = requireObjectCoercible$a;

  var toIndexedObject$4 = function toIndexedObject(it) {
    return IndexedObject$2(requireObjectCoercible$4(it));
  };

  var $$C = _export;
  var fails$r = fails$W;
  var toIndexedObject$3 = toIndexedObject$4;
  var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var DESCRIPTORS$9 = descriptors;
  var FAILS_ON_PRIMITIVES$4 = fails$r(function () {
    nativeGetOwnPropertyDescriptor$1(1);
  });
  var FORCED$5 = !DESCRIPTORS$9 || FAILS_ON_PRIMITIVES$4; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  $$C({
    target: 'Object',
    stat: true,
    forced: FORCED$5,
    sham: !DESCRIPTORS$9
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return nativeGetOwnPropertyDescriptor$1(toIndexedObject$3(it), key);
    }
  });

  var objectGetOwnPropertyDescriptor = {};

  var DESCRIPTORS$8 = descriptors;
  var call$i = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$3 = createPropertyDescriptor$8;
  var toIndexedObject$2 = toIndexedObject$4;
  var toPropertyKey$1 = toPropertyKey$3;
  var hasOwn$b = hasOwnProperty_1;
  var IE8_DOM_DEFINE = ie8DomDefine; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$2(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
      /* empty */
    }
    if (hasOwn$b(O, P)) return createPropertyDescriptor$3(!call$i(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var global$r = global$p;
  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$b;
  var defineBuiltIn$b = defineBuiltIn$j;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$2;
  var isForced$3 = isForced_1;
  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */

  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global$r;
    } else if (STATIC) {
      target = global$r[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$r[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$3(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (_typeof(sourceProperty) == _typeof(targetProperty)) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$3(sourceProperty, 'sham', true);
      }

      defineBuiltIn$b(target, key, sourceProperty, options);
    }
  };

  var $$B = _export;
  var global$q = global$p; // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis

  $$B({
    global: true
  }, {
    globalThis: global$q
  });

  var check = function check(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global$p = // eslint-disable-next-line es-x/no-global-this -- safe
  check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check(_typeof(commonjsGlobal) == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var global$o = global$p;
  var shared = shared$7.exports;
  var hasOwn$a = hasOwnProperty_1;
  var uid$2 = uid$5;
  var NATIVE_SYMBOL = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var WellKnownSymbolsStore = shared('wks');
  var _Symbol = global$o.Symbol;
  var symbolFor = _Symbol && _Symbol['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol : _Symbol && _Symbol.withoutSetter || uid$2;

  var wellKnownSymbol$b = function wellKnownSymbol(name) {
    if (!hasOwn$a(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
      var description = 'Symbol.' + name;

      if (NATIVE_SYMBOL && hasOwn$a(_Symbol, name)) {
        WellKnownSymbolsStore[name] = _Symbol[name];
      } else if (USE_SYMBOL_AS_UID && symbolFor) {
        WellKnownSymbolsStore[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
    }

    return WellKnownSymbolsStore[name];
  };

  var wellKnownSymbol$a = wellKnownSymbol$b;
  var TO_STRING_TAG$1 = wellKnownSymbol$a('toStringTag');
  var test$1 = {};
  test$1[TO_STRING_TAG$1] = 'z';
  var toStringTagSupport = String(test$1) === '[object z]';

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$8 = classof$f; // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$8(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$a = defineBuiltIn$j;
  var toString$5 = objectToString; // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$a(Object.prototype, 'toString', toString$5, {
      unsafe: true
    });
  }

  var $$A = _export;
  var uncurryThis$l = functionUncurryThis;
  var fails$q = fails$W;
  var ArrayBufferModule$1 = arrayBuffer;
  var anObject$b = anObject$q;
  var toAbsoluteIndex$4 = toAbsoluteIndex$8;
  var toLength$4 = toLength$9;
  var speciesConstructor$3 = speciesConstructor$5;
  var ArrayBuffer$4 = ArrayBufferModule$1.ArrayBuffer;
  var DataView$2 = ArrayBufferModule$1.DataView;
  var DataViewPrototype$1 = DataView$2.prototype;
  var un$ArrayBufferSlice = uncurryThis$l(ArrayBuffer$4.prototype.slice);
  var getUint8 = uncurryThis$l(DataViewPrototype$1.getUint8);
  var setUint8 = uncurryThis$l(DataViewPrototype$1.setUint8);
  var INCORRECT_SLICE = fails$q(function () {
    return !new ArrayBuffer$4(2).slice(1, undefined).byteLength;
  }); // `ArrayBuffer.prototype.slice` method
  // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice

  $$A({
    target: 'ArrayBuffer',
    proto: true,
    unsafe: true,
    forced: INCORRECT_SLICE
  }, {
    slice: function slice(start, end) {
      if (un$ArrayBufferSlice && end === undefined) {
        return un$ArrayBufferSlice(anObject$b(this), start); // FF fix
      }

      var length = anObject$b(this).byteLength;
      var first = toAbsoluteIndex$4(start, length);
      var fin = toAbsoluteIndex$4(end === undefined ? length : end, length);
      var result = new (speciesConstructor$3(this, ArrayBuffer$4))(toLength$4(fin - first));
      var viewSource = new DataView$2(this);
      var viewTarget = new DataView$2(result);
      var index = 0;

      while (first < fin) {
        setUint8(viewTarget, index++, getUint8(viewSource, first++));
      }

      return result;
    }
  });

  var arrayBufferNative = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

  var defineBuiltIn$9 = defineBuiltIn$j;

  var defineBuiltIns$5 = function defineBuiltIns(target, src, options) {
    for (var key in src) {
      defineBuiltIn$9(target, key, src[key], options);
    }

    return target;
  };

  var isPrototypeOf$4 = objectIsPrototypeOf;
  var $TypeError$8 = TypeError;

  var anInstance$8 = function anInstance(it, Prototype) {
    if (isPrototypeOf$4(Prototype, it)) return it;
    throw $TypeError$8('Incorrect invocation');
  };

  var toIntegerOrInfinity$6 = toIntegerOrInfinity$b;
  var toLength$3 = toLength$9;
  var $RangeError$5 = RangeError; // `ToIndex` abstract operation
  // https://tc39.es/ecma262/#sec-toindex

  var toIndex$2 = function toIndex(it) {
    if (it === undefined) return 0;
    var number = toIntegerOrInfinity$6(it);
    var length = toLength$3(number);
    if (number !== length) throw $RangeError$5('Wrong length or index');
    return length;
  };

  var $Array$1 = Array;
  var abs = Math.abs;
  var pow$2 = Math.pow;
  var floor$6 = Math.floor;
  var log$2 = Math.log;
  var LN2 = Math.LN2;

  var pack = function pack(number, mantissaLength, bytes) {
    var buffer = $Array$1(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow$2(2, -24) - pow$2(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs(number); // eslint-disable-next-line no-self-compare -- NaN check

    if (number != number || number === Infinity) {
      // eslint-disable-next-line no-self-compare -- NaN check
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor$6(log$2(number) / LN2);
      c = pow$2(2, -exponent);

      if (number * c < 1) {
        exponent--;
        c *= 2;
      }

      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow$2(2, 1 - eBias);
      }

      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }

      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow$2(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow$2(2, eBias - 1) * pow$2(2, mantissaLength);
        exponent = 0;
      }
    }

    while (mantissaLength >= 8) {
      buffer[index++] = mantissa & 255;
      mantissa /= 256;
      mantissaLength -= 8;
    }

    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;

    while (exponentLength > 0) {
      buffer[index++] = exponent & 255;
      exponent /= 256;
      exponentLength -= 8;
    }

    buffer[--index] |= sign * 128;
    return buffer;
  };

  var unpack = function unpack(buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;

    while (nBits > 0) {
      exponent = exponent * 256 + buffer[index--];
      nBits -= 8;
    }

    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;

    while (nBits > 0) {
      mantissa = mantissa * 256 + buffer[index--];
      nBits -= 8;
    }

    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity : Infinity;
    } else {
      mantissa = mantissa + pow$2(2, mantissaLength);
      exponent = exponent - eBias;
    }

    return (sign ? -1 : 1) * mantissa * pow$2(2, exponent - mantissaLength);
  };

  var ieee754 = {
    pack: pack,
    unpack: unpack
  };

  var toObject$7 = toObject$g;
  var toAbsoluteIndex$3 = toAbsoluteIndex$8;
  var lengthOfArrayLike$a = lengthOfArrayLike$g; // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill

  var arrayFill$1 = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = toObject$7(this);
    var length = lengthOfArrayLike$a(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex$3(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex$3(end, length);

    while (endPos > index) {
      O[index++] = value;
    }

    return O;
  };

  var global$n = global$p;
  var uncurryThis$k = functionUncurryThis;
  var DESCRIPTORS$7 = descriptors;
  var NATIVE_ARRAY_BUFFER$1 = arrayBufferNative;
  var FunctionName = functionName;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$b;
  var defineBuiltIns$4 = defineBuiltIns$5;
  var fails$p = fails$W;
  var anInstance$7 = anInstance$8;
  var toIntegerOrInfinity$5 = toIntegerOrInfinity$b;
  var toLength$2 = toLength$9;
  var toIndex$1 = toIndex$2;
  var IEEE754 = ieee754;
  var getPrototypeOf$3 = objectGetPrototypeOf;
  var setPrototypeOf$3 = objectSetPrototypeOf;
  var getOwnPropertyNames$2 = objectGetOwnPropertyNames.f;
  var defineProperty$5 = objectDefineProperty.f;
  var arrayFill = arrayFill$1;
  var arraySlice$6 = arraySliceSimple;
  var setToStringTag$4 = setToStringTag$8;
  var InternalStateModule$6 = internalState;
  var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var getInternalState$1 = InternalStateModule$6.get;
  var setInternalState$6 = InternalStateModule$6.set;
  var ARRAY_BUFFER$1 = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH$1 = 'Wrong length';
  var WRONG_INDEX = 'Wrong index';
  var NativeArrayBuffer$1 = global$n[ARRAY_BUFFER$1];
  var $ArrayBuffer = NativeArrayBuffer$1;
  var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
  var $DataView = global$n[DATA_VIEW];
  var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
  var ObjectPrototype$1 = Object.prototype;
  var Array$1 = global$n.Array;
  var RangeError$3 = global$n.RangeError;
  var fill$1 = uncurryThis$k(arrayFill);
  var reverse = uncurryThis$k([].reverse);
  var packIEEE754 = IEEE754.pack;
  var unpackIEEE754 = IEEE754.unpack;

  var packInt8 = function packInt8(number) {
    return [number & 0xFF];
  };

  var packInt16 = function packInt16(number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };

  var packInt32 = function packInt32(number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };

  var unpackInt32 = function unpackInt32(buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };

  var packFloat32 = function packFloat32(number) {
    return packIEEE754(number, 23, 4);
  };

  var packFloat64 = function packFloat64(number) {
    return packIEEE754(number, 52, 8);
  };

  var addGetter$1 = function addGetter(Constructor, key) {
    defineProperty$5(Constructor[PROTOTYPE], key, {
      get: function get() {
        return getInternalState$1(this)[key];
      }
    });
  };

  var get$1 = function get(view, count, index, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$1(view);
    if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
    var bytes = getInternalState$1(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = arraySlice$6(bytes, start, start + count);
    return isLittleEndian ? pack : reverse(pack);
  };

  var set$2 = function set(view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$1(view);
    if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
    var bytes = getInternalState$1(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);

    for (var i = 0; i < count; i++) {
      bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
    }
  };

  if (!NATIVE_ARRAY_BUFFER$1) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$7(this, ArrayBufferPrototype$1);
      var byteLength = toIndex$1(length);
      setInternalState$6(this, {
        bytes: fill$1(Array$1(byteLength), 0),
        byteLength: byteLength
      });
      if (!DESCRIPTORS$7) this.byteLength = byteLength;
    };

    ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance$7(this, DataViewPrototype);
      anInstance$7(buffer, ArrayBufferPrototype$1);
      var bufferLength = getInternalState$1(buffer).byteLength;
      var offset = toIntegerOrInfinity$5(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError$3('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength$2(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError$3(WRONG_LENGTH$1);
      setInternalState$6(this, {
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset
      });

      if (!DESCRIPTORS$7) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };

    DataViewPrototype = $DataView[PROTOTYPE];

    if (DESCRIPTORS$7) {
      addGetter$1($ArrayBuffer, 'byteLength');
      addGetter$1($DataView, 'buffer');
      addGetter$1($DataView, 'byteLength');
      addGetter$1($DataView, 'byteOffset');
    }

    defineBuiltIns$4(DataViewPrototype, {
      getInt8: function getInt8(byteOffset) {
        return get$1(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get$1(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset
      /* , littleEndian */
      ) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset
      /* , littleEndian */
      ) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get$1(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set$2(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set$2(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$1 && NativeArrayBuffer$1.name !== ARRAY_BUFFER$1;
    /* eslint-disable no-new -- required for testing */

    if (!fails$p(function () {
      NativeArrayBuffer$1(1);
    }) || !fails$p(function () {
      new NativeArrayBuffer$1(-1);
    }) || fails$p(function () {
      new NativeArrayBuffer$1();
      new NativeArrayBuffer$1(1.5);
      new NativeArrayBuffer$1(NaN);
      return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
    })) {
      /* eslint-enable no-new -- required for testing */
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance$7(this, ArrayBufferPrototype$1);
        return new NativeArrayBuffer$1(toIndex$1(length));
      };

      $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;

      for (var keys$1 = getOwnPropertyNames$2(NativeArrayBuffer$1), j$1 = 0, key$1; keys$1.length > j$1;) {
        if (!((key$1 = keys$1[j$1++]) in $ArrayBuffer)) {
          createNonEnumerableProperty$2($ArrayBuffer, key$1, NativeArrayBuffer$1[key$1]);
        }
      }

      ArrayBufferPrototype$1.constructor = $ArrayBuffer;
    } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(NativeArrayBuffer$1, 'name', ARRAY_BUFFER$1);
    } // WebKit bug - the same parent prototype for typed arrays and data view


    if (setPrototypeOf$3 && getPrototypeOf$3(DataViewPrototype) !== ObjectPrototype$1) {
      setPrototypeOf$3(DataViewPrototype, ObjectPrototype$1);
    } // iOS Safari 7.x bug


    var testView = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = uncurryThis$k(DataViewPrototype.setInt8);
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns$4(DataViewPrototype, {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8(this, byteOffset, value << 24 >> 24);
      }
    }, {
      unsafe: true
    });
  }

  setToStringTag$4($ArrayBuffer, ARRAY_BUFFER$1);
  setToStringTag$4($DataView, DATA_VIEW);
  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };

  var $$z = _export;
  var global$m = global$p;
  var arrayBufferModule = arrayBuffer;
  var setSpecies$3 = setSpecies$5;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var ArrayBuffer$3 = arrayBufferModule[ARRAY_BUFFER];
  var NativeArrayBuffer = global$m[ARRAY_BUFFER]; // `ArrayBuffer` constructor
  // https://tc39.es/ecma262/#sec-arraybuffer-constructor

  $$z({
    global: true,
    constructor: true,
    forced: NativeArrayBuffer !== ArrayBuffer$3
  }, {
    ArrayBuffer: ArrayBuffer$3
  });
  setSpecies$3(ARRAY_BUFFER);

  var fails$o = fails$W;
  var isObject$f = isObject$r;
  var classof$7 = classofRaw$1;
  var ARRAY_BUFFER_NON_EXTENSIBLE$1 = arrayBufferNonExtensible; // eslint-disable-next-line es-x/no-object-isextensible -- safe

  var $isExtensible$1 = Object.isExtensible;
  var FAILS_ON_PRIMITIVES$3 = fails$o(function () {
    $isExtensible$1(1);
  }); // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible

  var objectIsExtensible = FAILS_ON_PRIMITIVES$3 || ARRAY_BUFFER_NON_EXTENSIBLE$1 ? function isExtensible(it) {
    if (!isObject$f(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE$1 && classof$7(it) == 'ArrayBuffer') return false;
    return $isExtensible$1 ? $isExtensible$1(it) : true;
  } : $isExtensible$1;

  var $$y = _export;
  var $isExtensible = objectIsExtensible; // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  // eslint-disable-next-line es-x/no-object-isextensible -- safe

  $$y({
    target: 'Object',
    stat: true,
    forced: Object.isExtensible !== $isExtensible
  }, {
    isExtensible: $isExtensible
  });

  var fails$n = fails$W;
  var arrayBufferNonExtensible = fails$n(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8); // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-defineproperty -- safe

      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
        value: 8
      });
    }
  });

  var $$x = _export;
  var fails$m = fails$W;
  var isObject$e = isObject$r;
  var classof$6 = classofRaw$1;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible; // eslint-disable-next-line es-x/no-object-isfrozen -- safe

  var $isFrozen = Object.isFrozen;
  var FAILS_ON_PRIMITIVES$2 = fails$m(function () {
    $isFrozen(1);
  }); // `Object.isFrozen` method
  // https://tc39.es/ecma262/#sec-object.isfrozen

  $$x({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$2 || ARRAY_BUFFER_NON_EXTENSIBLE
  }, {
    isFrozen: function isFrozen(it) {
      if (!isObject$e(it)) return true;
      if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$6(it) == 'ArrayBuffer') return true;
      return $isFrozen ? $isFrozen(it) : false;
    }
  });

  var $$w = _export;
  var $map$1 = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  $$w({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var tryToString$3 = tryToString$7;
  var $TypeError$7 = TypeError;

  var deletePropertyOrThrow$3 = function deletePropertyOrThrow(O, P) {
    if (!delete O[P]) throw $TypeError$7('Cannot delete property ' + tryToString$3(P) + ' of ' + tryToString$3(O));
  };

  var arraySlice$5 = arraySliceSimple;
  var floor$5 = Math.floor;

  var mergeSort = function mergeSort(array, comparefn) {
    var length = array.length;
    var middle = floor$5(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice$5(array, 0, middle), comparefn), mergeSort(arraySlice$5(array, middle), comparefn), comparefn);
  };

  var insertionSort = function insertionSort(array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];

      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }

      if (j !== i++) array[j] = element;
    }

    return array;
  };

  var merge = function merge(array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
    }

    return array;
  };

  var arraySort$1 = mergeSort;

  var userAgent$4 = engineUserAgent;
  var firefox = userAgent$4.match(/firefox\/(\d+)/i);
  var engineFfVersion = !!firefox && +firefox[1];

  var UA = engineUserAgent;
  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent$3 = engineUserAgent;
  var webkit = userAgent$3.match(/AppleWebKit\/(\d+)\./);
  var engineWebkitVersion = !!webkit && +webkit[1];

  var $$v = _export;
  var uncurryThis$j = functionUncurryThis;
  var aCallable$7 = aCallable$b;
  var toObject$6 = toObject$g;
  var lengthOfArrayLike$9 = lengthOfArrayLike$g;
  var deletePropertyOrThrow$2 = deletePropertyOrThrow$3;
  var toString$4 = toString$g;
  var fails$l = fails$W;
  var internalSort$1 = arraySort$1;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$4;
  var FF$1 = engineFfVersion;
  var IE_OR_EDGE$1 = engineIsIeOrEdge;
  var V8$1 = engineV8Version;
  var WEBKIT$1 = engineWebkitVersion;
  var test = [];
  var un$Sort$1 = uncurryThis$j(test.sort);
  var push$3 = uncurryThis$j(test.push); // IE8-

  var FAILS_ON_UNDEFINED = fails$l(function () {
    test.sort(undefined);
  }); // V8 bug

  var FAILS_ON_NULL = fails$l(function () {
    test.sort(null);
  }); // Old WebKit

  var STRICT_METHOD$1 = arrayMethodIsStrict$1('sort');
  var STABLE_SORT$1 = !fails$l(function () {
    // feature detection can be too slow, so check engines versions
    if (V8$1) return V8$1 < 70;
    if (FF$1 && FF$1 > 3) return;
    if (IE_OR_EDGE$1) return true;
    if (WEBKIT$1) return WEBKIT$1 < 603;
    var result = '';
    var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66:
        case 69:
        case 70:
        case 72:
          value = 3;
          break;

        case 68:
        case 71:
          value = 4;
          break;

        default:
          value = 2;
      }

      for (index = 0; index < 47; index++) {
        test.push({
          k: chr + index,
          v: value
        });
      }
    }

    test.sort(function (a, b) {
      return b.v - a.v;
    });

    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });
  var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT$1;

  var getSortCompare$1 = function getSortCompare(comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$4(x) > toString$4(y) ? 1 : -1;
    };
  }; // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort


  $$v({
    target: 'Array',
    proto: true,
    forced: FORCED$4
  }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable$7(comparefn);
      var array = toObject$6(this);
      if (STABLE_SORT$1) return comparefn === undefined ? un$Sort$1(array) : un$Sort$1(array, comparefn);
      var items = [];
      var arrayLength = lengthOfArrayLike$9(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$3(items, array[index]);
      }

      internalSort$1(items, getSortCompare$1(comparefn));
      itemsLength = items.length;
      index = 0;

      while (index < itemsLength) {
        array[index] = items[index++];
      }

      while (index < arrayLength) {
        deletePropertyOrThrow$2(array, index++);
      }

      return array;
    }
  });

  var classof$5 = classofRaw$1;
  var global$l = global$p;
  var engineIsNode = classof$5(global$l.process) == 'process';

  var $TypeError$6 = TypeError;

  var validateArgumentsLength$3 = function validateArgumentsLength(passed, required) {
    if (passed < required) throw $TypeError$6('Not enough arguments');
    return passed;
  };

  var userAgent$2 = engineUserAgent;
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

  var global$k = global$p;
  var apply$3 = functionApply;
  var bind$8 = functionBindContext;
  var isCallable$7 = isCallable$t;
  var hasOwn$9 = hasOwnProperty_1;
  var fails$k = fails$W;
  var html = html$2;
  var arraySlice$4 = arraySlice$8;
  var createElement = documentCreateElement$2;
  var validateArgumentsLength$2 = validateArgumentsLength$3;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$2 = engineIsNode;
  var set$1 = global$k.setImmediate;
  var clear = global$k.clearImmediate;
  var process$3 = global$k.process;
  var Dispatch = global$k.Dispatch;
  var Function$1 = global$k.Function;
  var MessageChannel = global$k.MessageChannel;
  var String$1 = global$k.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var location, defer, channel, port;

  try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global$k.location;
  } catch (error) {
    /* empty */
  }

  var run = function run(id) {
    if (hasOwn$9(queue$2, id)) {
      var fn = queue$2[id];
      delete queue$2[id];
      fn();
    }
  };

  var runner = function runner(id) {
    return function () {
      run(id);
    };
  };

  var listener = function listener(event) {
    run(event.data);
  };

  var post = function post(id) {
    // old engines have not location.origin
    global$k.postMessage(String$1(id), location.protocol + '//' + location.host);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!set$1 || !clear) {
    set$1 = function setImmediate(handler) {
      validateArgumentsLength$2(arguments.length, 1);
      var fn = isCallable$7(handler) ? handler : Function$1(handler);
      var args = arraySlice$4(arguments, 1);

      queue$2[++counter] = function () {
        apply$3(fn, undefined, args);
      };

      defer(counter);
      return counter;
    };

    clear = function clearImmediate(id) {
      delete queue$2[id];
    }; // Node.js 0.8-


    if (IS_NODE$2) {
      defer = function defer(id) {
        process$3.nextTick(runner(id));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(runner(id));
      }; // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624

    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = bind$8(port.postMessage, port); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global$k.addEventListener && isCallable$7(global$k.postMessage) && !global$k.importScripts && location && location.protocol !== 'file:' && !fails$k(post)) {
      defer = post;
      global$k.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function defer(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      }; // Rest old browsers

    } else {
      defer = function defer(id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set$1,
    clear: clear
  };

  var userAgent$1 = engineUserAgent;
  var global$j = global$p;
  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$j.Pebble !== undefined;

  var userAgent = engineUserAgent;
  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

  var global$i = global$p;
  var bind$7 = functionBindContext;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$1 = engineIsNode;
  var MutationObserver$1 = global$i.MutationObserver || global$i.WebKitMutationObserver;
  var document$2 = global$i.document;
  var process$2 = global$i.process;
  var Promise$1 = global$i.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global$i, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush, head, last, notify$1, toggle$1, node, promise, then; // modern engines have queueMicrotask method

  if (!queueMicrotask) {
    flush = function flush() {
      var parent, fn;
      if (IS_NODE$1 && (parent = process$2.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (error) {
          if (head) notify$1();else last = undefined;
          throw error;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


    if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver$1 && document$2) {
      toggle$1 = true;
      node = document$2.createTextNode('');
      new MutationObserver$1(flush).observe(node, {
        characterData: true
      });

      notify$1 = function notify() {
        node.data = toggle$1 = !toggle$1;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

      promise.constructor = Promise$1;
      then = bind$7(promise.then, promise);

      notify$1 = function notify() {
        then(flush);
      }; // Node.js without promises

    } else if (IS_NODE$1) {
      notify$1 = function notify() {
        process$2.nextTick(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessage
      // - onreadystatechange
      // - setTimeout

    } else {
      // strange IE + webpack dev server bug - use .bind(global)
      macrotask = bind$7(macrotask, global$i);

      notify$1 = function notify() {
        macrotask(flush);
      };
    }
  }

  var microtask$1 = queueMicrotask || function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify$1();
    }

    last = task;
  };

  var global$h = global$p;

  var hostReportErrors$1 = function hostReportErrors(a, b) {
    var console = global$h.console;

    if (console && console.error) {
      arguments.length == 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform$3 = function perform(exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };

  var Queue$1 = function Queue() {
    this.head = null;
    this.tail = null;
  };

  Queue$1.prototype = {
    add: function add(item) {
      var entry = {
        item: item,
        next: null
      };
      if (this.head) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
    },
    get: function get() {
      var entry = this.head;

      if (entry) {
        this.head = entry.next;
        if (this.tail === entry) this.tail = null;
        return entry.item;
      }
    }
  };
  var queue$1 = Queue$1;

  var global$g = global$p;
  var promiseNativeConstructor = global$g.Promise;

  var newPromiseCapability$2 = {};

  var aCallable$6 = aCallable$b;

  var PromiseCapability = function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$6(resolve);
    this.reject = aCallable$6(reject);
  }; // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability


  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var anObject$a = anObject$q;
  var isObject$d = isObject$r;
  var newPromiseCapability$1 = newPromiseCapability$2;

  var promiseResolve$2 = function promiseResolve(C, x) {
    anObject$a(C);
    if (isObject$d(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var $$u = _export;
  var NativePromiseConstructor$4 = promiseNativeConstructor;
  var fails$j = fails$W;
  var getBuiltIn$2 = getBuiltIn$c;
  var isCallable$6 = isCallable$t;
  var speciesConstructor$2 = speciesConstructor$5;
  var promiseResolve$1 = promiseResolve$2;
  var defineBuiltIn$8 = defineBuiltIn$j;
  var NativePromisePrototype$2 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype; // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829

  var NON_GENERIC = !!NativePromiseConstructor$4 && fails$j(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromisePrototype$2['finally'].call({
      then: function then() {
        /* empty */
      }
    }, function () {
      /* empty */
    });
  }); // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally

  $$u({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
  }, {
    'finally': function _finally(onFinally) {
      var C = speciesConstructor$2(this, getBuiltIn$2('Promise'));
      var isFunction = isCallable$6(onFinally);
      return this.then(isFunction ? function (x) {
        return promiseResolve$1(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return promiseResolve$1(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  }); // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`

  if (isCallable$6(NativePromiseConstructor$4)) {
    var method$1 = getBuiltIn$2('Promise').prototype['finally'];

    if (NativePromisePrototype$2['finally'] !== method$1) {
      defineBuiltIn$8(NativePromisePrototype$2, 'finally', method$1, {
        unsafe: true
      });
    }
  }

  var engineIsBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && (typeof Deno === "undefined" ? "undefined" : _typeof(Deno)) != 'object';

  var global$f = global$p;
  var NativePromiseConstructor$3 = promiseNativeConstructor;
  var isCallable$5 = isCallable$t;
  var isForced$2 = isForced_1;
  var inspectSource = inspectSource$2;
  var wellKnownSymbol$9 = wellKnownSymbol$b;
  var IS_BROWSER = engineIsBrowser;
  var V8_VERSION = engineV8Version;
  NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
  var SPECIES = wellKnownSymbol$9('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$5(global$f.PromiseRejectionEvent);
  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$2('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions

    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true; // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679

    if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false; // Detect correctness of subclassing with @@species support

    var promise = new NativePromiseConstructor$3(function (resolve) {
      resolve(1);
    });

    var FakePromise = function FakePromise(exec) {
      exec(function () {
        /* empty */
      }, function () {
        /* empty */
      });
    };

    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () {
      /* empty */
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

    return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_PROMISE_REJECTION_EVENT$1;
  });
  var promiseConstructorDetection = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
    SUBCLASSING: SUBCLASSING
  };

  var $$t = _export;
  var IS_NODE = engineIsNode;
  var global$e = global$p;
  var call$h = functionCall;
  var defineBuiltIn$7 = defineBuiltIn$j;
  var setPrototypeOf$2 = objectSetPrototypeOf;
  var setToStringTag$3 = setToStringTag$8;
  var setSpecies$2 = setSpecies$5;
  var aCallable$5 = aCallable$b;
  var isCallable$4 = isCallable$t;
  var isObject$c = isObject$r;
  var anInstance$6 = anInstance$8;
  var speciesConstructor$1 = speciesConstructor$5;
  var task = task$1.set;
  var microtask = microtask$1;
  var hostReportErrors = hostReportErrors$1;
  var perform$2 = perform$3;
  var Queue = queue$1;
  var InternalStateModule$5 = internalState;
  var NativePromiseConstructor$2 = promiseNativeConstructor;
  var PromiseConstructorDetection = promiseConstructorDetection;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;
  var PROMISE = 'Promise';
  var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = InternalStateModule$5.getterFor(PROMISE);
  var setInternalState$5 = InternalStateModule$5.set;
  var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
  var PromiseConstructor = NativePromiseConstructor$2;
  var PromisePrototype = NativePromisePrototype$1;
  var TypeError$5 = global$e.TypeError;
  var document$1 = global$e.document;
  var process$1 = global$e.process;
  var newPromiseCapability = newPromiseCapabilityModule$3.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$e.dispatchEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen; // helpers

  var isThenable = function isThenable(it) {
    var then;
    return isObject$c(it) && isCallable$4(then = it.then) ? then : false;
  };

  var callReaction = function callReaction(reaction, state) {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;

    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }

        if (handler === true) result = value;else {
          if (domain) domain.enter();
          result = handler(value); // can throw

          if (domain) {
            domain.exit();
            exited = true;
          }
        }

        if (result === reaction.promise) {
          reject(TypeError$5('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          call$h(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };

  var notify = function notify(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function () {
      var reactions = state.reactions;
      var reaction;

      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }

      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function dispatchEvent(name, promise, reason) {
    var event, handler;

    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$e.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };

    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$e['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function onUnhandled(state) {
    call$h(task, global$e, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;

      if (IS_UNHANDLED) {
        result = perform$2(function () {
          if (IS_NODE) {
            process$1.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function isUnhandled(state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function onHandleUnhandled(state) {
    call$h(task, global$e, function () {
      var promise = state.facade;

      if (IS_NODE) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind$6 = function bind(fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function internalReject(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function internalResolve(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;

    try {
      if (state.facade === value) throw TypeError$5("Promise can't be resolved itself");
      var then = isThenable(value);

      if (then) {
        microtask(function () {
          var wrapper = {
            done: false
          };

          try {
            call$h(then, value, bind$6(internalResolve, wrapper, state), bind$6(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({
        done: false
      }, error, state);
    }
  }; // constructor polyfill


  if (FORCED_PROMISE_CONSTRUCTOR$4) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance$6(this, PromisePrototype);
      aCallable$5(executor);
      call$h(Internal, this);
      var state = getInternalPromiseState(this);

      try {
        executor(bind$6(internalResolve, state), bind$6(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromisePrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

    Internal = function Promise(executor) {
      setInternalState$5(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: undefined
      });
    }; // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then


    Internal.prototype = defineBuiltIn$7(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor$1(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$4(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$4(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process$1.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    });

    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      var state = getInternalPromiseState(promise);
      this.promise = promise;
      this.resolve = bind$6(internalResolve, state);
      this.reject = bind$6(internalReject, state);
    };

    newPromiseCapabilityModule$3.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };

    if (isCallable$4(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
      nativeThen = NativePromisePrototype$1.then;

      if (!NATIVE_PROMISE_SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn$7(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            call$h(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        });
      } // make `.constructor === Promise` work for native promise-based APIs


      try {
        delete NativePromisePrototype$1.constructor;
      } catch (error) {
        /* empty */
      } // make `instanceof Promise` work for native promise-based APIs


      if (setPrototypeOf$2) {
        setPrototypeOf$2(NativePromisePrototype$1, PromisePrototype);
      }
    }
  }

  $$t({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED_PROMISE_CONSTRUCTOR$4
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag$3(PromiseConstructor, PROMISE, false);
  setSpecies$2(PROMISE);

  var wellKnownSymbol$8 = wellKnownSymbol$b;
  var Iterators$1 = iterators;
  var ITERATOR$5 = wellKnownSymbol$8('iterator');
  var ArrayPrototype = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod$3 = function isArrayIteratorMethod(it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$5] === it);
  };

  var classof$4 = classof$f;
  var getMethod$2 = getMethod$7;
  var Iterators = iterators;
  var wellKnownSymbol$7 = wellKnownSymbol$b;
  var ITERATOR$4 = wellKnownSymbol$7('iterator');

  var getIteratorMethod$5 = function getIteratorMethod(it) {
    if (it != undefined) return getMethod$2(it, ITERATOR$4) || getMethod$2(it, '@@iterator') || Iterators[classof$4(it)];
  };

  var call$g = functionCall;
  var aCallable$4 = aCallable$b;
  var anObject$9 = anObject$q;
  var tryToString$2 = tryToString$7;
  var getIteratorMethod$4 = getIteratorMethod$5;
  var $TypeError$5 = TypeError;

  var getIterator$4 = function getIterator(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
    if (aCallable$4(iteratorMethod)) return anObject$9(call$g(iteratorMethod, argument));
    throw $TypeError$5(tryToString$2(argument) + ' is not iterable');
  };

  var call$f = functionCall;
  var anObject$8 = anObject$q;
  var getMethod$1 = getMethod$7;

  var iteratorClose$2 = function iteratorClose(iterator, kind, value) {
    var innerResult, innerError;
    anObject$8(iterator);

    try {
      innerResult = getMethod$1(iterator, 'return');

      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }

      innerResult = call$f(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }

    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$8(innerResult);
    return value;
  };

  var bind$5 = functionBindContext;
  var call$e = functionCall;
  var anObject$7 = anObject$q;
  var tryToString$1 = tryToString$7;
  var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
  var lengthOfArrayLike$8 = lengthOfArrayLike$g;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var getIterator$3 = getIterator$4;
  var getIteratorMethod$3 = getIteratorMethod$5;
  var iteratorClose$1 = iteratorClose$2;
  var $TypeError$4 = TypeError;

  var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$5 = function iterate(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$5(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function stop(condition) {
      if (iterator) iteratorClose$1(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject$7(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$3(iterable);
      if (!iterFn) throw $TypeError$4(tryToString$1(iterable) + ' is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod$2(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$8(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$3(ResultPrototype, result)) return result;
        }

        return new Result(false);
      }

      iterator = getIterator$3(iterable, iterFn);
    }

    next = iterator.next;

    while (!(step = call$e(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$1(iterator, 'throw', error);
      }

      if (_typeof(result) == 'object' && result && isPrototypeOf$3(ResultPrototype, result)) return result;
    }

    return new Result(false);
  };

  var anObject$6 = anObject$q;
  var iteratorClose = iteratorClose$2; // call something on iterator step with safe closing on error

  var callWithSafeIterationClosing$1 = function callWithSafeIterationClosing(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$6(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
  };

  var bind$4 = functionBindContext;
  var call$d = functionCall;
  var toObject$5 = toObject$g;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
  var isConstructor = isConstructor$2;
  var lengthOfArrayLike$7 = lengthOfArrayLike$g;
  var createProperty$1 = createProperty$3;
  var getIterator$2 = getIterator$4;
  var getIteratorMethod$2 = getIteratorMethod$5;
  var $Array = Array; // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from

  var arrayFrom$1 = function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject$5(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$4(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$2(O);
    var index = 0;
    var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case

    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = getIterator$2(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];

      for (; !(step = call$d(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$1(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$7(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array(length);

      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$1(result, index, value);
      }
    }

    result.length = index;
    return result;
  };

  var $$s = _export;
  var from = arrayFrom$1;
  var checkCorrectnessOfIteration$4 = checkCorrectnessOfIteration$3;
  var INCORRECT_ITERATION = !checkCorrectnessOfIteration$4(function (iterable) {
    // eslint-disable-next-line es-x/no-array-from -- required for testing
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from

  $$s({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    from: from
  });

  var wellKnownSymbol$6 = wellKnownSymbol$b;
  var ITERATOR$3 = wellKnownSymbol$6('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function next() {
        return {
          done: !!called++
        };
      },
      'return': function _return() {
        SAFE_CLOSING = true;
      }
    };

    iteratorWithReturn[ITERATOR$3] = function () {
      return this;
    }; // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration$3 = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$3] = function () {
        return {
          next: function next() {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var NativePromiseConstructor$1 = promiseNativeConstructor;
  var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$3;
  var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
  var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$2(function (iterable) {
    NativePromiseConstructor$1.all(iterable).then(undefined, function () {
      /* empty */
    });
  });

  var $$r = _export;
  var call$c = functionCall;
  var aCallable$3 = aCallable$b;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$1 = perform$3;
  var iterate$4 = iterate$5;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration; // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all

  $$r({
    target: 'Promise',
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION$1
  }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$2.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$1(function () {
        var $promiseResolve = aCallable$3(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$4(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$c($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$q = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor = promiseNativeConstructor;
  var getBuiltIn$1 = getBuiltIn$c;
  var isCallable$3 = isCallable$t;
  var defineBuiltIn$6 = defineBuiltIn$j;
  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype; // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch

  $$q({
    target: 'Promise',
    proto: true,
    forced: FORCED_PROMISE_CONSTRUCTOR$2,
    real: true
  }, {
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

  if (isCallable$3(NativePromiseConstructor)) {
    var method = getBuiltIn$1('Promise').prototype['catch'];

    if (NativePromisePrototype['catch'] !== method) {
      defineBuiltIn$6(NativePromisePrototype, 'catch', method, {
        unsafe: true
      });
    }
  }

  var $$p = _export;
  var call$b = functionCall;
  var aCallable$2 = aCallable$b;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var perform = perform$3;
  var iterate$3 = iterate$5;
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration; // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race

  $$p({
    target: 'Promise',
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
  }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$1.f(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable$2(C.resolve);
        iterate$3(iterable, function (promise) {
          call$b($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$o = _export;
  var call$a = functionCall;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR; // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject

  $$o({
    target: 'Promise',
    stat: true,
    forced: FORCED_PROMISE_CONSTRUCTOR$1
  }, {
    reject: function reject(r) {
      var capability = newPromiseCapabilityModule.f(this);
      call$a(capability.reject, undefined, r);
      return capability.promise;
    }
  });

  var $$n = _export;
  var getBuiltIn = getBuiltIn$c;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve = promiseResolve$2;
  getBuiltIn('Promise');
  // https://tc39.es/ecma262/#sec-promise.resolve

  $$n({
    target: 'Promise',
    stat: true,
    forced: FORCED_PROMISE_CONSTRUCTOR
  }, {
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });

  var $$m = _export;
  var $filter$1 = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  $$m({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$l = _export;
  var is = sameValue$1; // `Object.is` method
  // https://tc39.es/ecma262/#sec-object.is

  $$l({
    target: 'Object',
    stat: true
  }, {
    is: is
  });

  // https://tc39.es/ecma262/#sec-samevalue
  // eslint-disable-next-line es-x/no-object-is -- safe

  var sameValue$1 = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  var call$9 = functionCall;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var anObject$5 = anObject$q;
  var requireObjectCoercible$3 = requireObjectCoercible$a;
  var sameValue = sameValue$1;
  var toString$3 = toString$g;
  var getMethod = getMethod$7;
  var regExpExec = regexpExecAbstract; // @@search logic

  fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
    return [// `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible$3(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call$9(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$3(O));
    }, // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject$5(this);
      var S = toString$3(string);
      var res = maybeCallNative(nativeSearch, rx, S);
      if (res.done) return res.value;
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  });

  var $$k = _export;
  var toObject$4 = toObject$g;
  var toAbsoluteIndex$2 = toAbsoluteIndex$8;
  var toIntegerOrInfinity$4 = toIntegerOrInfinity$b;
  var lengthOfArrayLike$6 = lengthOfArrayLike$g;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
  var arraySpeciesCreate = arraySpeciesCreate$3;
  var createProperty = createProperty$3;
  var deletePropertyOrThrow$1 = deletePropertyOrThrow$3;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
  var max = Math.max;
  var min$2 = Math.min; // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species

  $$k({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    splice: function splice(start, deleteCount
    /* , ...items */
    ) {
      var O = toObject$4(this);
      var len = lengthOfArrayLike$6(O);
      var actualStart = toAbsoluteIndex$2(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;

      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$2(max(toIntegerOrInfinity$4(deleteCount), 0), len - actualStart);
      }

      doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
      A = arraySpeciesCreate(O, actualDeleteCount);

      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
      }

      A.length = actualDeleteCount;

      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];else deletePropertyOrThrow$1(O, to);
        }

        for (k = len; k > len - actualDeleteCount + insertCount; k--) {
          deletePropertyOrThrow$1(O, k - 1);
        }
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];else deletePropertyOrThrow$1(O, to);
        }
      }

      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }

      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });

  var $$j = _export;
  var global$d = global$p;
  var call$8 = functionCall;
  var uncurryThis$i = functionUncurryThis;
  var DESCRIPTORS$6 = descriptors;
  var USE_NATIVE_URL$1 = nativeUrl;
  var defineBuiltIn$5 = defineBuiltIn$j;
  var defineBuiltIns$3 = defineBuiltIns$5;
  var setToStringTag$2 = setToStringTag$8;
  var createIteratorConstructor = createIteratorConstructor$2;
  var InternalStateModule$4 = internalState;
  var anInstance$5 = anInstance$8;
  var isCallable$2 = isCallable$t;
  var hasOwn$8 = hasOwnProperty_1;
  var bind$3 = functionBindContext;
  var classof$3 = classof$f;
  var anObject$4 = anObject$q;
  var isObject$b = isObject$r;
  var $toString$1 = toString$g;
  var create$2 = objectCreate;
  var createPropertyDescriptor$2 = createPropertyDescriptor$8;
  var getIterator$1 = getIterator$4;
  var getIteratorMethod$1 = getIteratorMethod$5;
  var validateArgumentsLength$1 = validateArgumentsLength$3;
  var wellKnownSymbol$5 = wellKnownSymbol$b;
  var arraySort = arraySort$1;
  var ITERATOR$2 = wellKnownSymbol$5('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$4 = InternalStateModule$4.set;
  var getInternalParamsState = InternalStateModule$4.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = InternalStateModule$4.getterFor(URL_SEARCH_PARAMS_ITERATOR); // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Avoid NodeJS experimental warning

  var safeGetBuiltIn = function safeGetBuiltIn(name) {
    if (!DESCRIPTORS$6) return global$d[name];
    var descriptor = getOwnPropertyDescriptor$1(global$d, name);
    return descriptor && descriptor.value;
  };

  var nativeFetch = safeGetBuiltIn('fetch');
  var NativeRequest = safeGetBuiltIn('Request');
  var Headers = safeGetBuiltIn('Headers');
  var RequestPrototype = NativeRequest && NativeRequest.prototype;
  var HeadersPrototype = Headers && Headers.prototype;
  var RegExp$1 = global$d.RegExp;
  var TypeError$4 = global$d.TypeError;
  var decodeURIComponent = global$d.decodeURIComponent;
  var encodeURIComponent$1 = global$d.encodeURIComponent;
  var charAt$1 = uncurryThis$i(''.charAt);
  var join$3 = uncurryThis$i([].join);
  var push$2 = uncurryThis$i([].push);
  var replace$3 = uncurryThis$i(''.replace);
  var shift$1 = uncurryThis$i([].shift);
  var splice$1 = uncurryThis$i([].splice);
  var split$2 = uncurryThis$i(''.split);
  var stringSlice$2 = uncurryThis$i(''.slice);
  var plus = /\+/g;
  var sequences = Array(4);

  var percentSequence = function percentSequence(bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };

  var percentDecode = function percentDecode(sequence) {
    try {
      return decodeURIComponent(sequence);
    } catch (error) {
      return sequence;
    }
  };

  var deserialize = function deserialize(it) {
    var result = replace$3(it, plus, ' ');
    var bytes = 4;

    try {
      return decodeURIComponent(result);
    } catch (error) {
      while (bytes) {
        result = replace$3(result, percentSequence(bytes--), percentDecode);
      }

      return result;
    }
  };

  var find$1 = /[!'()~]|%20/g;
  var replacements = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };

  var replacer = function replacer(match) {
    return replacements[match];
  };

  var _serialize = function serialize(it) {
    return replace$3(encodeURIComponent$1(it), find$1, replacer);
  };

  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState$4(this, {
      type: URL_SEARCH_PARAMS_ITERATOR,
      iterator: getIterator$1(getInternalParamsState(params).entries),
      kind: kind
    });
  }, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;

    if (!step.done) {
      step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
    }

    return step;
  }, true);

  var URLSearchParamsState = function URLSearchParamsState(init) {
    this.entries = [];
    this.url = null;

    if (init !== undefined) {
      if (isObject$b(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$2(init, 1) : init : $toString$1(init));
    }
  };

  URLSearchParamsState.prototype = {
    type: URL_SEARCH_PARAMS,
    bindURL: function bindURL(url) {
      this.url = url;
      this.update();
    },
    parseObject: function parseObject(object) {
      var iteratorMethod = getIteratorMethod$1(object);
      var iterator, next, step, entryIterator, entryNext, first, second;

      if (iteratorMethod) {
        iterator = getIterator$1(object, iteratorMethod);
        next = iterator.next;

        while (!(step = call$8(next, iterator)).done) {
          entryIterator = getIterator$1(anObject$4(step.value));
          entryNext = entryIterator.next;
          if ((first = call$8(entryNext, entryIterator)).done || (second = call$8(entryNext, entryIterator)).done || !call$8(entryNext, entryIterator).done) throw TypeError$4('Expected sequence with length 2');
          push$2(this.entries, {
            key: $toString$1(first.value),
            value: $toString$1(second.value)
          });
        }
      } else for (var key in object) {
        if (hasOwn$8(object, key)) {
          push$2(this.entries, {
            key: key,
            value: $toString$1(object[key])
          });
        }
      }
    },
    parseQuery: function parseQuery(query) {
      if (query) {
        var attributes = split$2(query, '&');
        var index = 0;
        var attribute, entry;

        while (index < attributes.length) {
          attribute = attributes[index++];

          if (attribute.length) {
            entry = split$2(attribute, '=');
            push$2(this.entries, {
              key: deserialize(shift$1(entry)),
              value: deserialize(join$3(entry, '='))
            });
          }
        }
      }
    },
    serialize: function serialize() {
      var entries = this.entries;
      var result = [];
      var index = 0;
      var entry;

      while (index < entries.length) {
        entry = entries[index++];
        push$2(result, _serialize(entry.key) + '=' + _serialize(entry.value));
      }

      return join$3(result, '&');
    },
    update: function update() {
      this.entries.length = 0;
      this.parseQuery(this.url.query);
    },
    updateURL: function updateURL() {
      if (this.url) this.url.update();
    }
  }; // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams

  var URLSearchParamsConstructor = function
    /* init */
  URLSearchParams() {
    anInstance$5(this, URLSearchParamsPrototype);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    setInternalState$4(this, new URLSearchParamsState(init));
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
  defineBuiltIns$3(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      validateArgumentsLength$1(arguments.length, 2);
      var state = getInternalParamsState(this);
      push$2(state.entries, {
        key: $toString$1(name),
        value: $toString$1(value)
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function _delete(name) {
      validateArgumentsLength$1(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var key = $toString$1(name);
      var index = 0;

      while (index < entries.length) {
        if (entries[index].key === key) splice$1(entries, index, 1);else index++;
      }

      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      validateArgumentsLength$1(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var index = 0;

      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }

      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      validateArgumentsLength$1(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var result = [];
      var index = 0;

      for (; index < entries.length; index++) {
        if (entries[index].key === key) push$2(result, entries[index].value);
      }

      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
      validateArgumentsLength$1(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = $toString$1(name);
      var index = 0;

      while (index < entries.length) {
        if (entries[index++].key === key) return true;
      }

      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      validateArgumentsLength$1(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var found = false;
      var key = $toString$1(name);
      var val = $toString$1(value);
      var index = 0;
      var entry;

      for (; index < entries.length; index++) {
        entry = entries[index];

        if (entry.key === key) {
          if (found) splice$1(entries, index--, 1);else {
            found = true;
            entry.value = val;
          }
        }
      }

      if (!found) push$2(entries, {
        key: key,
        value: val
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = getInternalParamsState(this);
      arraySort(state.entries, function (a, b) {
        return a.key > b.key ? 1 : -1;
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback
    /* , thisArg */
    ) {
      var entries = getInternalParamsState(this).entries;
      var boundFunction = bind$3(callback, arguments.length > 1 ? arguments[1] : undefined);
      var index = 0;
      var entry;

      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new URLSearchParamsIterator(this, 'entries');
    }
  }, {
    enumerable: true
  }); // `URLSearchParams.prototype[@@iterator]` method

  defineBuiltIn$5(URLSearchParamsPrototype, ITERATOR$2, URLSearchParamsPrototype.entries, {
    name: 'entries'
  }); // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

  defineBuiltIn$5(URLSearchParamsPrototype, 'toString', function toString() {
    return getInternalParamsState(this).serialize();
  }, {
    enumerable: true
  });
  setToStringTag$2(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  $$j({
    global: true,
    constructor: true,
    forced: !USE_NATIVE_URL$1
  }, {
    URLSearchParams: URLSearchParamsConstructor
  }); // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`

  if (!USE_NATIVE_URL$1 && isCallable$2(Headers)) {
    var headersHas = uncurryThis$i(HeadersPrototype.has);
    var headersSet = uncurryThis$i(HeadersPrototype.set);

    var wrapRequestOptions = function wrapRequestOptions(init) {
      if (isObject$b(init)) {
        var body = init.body;
        var headers;

        if (classof$3(body) === URL_SEARCH_PARAMS) {
          headers = init.headers ? new Headers(init.headers) : new Headers();

          if (!headersHas(headers, 'content-type')) {
            headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }

          return create$2(init, {
            body: createPropertyDescriptor$2(0, $toString$1(body)),
            headers: createPropertyDescriptor$2(0, headers)
          });
        }
      }

      return init;
    };

    if (isCallable$2(nativeFetch)) {
      $$j({
        global: true,
        enumerable: true,
        dontCallGetSet: true,
        forced: true
      }, {
        fetch: function fetch(input
        /* , init */
        ) {
          return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }
      });
    }

    if (isCallable$2(NativeRequest)) {
      var RequestConstructor = function Request(input
      /* , init */
      ) {
        anInstance$5(this, RequestPrototype);
        return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      };

      RequestPrototype.constructor = RequestConstructor;
      RequestConstructor.prototype = RequestPrototype;
      $$j({
        global: true,
        constructor: true,
        dontCallGetSet: true,
        forced: true
      }, {
        Request: RequestConstructor
      });
    }
  }

  var web_urlSearchParams_constructor = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  var fails$i = fails$W;
  var wellKnownSymbol$4 = wellKnownSymbol$b;
  var IS_PURE = isPure;
  var ITERATOR$1 = wellKnownSymbol$4('iterator');
  var nativeUrl = !fails$i(function () {
    // eslint-disable-next-line unicorn/relative-url-style -- required for testing
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function (value, key) {
      searchParams['delete']('b');
      result += key + value;
    });
    return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR$1] // throws in Edge
    || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1' // fails in Chrome 66-
    || result !== 'a1c3' // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
  });

  var $$i = _export;
  var assign$1 = objectAssign; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es-x/no-object-assign -- required for testing

  $$i({
    target: 'Object',
    stat: true,
    arity: 2,
    forced: Object.assign !== assign$1
  }, {
    assign: assign$1
  });

  var DESCRIPTORS$5 = descriptors;
  var uncurryThis$h = functionUncurryThis;
  var call$7 = functionCall;
  var fails$h = fails$W;
  var objectKeys = objectKeys$3;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$3 = toObject$g;
  var IndexedObject$1 = indexedObject; // eslint-disable-next-line es-x/no-object-assign -- safe

  var $assign = Object.assign; // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing

  var defineProperty$4 = Object.defineProperty;
  var concat = uncurryThis$h([].concat); // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign

  var objectAssign = !$assign || fails$h(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$5 && $assign({
      b: 1
    }, $assign(defineProperty$4({}, 'a', {
      enumerable: true,
      get: function get() {
        defineProperty$4(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

    var A = {};
    var B = {}; // eslint-disable-next-line es-x/no-symbol -- safe

    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$3(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;

    while (argumentsLength > index) {
      var S = IndexedObject$1(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$5 || call$7(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign;

  var uncurryThis$g = functionUncurryThis;
  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80

  var delimiter = '-'; // '\x2D'

  var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

  var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var baseMinusTMin = base - tMin;
  var $RangeError$4 = RangeError;
  var exec$1 = uncurryThis$g(regexSeparators.exec);
  var floor$4 = Math.floor;
  var fromCharCode = String.fromCharCode;
  var charCodeAt$1 = uncurryThis$g(''.charCodeAt);
  var join$2 = uncurryThis$g([].join);
  var push$1 = uncurryThis$g([].push);
  var replace$2 = uncurryThis$g(''.replace);
  var split$1 = uncurryThis$g(''.split);
  var toLowerCase$1 = uncurryThis$g(''.toLowerCase);
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */

  var ucs2decode = function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = charCodeAt$1(string, counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = charCodeAt$1(string, counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // Low surrogate.
          push$1(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          push$1(output, value);
          counter--;
        }
      } else {
        push$1(output, value);
      }
    }

    return output;
  };
  /**
   * Converts a digit/integer into a basic code point.
   */


  var digitToBasic = function digitToBasic(digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */


  var adapt = function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor$4(delta / damp) : delta >> 1;
    delta += floor$4(delta / numPoints);

    while (delta > baseMinusTMin * tMax >> 1) {
      delta = floor$4(delta / baseMinusTMin);
      k += base;
    }

    return floor$4(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */


  var encode = function encode(input) {
    var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

    input = ucs2decode(input); // Cache the length.

    var inputLength = input.length; // Initialize the state.

    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue; // Handle the basic code points.

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue < 0x80) {
        push$1(output, fromCharCode(currentValue));
      }
    }

    var basicLength = output.length; // number of basic code points.

    var handledCPCount = basicLength; // number of code points that have been handled;
    // Finish the basic string with a delimiter unless it's empty.

    if (basicLength) {
      push$1(output, delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = maxInt;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];

        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


      var handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor$4((maxInt - delta) / handledCPCountPlusOne)) {
        throw $RangeError$4(OVERFLOW_ERROR);
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];

        if (currentValue < n && ++delta > maxInt) {
          throw $RangeError$4(OVERFLOW_ERROR);
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;
          var k = base;

          while (true) {
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = base - t;
            push$1(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
            q = floor$4(qMinusT / baseMinusT);
            k += base;
          }

          push$1(output, fromCharCode(digitToBasic(q)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          handledCPCount++;
        }
      }

      delta++;
      n++;
    }

    return join$2(output, '');
  };

  var stringPunycodeToAscii = function stringPunycodeToAscii(input) {
    var encoded = [];
    var labels = split$1(replace$2(toLowerCase$1(input), regexSeparators, "."), '.');
    var i, label;

    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      push$1(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
    }

    return join$2(encoded, '.');
  };

  var $$h = _export;
  var DESCRIPTORS$4 = descriptors;
  var USE_NATIVE_URL = nativeUrl;
  var global$c = global$p;
  var bind$2 = functionBindContext;
  var uncurryThis$f = functionUncurryThis;
  var defineBuiltIn$4 = defineBuiltIn$j;
  var defineBuiltInAccessor = defineBuiltInAccessor$2;
  var anInstance$4 = anInstance$8;
  var hasOwn$7 = hasOwnProperty_1;
  var assign = objectAssign;
  var arrayFrom = arrayFrom$1;
  var arraySlice$3 = arraySliceSimple;
  var codeAt = stringMultibyte.codeAt;
  var toASCII = stringPunycodeToAscii;
  var $toString = toString$g;
  var setToStringTag$1 = setToStringTag$8;
  var validateArgumentsLength = validateArgumentsLength$3;
  var URLSearchParamsModule = web_urlSearchParams_constructor;
  var InternalStateModule$3 = internalState;
  var setInternalState$3 = InternalStateModule$3.set;
  var getInternalURLState = InternalStateModule$3.getterFor('URL');
  var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
  var getInternalSearchParamsState = URLSearchParamsModule.getState;
  var NativeURL = global$c.URL;
  var TypeError$3 = global$c.TypeError;
  var parseInt$1 = global$c.parseInt;
  var floor$3 = Math.floor;
  var pow$1 = Math.pow;
  var charAt = uncurryThis$f(''.charAt);
  var exec = uncurryThis$f(/./.exec);
  var join$1 = uncurryThis$f([].join);
  var numberToString = uncurryThis$f(1.0.toString);
  var pop = uncurryThis$f([].pop);
  var push = uncurryThis$f([].push);
  var replace$1 = uncurryThis$f(''.replace);
  var shift = uncurryThis$f([].shift);
  var split = uncurryThis$f(''.split);
  var stringSlice$1 = uncurryThis$f(''.slice);
  var toLowerCase = uncurryThis$f(''.toLowerCase);
  var unshift = uncurryThis$f([].unshift);
  var INVALID_AUTHORITY = 'Invalid authority';
  var INVALID_SCHEME = 'Invalid scheme';
  var INVALID_HOST = 'Invalid host';
  var INVALID_PORT = 'Invalid port';
  var ALPHA = /[a-z]/i; // eslint-disable-next-line regexp/no-obscure-range -- safe

  var ALPHANUMERIC = /[\d+-.a-z]/i;
  var DIGIT = /\d/;
  var HEX_START = /^0x/i;
  var OCT = /^[0-7]+$/;
  var DEC = /^\d+$/;
  var HEX = /^[\da-f]+$/i;
  /* eslint-disable regexp/no-control-character -- safe */

  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
  var TAB_AND_NEW_LINE = /[\t\n\r]/g;
  /* eslint-enable regexp/no-control-character -- safe */

  var EOF; // https://url.spec.whatwg.org/#ipv4-number-parser

  var parseIPv4 = function parseIPv4(input) {
    var parts = split(input, '.');
    var partsLength, numbers, index, part, radix, number, ipv4;

    if (parts.length && parts[parts.length - 1] == '') {
      parts.length--;
    }

    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];

    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part == '') return input;
      radix = 10;

      if (part.length > 1 && charAt(part, 0) == '0') {
        radix = exec(HEX_START, part) ? 16 : 8;
        part = stringSlice$1(part, radix == 8 ? 1 : 2);
      }

      if (part === '') {
        number = 0;
      } else {
        if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
        number = parseInt$1(part, radix);
      }

      push(numbers, number);
    }

    for (index = 0; index < partsLength; index++) {
      number = numbers[index];

      if (index == partsLength - 1) {
        if (number >= pow$1(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }

    ipv4 = pop(numbers);

    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow$1(256, 3 - index);
    }

    return ipv4;
  }; // https://url.spec.whatwg.org/#concept-ipv6-parser
  // eslint-disable-next-line max-statements -- TODO


  var parseIPv6 = function parseIPv6(input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

    var chr = function chr() {
      return charAt(input, pointer);
    };

    if (chr() == ':') {
      if (charAt(input, 1) != ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }

    while (chr()) {
      if (pieceIndex == 8) return;

      if (chr() == ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }

      value = length = 0;

      while (length < 4 && exec(HEX, chr())) {
        value = value * 16 + parseInt$1(chr(), 16);
        pointer++;
        length++;
      }

      if (chr() == '.') {
        if (length == 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;

        while (chr()) {
          ipv4Piece = null;

          if (numbersSeen > 0) {
            if (chr() == '.' && numbersSeen < 4) pointer++;else return;
          }

          if (!exec(DIGIT, chr())) return;

          while (exec(DIGIT, chr())) {
            number = parseInt$1(chr(), 10);
            if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }

          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
        }

        if (numbersSeen != 4) return;
        break;
      } else if (chr() == ':') {
        pointer++;
        if (!chr()) return;
      } else if (chr()) return;

      address[pieceIndex++] = value;
    }

    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;

      while (pieceIndex != 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex != 8) return;

    return address;
  };

  var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;

    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }

        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }

    if (currLength > maxLength) {
      maxIndex = currStart;
      maxLength = currLength;
    }

    return maxIndex;
  }; // https://url.spec.whatwg.org/#host-serializing


  var serializeHost = function serializeHost(host) {
    var result, index, compress, ignore0; // ipv4

    if (typeof host == 'number') {
      result = [];

      for (index = 0; index < 4; index++) {
        unshift(result, host % 256);
        host = floor$3(host / 256);
      }

      return join$1(result, '.'); // ipv6
    } else if (_typeof(host) == 'object') {
      result = '';
      compress = findLongestZeroSequence(host);

      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;

        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += numberToString(host[index], 16);
          if (index < 7) result += ':';
        }
      }

      return '[' + result + ']';
    }

    return host;
  };

  var C0ControlPercentEncodeSet = {};
  var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1
  });
  var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1
  });
  var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1
  });

  var percentEncode = function percentEncode(chr, set) {
    var code = codeAt(chr, 0);
    return code > 0x20 && code < 0x7F && !hasOwn$7(set, chr) ? chr : encodeURIComponent(chr);
  }; // https://url.spec.whatwg.org/#special-scheme


  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  }; // https://url.spec.whatwg.org/#windows-drive-letter

  var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
    var second;
    return string.length == 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) == ':' || !normalized && second == '|');
  }; // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter


  var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(stringSlice$1(string, 0, 2)) && (string.length == 2 || (third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
  }; // https://url.spec.whatwg.org/#single-dot-path-segment


  var isSingleDot = function isSingleDot(segment) {
    return segment === '.' || toLowerCase(segment) === '%2e';
  }; // https://url.spec.whatwg.org/#double-dot-path-segment


  var isDoubleDot = function isDoubleDot(segment) {
    segment = toLowerCase(segment);
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  }; // States:


  var SCHEME_START = {};
  var SCHEME = {};
  var NO_SCHEME = {};
  var SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var PATH_OR_AUTHORITY = {};
  var RELATIVE = {};
  var RELATIVE_SLASH = {};
  var SPECIAL_AUTHORITY_SLASHES = {};
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var AUTHORITY = {};
  var HOST = {};
  var HOSTNAME = {};
  var PORT = {};
  var FILE = {};
  var FILE_SLASH = {};
  var FILE_HOST = {};
  var PATH_START = {};
  var PATH = {};
  var CANNOT_BE_A_BASE_URL_PATH = {};
  var QUERY = {};
  var FRAGMENT = {};

  var URLState = function URLState(url, isBase, base) {
    var urlString = $toString(url);
    var baseState, failure, searchParams;

    if (isBase) {
      failure = this.parse(urlString);
      if (failure) throw TypeError$3(failure);
      this.searchParams = null;
    } else {
      if (base !== undefined) baseState = new URLState(base, true);
      failure = this.parse(urlString, null, baseState);
      if (failure) throw TypeError$3(failure);
      searchParams = getInternalSearchParamsState(new URLSearchParams$1());
      searchParams.bindURL(this);
      this.searchParams = searchParams;
    }
  };

  URLState.prototype = {
    type: 'URL',
    // https://url.spec.whatwg.org/#url-parsing
    // eslint-disable-next-line max-statements -- TODO
    parse: function parse(input, stateOverride, base) {
      var url = this;
      var state = stateOverride || SCHEME_START;
      var pointer = 0;
      var buffer = '';
      var seenAt = false;
      var seenBracket = false;
      var seenPasswordToken = false;
      var codePoints, chr, bufferCodePoints, failure;
      input = $toString(input);

      if (!stateOverride) {
        url.scheme = '';
        url.username = '';
        url.password = '';
        url.host = null;
        url.port = null;
        url.path = [];
        url.query = null;
        url.fragment = null;
        url.cannotBeABaseURL = false;
        input = replace$1(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
      }

      input = replace$1(input, TAB_AND_NEW_LINE, '');
      codePoints = arrayFrom(input);

      while (pointer <= codePoints.length) {
        chr = codePoints[pointer];

        switch (state) {
          case SCHEME_START:
            if (chr && exec(ALPHA, chr)) {
              buffer += toLowerCase(chr);
              state = SCHEME;
            } else if (!stateOverride) {
              state = NO_SCHEME;
              continue;
            } else return INVALID_SCHEME;

            break;

          case SCHEME:
            if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
              buffer += toLowerCase(chr);
            } else if (chr == ':') {
              if (stateOverride && (url.isSpecial() != hasOwn$7(specialSchemes, buffer) || buffer == 'file' && (url.includesCredentials() || url.port !== null) || url.scheme == 'file' && !url.host)) return;
              url.scheme = buffer;

              if (stateOverride) {
                if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
                return;
              }

              buffer = '';

              if (url.scheme == 'file') {
                state = FILE;
              } else if (url.isSpecial() && base && base.scheme == url.scheme) {
                state = SPECIAL_RELATIVE_OR_AUTHORITY;
              } else if (url.isSpecial()) {
                state = SPECIAL_AUTHORITY_SLASHES;
              } else if (codePoints[pointer + 1] == '/') {
                state = PATH_OR_AUTHORITY;
                pointer++;
              } else {
                url.cannotBeABaseURL = true;
                push(url.path, '');
                state = CANNOT_BE_A_BASE_URL_PATH;
              }
            } else if (!stateOverride) {
              buffer = '';
              state = NO_SCHEME;
              pointer = 0;
              continue;
            } else return INVALID_SCHEME;

            break;

          case NO_SCHEME:
            if (!base || base.cannotBeABaseURL && chr != '#') return INVALID_SCHEME;

            if (base.cannotBeABaseURL && chr == '#') {
              url.scheme = base.scheme;
              url.path = arraySlice$3(base.path);
              url.query = base.query;
              url.fragment = '';
              url.cannotBeABaseURL = true;
              state = FRAGMENT;
              break;
            }

            state = base.scheme == 'file' ? FILE : RELATIVE;
            continue;

          case SPECIAL_RELATIVE_OR_AUTHORITY:
            if (chr == '/' && codePoints[pointer + 1] == '/') {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              pointer++;
            } else {
              state = RELATIVE;
              continue;
            }

            break;

          case PATH_OR_AUTHORITY:
            if (chr == '/') {
              state = AUTHORITY;
              break;
            } else {
              state = PATH;
              continue;
            }

          case RELATIVE:
            url.scheme = base.scheme;

            if (chr == EOF) {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice$3(base.path);
              url.query = base.query;
            } else if (chr == '/' || chr == '\\' && url.isSpecial()) {
              state = RELATIVE_SLASH;
            } else if (chr == '?') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice$3(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice$3(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySlice$3(base.path);
              url.path.length--;
              state = PATH;
              continue;
            }

            break;

          case RELATIVE_SLASH:
            if (url.isSpecial() && (chr == '/' || chr == '\\')) {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            } else if (chr == '/') {
              state = AUTHORITY;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              state = PATH;
              continue;
            }

            break;

          case SPECIAL_AUTHORITY_SLASHES:
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
            pointer++;
            break;

          case SPECIAL_AUTHORITY_IGNORE_SLASHES:
            if (chr != '/' && chr != '\\') {
              state = AUTHORITY;
              continue;
            }

            break;

          case AUTHORITY:
            if (chr == '@') {
              if (seenAt) buffer = '%40' + buffer;
              seenAt = true;
              bufferCodePoints = arrayFrom(buffer);

              for (var i = 0; i < bufferCodePoints.length; i++) {
                var codePoint = bufferCodePoints[i];

                if (codePoint == ':' && !seenPasswordToken) {
                  seenPasswordToken = true;
                  continue;
                }

                var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
              }

              buffer = '';
            } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
              if (seenAt && buffer == '') return INVALID_AUTHORITY;
              pointer -= arrayFrom(buffer).length + 1;
              buffer = '';
              state = HOST;
            } else buffer += chr;

            break;

          case HOST:
          case HOSTNAME:
            if (stateOverride && url.scheme == 'file') {
              state = FILE_HOST;
              continue;
            } else if (chr == ':' && !seenBracket) {
              if (buffer == '') return INVALID_HOST;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PORT;
              if (stateOverride == HOSTNAME) return;
            } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
              if (url.isSpecial() && buffer == '') return INVALID_HOST;
              if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PATH_START;
              if (stateOverride) return;
              continue;
            } else {
              if (chr == '[') seenBracket = true;else if (chr == ']') seenBracket = false;
              buffer += chr;
            }

            break;

          case PORT:
            if (exec(DIGIT, chr)) {
              buffer += chr;
            } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial() || stateOverride) {
              if (buffer != '') {
                var port = parseInt$1(buffer, 10);
                if (port > 0xFFFF) return INVALID_PORT;
                url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                buffer = '';
              }

              if (stateOverride) return;
              state = PATH_START;
              continue;
            } else return INVALID_PORT;

            break;

          case FILE:
            url.scheme = 'file';
            if (chr == '/' || chr == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
              if (chr == EOF) {
                url.host = base.host;
                url.path = arraySlice$3(base.path);
                url.query = base.query;
              } else if (chr == '?') {
                url.host = base.host;
                url.path = arraySlice$3(base.path);
                url.query = '';
                state = QUERY;
              } else if (chr == '#') {
                url.host = base.host;
                url.path = arraySlice$3(base.path);
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
              } else {
                if (!startsWithWindowsDriveLetter(join$1(arraySlice$3(codePoints, pointer), ''))) {
                  url.host = base.host;
                  url.path = arraySlice$3(base.path);
                  url.shortenPath();
                }

                state = PATH;
                continue;
              }
            } else {
              state = PATH;
              continue;
            }
            break;

          case FILE_SLASH:
            if (chr == '/' || chr == '\\') {
              state = FILE_HOST;
              break;
            }

            if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join$1(arraySlice$3(codePoints, pointer), ''))) {
              if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);else url.host = base.host;
            }

            state = PATH;
            continue;

          case FILE_HOST:
            if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
              if (!stateOverride && isWindowsDriveLetter(buffer)) {
                state = PATH;
              } else if (buffer == '') {
                url.host = '';
                if (stateOverride) return;
                state = PATH_START;
              } else {
                failure = url.parseHost(buffer);
                if (failure) return failure;
                if (url.host == 'localhost') url.host = '';
                if (stateOverride) return;
                buffer = '';
                state = PATH_START;
              }

              continue;
            } else buffer += chr;

            break;

          case PATH_START:
            if (url.isSpecial()) {
              state = PATH;
              if (chr != '/' && chr != '\\') continue;
            } else if (!stateOverride && chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (!stateOverride && chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              state = PATH;
              if (chr != '/') continue;
            }

            break;

          case PATH:
            if (chr == EOF || chr == '/' || chr == '\\' && url.isSpecial() || !stateOverride && (chr == '?' || chr == '#')) {
              if (isDoubleDot(buffer)) {
                url.shortenPath();

                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else if (isSingleDot(buffer)) {
                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else {
                if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                  if (url.host) url.host = '';
                  buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
                }

                push(url.path, buffer);
              }

              buffer = '';

              if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
                while (url.path.length > 1 && url.path[0] === '') {
                  shift(url.path);
                }
              }

              if (chr == '?') {
                url.query = '';
                state = QUERY;
              } else if (chr == '#') {
                url.fragment = '';
                state = FRAGMENT;
              }
            } else {
              buffer += percentEncode(chr, pathPercentEncodeSet);
            }

            break;

          case CANNOT_BE_A_BASE_URL_PATH:
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
            }

            break;

          case QUERY:
            if (!stateOverride && chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              if (chr == "'" && url.isSpecial()) url.query += '%27';else if (chr == '#') url.query += '%23';else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
            }

            break;

          case FRAGMENT:
            if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
            break;
        }

        pointer++;
      }
    },
    // https://url.spec.whatwg.org/#host-parsing
    parseHost: function parseHost(input) {
      var result, codePoints, index;

      if (charAt(input, 0) == '[') {
        if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
        result = parseIPv6(stringSlice$1(input, 1, -1));
        if (!result) return INVALID_HOST;
        this.host = result; // opaque host
      } else if (!this.isSpecial()) {
        if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
        result = '';
        codePoints = arrayFrom(input);

        for (index = 0; index < codePoints.length; index++) {
          result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
        }

        this.host = result;
      } else {
        input = toASCII(input);
        if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
        result = parseIPv4(input);
        if (result === null) return INVALID_HOST;
        this.host = result;
      }
    },
    // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
    cannotHaveUsernamePasswordPort: function cannotHaveUsernamePasswordPort() {
      return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
    },
    // https://url.spec.whatwg.org/#include-credentials
    includesCredentials: function includesCredentials() {
      return this.username != '' || this.password != '';
    },
    // https://url.spec.whatwg.org/#is-special
    isSpecial: function isSpecial() {
      return hasOwn$7(specialSchemes, this.scheme);
    },
    // https://url.spec.whatwg.org/#shorten-a-urls-path
    shortenPath: function shortenPath() {
      var path = this.path;
      var pathSize = path.length;

      if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
        path.length--;
      }
    },
    // https://url.spec.whatwg.org/#concept-url-serializer
    serialize: function serialize() {
      var url = this;
      var scheme = url.scheme;
      var username = url.username;
      var password = url.password;
      var host = url.host;
      var port = url.port;
      var path = url.path;
      var query = url.query;
      var fragment = url.fragment;
      var output = scheme + ':';

      if (host !== null) {
        output += '//';

        if (url.includesCredentials()) {
          output += username + (password ? ':' + password : '') + '@';
        }

        output += serializeHost(host);
        if (port !== null) output += ':' + port;
      } else if (scheme == 'file') output += '//';

      output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join$1(path, '/') : '';
      if (query !== null) output += '?' + query;
      if (fragment !== null) output += '#' + fragment;
      return output;
    },
    // https://url.spec.whatwg.org/#dom-url-href
    setHref: function setHref(href) {
      var failure = this.parse(href);
      if (failure) throw TypeError$3(failure);
      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-origin
    getOrigin: function getOrigin() {
      var scheme = this.scheme;
      var port = this.port;
      if (scheme == 'blob') try {
        return new URLConstructor(scheme.path[0]).origin;
      } catch (error) {
        return 'null';
      }
      if (scheme == 'file' || !this.isSpecial()) return 'null';
      return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
    },
    // https://url.spec.whatwg.org/#dom-url-protocol
    getProtocol: function getProtocol() {
      return this.scheme + ':';
    },
    setProtocol: function setProtocol(protocol) {
      this.parse($toString(protocol) + ':', SCHEME_START);
    },
    // https://url.spec.whatwg.org/#dom-url-username
    getUsername: function getUsername() {
      return this.username;
    },
    setUsername: function setUsername(username) {
      var codePoints = arrayFrom($toString(username));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.username = '';

      for (var i = 0; i < codePoints.length; i++) {
        this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-password
    getPassword: function getPassword() {
      return this.password;
    },
    setPassword: function setPassword(password) {
      var codePoints = arrayFrom($toString(password));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.password = '';

      for (var i = 0; i < codePoints.length; i++) {
        this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-host
    getHost: function getHost() {
      var host = this.host;
      var port = this.port;
      return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
    },
    setHost: function setHost(host) {
      if (this.cannotBeABaseURL) return;
      this.parse(host, HOST);
    },
    // https://url.spec.whatwg.org/#dom-url-hostname
    getHostname: function getHostname() {
      var host = this.host;
      return host === null ? '' : serializeHost(host);
    },
    setHostname: function setHostname(hostname) {
      if (this.cannotBeABaseURL) return;
      this.parse(hostname, HOSTNAME);
    },
    // https://url.spec.whatwg.org/#dom-url-port
    getPort: function getPort() {
      var port = this.port;
      return port === null ? '' : $toString(port);
    },
    setPort: function setPort(port) {
      if (this.cannotHaveUsernamePasswordPort()) return;
      port = $toString(port);
      if (port == '') this.port = null;else this.parse(port, PORT);
    },
    // https://url.spec.whatwg.org/#dom-url-pathname
    getPathname: function getPathname() {
      var path = this.path;
      return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join$1(path, '/') : '';
    },
    setPathname: function setPathname(pathname) {
      if (this.cannotBeABaseURL) return;
      this.path = [];
      this.parse(pathname, PATH_START);
    },
    // https://url.spec.whatwg.org/#dom-url-search
    getSearch: function getSearch() {
      var query = this.query;
      return query ? '?' + query : '';
    },
    setSearch: function setSearch(search) {
      search = $toString(search);

      if (search == '') {
        this.query = null;
      } else {
        if ('?' == charAt(search, 0)) search = stringSlice$1(search, 1);
        this.query = '';
        this.parse(search, QUERY);
      }

      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-searchparams
    getSearchParams: function getSearchParams() {
      return this.searchParams.facade;
    },
    // https://url.spec.whatwg.org/#dom-url-hash
    getHash: function getHash() {
      var fragment = this.fragment;
      return fragment ? '#' + fragment : '';
    },
    setHash: function setHash(hash) {
      hash = $toString(hash);

      if (hash == '') {
        this.fragment = null;
        return;
      }

      if ('#' == charAt(hash, 0)) hash = stringSlice$1(hash, 1);
      this.fragment = '';
      this.parse(hash, FRAGMENT);
    },
    update: function update() {
      this.query = this.searchParams.serialize() || null;
    }
  }; // `URL` constructor
  // https://url.spec.whatwg.org/#url-class

  var URLConstructor = function URL(url
  /* , base */
  ) {
    var that = anInstance$4(this, URLPrototype);
    var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
    var state = setInternalState$3(that, new URLState(url, false, base));

    if (!DESCRIPTORS$4) {
      that.href = state.serialize();
      that.origin = state.getOrigin();
      that.protocol = state.getProtocol();
      that.username = state.getUsername();
      that.password = state.getPassword();
      that.host = state.getHost();
      that.hostname = state.getHostname();
      that.port = state.getPort();
      that.pathname = state.getPathname();
      that.search = state.getSearch();
      that.searchParams = state.getSearchParams();
      that.hash = state.getHash();
    }
  };

  var URLPrototype = URLConstructor.prototype;

  var accessorDescriptor = function accessorDescriptor(getter, setter) {
    return {
      get: function get() {
        return getInternalURLState(this)[getter]();
      },
      set: setter && function (value) {
        return getInternalURLState(this)[setter](value);
      },
      configurable: true,
      enumerable: true
    };
  };

  if (DESCRIPTORS$4) {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref')); // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin

    defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin')); // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol

    defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol')); // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username

    defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername')); // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password

    defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword')); // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host

    defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost')); // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname

    defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname')); // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port

    defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort')); // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname

    defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname')); // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search

    defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch')); // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams

    defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams')); // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash

    defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
  } // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson


  defineBuiltIn$4(URLPrototype, 'toJSON', function toJSON() {
    return getInternalURLState(this).serialize();
  }, {
    enumerable: true
  }); // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior

  defineBuiltIn$4(URLPrototype, 'toString', function toString() {
    return getInternalURLState(this).serialize();
  }, {
    enumerable: true
  });

  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL; // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL

    if (nativeCreateObjectURL) defineBuiltIn$4(URLConstructor, 'createObjectURL', bind$2(nativeCreateObjectURL, NativeURL)); // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL

    if (nativeRevokeObjectURL) defineBuiltIn$4(URLConstructor, 'revokeObjectURL', bind$2(nativeRevokeObjectURL, NativeURL));
  }

  setToStringTag$1(URLConstructor, 'URL');
  $$h({
    global: true,
    constructor: true,
    forced: !USE_NATIVE_URL,
    sham: !DESCRIPTORS$4
  }, {
    URL: URLConstructor
  });

  var $$g = _export;
  var call$6 = functionCall; // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson

  $$g({
    target: 'URL',
    proto: true,
    enumerable: true
  }, {
    toJSON: function toJSON() {
      return call$6(URL.prototype.toString, this);
    }
  });

  var uncurryThis$e = functionUncurryThis; // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue

  var thisNumberValue$2 = uncurryThis$e(1.0.valueOf);

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$b;
  var toString$2 = toString$g;
  var requireObjectCoercible$2 = requireObjectCoercible$a;
  var $RangeError$3 = RangeError; // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat

  var stringRepeat = function repeat(count) {
    var str = toString$2(requireObjectCoercible$2(this));
    var result = '';
    var n = toIntegerOrInfinity$3(count);
    if (n < 0 || n == Infinity) throw $RangeError$3('Wrong number of repetitions');

    for (; n > 0; (n >>>= 1) && (str += str)) {
      if (n & 1) result += str;
    }

    return result;
  };

  var $$f = _export;
  var uncurryThis$d = functionUncurryThis;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$b;
  var thisNumberValue$1 = thisNumberValue$2;
  var $repeat = stringRepeat;
  var fails$g = fails$W;
  var $RangeError$2 = RangeError;
  var $String = String;
  var floor$2 = Math.floor;
  var repeat = uncurryThis$d($repeat);
  var stringSlice = uncurryThis$d(''.slice);
  var un$ToFixed = uncurryThis$d(1.0.toFixed);

  var pow = function pow(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log$1 = function log(x) {
    var n = 0;
    var x2 = x;

    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }

    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }

    return n;
  };

  var multiply = function multiply(data, n, c) {
    var index = -1;
    var c2 = c;

    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor$2(c2 / 1e7);
    }
  };

  var divide = function divide(data, n) {
    var index = 6;
    var c = 0;

    while (--index >= 0) {
      c += data[index];
      data[index] = floor$2(c / n);
      c = c % n * 1e7;
    }
  };

  var dataToString = function dataToString(data) {
    var index = 6;
    var s = '';

    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = $String(data[index]);
        s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
      }
    }

    return s;
  };

  var FORCED$3 = fails$g(function () {
    return un$ToFixed(0.00008, 3) !== '0.000' || un$ToFixed(0.9, 0) !== '1' || un$ToFixed(1.255, 2) !== '1.25' || un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
  }) || !fails$g(function () {
    // V8 ~ Android 4.3-
    un$ToFixed({});
  }); // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed

  $$f({
    target: 'Number',
    proto: true,
    forced: FORCED$3
  }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue$1(this);
      var fractDigits = toIntegerOrInfinity$2(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k; // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation

      if (fractDigits < 0 || fractDigits > 20) throw $RangeError$2('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

      if (number != number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return $String(number);

      if (number < 0) {
        sign = '-';
        number = -number;
      }

      if (number > 1e-21) {
        e = log$1(number * pow(2, 69, 1)) - 69;
        z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;

        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;

          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }

          multiply(data, pow(10, j, 1), 0);
          j = e - 1;

          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }

          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + repeat('0', fractDigits);
        }
      }

      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits ? '0.' + repeat('0', fractDigits - k) + result : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
      } else {
        result = sign + result;
      }

      return result;
    }
  });

  function commonjsRequire(path) {
  	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }

  var moment$4 = {exports: {}};

  (function (module, exports) {

    (function (global, factory) {
      module.exports = factory() ;
    })(commonjsGlobal, function () {

      var hookCallback;

      function hooks() {
        return hookCallback.apply(null, arguments);
      } // This is done to register the method called with moment()
      // without creating circular dependencies.


      function setHookCallback(callback) {
        hookCallback = callback;
      }

      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
      }

      function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
      }

      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }

      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;

          for (k in obj) {
            if (hasOwnProp(obj, k)) {
              return false;
            }
          }

          return true;
        }
      }

      function isUndefined(input) {
        return input === void 0;
      }

      function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
      }

      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
      }

      function map(arr, fn) {
        var res = [],
            i;

        for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
        }

        return res;
      }

      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }

        if (hasOwnProp(b, 'toString')) {
          a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
          a.valueOf = b.valueOf;
        }

        return a;
      }

      function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
      }

      function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }

      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }

        return m._pf;
      }

      var some;

      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function some(fun) {
          var t = Object(this),
              len = t.length >>> 0,
              i;

          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }

          return false;
        };
      }

      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m),
              parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
          }),
              isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
          }

          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }

        return m._isValid;
      }

      function createInvalid(flags) {
        var m = createUTC(NaN);

        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }

        return m;
      } // Plugins that add properties should also add the key here (null value),
      // so we can properly clone ourselves.


      var momentProperties = hooks.momentProperties = [],
          updateInProgress = false;

      function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject;
        }

        if (!isUndefined(from._i)) {
          to._i = from._i;
        }

        if (!isUndefined(from._f)) {
          to._f = from._f;
        }

        if (!isUndefined(from._l)) {
          to._l = from._l;
        }

        if (!isUndefined(from._strict)) {
          to._strict = from._strict;
        }

        if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm;
        }

        if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC;
        }

        if (!isUndefined(from._offset)) {
          to._offset = from._offset;
        }

        if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from);
        }

        if (!isUndefined(from._locale)) {
          to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];

            if (!isUndefined(val)) {
              to[prop] = val;
            }
          }
        }

        return to;
      } // Moment prototype object


      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);

        if (!this.isValid()) {
          this._d = new Date(NaN);
        } // Prevent infinite loop in case updateOffset creates new moment
        // objects.


        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }

      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }

      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
          console.warn('Deprecation warning: ' + msg);
        }
      }

      function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }

          if (firstTime) {
            var args = [],
                arg,
                i,
                key;

            for (i = 0; i < arguments.length; i++) {
              arg = '';

              if (_typeof(arguments[i]) === 'object') {
                arg += '\n[' + i + '] ';

                for (key in arguments[0]) {
                  if (hasOwnProp(arguments[0], key)) {
                    arg += key + ': ' + arguments[0][key] + ', ';
                  }
                }

                arg = arg.slice(0, -2); // Remove trailing comma and space
              } else {
                arg = arguments[i];
              }

              args.push(arg);
            }

            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
            firstTime = false;
          }

          return fn.apply(this, arguments);
        }, fn);
      }

      var deprecations = {};

      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }

        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }

      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;

      function isFunction(input) {
        return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
      }

      function set(config) {
        var prop, i;

        for (i in config) {
          if (hasOwnProp(config, i)) {
            prop = config[i];

            if (isFunction(prop)) {
              this[i] = prop;
            } else {
              this['_' + i] = prop;
            }
          }
        }

        this._config = config; // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.

        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
      }

      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;

        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }

        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
          }
        }

        return res;
      }

      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }

      var keys;

      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function keys(obj) {
          var i,
              res = [];

          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }

          return res;
        };
      }

      var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      };

      function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
      }

      function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }

      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          formatFunctions = {},
          formatTokenFunctions = {}; // token:    'M'
      // padded:   ['MM', 2]
      // ordinal:  'Mo'
      // callback: function () { this.month() + 1 }

      function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;

        if (typeof callback === 'string') {
          func = function func() {
            return this[callback]();
          };
        }

        if (token) {
          formatTokenFunctions[token] = func;
        }

        if (padded) {
          formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }

        if (ordinal) {
          formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
          };
        }
      }

      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, '');
        }

        return input.replace(/\\/g, '');
      }

      function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }

        return function (mom) {
          var output = '',
              i;

          for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
          }

          return output;
        };
      } // format date using native date object


      function formatMoment(m, format) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
      }

      function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;

        while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }

        return format;
      }

      var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
      };

      function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
          return format;
        }

        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function (tok) {
          if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') {
            return tok.slice(1);
          }

          return tok;
        }).join('');
        return this._longDateFormat[key];
      }

      var defaultInvalidDate = 'Invalid date';

      function invalidDate() {
        return this._invalidDate;
      }

      var defaultOrdinal = '%d',
          defaultDayOfMonthOrdinalParse = /\d{1,2}/;

      function ordinal(number) {
        return this._ordinal.replace('%d', number);
      }

      var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      };

      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }

      function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }

      var aliases = {};

      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
      }

      function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
      }

      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);

            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }

        return normalizedInput;
      }

      var priorities = {};

      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }

      function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;

        for (u in unitsObj) {
          if (hasOwnProp(unitsObj, u)) {
            units.push({
              unit: u,
              priority: priorities[u]
            });
          }
        }

        units.sort(function (a, b) {
          return a.priority - b.priority;
        });
        return units;
      }

      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }

      function absFloor(number) {
        if (number < 0) {
          // -0 -> 0
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }

      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }

        return value;
      }

      function makeGetSet(unit, keepTime) {
        return function (value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }

      function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
      }

      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            value = toInt(value);

            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
          } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
          }
        }
      } // MOMENTS


      function stringGet(units) {
        units = normalizeUnits(units);

        if (isFunction(this[units])) {
          return this[units]();
        }

        return this;
      }

      function stringSet(units, value) {
        if (_typeof(units) === 'object') {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units),
              i;

          for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);

          if (isFunction(this[units])) {
            return this[units](value);
          }
        }

        return this;
      }

      var match1 = /\d/,
          //       0 - 9
      match2 = /\d\d/,
          //      00 - 99
      match3 = /\d{3}/,
          //     000 - 999
      match4 = /\d{4}/,
          //    0000 - 9999
      match6 = /[+-]?\d{6}/,
          // -999999 - 999999
      match1to2 = /\d\d?/,
          //       0 - 99
      match3to4 = /\d\d\d\d?/,
          //     999 - 9999
      match5to6 = /\d\d\d\d\d\d?/,
          //   99999 - 999999
      match1to3 = /\d{1,3}/,
          //       0 - 999
      match1to4 = /\d{1,4}/,
          //       0 - 9999
      match1to6 = /[+-]?\d{1,6}/,
          // -999999 - 999999
      matchUnsigned = /\d+/,
          //       0 - inf
      matchSigned = /[+-]?\d+/,
          //    -inf - inf
      matchOffset = /Z|[+-]\d\d:?\d\d/gi,
          // +00:00 -00:00 +0000 -0000 or Z
      matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
          // +00 -00 +00:00 -00:00 +0000 -0000 or Z
      matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
          // 123456789 123456789.123
      // any word (or two) characters or numbers including two/three word month in arabic.
      // includes scottish gaelic two word and hyphenated months
      matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          regexes;
      regexes = {};

      function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }

      function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
      } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


      function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }));
      }

      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      var tokens = {};

      function addParseToken(token, callback) {
        var i,
            func = callback;

        if (typeof token === 'string') {
          token = [token];
        }

        if (isNumber(callback)) {
          func = function func(input, array) {
            array[callback] = toInt(input);
          };
        }

        for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func;
        }
      }

      function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
          config._w = config._w || {};
          callback(input, config._w, config, token);
        });
      }

      function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token);
        }
      }

      var YEAR = 0,
          MONTH = 1,
          DATE = 2,
          HOUR = 3,
          MINUTE = 4,
          SECOND = 5,
          MILLISECOND = 6,
          WEEK = 7,
          WEEKDAY = 8;

      function mod(n, x) {
        return (n % x + x) % x;
      }

      var indexOf;

      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function indexOf(o) {
          // I know
          var i;

          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }

          return -1;
        };
      }

      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }

        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      } // FORMATTING


      addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
      });
      addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
      });
      addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
      }); // ALIASES

      addUnitAlias('month', 'M'); // PRIORITY

      addUnitPriority('month', 8); // PARSING

      addRegexToken('M', match1to2);
      addRegexToken('MM', match1to2, match2);
      addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
      });
      addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
      });
      addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
      });
      addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      }); // LOCALES

      var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          defaultMonthsShortRegex = matchWord,
          defaultMonthsRegex = matchWord;

      function localeMonths(m, format) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months['standalone'];
        }

        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
      }

      function localeMonthsShort(m, format) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        }

        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
      }

      function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();

        if (!this._monthsParse) {
          // this is not used
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];

          for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        } // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse


        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);

          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
          }

          if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
          } // test the regex


          if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      } // MOMENTS


      function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
          // No op
          return mom;
        }

        if (typeof value === 'string') {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

            if (!isNumber(value)) {
              return mom;
            }
          }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

        return mom;
      }

      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, 'Month');
        }
      }

      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }

      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }

          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }

          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }

      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }

          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
          }

          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }

      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;

        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          shortPieces.push(this.monthsShort(mom, ''));
          longPieces.push(this.months(mom, ''));
          mixedPieces.push(this.months(mom, ''));
          mixedPieces.push(this.monthsShort(mom, ''));
        } // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.


        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
        }

        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      } // FORMATTING


      addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
      });
      addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
      });
      addFormatToken(0, ['YYYY', 4], 0, 'year');
      addFormatToken(0, ['YYYYY', 5], 0, 'year');
      addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

      addUnitAlias('year', 'y'); // PRIORITIES

      addUnitPriority('year', 1); // PARSING

      addRegexToken('Y', matchSigned);
      addRegexToken('YY', match1to2, match2);
      addRegexToken('YYYY', match1to4, match4);
      addRegexToken('YYYYY', match1to6, match6);
      addRegexToken('YYYYYY', match1to6, match6);
      addParseToken(['YYYYY', 'YYYYYY'], YEAR);
      addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
      }); // HELPERS

      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      } // HOOKS


      hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
      }; // MOMENTS


      var getSetYear = makeGetSet('FullYear', true);

      function getIsLeapYear() {
        return isLeapYear(this.year());
      }

      function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date; // the date constructor remaps years 0-99 to 1900-1999

        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          date = new Date(y + 400, m, d, h, M, s, ms);

          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
      }

      function createUTCDate(y) {
        var date, args; // the Date.UTC function remaps years 0-99 to 1900-1999

        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));

          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
      } // start-of-first-week - start-of-year


      function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }

        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }

      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }

        return {
          week: resWeek,
          year: resYear
        };
      }

      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      } // FORMATTING


      addFormatToken('w', ['ww', 2], 'wo', 'week');
      addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

      addUnitAlias('week', 'w');
      addUnitAlias('isoWeek', 'W'); // PRIORITIES

      addUnitPriority('week', 5);
      addUnitPriority('isoWeek', 5); // PARSING

      addRegexToken('w', match1to2);
      addRegexToken('ww', match1to2, match2);
      addRegexToken('W', match1to2);
      addRegexToken('WW', match1to2, match2);
      addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
      }); // HELPERS
      // LOCALES

      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }

      var defaultLocaleWeek = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 6th is the first week of the year.

      };

      function localeFirstDayOfWeek() {
        return this._week.dow;
      }

      function localeFirstDayOfYear() {
        return this._week.doy;
      } // MOMENTS


      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
      }

      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
      } // FORMATTING


      addFormatToken('d', 0, 'do', 'day');
      addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
      });
      addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
      });
      addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
      });
      addFormatToken('e', 0, 0, 'weekday');
      addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

      addUnitAlias('day', 'd');
      addUnitAlias('weekday', 'e');
      addUnitAlias('isoWeekday', 'E'); // PRIORITY

      addUnitPriority('day', 11);
      addUnitPriority('weekday', 11);
      addUnitPriority('isoWeekday', 11); // PARSING

      addRegexToken('d', match1to2);
      addRegexToken('e', match1to2);
      addRegexToken('E', match1to2);
      addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
      });
      addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
      });
      addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
      });
      addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });
      addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
      }); // HELPERS

      function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
          return input;
        }

        if (!isNaN(input)) {
          return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);

        if (typeof input === 'number') {
          return input;
        }

        return null;
      }

      function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
          return locale.weekdaysParse(input) % 7 || 7;
        }

        return isNaN(input) ? null : input;
      } // LOCALES


      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }

      var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          defaultWeekdaysRegex = matchWord,
          defaultWeekdaysShortRegex = matchWord,
          defaultWeekdaysMinRegex = matchWord;

      function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }

      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }

      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }

      function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();

        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];

          for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);

          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
          }

          if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
          } // test the regex


          if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      } // MOMENTS


      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, 'd');
        } else {
          return day;
        }
      }

      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
      }

      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        } // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.


        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }

      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }

          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }

      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }

          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }

      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }

          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }

      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);
          minp = regexEscape(this.weekdaysMin(mom, ''));
          shortp = regexEscape(this.weekdaysShort(mom, ''));
          longp = regexEscape(this.weekdays(mom, ''));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.


        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
      } // FORMATTING


      function hFormat() {
        return this.hours() % 12 || 12;
      }

      function kFormat() {
        return this.hours() || 24;
      }

      addFormatToken('H', ['HH', 2], 0, 'hour');
      addFormatToken('h', ['hh', 2], 0, hFormat);
      addFormatToken('k', ['kk', 2], 0, kFormat);
      addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });
      addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
      });
      addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });

      function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
      }

      meridiem('a', true);
      meridiem('A', false); // ALIASES

      addUnitAlias('hour', 'h'); // PRIORITY

      addUnitPriority('hour', 13); // PARSING

      function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
      }

      addRegexToken('a', matchMeridiem);
      addRegexToken('A', matchMeridiem);
      addRegexToken('H', match1to2);
      addRegexToken('h', match1to2);
      addRegexToken('k', match1to2);
      addRegexToken('HH', match1to2, match2);
      addRegexToken('hh', match1to2, match2);
      addRegexToken('kk', match1to2, match2);
      addRegexToken('hmm', match3to4);
      addRegexToken('hmmss', match5to6);
      addRegexToken('Hmm', match3to4);
      addRegexToken('Hmmss', match5to6);
      addParseToken(['H', 'HH'], HOUR);
      addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      }); // LOCALES

      function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
      }

      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
          // Setting the hour should keep the time, because the user explicitly
      // specified which hour they want. So trying to maintain the same hour (in
      // a new timezone) makes sense. Adding/subtracting hours does not follow
      // this rule.
      getSetHour = makeGetSet('Hours', true);

      function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? 'pm' : 'PM';
        } else {
          return isLower ? 'am' : 'AM';
        }
      }

      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      }; // internal storage for locale config files

      var locales = {},
          localeFamilies = {},
          globalLocale;

      function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);

        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i;
          }
        }

        return minl;
      }

      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
      } // pick the locale from the array
      // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
      // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


      function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
          split = normalizeLocale(names[i]).split('-');
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split('-') : null;

          while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));

            if (locale) {
              return locale;
            }

            if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
              //the next array item is better than a shallower substring of this one
              break;
            }

            j--;
          }

          i++;
        }

        return globalLocale;
      }

      function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire; // TODO: Find a better way to register and load all the locales in Node

        if (locales[name] === undefined && 'object' !== 'undefined' && module && module.exports) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = commonjsRequire;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
          }
        }

        return locales[name];
      } // This function will load locale and then set the global locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.


      function getSetGlobalLocale(key, values) {
        var data;

        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }

          if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
          } else {
            if (typeof console !== 'undefined' && console.warn) {
              //warn user if arguments are passed but the locale could not be set
              console.warn('Locale ' + key + ' not found. Did you forget to load it?');
            }
          }
        }

        return globalLocale._abbr;
      }

      function defineLocale(name, config) {
        if (config !== null) {
          var locale,
              parentConfig = baseConfig;
          config.abbr = name;

          if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale = loadLocale(config.parentLocale);

              if (locale != null) {
                parentConfig = locale._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }

                localeFamilies[config.parentLocale].push({
                  name: name,
                  config: config
                });
                return null;
              }
            }
          }

          locales[name] = new Locale(mergeConfigs(parentConfig, config));

          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
              defineLocale(x.name, x.config);
            });
          } // backwards compat for now: also set the locale
          // make sure we set the locale AFTER all child locales have been
          // created, so we won't end up with the child locale set.


          getSetGlobalLocale(name);
          return locales[name];
        } else {
          // useful for testing
          delete locales[name];
          return null;
        }
      }

      function updateLocale(name, config) {
        if (config != null) {
          var locale,
              tmpLocale,
              parentConfig = baseConfig;

          if (locales[name] != null && locales[name].parentLocale != null) {
            // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(mergeConfigs(locales[name]._config, config));
          } else {
            // MERGE
            tmpLocale = loadLocale(name);

            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }

            config = mergeConfigs(parentConfig, config);

            if (tmpLocale == null) {
              // updateLocale is called for creating a new locale
              // Set abbr so it will have a name (getters return
              // undefined otherwise).
              config.abbr = name;
            }

            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
          } // backwards compat for now: also set the locale


          getSetGlobalLocale(name);
        } else {
          // pass null for config to unupdate, useful for tests
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;

              if (name === getSetGlobalLocale()) {
                getSetGlobalLocale(name);
              }
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }

        return locales[name];
      } // returns locale data


      function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }

        if (!key) {
          return globalLocale;
        }

        if (!isArray(key)) {
          //short-circuit everything else
          locale = loadLocale(key);

          if (locale) {
            return locale;
          }

          key = [key];
        }

        return chooseLocale(key);
      }

      function listLocales() {
        return keys(locales);
      }

      function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }

          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }

          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }

          getParsingFlags(m).overflow = overflow;
        }

        return m;
      } // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
          isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/], ['YYYYMM', /\d{6}/, false], ['YYYY', /\d{4}/, false]],
          // iso time formats and regexes
      isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]],
          aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
          // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
      rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      }; // date from iso format

      function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
          getParsingFlags(config).iso = true;

          for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }

          if (dateFormat == null) {
            config._isValid = false;
            return;
          }

          if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
              }
            }

            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }

          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }

          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = 'Z';
            } else {
              config._isValid = false;
              return;
            }
          }

          config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }

      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }

        return result;
      }

      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);

        if (year <= 49) {
          return 2000 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }

        return year;
      }

      function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      }

      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
              weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }

        return true;
      }

      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          // the only allowed military tz is Z
          return 0;
        } else {
          var hm = parseInt(numOffset, 10),
              m = hm % 100,
              h = (hm - m) / 100;
          return h * 60 + m;
        }
      } // date and time from ref 2822 format


      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;

        if (match) {
          parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }

          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);

          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      } // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict


      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }

        configFromISO(config);

        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }

        configFromRFC2822(config);

        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }

        if (config._strict) {
          config._isValid = false;
        } else {
          // Final attempt, use Input Fallback
          hooks.createFromInputFallback(config);
        }
      }

      hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
      }); // Pick the first defined of two or three arguments.

      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }

        if (b != null) {
          return b;
        }

        return c;
      }

      function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());

        if (config._useUTC) {
          return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }

        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      } // convert an array to a date.
      // the array should mirror the parameters below
      // note: all values past the year are optional and will default to the lowest possible value.
      // [year, month, day , hour, minute, second, millisecond]


      function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
          return;
        }

        currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        } //if the day of the year is set, figure out what it is


        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }

          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        } // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything


        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        } // Zero out whatever was not defaulted, including time


        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        } // Check for 24:00:00.000


        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.

        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
          config._a[HOUR] = 24;
        } // check for mismatching day of week


        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }

      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;

        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
          // how we interpret now (local, utc, fixed offset). So create
          // a now version of current config (take local/utc/offset flags, and
          // create now).

          weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);

          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

          week = defaults(w.w, curWeek.week);

          if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;

            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;

            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            // default to beginning of week
            weekday = dow;
          }
        }

        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      } // constant that refers to the ISO standard


      hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


      hooks.RFC_2822 = function () {}; // date from string and format string


      function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }

        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }

        config._a = [];
        getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];

          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));

            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }

            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
          } // don't parse if it's not a known token


          if (formatTokenFunctions[token]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token);
            }

            addTimeToArrayFromToken(token, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
          }
        } // add remaining unparsed input length to the string


        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        } // clear _12h flag if hour is <= 12


        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem); // handle era

        era = getParsingFlags(config).era;

        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
      }

      function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
          // nothing to do
          return hour;
        }

        if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
          // Fallback
          isPm = locale.isPM(meridiem);

          if (isPm && hour < 12) {
            hour += 12;
          }

          if (!isPm && hour === 12) {
            hour = 0;
          }

          return hour;
        } else {
          // this is not supposed to happen
          return hour;
        }
      } // date from string and array of format strings


      function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false;

        if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }

        for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig({}, config);

          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }

          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);

          if (isValid(tempConfig)) {
            validFormatFound = true;
          } // if there is any input that was not parsed add a penalty for that format


          currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;

          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;

              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }

        extend(config, bestMoment || tempConfig);
      }

      function configFromObject(config) {
        if (config._d) {
          return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function (obj) {
          return obj && parseInt(obj, 10);
        });
        configFromArray(config);
      }

      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));

        if (res._nextDay) {
          // Adding is smart enough around DST
          res.add(1, 'd');
          res._nextDay = undefined;
        }

        return res;
      }

      function prepareConfig(config) {
        var input = config._i,
            format = config._f;
        config._locale = config._locale || getLocale(config._l);

        if (input === null || format === undefined && input === '') {
          return createInvalid({
            nullInput: true
          });
        }

        if (typeof input === 'string') {
          config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format)) {
          configFromStringAndArray(config);
        } else if (format) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }

        if (!isValid(config)) {
          config._d = null;
        }

        return config;
      }

      function configFromInput(config) {
        var input = config._i;

        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          // from milliseconds
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }

      function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
          strict = format;
          format = undefined;
        }

        if (locale === true || locale === false) {
          strict = locale;
          locale = undefined;
        }

        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = undefined;
        } // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423


        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
      }

      function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
      }

      var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);

        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      }),
          prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);

        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }); // Pick a moment m from moments so that m[fn](other) is true for all
      // other. This relies on the function fn to be transitive.
      //
      // moments should either be an array of moment objects or an array, whose
      // first element is an array of moment objects.

      function pickBy(fn, moments) {
        var res, i;

        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }

        if (!moments.length) {
          return createLocal();
        }

        res = moments[0];

        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }

        return res;
      } // TODO: Use [].sort instead?


      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
      }

      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
      }

      var now = function now() {
        return Date.now ? Date.now() : +new Date();
      };

      var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

      function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i;

        for (key in m) {
          if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }

        for (i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false; // only allow non-integers for smallest unit
            }

            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }

        return true;
      }

      function isValid$1() {
        return this._isValid;
      }

      function createInvalid$1() {
        return createDuration(NaN);
      }

      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

        this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately

        this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.

        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();

        this._bubble();
      }

      function isDuration(obj) {
        return obj instanceof Duration;
      }

      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      } // compare two arrays, return the number of differences


      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;

        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }

        return diffs + lengthDiff;
      } // FORMATTING


      function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
          var offset = this.utcOffset(),
              sign = '+';

          if (offset < 0) {
            offset = -offset;
            sign = '-';
          }

          return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
      }

      offset('Z', ':');
      offset('ZZ', ''); // PARSING

      addRegexToken('Z', matchShortOffset);
      addRegexToken('ZZ', matchShortOffset);
      addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      }); // HELPERS
      // timezone chunker
      // '+10:00' > ['10',  '00']
      // '-1530'  > ['-15', '30']

      var chunkOffset = /([\+\-]|\d\d)/gi;

      function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
          return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
      } // Return a moment from input, that is local/utc/zone equivalent to model.


      function cloneWithOffset(input, model) {
        var res, diff;

        if (model._isUTC) {
          res = model.clone();
          diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

          res._d.setTime(res._d.valueOf() + diff);

          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }

      function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
      } // HOOKS
      // This function will be called whenever a moment is mutated.
      // It is intended to keep the offset in sync with the timezone.


      hooks.updateOffset = function () {}; // MOMENTS
      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.


      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;

        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        if (input != null) {
          if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);

            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }

          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }

          this._offset = input;
          this._isUTC = true;

          if (localAdjust != null) {
            this.add(localAdjust, 'm');
          }

          if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }

          return this;
        } else {
          return this._isUTC ? offset : getDateOffset(this);
        }
      }

      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== 'string') {
            input = -input;
          }

          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }

      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }

      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;

          if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
          }
        }

        return this;
      }

      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
          var tZone = offsetFromString(matchOffset, this._i);

          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }

        return this;
      }

      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }

        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }

      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }

      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }

        var c = {},
            other;
        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
          other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }

        return this._isDSTShifted;
      }

      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }

      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }

      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      } // ASP.NET json date format regex


      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
      // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
      // and further modified to allow for strings containing both week and day
      isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
        match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {};

          if (key) {
            duration[key] = +input;
          } else {
            duration.milliseconds = +input;
          }
        } else if (match = aspNetRegex.exec(input)) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign,
            h: toInt(match[HOUR]) * sign,
            m: toInt(match[MINUTE]) * sign,
            s: toInt(match[SECOND]) * sign,
            ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

          };
        } else if (match = isoRegex.exec(input)) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign)
          };
        } else if (duration == null) {
          // checks for null or undefined
          duration = {};
        } else if (_typeof(duration) === 'object' && ('from' in duration || 'to' in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
          ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
          ret._isValid = input._isValid;
        }

        return ret;
      }

      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;

      function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

        return (isNaN(res) ? 0 : res) * sign;
      }

      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

        if (base.clone().add(res.months, 'M').isAfter(other)) {
          --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
      }

      function momentsDifference(base, other) {
        var res;

        if (!(base.isValid() && other.isValid())) {
          return {
            milliseconds: 0,
            months: 0
          };
        }

        other = cloneWithOffset(other, base);

        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }

        return res;
      } // TODO: remove 'name' arg after deprecation is removed


      function createAdder(direction, name) {
        return function (val, period) {
          var dur, tmp; //invert the arguments, but complain about it

          if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val;
            val = period;
            period = tmp;
          }

          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }

      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
          // No op
          return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
          setMonth(mom, get(mom, 'Month') + months * isAdding);
        }

        if (days) {
          set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }

        if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }

        if (updateOffset) {
          hooks.updateOffset(mom, days || months);
        }
      }

      var add = createAdder(1, 'add'),
          subtract = createAdder(-1, 'subtract');

      function isString(input) {
        return typeof input === 'string' || input instanceof String;
      } // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined


      function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
      }

      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = ['years', 'year', 'y', 'months', 'month', 'M', 'days', 'day', 'd', 'dates', 'date', 'D', 'hours', 'hour', 'h', 'minutes', 'minute', 'm', 'seconds', 'second', 's', 'milliseconds', 'millisecond', 'ms'],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
      }

      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;

        if (arrayTest) {
          dataTypeTest = input.filter(function (item) {
            return !isNumber(item) && isString(input);
          }).length === 0;
        }

        return arrayTest && dataTypeTest;
      }

      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
      }

      function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
      }

      function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time = undefined;
            formats = undefined;
          } else if (isMomentInput(arguments[0])) {
            time = arguments[0];
            formats = undefined;
          } else if (isCalendarSpec(arguments[0])) {
            formats = arguments[0];
            time = undefined;
          }
        } // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.


        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
      }

      function clone() {
        return new Moment(this);
      }

      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }

      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }

      function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);

        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }

        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }

      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }

      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }

      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }

      function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
          return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
          return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);

        switch (units) {
          case 'year':
            output = monthDiff(this, that) / 12;
            break;

          case 'month':
            output = monthDiff(this, that);
            break;

          case 'quarter':
            output = monthDiff(this, that) / 3;
            break;

          case 'second':
            output = (this - that) / 1e3;
            break;
          // 1000

          case 'minute':
            output = (this - that) / 6e4;
            break;
          // 1000 * 60

          case 'hour':
            output = (this - that) / 36e5;
            break;
          // 1000 * 60 * 60

          case 'day':
            output = (this - that - zoneDelta) / 864e5;
            break;
          // 1000 * 60 * 60 * 24, negate dst

          case 'week':
            output = (this - that - zoneDelta) / 6048e5;
            break;
          // 1000 * 60 * 60 * 24 * 7, negate dst

          default:
            output = this - that;
        }

        return asFloat ? output : absFloor(output);
      }

      function monthDiff(a, b) {
        if (a.date() < b.date()) {
          // end-of-month calculations work correct when the start month has more
          // days than the end month.
          return -monthDiff(b, a);
        } // difference in months


        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

          adjust = (b - anchor) / (anchor2 - anchor);
        } //check for negative zero, return zero if negative zero


        return -(wholeMonthDiff + adjust) || 0;
      }

      hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
      hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

      function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      }

      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }

        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;

        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }

        if (isFunction(Date.prototype.toISOString)) {
          // native implementation is ~50x faster, use it when we can
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
          }
        }

        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }
      /**
       * Return a human readable representation of a moment that can
       * also be evaluated to get a new moment which is the same
       *
       * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
       */


      function inspect() {
        if (!this.isValid()) {
          return 'moment.invalid(/* ' + this._i + ' */)';
        }

        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;

        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
          zone = 'Z';
        }

        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }

      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }

        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }

      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            to: this,
            from: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }

      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            from: this,
            to: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      } // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.


      function locale(key) {
        var newLocaleData;

        if (key === undefined) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);

          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }

          return this;
        }
      }

      var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
        if (key === undefined) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      });

      function localeData() {
        return this._locale;
      }

      var MS_PER_SECOND = 1000,
          MS_PER_MINUTE = 60 * MS_PER_SECOND,
          MS_PER_HOUR = 60 * MS_PER_MINUTE,
          MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }

      function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }

      function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }

      function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);

        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;

          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
            break;

          case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;

          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
            break;

          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;

          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;

          case 'hour':
            time = this._d.valueOf();
            time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
            break;

          case 'minute':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE);
            break;

          case 'second':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND);
            break;
        }

        this._d.setTime(time);

        hooks.updateOffset(this, true);
        return this;
      }

      function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);

        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;

          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;

          case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;

          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;

          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;

          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;

          case 'hour':
            time = this._d.valueOf();
            time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
            break;

          case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
            break;

          case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
            break;
        }

        this._d.setTime(time);

        hooks.updateOffset(this, true);
        return this;
      }

      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
      }

      function unix() {
        return Math.floor(this.valueOf() / 1000);
      }

      function toDate() {
        return new Date(this.valueOf());
      }

      function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
      }

      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }

      function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
      }

      function isValid$2() {
        return isValid(this);
      }

      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }

      function invalidAt() {
        return getParsingFlags(this).overflow;
      }

      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }

      addFormatToken('N', 0, 0, 'eraAbbr');
      addFormatToken('NN', 0, 0, 'eraAbbr');
      addFormatToken('NNN', 0, 0, 'eraAbbr');
      addFormatToken('NNNN', 0, 0, 'eraName');
      addFormatToken('NNNNN', 0, 0, 'eraNarrow');
      addFormatToken('y', ['y', 1], 'yo', 'eraYear');
      addFormatToken('y', ['yy', 2], 0, 'eraYear');
      addFormatToken('y', ['yyy', 3], 0, 'eraYear');
      addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
      addRegexToken('N', matchEraAbbr);
      addRegexToken('NN', matchEraAbbr);
      addRegexToken('NNN', matchEraAbbr);
      addRegexToken('NNNN', matchEraName);
      addRegexToken('NNNNN', matchEraNarrow);
      addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);

        if (era) {
          getParsingFlags(config).era = era;
        } else {
          getParsingFlags(config).invalidEra = input;
        }
      });
      addRegexToken('y', matchUnsigned);
      addRegexToken('yy', matchUnsigned);
      addRegexToken('yyy', matchUnsigned);
      addRegexToken('yyyy', matchUnsigned);
      addRegexToken('yo', matchEraYearOrdinal);
      addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
      addParseToken(['yo'], function (input, array, config, token) {
        var match;

        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR] = parseInt(input, 10);
        }
      });

      function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;

        for (i = 0, l = eras.length; i < l; ++i) {
          switch (_typeof(eras[i].since)) {
            case 'string':
              // truncate time
              date = hooks(eras[i].since).startOf('day');
              eras[i].since = date.valueOf();
              break;
          }

          switch (_typeof(eras[i].until)) {
            case 'undefined':
              eras[i].until = +Infinity;
              break;

            case 'string':
              // truncate time
              date = hooks(eras[i].until).startOf('day').valueOf();
              eras[i].until = date.valueOf();
              break;
          }
        }

        return eras;
      }

      function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
          name = eras[i].name.toUpperCase();
          abbr = eras[i].abbr.toUpperCase();
          narrow = eras[i].narrow.toUpperCase();

          if (strict) {
            switch (format) {
              case 'N':
              case 'NN':
              case 'NNN':
                if (abbr === eraName) {
                  return eras[i];
                }

                break;

              case 'NNNN':
                if (name === eraName) {
                  return eras[i];
                }

                break;

              case 'NNNNN':
                if (narrow === eraName) {
                  return eras[i];
                }

                break;
            }
          } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
          }
        }
      }

      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;

        if (year === undefined) {
          return hooks(era.since).year();
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir;
        }
      }

      function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          // truncate time
          val = this.clone().startOf('day').valueOf();

          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
          }

          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
          }
        }

        return '';
      }

      function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          // truncate time
          val = this.clone().startOf('day').valueOf();

          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
          }

          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
          }
        }

        return '';
      }

      function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          // truncate time
          val = this.clone().startOf('day').valueOf();

          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
          }

          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
          }
        }

        return '';
      }

      function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          dir = eras[i].since <= eras[i].until ? +1 : -1; // truncate time

          val = this.clone().startOf('day').valueOf();

          if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
            return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
          }
        }

        return this.year();
      }

      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
          computeErasParse.call(this);
        }

        return isStrict ? this._erasNameRegex : this._erasRegex;
      }

      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
          computeErasParse.call(this);
        }

        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }

      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
          computeErasParse.call(this);
        }

        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }

      function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
      }

      function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
      }

      function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
      }

      function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
      }

      function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          namePieces.push(regexEscape(eras[i].name));
          abbrPieces.push(regexEscape(eras[i].abbr));
          narrowPieces.push(regexEscape(eras[i].narrow));
          mixedPieces.push(regexEscape(eras[i].name));
          mixedPieces.push(regexEscape(eras[i].abbr));
          mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
      } // FORMATTING


      addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
      });
      addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
      });

      function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
      }

      addWeekYearFormatToken('gggg', 'weekYear');
      addWeekYearFormatToken('ggggg', 'weekYear');
      addWeekYearFormatToken('GGGG', 'isoWeekYear');
      addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

      addUnitAlias('weekYear', 'gg');
      addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

      addUnitPriority('weekYear', 1);
      addUnitPriority('isoWeekYear', 1); // PARSING

      addRegexToken('G', matchSigned);
      addRegexToken('g', matchSigned);
      addRegexToken('GG', match1to2, match2);
      addRegexToken('gg', match1to2, match2);
      addRegexToken('GGGG', match1to4, match4);
      addRegexToken('gggg', match1to4, match4);
      addRegexToken('GGGGG', match1to6, match6);
      addRegexToken('ggggg', match1to6, match6);
      addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
      });
      addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
      }); // MOMENTS

      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }

      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
      }

      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }

      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
      }

      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;

        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }

      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;

        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }

      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;

        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);

          if (week > weeksTarget) {
            week = weeksTarget;
          }

          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }

      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      } // FORMATTING


      addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

      addUnitAlias('quarter', 'Q'); // PRIORITY

      addUnitPriority('quarter', 7); // PARSING

      addRegexToken('Q', match1);
      addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      }); // MOMENTS

      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      } // FORMATTING


      addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

      addUnitAlias('date', 'D'); // PRIORITY

      addUnitPriority('date', 9); // PARSING

      addRegexToken('D', match1to2);
      addRegexToken('DD', match1to2, match2);
      addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
      });
      addParseToken(['D', 'DD'], DATE);
      addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      }); // MOMENTS

      var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

      addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

      addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

      addUnitPriority('dayOfYear', 4); // PARSING

      addRegexToken('DDD', match1to3);
      addRegexToken('DDDD', match3);
      addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
      }); // HELPERS
      // MOMENTS

      function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
      } // FORMATTING


      addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

      addUnitAlias('minute', 'm'); // PRIORITY

      addUnitPriority('minute', 14); // PARSING

      addRegexToken('m', match1to2);
      addRegexToken('mm', match1to2, match2);
      addParseToken(['m', 'mm'], MINUTE); // MOMENTS

      var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

      addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

      addUnitAlias('second', 's'); // PRIORITY

      addUnitPriority('second', 15); // PARSING

      addRegexToken('s', match1to2);
      addRegexToken('ss', match1to2, match2);
      addParseToken(['s', 'ss'], SECOND); // MOMENTS

      var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

      addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken(0, ['SSS', 3], 0, 'millisecond');
      addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
      });
      addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
      });
      addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
      });
      addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
      }); // ALIASES

      addUnitAlias('millisecond', 'ms'); // PRIORITY

      addUnitPriority('millisecond', 16); // PARSING

      addRegexToken('S', match1to3, match1);
      addRegexToken('SS', match1to3, match2);
      addRegexToken('SSS', match1to3, match3);
      var token, getSetMillisecond;

      for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
      }

      function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
      }

      getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

      addFormatToken('z', 0, 0, 'zoneAbbr');
      addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

      function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
      }

      function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
      }

      var proto = Moment.prototype;
      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;

      if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
          return 'Moment<' + this.format() + '>';
        };
      }

      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
      proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
      proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
      proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
      proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

      function createUnix(input) {
        return createLocal(input * 1000);
      }

      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }

      function preParsePostFormat(string) {
        return string;
      }

      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;

      function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
      }

      function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';

        if (index != null) {
          return get$1(format, index, field, 'month');
        }

        var i,
            out = [];

        for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, 'month');
        }

        return out;
      } // ()
      // (5)
      // (fmt, 5)
      // (fmt)
      // (true)
      // (true, 5)
      // (true, fmt, 5)
      // (true, fmt)


      function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        } else {
          format = localeSorted;
          index = format;
          localeSorted = false;

          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
          return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }

        return out;
      }

      function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
      }

      function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
      }

      function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
      }

      function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
      }

      function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
      }

      getSetGlobalLocale('en', {
        eras: [{
          since: '0001-01-01',
          until: +Infinity,
          offset: 1,
          name: 'Anno Domini',
          narrow: 'AD',
          abbr: 'AD'
        }, {
          since: '0000-12-31',
          until: -Infinity,
          offset: 1,
          name: 'Before Christ',
          narrow: 'BC',
          abbr: 'BC'
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        }
      }); // Side effect imports

      hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
      hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
      var mathAbs = Math.abs;

      function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }

      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      } // supports only 2.0-style add(1, 's') or add(duration)


      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      } // supports only 2.0-style subtract(1, 's') or subtract(duration)


      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }

      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }

      function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays; // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166

        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
          days = 0;
          months = 0;
        } // The following code bubbles up values, see the tests for
        // examples of what that means.


        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24); // convert days to months

        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
      }

      function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
      }

      function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
      }

      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }

        var days,
            months,
            milliseconds = this._milliseconds;
        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
          days = this._days + milliseconds / 864e5;
          months = this._months + daysToMonths(days);

          switch (units) {
            case 'month':
              return months;

            case 'quarter':
              return months / 3;

            case 'year':
              return months / 12;
          }
        } else {
          // handle milliseconds separately because of floating point math errors (issue #1867)
          days = this._days + Math.round(monthsToDays(this._months));

          switch (units) {
            case 'week':
              return days / 7 + milliseconds / 6048e5;

            case 'day':
              return days + milliseconds / 864e5;

            case 'hour':
              return days * 24 + milliseconds / 36e5;

            case 'minute':
              return days * 1440 + milliseconds / 6e4;

            case 'second':
              return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here

            case 'millisecond':
              return Math.floor(days * 864e5) + milliseconds;

            default:
              throw new Error('Unknown unit ' + units);
          }
        }
      } // TODO: Use this.as('ms')?


      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }

        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }

      function makeAs(alias) {
        return function () {
          return this.as(alias);
        };
      }

      var asMilliseconds = makeAs('ms'),
          asSeconds = makeAs('s'),
          asMinutes = makeAs('m'),
          asHours = makeAs('h'),
          asDays = makeAs('d'),
          asWeeks = makeAs('w'),
          asMonths = makeAs('M'),
          asQuarters = makeAs('Q'),
          asYears = makeAs('y');

      function clone$1() {
        return createDuration(this);
      }

      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
      }

      function makeGetter(name) {
        return function () {
          return this.isValid() ? this._data[name] : NaN;
        };
      }

      var milliseconds = makeGetter('milliseconds'),
          seconds = makeGetter('seconds'),
          minutes = makeGetter('minutes'),
          hours = makeGetter('hours'),
          days = makeGetter('days'),
          months = makeGetter('months'),
          years = makeGetter('years');

      function weeks() {
        return absFloor(this.days() / 7);
      }

      var round = Math.round,
          thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month/week
        w: null,
        // weeks to month
        M: 11 // months to year

      }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }

      function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days];

        if (thresholds.w != null) {
          a = a || weeks <= 1 && ['w'] || weeks < thresholds.w && ['ww', weeks];
        }

        a = a || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
      } // This function allows you to set the rounding function for relative time strings


      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
          return round;
        }

        if (typeof roundingFunction === 'function') {
          round = roundingFunction;
          return true;
        }

        return false;
      } // This function allows you to set a threshold for relative time strings


      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
          return false;
        }

        if (limit === undefined) {
          return thresholds[threshold];
        }

        thresholds[threshold] = limit;

        if (threshold === 's') {
          thresholds.ss = limit - 1;
        }

        return true;
      }

      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (_typeof(argWithSuffix) === 'object') {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }

        if (typeof argWithSuffix === 'boolean') {
          withSuffix = argWithSuffix;
        }

        if (_typeof(argThresholds) === 'object') {
          th = Object.assign({}, thresholds, argThresholds);

          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
          output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
      }

      var abs$1 = Math.abs;

      function sign(x) {
        return (x > 0) - (x < 0) || +x;
      }

      function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
          // this is the same as C#'s (Noda) and python (isodate)...
          // but not other JS (goog.date)
          return 'P0D';
        } // 3600 seconds -> 60 minutes -> 1 hour


        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60; // 12 months -> 1 year

        years = absFloor(months / 12);
        months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
        return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
      }

      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
      proto$2.lang = lang; // FORMATTING

      addFormatToken('X', 0, 0, 'unix');
      addFormatToken('x', 0, 0, 'valueOf'); // PARSING

      addRegexToken('x', matchSigned);
      addRegexToken('X', matchTimestamp);
      addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
      });
      addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
      }); //! moment.js

      hooks.version = '2.29.1';
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

      hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',
        // <input type="date" />
        TIME: 'HH:mm',
        // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',
        // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',
        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',
        // <input type="week" />
        MONTH: 'YYYY-MM' // <input type="month" />

      };
      return hooks;
    });
  })(moment$4);

  var moment$3 = moment$4.exports;

  /**
   * Module Description
   * Several handy functions to use in other modules
   *
   * Version      Date            Author            Comments
   *  1.0      29th March 2021   Dmitry Masanov     Script Created
   *
   */
  function printLogPartial(
  /**
   * Usage: printLogPartial('Header') will return a new function
   */
  title, log_function) {
      if (title === void 0) { title = 'LOG'; }
      if (log_function === void 0) { log_function = log__default["default"].audit; }
      return function (message) {
          log_function({ title: title, details: message });
      };
  }
  function chunks(inputArray, chunkSize) {
      /*
      Splits an array to chunks of fixed length
       */
      if (chunkSize === 0) {
          return [];
      }
      var outputArray = [];
      for (var i = 0; i < inputArray.length; i += chunkSize) {
          outputArray.push(inputArray.slice(i, i + chunkSize));
      }
      return outputArray;
  }
  function notifyOwner(scriptName, errorText) {
      var sql = "select employee.id as owner_id, email as owner_email from script join employee on script.owner = employee.id join File on script.scriptfile = File.id where File.name = '" + scriptName + "'";
      var results = getSqlResultAsMap(sql, []);
      if (results === undefined) {
          return;
      }
      if (results.length < 1) {
          return;
      }
      var ownerId = results[0]['owner_id'];
      var ownerEmail = results[0]['owner_email'];
      if (!ownerId || ownerEmail.length === 0) {
          return;
      }
      try {
          email__default["default"].send({
              author: ownerId,
              recipients: ["" + ownerEmail],
              subject: "Script \"" + scriptName + "\" failed",
              body: errorText,
              attachments: [],
          });
      }
      catch (e) {
          return;
      }
  }
  function fetchOneValue(sqlString) {
      /**
       * When it is known that the result will be a single value. The value is returned as a string
       */
      var results;
      try {
          results = query__default["default"].runSuiteQL({ query: sqlString }).results;
      }
      catch (e) {
          return null;
      }
      if (results.length === 0) {
          return null;
      }
      if (!results[0].values || results[0].values.length < 0) {
          return null;
      }
      return String(results[0].values[0]);
  }
  function getBaseURL() {
      var companyId = N.runtime.accountId.toLowerCase().replace(/_/g, '-');
      return "https://" + companyId + ".app.netsuite.com";
  }
  function getSqlResults(sqlString) {
      return query__default["default"].runSuiteQL({
          query: sqlString,
      });
  }
  function getValues(searchResult) {
      return searchResult.map(function (result) {
          return result.asMap();
      });
  }
  function adjustQuantity(lines, targetAmount) {
      /*
      Due to Netsuite limitations, quantity precision is limited to 5 digits after comma, and currency to 2, sometimes we
      must adjust quantity a bit to have exact amount
       */
      if (targetAmount === 0) {
          return lines.map(function (element) {
              return {
                  lineNumber: element.lineNumber,
                  quantity: 0,
                  rate: element.rate,
              };
          });
      }
      var initialAmount = Math.round(lines.reduce(function (a, b) {
          return a + b.amount;
      }, 0) * 100) / 100;
      var roundedTargetAmount = Math.round(targetAmount * 1000) / 1000; // Amount is a currency
      var coefficient = roundedTargetAmount / initialAmount;
      var calculatedAmount = 0;
      for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
          var line = lines_1[_i];
          line.quantity *= coefficient;
          line.quantity = Math.round(line.quantity * 100000) / 100000;
          calculatedAmount += line.rate * line.quantity;
      }
      calculatedAmount = Math.round(calculatedAmount * 1000) / 1000;
      if (roundedTargetAmount === calculatedAmount) {
          return lines.map(function (element) {
              return {
                  lineNumber: element.lineNumber,
                  quantity: element.quantity,
                  rate: element.rate,
              };
          });
      }
      var difference = calculatedAmount - roundedTargetAmount;
      calculatedAmount = 0;
      var lineNumberWithMinimumRate = lines.reduce(function (prev, curr) {
          return prev.rate < curr.rate ? prev : curr;
      });
      for (var i = 0; i < 1000000; i++) {
          if (difference < 0) {
              lines[lineNumberWithMinimumRate.lineNumber].quantity += 0.00001; // adjusting the first line. Target is greater, so adding a bit
          }
          else {
              lines[lineNumberWithMinimumRate.lineNumber].quantity -= 0.00001; // adjusting the first line. Target is less, so subtracting a bit
          }
          // lines[lineNumberWithMinimumRate.lineNumber].quantity = Math.round(lines[0].quantity * 100000) / 100000;
          calculatedAmount = 0;
          for (var _a = 0, lines_2 = lines; _a < lines_2.length; _a++) {
              var line = lines_2[_a];
              calculatedAmount += line.rate * line.quantity;
          }
          var roundedCalculatedAmount = Math.round(calculatedAmount * 1000) / 1000;
          if ((difference < 0 &&
              roundedTargetAmount >= roundedCalculatedAmount) ||
              (difference > 0 &&
                  roundedCalculatedAmount <= roundedCalculatedAmount)) {
              return lines.map(function (element) {
                  return {
                      lineNumber: element.lineNumber,
                      quantity: element.quantity,
                      rate: element.rate,
                  };
              });
          }
      }
      return [];
  }
  function getSqlResultAsMap(sqlString, logs) {
      try {
          var sqlResults = getSqlResults(sqlString).results;
          if (sqlResults) {
              return getValues(sqlResults);
          }
      }
      catch (e) {
          logs.push(e);
          return undefined;
      }
      return [];
  }
  function parseDate(dateString, format) {
      /**
       * Format example: DD/MM/YYYY
       */
      var momentDate = moment$3.utc(dateString, format);
      var newDate = momentDate.toDate();
      if (newDate.toDateString().toLowerCase().indexOf('invalid') >= 0) {
          return null;
      }
      return newDate;
  }
  function getScriptURL(scriptId, deploymentId) {
      if (deploymentId === void 0) { deploymentId = '1'; }
      return url__default["default"].resolveScript({
          scriptId: scriptId,
          returnExternalUrl: false,
          deploymentId: deploymentId,
      });
  }
  function surroundTextWithDashes$1(
  /**
   * Makes ----text---- from text
   * Default length is 160 symbols to fit Netsuite DETAILS field
   */
  inputString, desiredLength) {
      if (desiredLength === void 0) { desiredLength = 160; }
      if (inputString.length >= desiredLength) {
          return inputString;
      }
      var dashesLength = Math.floor((desiredLength - inputString.length) / 2);
      return (Array(dashesLength).join('-') +
          inputString +
          Array(dashesLength).join('-'));
  }
  function roundNumber(n, digitsAfterComma) {
      return (Math.round(n * Math.pow(10, digitsAfterComma)) /
          Math.pow(10, digitsAfterComma));
  }
  function loadTransactionLineGroup(transactionsIds, logs) {
      /*
      For transactions list specified, loads all items with Groups information (groupId and name if line belongs to a group
       */
      var outputDict = {};
      for (var _i = 0, _a = chunks(transactionsIds, 1000); _i < _a.length; _i++) {
          var chunk = _a[_i];
          var sql = "WITH Framed AS ( SELECT uniquekey, item, BUILTIN.DF(item) as item_name, itemtype, BUILTIN.DF(transaction) as tr_name, linesequencenumber, SUM(CASE WHEN itemtype IN ('Group', 'EndGroup') THEN 1 ELSE 0 END) OVER (ORDER BY BUILTIN.DF(transaction), linesequencenumber) AS frame_id FROM transactionline where transaction in (" + chunk.join(',') + ") and mainline = 'F' and taxline = 'F' ) SELECT linesequencenumber, uniquekey, item, item_name, tr_name, MAX(CASE WHEN itemtype = 'Group' THEN uniquekey END) OVER (PARTITION BY frame_id) as group_unique_key, MAX(CASE WHEN itemtype = 'Group' THEN item_name END) OVER (PARTITION BY frame_id) as group_name, MAX(CASE WHEN itemtype = 'Group' THEN item END) OVER (PARTITION BY frame_id) as group_id FROM Framed ORDER BY tr_name, linesequencenumber";
          logs === null || logs === void 0 ? void 0 : logs.push(sql);
          var results = getSqlResultAsMap(sql, logs ? logs : []);
          for (var _b = 0, results_1 = results; _b < results_1.length; _b++) {
              var r = results_1[_b];
              outputDict[Number(r.uniquekey)] = {
                  groupId: r.group_id === 'null' ? null : Number(r.group_id),
                  groupName: r.group_name === 'null' ? '' : r.group_name,
                  itemId: Number(r.item),
                  groupUniqueKey: r.group_unique_key === 'null'
                      ? null
                      : Number(r.group_unique_key),
                  itemName: r.item_name,
              };
          }
      }
      return outputDict;
  }

  var Helpers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    printLogPartial: printLogPartial,
    chunks: chunks,
    notifyOwner: notifyOwner,
    fetchOneValue: fetchOneValue,
    getBaseURL: getBaseURL,
    adjustQuantity: adjustQuantity,
    getSqlResultAsMap: getSqlResultAsMap,
    parseDate: parseDate,
    getScriptURL: getScriptURL,
    surroundTextWithDashes: surroundTextWithDashes$1,
    roundNumber: roundNumber,
    loadTransactionLineGroup: loadTransactionLineGroup
  });

  var defineWellKnownSymbol$1 = defineWellKnownSymbol$4; // `Symbol.asyncIterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.asynciterator

  defineWellKnownSymbol$1('asyncIterator');

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  /* global Reflect, Promise */
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  function surroundTextWithDashes(
  /**
   * Makes ----text---- from text
   * Default length is 160 symbols to fit Netsuite DETAILS field
   */
  inputString, desiredLength) {
      if (desiredLength === void 0) { desiredLength = 160; }
      if (inputString.length >= desiredLength) {
          return inputString;
      }
      var dashesLength = Math.floor((desiredLength - inputString.length) / 2);
      return (Array(dashesLength).join('-') +
          inputString +
          Array(dashesLength).join('-'));
  }
  function log(details, title, omitDashes, f) {
      if (omitDashes === void 0) { omitDashes = false; }
      if (f === void 0) { f = log$3.debug; }
      if (!title) {
          var stack = getStack();
          title = stack.functionName + " at line " + stack.lineNum;
      }
      var dashes = omitDashes ? '' : '________';
      f({ title: title, details: dashes + details });
  }
  function stackParseClient(stack) {
      var stackToReturn = new SimpleStack('?', 0, '?', false);
      if (stack.length < 6) {
          return stackToReturn;
      }
      var found = false;
      for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
          var str = stack_1[_i];
          if ((str.indexOf('log(') >= 0 && str.indexOf('Logger.js:') >= 0) ||
              str.indexOf('StepsRunner') >= 0) {
              found = true;
              continue;
          }
          if (found) {
              var words = /at (.+) \(.+%2F(.+?)&/g.exec(str);
              if (!words || words.length < 3) {
                  return stackToReturn;
              }
              stackToReturn.functionName = words[1];
              stackToReturn.scriptName = words[2];
              stackToReturn.found = true;
              return stackToReturn;
          }
      }
      return stackToReturn;
  }
  function stackParseUserEvent(stack) {
      var stackToReturn = new SimpleStack('?', 0, '?', false);
      if (stack.length < 2) {
          return stackToReturn;
      }
      var oldStackIndex = /[^/]*$/.exec(stack[stack.length - 2]);
      var newStackIndex = /[^/]*$/.exec(stack[stack.length - 1]);
      var words = stack.length > 5 ? oldStackIndex : newStackIndex;
      //const words = /[^/]*$/.exec(stack[stack.length - 2]);
      // finding script name
      if (!words || words.length < 1) {
          stackToReturn.scriptName = '?';
      }
      else {
          stackToReturn.scriptName = words[0].split(':')[0];
      }
      var found = false;
      for (var _i = 0, stack_2 = stack; _i < stack_2.length; _i++) {
          var str = stack_2[_i];
          if ((str.indexOf('log(') >= 0 && str.indexOf('Logger.js:') >= 0) ||
              str.indexOf('StepsRunner') >= 0) {
              found = true;
              continue;
          }
          if (found) {
              var words_1 = /(.+)\(\/.+\/(.+).js:(.+)\)/.exec(str);
              if (!words_1 || words_1.length < 4) {
                  return stackToReturn;
              }
              stackToReturn.functionName = words_1[1]
                  .replace(/at Object./, '')
                  .trim();
              stackToReturn.lineNum = Number(words_1[3].split(':')[0]);
              stackToReturn.found = true;
              return stackToReturn;
          }
      }
      return stackToReturn;
  }
  var SimpleStack = /** @class */ (function () {
      function SimpleStack(functionName, lineNum, scriptName, found) {
          this.functionName = functionName;
          this.lineNum = lineNum;
          this.scriptName = scriptName;
          this.found = found;
      }
      return SimpleStack;
  }());
  function getStack() {
      var temp_error = N.error.create({
          notifyOff: true,
          name: 'Temp Error',
          message: 'Temp Error',
      });
      var stackToReturn = new SimpleStack('?', 0, '?', false);
      var stack = temp_error['stack'];
      for (var _i = 0, _a = [stackParseUserEvent, stackParseClient]; _i < _a.length; _i++) {
          var func = _a[_i];
          stackToReturn = func(stack);
          if (stackToReturn.found) {
              return stackToReturn;
          }
      }
      return stackToReturn;
  }
  var Logger = /** @class */ (function () {
      function Logger(_a) {
          var header = _a.header, showRecordId = _a.showRecordId, severity = _a.severity, showRecordType = _a.showRecordType, showTriggerType = _a.showTriggerType, triggerType = _a.triggerType, context = _a.context, showContextType = _a.showContextType, showLineNumber = _a.showLineNumber, scriptName = _a.scriptName;
          this.showRecordId = true;
          this.showTriggerType = false;
          this.showRecordType = false;
          this.triggerType = '';
          this.showContextType = false;
          this.showLineNumber = false;
          this.severity = 'DEBUG';
          this.context = context;
          this.header = header;
          this.showRecordId = showRecordId;
          this.severity = severity;
          this.showRecordType = showRecordType;
          this.showTriggerType = showTriggerType;
          this.triggerType = triggerType;
          this.showContextType = showContextType;
          this.showLineNumber = showLineNumber;
          this.scriptName = scriptName;
      }
      Logger.prototype.describe = function () {
          return "Header: \"" + this.header + "\", Script name: \"" + this.scriptName + "\", Show record id? " + String(this.showRecordId) + ", Show record type? " + String(this.showRecordType) + ", Trigger type: \"" + this.triggerType + "\", Show trigger type? " + String(this.showTriggerType) + ", Show context type? " + String(this.showContextType) + ", Show line number? " + String(this.showLineNumber);
      };
      Logger.prototype.printUserWarnings = function (_) {
          if (_) {
              return;
          }
      };
      Logger.prototype.printUserErrors = function (_) {
          if (_) {
              return;
          }
      };
      Logger.getLogger = function (context, args) {
          if (args === void 0) { args = {}; }
          var stack = getStack();
          if (['beforeLoad', 'beforeSubmit', 'afterSubmit'].indexOf(stack.functionName) >= 0) {
              return new UserEventLogger({
                  context: context,
                  severity: args.severity || 'DEBUG',
                  showRecordId: args.showRecordId || true,
                  header: args.header || '',
                  showTriggerType: args.showTriggerType || false,
                  showRecordType: args.showRecordType || false,
                  triggerType: stack.functionName,
                  showLineNumber: args.showLineNumber || false,
                  showContextType: args.showContextType || false,
                  scriptName: stack.scriptName,
              });
          }
          else if (['onRequest'].indexOf(stack.functionName) >= 0) {
              return new SuiteletLogger({
                  context: context,
                  severity: args.severity || 'DEBUG',
                  showRecordId: args.showRecordId || false,
                  header: args.header || '',
                  showTriggerType: args.showTriggerType || false,
                  showRecordType: args.showRecordType || false,
                  triggerType: stack.functionName,
                  showLineNumber: args.showLineNumber || false,
                  showContextType: args.showContextType || false,
                  scriptName: stack.scriptName,
              });
          }
          else if (['pageInit', 'fieldChanged'].indexOf(stack.functionName) >= 0) {
              return new ClientLogger({
                  context: context,
                  severity: args.severity || 'DEBUG',
                  showRecordId: args.showRecordId || false,
                  header: args.header || '',
                  showTriggerType: args.showTriggerType || false,
                  showRecordType: args.showRecordType || false,
                  triggerType: stack.functionName,
                  showLineNumber: args.showLineNumber || false,
                  showContextType: args.showContextType || false,
                  scriptName: stack.scriptName,
              });
          }
          else if (context === null) {
              return new ButtonHandlerLogger({
                  context: context,
                  severity: args.severity || 'DEBUG',
                  showRecordId: args.showRecordId || false,
                  header: args.header || '',
                  showTriggerType: args.showTriggerType || false,
                  showRecordType: args.showRecordType || false,
                  triggerType: stack.functionName,
                  showLineNumber: args.showLineNumber || false,
                  showContextType: args.showContextType || false,
                  scriptName: stack.scriptName,
              });
          }
          else {
              return new DefaultLogger({
                  context: context,
                  severity: args.severity || 'DEBUG',
                  showRecordId: args.showRecordId || false,
                  header: args.header || '',
                  showTriggerType: args.showTriggerType || false,
                  showRecordType: args.showRecordType || false,
                  triggerType: stack.functionName,
                  showLineNumber: args.showLineNumber || false,
                  showContextType: args.showContextType || false,
                  scriptName: stack.scriptName,
              });
          }
      };
      return Logger;
  }());
  var SuiteletLogger = /** @class */ (function (_super) {
      __extends(SuiteletLogger, _super);
      function SuiteletLogger(_a) {
          var header = _a.header, showRecordId = _a.showRecordId, severity = _a.severity, showRecordType = _a.showRecordType, showTriggerType = _a.showTriggerType, context = _a.context, triggerType = _a.triggerType, showContextType = _a.showContextType, showLineNumber = _a.showLineNumber, scriptName = _a.scriptName;
          var _this = _super.call(this, {
              header: header,
              showRecordId: showRecordId,
              severity: severity,
              showRecordType: showRecordType,
              showTriggerType: showTriggerType,
              context: context,
              triggerType: triggerType,
              showContextType: showContextType,
              showLineNumber: showLineNumber,
              scriptName: scriptName,
          }) || this;
          if (_this.header.length === 0) {
              _this.header = _this.context.request.method;
          }
          return _this;
      }
      return SuiteletLogger;
  }(Logger));
  var UserEventLogger = /** @class */ (function (_super) {
      __extends(UserEventLogger, _super);
      function UserEventLogger(_a) {
          var header = _a.header, showRecordId = _a.showRecordId, severity = _a.severity, showRecordType = _a.showRecordType, showTriggerType = _a.showTriggerType, context = _a.context, triggerType = _a.triggerType, showLineNumber = _a.showLineNumber, showContextType = _a.showContextType, scriptName = _a.scriptName;
          var _this = _super.call(this, {
              header: header,
              showRecordId: showRecordId,
              severity: severity,
              showRecordType: showRecordType,
              showTriggerType: showTriggerType,
              context: context,
              triggerType: triggerType,
              showContextType: showContextType,
              showLineNumber: showLineNumber,
              scriptName: scriptName,
          }) || this;
          _this.userEventContext = _this
              .context;
          if (_this.showRecordType) {
              _this.header += "" + _this.userEventContext.newRecord.type;
          }
          if (_this.showTriggerType) {
              _this.header += " " + _this.triggerType;
          }
          if (_this.showContextType) {
              _this.header += " " + _this.userEventContext.type;
          }
          if (_this.showRecordId) {
              if (_this.userEventContext.type ===
                  _this.userEventContext.UserEventType.CREATE) {
                  if (['beforeSubmit', 'beforeLoad'].indexOf(_this.triggerType) >=
                      0) {
                      _this.header += ' ToBeCr';
                  }
                  else {
                      _this.header += " " + _this.userEventContext.newRecord.id;
                  }
              }
              else {
                  _this.header += " " + _this.userEventContext.newRecord.id;
              }
          }
          return _this;
      }
      UserEventLogger.prototype.printUserErrors = function (errors) {
          _super.prototype.printUserErrors.call(this, errors);
          throw errors.join(', ');
      };
      UserEventLogger.prototype.printUserWarnings = function (warnings) {
          _super.prototype.printUserWarnings.call(this, warnings);
      };
      return UserEventLogger;
  }(Logger));
  var ButtonHandlerLogger = /** @class */ (function (_super) {
      __extends(ButtonHandlerLogger, _super);
      function ButtonHandlerLogger(_a) {
          var header = _a.header, showRecordId = _a.showRecordId, severity = _a.severity, showRecordType = _a.showRecordType, showTriggerType = _a.showTriggerType, context = _a.context, triggerType = _a.triggerType, showLineNumber = _a.showLineNumber, showContextType = _a.showContextType, scriptName = _a.scriptName;
          return _super.call(this, {
              header: header,
              showRecordId: showRecordId,
              severity: severity,
              showRecordType: showRecordType,
              showTriggerType: showTriggerType,
              context: context,
              triggerType: triggerType,
              showLineNumber: showLineNumber,
              showContextType: showContextType,
              scriptName: scriptName,
          }) || this;
      }
      ButtonHandlerLogger.prototype.printUserErrors = function (errors) {
          _super.prototype.printUserErrors.call(this, errors);
          alert(errors.join(', '));
      };
      ButtonHandlerLogger.prototype.printUserWarnings = function (warnings) {
          _super.prototype.printUserWarnings.call(this, warnings);
          alert(warnings.join(', '));
      };
      return ButtonHandlerLogger;
  }(Logger));
  var ClientLogger = /** @class */ (function (_super) {
      __extends(ClientLogger, _super);
      function ClientLogger(_a) {
          var header = _a.header, showRecordId = _a.showRecordId, severity = _a.severity, showRecordType = _a.showRecordType, showTriggerType = _a.showTriggerType, context = _a.context, triggerType = _a.triggerType, showLineNumber = _a.showLineNumber, showContextType = _a.showContextType, scriptName = _a.scriptName;
          var _this = _super.call(this, {
              header: header,
              showRecordId: showRecordId || true,
              severity: severity,
              showRecordType: showRecordType || false,
              showTriggerType: showTriggerType || true,
              context: context,
              triggerType: triggerType,
              showLineNumber: showLineNumber,
              showContextType: showContextType || false,
              scriptName: scriptName,
          }) || this;
          _this.clientContext = _this.context;
          if (_this.showRecordType) {
              _this.header += "" + _this.clientContext.currentRecord.type;
          }
          if (_this.showTriggerType) {
              _this.header += " " + _this.triggerType;
          }
          if (_this.showContextType) {
              _this.header += " " + _this.clientContext.mode;
          }
          if (_this.showRecordId) {
              if (_this.clientContext.mode === 'create') {
                  _this.header += ' ToBeCr';
              }
              else {
                  _this.header += " " + String(_this.clientContext.currentRecord.id);
              }
          }
          return _this;
      }
      ClientLogger.prototype.printUserErrors = function (errors) {
          _super.prototype.printUserErrors.call(this, errors);
          alert(errors.join(', '));
      };
      ClientLogger.prototype.printUserWarnings = function (warnings) {
          _super.prototype.printUserWarnings.call(this, warnings);
          alert(warnings.join(', '));
      };
      return ClientLogger;
  }(Logger));
  var DefaultLogger = /** @class */ (function (_super) {
      __extends(DefaultLogger, _super);
      function DefaultLogger(_a) {
          var header = _a.header, showRecordId = _a.showRecordId, severity = _a.severity, showRecordType = _a.showRecordType, showTriggerType = _a.showTriggerType, context = _a.context, triggerType = _a.triggerType, showLineNumber = _a.showLineNumber, showContextType = _a.showContextType, scriptName = _a.scriptName;
          return _super.call(this, {
              header: header,
              showRecordId: showRecordId,
              severity: severity,
              showRecordType: showRecordType,
              showTriggerType: showTriggerType,
              context: context,
              triggerType: triggerType,
              showLineNumber: showLineNumber,
              showContextType: showContextType,
              scriptName: scriptName,
          }) || this;
      }
      DefaultLogger.prototype.printUserErrors = function (errors) {
          _super.prototype.printUserErrors.call(this, errors);
      };
      DefaultLogger.prototype.printUserWarnings = function (warnings) {
          _super.prototype.printUserWarnings.call(this, warnings);
      };
      return DefaultLogger;
  }(Logger));

  var Logger$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    surroundTextWithDashes: surroundTextWithDashes,
    log: log,
    Logger: Logger
  });

  function writeFileInCurrentDirectory(scriptFileName, desiredOutputFileName, fileContent) {
      function stringChunks(initialString) {
          var strings = initialString.split('\n');
          var outputStrings = [];
          var i;
          var j;
          var chunk = 100000;
          for (i = 0, j = strings.length; i < j; i += chunk) {
              outputStrings.push(strings.slice(i, i + chunk).join('\n'));
          }
          return outputStrings;
      }
      var createdFilesIds = [];
      if (scriptFileName.indexOf('.js') < 0) {
          scriptFileName += '.js';
      }
      var sql = "select folder from file where name = '" + scriptFileName + "'";
      printLogPartial('writeFileInCurrentDirectory')(sql);
      var folderId = fetchOneValue(sql);
      if (!folderId) {
          return createdFilesIds;
      }
      printLogPartial('writeFileInCurrentDirectory')("Folder id is " + folderId);
      var dataChunks = stringChunks(fileContent);
      printLogPartial('writeFileInCurrentDirectory')("There are " + dataChunks.length + " chunks");
      if (dataChunks.length < 1) {
          return createdFilesIds;
      }
      for (var chunkNumber = 0; chunkNumber < dataChunks.length; chunkNumber++) {
          var outputFileName = chunkNumber < 1
              ? desiredOutputFileName + ".txt"
              : desiredOutputFileName + "_" + chunkNumber + ".txt";
          var fileObj = file__default["default"].create({
              name: outputFileName,
              fileType: file__default["default"].Type.CSV,
              contents: dataChunks[chunkNumber],
          });
          printLogPartial('writeFileInCurrentDirectory')("Saving file " + outputFileName);
          fileObj.folder = Number(folderId);
          createdFilesIds.push(fileObj.save());
          printLogPartial('writeFileInCurrentDirectory')('File saved');
      }
      printLogPartial('writeFileInCurrentDirectory')("Files created: " + JSON.stringify(createdFilesIds));
      return createdFilesIds;
  }

  var Files = /*#__PURE__*/Object.freeze({
    __proto__: null,
    writeFileInCurrentDirectory: writeFileInCurrentDirectory
  });

  var KitTemplate = /** @class */ (function () {
      function KitTemplate() {
          this._logs = [];
          this.userWarnings = [];
          this.userErrors = [];
          this.scriptErrors = [];
          this.throwException = '';
          this.exitImmediately = false;
      }
      KitTemplate.prototype.log = function (text) {
          this._logs.push(text);
      };
      return KitTemplate;
  }());
  var StepsRunner = /** @class */ (function () {
      function StepsRunner(context, stepFunctions, header) {
          this.stepFunctions = [];
          this.customHeader = null;
          this.logger = Logger.getLogger(context);
          this.stepFunctions = stepFunctions;
          this.customHeader = header ? header : null;
      }
      StepsRunner.prototype.run = function (initialKit) {
          var header = this.customHeader
              ? this.customHeader
              : this.logger.header;
          log(surroundTextWithDashes("Starting script \"" + this.logger.scriptName + "\""), header, true);
          var stepNumber = 1;
          var kit = initialKit;
          for (var _i = 0, _a = this.stepFunctions; _i < _a.length; _i++) {
              var step = _a[_i];
              log("Step " + stepNumber + " of " + this.stepFunctions.length + ": \"" + step.logEntry + "\"", header, true);
              try {
                  kit = step.function(kit);
              }
              catch (e) {
                  for (var _b = 0, _c = kit._logs; _b < _c.length; _b++) {
                      var logStr = _c[_b];
                      log(logStr, this.logger.header);
                  }
                  log(e, this.logger.header, false, log$3.error);
                  log(surroundTextWithDashes("Script \"" + this.logger.scriptName + "\" stopped due to errors"), this.logger.header, true, log$3.error);
                  notifyOwner(this.logger.scriptName, e);
                  return kit;
              }
              // Printing logs
              for (var _d = 0, _e = kit._logs; _d < _e.length; _d++) {
                  var logStr = _e[_d];
                  log(logStr, this.logger.header);
              }
              // Printing script Errors
              if (kit.scriptErrors.length > 0) {
                  for (var _f = 0, _g = kit.scriptErrors; _f < _g.length; _f++) {
                      var errorStr = _g[_f];
                      log(errorStr, this.logger.header, false, log$3.error);
                  }
                  log(surroundTextWithDashes("Script \"" + this.logger.scriptName + "\" STOPPED due to errors"), this.logger.header, true, log$3.error);
                  notifyOwner(this.logger.scriptName, kit.scriptErrors.join(', '));
                  return kit;
              }
              if (kit.userErrors.length > 0) {
                  for (var _h = 0, _j = kit.userErrors; _h < _j.length; _h++) {
                      var userError = _j[_h];
                      log(userError, 'ERROR: ' + this.logger.header, false, log$3.error);
                  }
                  this.logger.printUserErrors(kit.userErrors);
              }
              if (kit.userWarnings.length > 0) {
                  for (var _k = 0, _l = kit.userWarnings; _k < _l.length; _k++) {
                      var userWarning = _l[_k];
                      log(userWarning, 'WARNING: ' + this.logger.header);
                  }
                  this.logger.printUserWarnings(kit.userWarnings);
              }
              log("Step " + stepNumber + " of " + this.stepFunctions.length + " done", header, true);
              kit._logs = [];
              kit.userErrors = [];
              kit.scriptErrors = [];
              kit.userWarnings = [];
              if (kit.exitImmediately) {
                  log(surroundTextWithDashes('Exiting due to exitImmediately set to true'), this.logger.header, true);
                  return kit;
              }
              if (kit.throwException.length > 0) {
                  throw kit.throwException;
              }
              stepNumber++;
          }
          log(surroundTextWithDashes("Running script \"" + this.logger.scriptName + "\" completed"), header, true);
          return initialKit;
      };
      return StepsRunner;
  }());

  var jsonIgnore = function jsonIgnore() {
    return function (target, propertyKey) {
      Reflect.defineMetadata("ts-serializable:jsonIgnore", true, target, propertyKey);
    };
  };

  var jsonName = function jsonName(jsonPropertyName) {
    return function (target, propertyKey) {
      Reflect.defineMetadata("ts-serializable:jsonName", jsonPropertyName, target, propertyKey);
    };
  };

  var hasOwn$6 = hasOwnProperty_1;

  var isDataDescriptor$2 = function isDataDescriptor(descriptor) {
    return descriptor !== undefined && (hasOwn$6(descriptor, 'value') || hasOwn$6(descriptor, 'writable'));
  };

  var $$e = _export;
  var call$5 = functionCall;
  var anObject$3 = anObject$q;
  var isObject$a = isObject$r;
  var isDataDescriptor$1 = isDataDescriptor$2;
  var fails$f = fails$W;
  var definePropertyModule$1 = objectDefineProperty;
  var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
  var getPrototypeOf$2 = objectGetPrototypeOf;
  var createPropertyDescriptor$1 = createPropertyDescriptor$8; // `Reflect.set` method
  // https://tc39.es/ecma262/#sec-reflect.set

  function set(target, propertyKey, V
  /* , receiver */
  ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDescriptor = getOwnPropertyDescriptorModule$2.f(anObject$3(target), propertyKey);
    var existingDescriptor, prototype, setter;

    if (!ownDescriptor) {
      if (isObject$a(prototype = getPrototypeOf$2(target))) {
        return set(prototype, propertyKey, V, receiver);
      }

      ownDescriptor = createPropertyDescriptor$1(0);
    }

    if (isDataDescriptor$1(ownDescriptor)) {
      if (ownDescriptor.writable === false || !isObject$a(receiver)) return false;

      if (existingDescriptor = getOwnPropertyDescriptorModule$2.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        definePropertyModule$1.f(receiver, propertyKey, existingDescriptor);
      } else definePropertyModule$1.f(receiver, propertyKey, createPropertyDescriptor$1(0, V));
    } else {
      setter = ownDescriptor.set;
      if (setter === undefined) return false;
      call$5(setter, receiver, V);
    }

    return true;
  } // MS Edge 17-18 Reflect.set allows setting the property to object
  // with non-writable property on the prototype


  var MS_EDGE_BUG = fails$f(function () {
    var Constructor = function Constructor() {
      /* empty */
    };

    var object = definePropertyModule$1.f(new Constructor(), 'a', {
      configurable: true
    }); // eslint-disable-next-line es-x/no-reflect -- required for testing

    return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
  });
  $$e({
    target: 'Reflect',
    stat: true,
    forced: MS_EDGE_BUG
  }, {
    set: set
  });

  var $$d = _export;
  var call$4 = functionCall;
  var isObject$9 = isObject$r;
  var anObject$2 = anObject$q;
  var isDataDescriptor = isDataDescriptor$2;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var getPrototypeOf$1 = objectGetPrototypeOf; // `Reflect.get` method
  // https://tc39.es/ecma262/#sec-reflect.get

  function get(target, propertyKey
  /* , receiver */
  ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if (anObject$2(target) === receiver) return target[propertyKey];
    descriptor = getOwnPropertyDescriptorModule$1.f(target, propertyKey);
    if (descriptor) return isDataDescriptor(descriptor) ? descriptor.value : descriptor.get === undefined ? undefined : call$4(descriptor.get, receiver);
    if (isObject$9(prototype = getPrototypeOf$1(target))) return get(prototype, propertyKey, receiver);
  }

  $$d({
    target: 'Reflect',
    stat: true
  }, {
    get: get
  });

  var whitespaces$2 = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

  var uncurryThis$c = functionUncurryThis;
  var requireObjectCoercible$1 = requireObjectCoercible$a;
  var toString$1 = toString$g;
  var whitespaces$1 = whitespaces$2;
  var replace = uncurryThis$c(''.replace);
  var whitespace = '[' + whitespaces$1 + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

  var createMethod$1 = function createMethod(TYPE) {
    return function ($this) {
      var string = toString$1(requireObjectCoercible$1($this));
      if (TYPE & 1) string = replace(string, ltrim, '');
      if (TYPE & 2) string = replace(string, rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$1(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$1(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$1(3)
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$e = fails$W;
  var whitespaces = whitespaces$2;
  var non = "\u200B\x85\u180E"; // check that a method works with the correct list
  // of whitespaces and has a correct name

  var stringTrimForced = function stringTrimForced(METHOD_NAME) {
    return fails$e(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $$c = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced; // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim

  $$c({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var DESCRIPTORS$3 = descriptors;
  var global$b = global$p;
  var uncurryThis$b = functionUncurryThis;
  var isForced$1 = isForced_1;
  var defineBuiltIn$3 = defineBuiltIn$j;
  var hasOwn$5 = hasOwnProperty_1;
  var inheritIfRequired$2 = inheritIfRequired$4;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var isSymbol$1 = isSymbol$4;
  var toPrimitive$1 = toPrimitive$3;
  var fails$d = fails$W;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var defineProperty$3 = objectDefineProperty.f;
  var thisNumberValue = thisNumberValue$2;
  var trim = stringTrim.trim;
  var NUMBER = 'Number';
  var NativeNumber = global$b[NUMBER];
  var NumberPrototype = NativeNumber.prototype;
  var TypeError$2 = global$b.TypeError;
  var arraySlice$2 = uncurryThis$b(''.slice);
  var charCodeAt = uncurryThis$b(''.charCodeAt); // `ToNumeric` abstract operation
  // https://tc39.es/ecma262/#sec-tonumeric

  var toNumeric = function toNumeric(value) {
    var primValue = toPrimitive$1(value, 'number');
    return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
  }; // `ToNumber` abstract operation
  // https://tc39.es/ecma262/#sec-tonumber


  var toNumber = function toNumber(argument) {
    var it = toPrimitive$1(argument, 'number');
    var first, third, radix, maxCode, digits, length, index, code;
    if (isSymbol$1(it)) throw TypeError$2('Cannot convert a Symbol value to a number');

    if (typeof it == 'string' && it.length > 2) {
      it = trim(it);
      first = charCodeAt(it, 0);

      if (first === 43 || first === 45) {
        third = charCodeAt(it, 2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (charCodeAt(it, 1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal of /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal of /^0o[0-7]+$/i

          default:
            return +it;
        }

        digits = arraySlice$2(it, 2);
        length = digits.length;

        for (index = 0; index < length; index++) {
          code = charCodeAt(digits, index); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  }; // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor


  if (isForced$1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
      var dummy = this; // check on 1..constructor(foo) case

      return isPrototypeOf$2(NumberPrototype, dummy) && fails$d(function () {
        thisNumberValue(dummy);
      }) ? inheritIfRequired$2(Object(n), dummy, NumberWrapper) : n;
    };

    for (var keys = DESCRIPTORS$3 ? getOwnPropertyNames$1(NativeNumber) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' + // ESNext
    'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
      if (hasOwn$5(NativeNumber, key = keys[j]) && !hasOwn$5(NumberWrapper, key)) {
        defineProperty$3(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
      }
    }

    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    defineBuiltIn$3(global$b, NUMBER, NumberWrapper, {
      constructor: true
    });
  }

  var LogLevels;

  (function (LogLevels) {
    LogLevels[LogLevels["Trace"] = 0] = "Trace";
    LogLevels[LogLevels["Debug"] = 1] = "Debug";
    LogLevels[LogLevels["Information"] = 2] = "Information";
    LogLevels[LogLevels["Warning"] = 3] = "Warning";
    LogLevels[LogLevels["Error"] = 4] = "Error";
    LogLevels[LogLevels["Critical"] = 5] = "Critical";
    LogLevels[LogLevels["None"] = 6] = "None";
  })(LogLevels || (LogLevels = {}));

  var DefaultValueHandling;

  (function (DefaultValueHandling) {
    DefaultValueHandling[DefaultValueHandling["Include"] = 0] = "Include";
    DefaultValueHandling[DefaultValueHandling["Ignore"] = 1] = "Ignore";
    DefaultValueHandling[DefaultValueHandling["Populate"] = 2] = "Populate";
    DefaultValueHandling[DefaultValueHandling["IgnoreAndPopulate"] = 3] = "IgnoreAndPopulate"; // Not supported yet
  })(DefaultValueHandling || (DefaultValueHandling = {}));

  var NullValueHandling;

  (function (NullValueHandling) {
    NullValueHandling[NullValueHandling["Include"] = 0] = "Include";
    NullValueHandling[NullValueHandling["Ignore"] = 1] = "Ignore"; // Not supported yet
  })(NullValueHandling || (NullValueHandling = {}));

  var ReferenceLoopHandling;

  (function (ReferenceLoopHandling) {
    ReferenceLoopHandling[ReferenceLoopHandling["Error"] = 0] = "Error";
    ReferenceLoopHandling[ReferenceLoopHandling["Ignore"] = 1] = "Ignore";
    ReferenceLoopHandling[ReferenceLoopHandling["Serialize"] = 2] = "Serialize";
  })(ReferenceLoopHandling || (ReferenceLoopHandling = {}));

  var MissingMemberHandling;

  (function (MissingMemberHandling) {
    MissingMemberHandling[MissingMemberHandling["Ignore"] = 0] = "Ignore";
    MissingMemberHandling[MissingMemberHandling["Error"] = 1] = "Error"; // Not supported yet
  })(MissingMemberHandling || (MissingMemberHandling = {}));

  var DateFormatHandling;

  (function (DateFormatHandling) {
    DateFormatHandling[DateFormatHandling["IsoDateFormat"] = 0] = "IsoDateFormat";
    DateFormatHandling[DateFormatHandling["MicrosoftDateFormat"] = 1] = "MicrosoftDateFormat"; // Not supported yet
  })(DateFormatHandling || (DateFormatHandling = {}));

  var SerializationSettings = /*#__PURE__*/_createClass(function SerializationSettings() {
    _classCallCheck(this, SerializationSettings);

    this.dateFormatHandling = DateFormatHandling.IsoDateFormat;
    this.missingMemberHandling = MissingMemberHandling.Ignore;
    this.referenceLoopHandling = ReferenceLoopHandling.Serialize;
    this.nullValueHandling = NullValueHandling.Include;
    this.defaultValueHandling = DefaultValueHandling.Ignore;
    this.namingStrategy = null;
    this.logLevel = LogLevels.Warning;
  });

  /**
   * Class how help you deserialize object to classes.
   *
   * @export
   * @class Serializable
   */

  var Serializable = /*#__PURE__*/function () {
    function Serializable() {
      _classCallCheck(this, Serializable);
    }

    _createClass(Serializable, [{
      key: "fromJSON",
      value:
      /**
       * Fill property of current model by data from json.
       *
       * Example:
       * const obj: MyObject = new MyObject().fromJSON({...data});
       *
       * @param {object} ujson
       * @returns {this}
       * @memberof Serializable
       */
      function fromJSON(json, settings) {
        var unknownJson = json;

        if (unknownJson === null || Array.isArray(unknownJson) || _typeof(unknownJson) !== "object") {
          this.onWrongType(String(unknownJson), "is not object", unknownJson);
          return this;
        } // eslint-disable-next-line guard-for-in


        for (var thisProp in this) {
          // Naming strategy and jsonName decorator
          var jsonProp = this.getJsonPropertyName(thisProp, settings); // For deep copy

          if (!(unknownJson === null || unknownJson === void 0 ? void 0 : unknownJson.hasOwnProperty(jsonProp)) && (unknownJson === null || unknownJson === void 0 ? void 0 : unknownJson.hasOwnProperty(thisProp))) {
            jsonProp = thisProp;
          }

          if ((unknownJson === null || unknownJson === void 0 ? void 0 : unknownJson.hasOwnProperty(jsonProp)) && this.hasOwnProperty(thisProp) && Reflect.hasMetadata("ts-serializable:jsonTypes", this.constructor.prototype, thisProp)) {
            var acceptedTypes = Reflect.getMetadata("ts-serializable:jsonTypes", this.constructor.prototype, thisProp);
            var jsonValue = Reflect.get(unknownJson, jsonProp);
            var extractedValue = this.deserializeProperty(thisProp, acceptedTypes, jsonValue, settings);
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

    }, {
      key: "toJSON",
      value: function toJSON() {
        var fromJson = Object.assign({}, this);
        var toJson = {};

        for (var prop in fromJson) {
          // Json.hasOwnProperty(prop) - preserve for deserialization for other classes with methods
          if (fromJson.hasOwnProperty(prop) && this.hasOwnProperty(prop)) {
            if (Reflect.getMetadata("ts-serializable:jsonIgnore", this.constructor.prototype, prop) !== true) {
              var toProp = this.getJsonPropertyName(prop);
              Reflect.set(toJson, toProp, Reflect.get(fromJson, prop));
            }
          }
        }

        return toJson;
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

    }, {
      key: "onWrongType",
      value: function onWrongType(prop, message, jsonValue) {
        // eslint-disable-next-line no-console
        console.error("".concat(this.constructor.name, ".fromJSON: json.").concat(prop, " ").concat(message, ":"), jsonValue);
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

    }, {
      key: "deserializeProperty",
      value: function deserializeProperty(prop, acceptedTypes, jsonValue, settings) {
        var _this = this;

        var _iterator = _createForOfIteratorHelper(acceptedTypes),
            _step;

        try {
          var _loop = function _loop() {
            var acceptedType = _step.value;

            // Type Symbol is not a property
            if ( // Null
            acceptedType === null && jsonValue === null) {
              return {
                v: null
              };
            } else if ( // Void, for deep copy classes only, json don't have void type
            acceptedType === void 0 && jsonValue === void 0) {
              return {
                v: void 0
              };
            } else if ( // Boolean, Boolean
            acceptedType === Boolean && (typeof jsonValue === "boolean" || jsonValue instanceof Boolean)) {
              return {
                v: Boolean(jsonValue)
              };
            } else if ( // Number, Number
            acceptedType === Number && (typeof jsonValue === "number" || jsonValue instanceof Number)) {
              return {
                v: Number(jsonValue)
              };
            } else if ( // String, String
            acceptedType === String && (typeof jsonValue === "string" || jsonValue instanceof String)) {
              return {
                v: String(jsonValue)
              };
            } else if ( // Object, Object
            acceptedType === Object && _typeof(jsonValue) === "object") {
              return {
                v: Object(jsonValue)
              };
            } else if ( // Date
            acceptedType === Date && (typeof jsonValue === "string" || jsonValue instanceof String || jsonValue instanceof Date)) {
              // 0 year, 0 month, 0 days, 0 hours, 0 minutes, 0 seconds
              var unicodeTime = new Date("0000-01-01T00:00:00.000").getTime();

              if (typeof jsonValue === "string") {
                unicodeTime = Date.parse(jsonValue);
              } else if (jsonValue instanceof String) {
                unicodeTime = Date.parse(String(jsonValue));
              } else if (jsonValue instanceof Date) {
                unicodeTime = jsonValue.getTime();
              }

              if (isNaN(unicodeTime)) {
                // Preserve invalid time
                _this.onWrongType(prop, "is invalid date", jsonValue);
              }

              return {
                v: new Date(unicodeTime)
              };
            } else if ( // Array
            Array.isArray(acceptedType) && Array.isArray(jsonValue)) {
              if (acceptedType[0] === void 0) {
                _this.onWrongType(prop, "invalid type", jsonValue);
              }

              return {
                v: jsonValue.map(function (arrayValue) {
                  return _this.deserializeProperty(prop, acceptedType, arrayValue, settings);
                })
              };
            } else if ( // Serializable
            acceptedType !== null && acceptedType !== void 0 && !Array.isArray(acceptedType) && (acceptedType.prototype instanceof Serializable || Boolean(Reflect.getMetadata("ts-serializable:jsonObjectExtended", acceptedType))) && jsonValue !== null && jsonValue !== void 0 && _typeof(jsonValue) === "object" && !Array.isArray(jsonValue)) {
              var TypeConstructor = acceptedType;
              return {
                v: new TypeConstructor().fromJSON(jsonValue, settings)
              };
            } else if ( // Instance any other class, not Serializable, for parse from other classes instance
            acceptedType instanceof Function && jsonValue instanceof acceptedType) {
              return {
                v: jsonValue
              };
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _ret = _loop();

            if (_typeof(_ret) === "object") return _ret.v;
          } // Process wrong type and return default value

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.onWrongType(prop, "is invalid", jsonValue);
        return Reflect.get(this, prop);
      }
    }, {
      key: "getJsonPropertyName",
      value: function getJsonPropertyName(thisProperty, settings) {
        var _a, _b, _c;

        if (Reflect.hasMetadata("ts-serializable:jsonName", this.constructor.prototype, thisProperty)) {
          return Reflect.getMetadata("ts-serializable:jsonName", this.constructor.prototype, thisProperty);
        }

        if (settings === null || settings === void 0 ? void 0 : settings.namingStrategy) {
          return settings.namingStrategy.toJsonName(thisProperty);
        }

        if (Reflect.hasMetadata("ts-serializable:jsonObject", this.constructor)) {
          var objectSettings = Reflect.getMetadata("ts-serializable:jsonObject", this.constructor);
          return (_b = (_a = objectSettings.namingStrategy) === null || _a === void 0 ? void 0 : _a.toJsonName(thisProperty)) !== null && _b !== void 0 ? _b : thisProperty;
        }

        if (Serializable.defaultSettings.namingStrategy) {
          var namingStrategy = Serializable.defaultSettings.namingStrategy;
          return (_c = namingStrategy.toJsonName(thisProperty)) !== null && _c !== void 0 ? _c : thisProperty;
        }

        return thisProperty;
      }
    }], [{
      key: "fromJSON",
      value:
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
      function fromJSON(json, settings) {
        return new this().fromJSON(json, settings);
      }
    }]);

    return Serializable;
  }();
  /**
   * Global setting for serialization and deserialization
   *
   * @static
   * @type {SerializationSettings}
   * @memberof Serializable
   */

  Serializable.defaultSettings = new SerializationSettings();

  var jsonObject = function jsonObject(settings, extend) {
    return function (target) {
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
  };

  var jsonProperty = function jsonProperty() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function (target, propertyKey) {
      Reflect.defineMetadata("ts-serializable:jsonTypes", args, target, propertyKey);
    };
  };

  var SnakeCaseNamingStrategy = /*#__PURE__*/function () {
    function SnakeCaseNamingStrategy() {
      _classCallCheck(this, SnakeCaseNamingStrategy);
    }

    _createClass(SnakeCaseNamingStrategy, [{
      key: "fromJsonName",
      value: function fromJsonName(name) {
        return name.replace(/_[0-9A-Z_a-z]/g, function (group) {
          return group[1].toUpperCase();
        });
      }
    }, {
      key: "toJsonName",
      value: function toJsonName(name) {
        return name.split(/(?=[A-Z])/).join("_").toLowerCase();
      }
    }]);

    return SnakeCaseNamingStrategy;
  }();

  var PascalCaseNamingStrategy = /*#__PURE__*/function () {
    function PascalCaseNamingStrategy() {
      _classCallCheck(this, PascalCaseNamingStrategy);
    }

    _createClass(PascalCaseNamingStrategy, [{
      key: "fromJsonName",
      value: function fromJsonName(name) {
        return name.slice(0, 1).toLowerCase() + name.slice(1, name.length);
      }
    }, {
      key: "toJsonName",
      value: function toJsonName(name) {
        return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
      }
    }]);

    return PascalCaseNamingStrategy;
  }();

  var KebabCaseNamingStrategy = /*#__PURE__*/function () {
    function KebabCaseNamingStrategy() {
      _classCallCheck(this, KebabCaseNamingStrategy);
    }

    _createClass(KebabCaseNamingStrategy, [{
      key: "fromJsonName",
      value: function fromJsonName(name) {
        return name.replace(/\x2D[0-9A-Z_a-z]/g, function (group) {
          return group[1].toUpperCase();
        });
      }
    }, {
      key: "toJsonName",
      value: function toJsonName(name) {
        return name.split(/(?=[A-Z])/).join("-").toLowerCase();
      }
    }]);

    return KebabCaseNamingStrategy;
  }();

  // Decoratore

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    jsonIgnore: jsonIgnore,
    jsonName: jsonName,
    jsonObject: jsonObject,
    jsonProperty: jsonProperty,
    Serializable: Serializable,
    get DateFormatHandling () { return DateFormatHandling; },
    get DefaultValueHandling () { return DefaultValueHandling; },
    get MissingMemberHandling () { return MissingMemberHandling; },
    get NullValueHandling () { return NullValueHandling; },
    get ReferenceLoopHandling () { return ReferenceLoopHandling; },
    get LogLevels () { return LogLevels; },
    SerializationSettings: SerializationSettings,
    SnakeCaseNamingStrategy: SnakeCaseNamingStrategy,
    PascalCaseNamingStrategy: PascalCaseNamingStrategy,
    KebabCaseNamingStrategy: KebabCaseNamingStrategy
  });

  var moment$2 = {exports: {}};

  (function (module, exports) {

    (function (global, factory) {
      module.exports = factory() ;
    })(commonjsGlobal, function () {

      var hookCallback;

      function hooks() {
        return hookCallback.apply(null, arguments);
      } // This is done to register the method called with moment()
      // without creating circular dependencies.


      function setHookCallback(callback) {
        hookCallback = callback;
      }

      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
      }

      function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
      }

      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }

      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;

          for (k in obj) {
            if (hasOwnProp(obj, k)) {
              return false;
            }
          }

          return true;
        }
      }

      function isUndefined(input) {
        return input === void 0;
      }

      function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
      }

      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
      }

      function map(arr, fn) {
        var res = [],
            i;

        for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
        }

        return res;
      }

      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }

        if (hasOwnProp(b, 'toString')) {
          a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
          a.valueOf = b.valueOf;
        }

        return a;
      }

      function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
      }

      function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }

      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }

        return m._pf;
      }

      var some;

      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function some(fun) {
          var t = Object(this),
              len = t.length >>> 0,
              i;

          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }

          return false;
        };
      }

      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m),
              parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
          }),
              isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
          }

          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }

        return m._isValid;
      }

      function createInvalid(flags) {
        var m = createUTC(NaN);

        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }

        return m;
      } // Plugins that add properties should also add the key here (null value),
      // so we can properly clone ourselves.


      var momentProperties = hooks.momentProperties = [],
          updateInProgress = false;

      function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject;
        }

        if (!isUndefined(from._i)) {
          to._i = from._i;
        }

        if (!isUndefined(from._f)) {
          to._f = from._f;
        }

        if (!isUndefined(from._l)) {
          to._l = from._l;
        }

        if (!isUndefined(from._strict)) {
          to._strict = from._strict;
        }

        if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm;
        }

        if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC;
        }

        if (!isUndefined(from._offset)) {
          to._offset = from._offset;
        }

        if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from);
        }

        if (!isUndefined(from._locale)) {
          to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];

            if (!isUndefined(val)) {
              to[prop] = val;
            }
          }
        }

        return to;
      } // Moment prototype object


      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);

        if (!this.isValid()) {
          this._d = new Date(NaN);
        } // Prevent infinite loop in case updateOffset creates new moment
        // objects.


        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }

      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }

      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
          console.warn('Deprecation warning: ' + msg);
        }
      }

      function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }

          if (firstTime) {
            var args = [],
                arg,
                i,
                key;

            for (i = 0; i < arguments.length; i++) {
              arg = '';

              if (_typeof(arguments[i]) === 'object') {
                arg += '\n[' + i + '] ';

                for (key in arguments[0]) {
                  if (hasOwnProp(arguments[0], key)) {
                    arg += key + ': ' + arguments[0][key] + ', ';
                  }
                }

                arg = arg.slice(0, -2); // Remove trailing comma and space
              } else {
                arg = arguments[i];
              }

              args.push(arg);
            }

            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
            firstTime = false;
          }

          return fn.apply(this, arguments);
        }, fn);
      }

      var deprecations = {};

      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }

        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }

      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;

      function isFunction(input) {
        return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
      }

      function set(config) {
        var prop, i;

        for (i in config) {
          if (hasOwnProp(config, i)) {
            prop = config[i];

            if (isFunction(prop)) {
              this[i] = prop;
            } else {
              this['_' + i] = prop;
            }
          }
        }

        this._config = config; // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.

        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
      }

      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;

        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }

        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
          }
        }

        return res;
      }

      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }

      var keys;

      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function keys(obj) {
          var i,
              res = [];

          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }

          return res;
        };
      }

      var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      };

      function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
      }

      function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }

      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          formatFunctions = {},
          formatTokenFunctions = {}; // token:    'M'
      // padded:   ['MM', 2]
      // ordinal:  'Mo'
      // callback: function () { this.month() + 1 }

      function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;

        if (typeof callback === 'string') {
          func = function func() {
            return this[callback]();
          };
        }

        if (token) {
          formatTokenFunctions[token] = func;
        }

        if (padded) {
          formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }

        if (ordinal) {
          formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
          };
        }
      }

      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, '');
        }

        return input.replace(/\\/g, '');
      }

      function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }

        return function (mom) {
          var output = '',
              i;

          for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
          }

          return output;
        };
      } // format date using native date object


      function formatMoment(m, format) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
      }

      function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;

        while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }

        return format;
      }

      var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
      };

      function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
          return format;
        }

        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function (tok) {
          if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') {
            return tok.slice(1);
          }

          return tok;
        }).join('');
        return this._longDateFormat[key];
      }

      var defaultInvalidDate = 'Invalid date';

      function invalidDate() {
        return this._invalidDate;
      }

      var defaultOrdinal = '%d',
          defaultDayOfMonthOrdinalParse = /\d{1,2}/;

      function ordinal(number) {
        return this._ordinal.replace('%d', number);
      }

      var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      };

      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }

      function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }

      var aliases = {};

      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
      }

      function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
      }

      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);

            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }

        return normalizedInput;
      }

      var priorities = {};

      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }

      function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;

        for (u in unitsObj) {
          if (hasOwnProp(unitsObj, u)) {
            units.push({
              unit: u,
              priority: priorities[u]
            });
          }
        }

        units.sort(function (a, b) {
          return a.priority - b.priority;
        });
        return units;
      }

      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }

      function absFloor(number) {
        if (number < 0) {
          // -0 -> 0
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }

      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }

        return value;
      }

      function makeGetSet(unit, keepTime) {
        return function (value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }

      function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
      }

      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            value = toInt(value);

            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
          } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
          }
        }
      } // MOMENTS


      function stringGet(units) {
        units = normalizeUnits(units);

        if (isFunction(this[units])) {
          return this[units]();
        }

        return this;
      }

      function stringSet(units, value) {
        if (_typeof(units) === 'object') {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units),
              i;

          for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);

          if (isFunction(this[units])) {
            return this[units](value);
          }
        }

        return this;
      }

      var match1 = /\d/,
          //       0 - 9
      match2 = /\d\d/,
          //      00 - 99
      match3 = /\d{3}/,
          //     000 - 999
      match4 = /\d{4}/,
          //    0000 - 9999
      match6 = /[+-]?\d{6}/,
          // -999999 - 999999
      match1to2 = /\d\d?/,
          //       0 - 99
      match3to4 = /\d\d\d\d?/,
          //     999 - 9999
      match5to6 = /\d\d\d\d\d\d?/,
          //   99999 - 999999
      match1to3 = /\d{1,3}/,
          //       0 - 999
      match1to4 = /\d{1,4}/,
          //       0 - 9999
      match1to6 = /[+-]?\d{1,6}/,
          // -999999 - 999999
      matchUnsigned = /\d+/,
          //       0 - inf
      matchSigned = /[+-]?\d+/,
          //    -inf - inf
      matchOffset = /Z|[+-]\d\d:?\d\d/gi,
          // +00:00 -00:00 +0000 -0000 or Z
      matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
          // +00 -00 +00:00 -00:00 +0000 -0000 or Z
      matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
          // 123456789 123456789.123
      // any word (or two) characters or numbers including two/three word month in arabic.
      // includes scottish gaelic two word and hyphenated months
      matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          regexes;
      regexes = {};

      function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }

      function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
      } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


      function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }));
      }

      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      var tokens = {};

      function addParseToken(token, callback) {
        var i,
            func = callback;

        if (typeof token === 'string') {
          token = [token];
        }

        if (isNumber(callback)) {
          func = function func(input, array) {
            array[callback] = toInt(input);
          };
        }

        for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func;
        }
      }

      function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
          config._w = config._w || {};
          callback(input, config._w, config, token);
        });
      }

      function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token);
        }
      }

      var YEAR = 0,
          MONTH = 1,
          DATE = 2,
          HOUR = 3,
          MINUTE = 4,
          SECOND = 5,
          MILLISECOND = 6,
          WEEK = 7,
          WEEKDAY = 8;

      function mod(n, x) {
        return (n % x + x) % x;
      }

      var indexOf;

      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function indexOf(o) {
          // I know
          var i;

          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }

          return -1;
        };
      }

      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }

        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      } // FORMATTING


      addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
      });
      addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
      });
      addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
      }); // ALIASES

      addUnitAlias('month', 'M'); // PRIORITY

      addUnitPriority('month', 8); // PARSING

      addRegexToken('M', match1to2);
      addRegexToken('MM', match1to2, match2);
      addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
      });
      addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
      });
      addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
      });
      addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      }); // LOCALES

      var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          defaultMonthsShortRegex = matchWord,
          defaultMonthsRegex = matchWord;

      function localeMonths(m, format) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months['standalone'];
        }

        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
      }

      function localeMonthsShort(m, format) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        }

        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
      }

      function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();

        if (!this._monthsParse) {
          // this is not used
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];

          for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        } // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse


        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);

          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
          }

          if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
          } // test the regex


          if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      } // MOMENTS


      function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
          // No op
          return mom;
        }

        if (typeof value === 'string') {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

            if (!isNumber(value)) {
              return mom;
            }
          }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

        return mom;
      }

      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, 'Month');
        }
      }

      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }

      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }

          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }

          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }

      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }

          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
          }

          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }

      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;

        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          shortPieces.push(this.monthsShort(mom, ''));
          longPieces.push(this.months(mom, ''));
          mixedPieces.push(this.months(mom, ''));
          mixedPieces.push(this.monthsShort(mom, ''));
        } // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.


        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
        }

        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      } // FORMATTING


      addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
      });
      addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
      });
      addFormatToken(0, ['YYYY', 4], 0, 'year');
      addFormatToken(0, ['YYYYY', 5], 0, 'year');
      addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

      addUnitAlias('year', 'y'); // PRIORITIES

      addUnitPriority('year', 1); // PARSING

      addRegexToken('Y', matchSigned);
      addRegexToken('YY', match1to2, match2);
      addRegexToken('YYYY', match1to4, match4);
      addRegexToken('YYYYY', match1to6, match6);
      addRegexToken('YYYYYY', match1to6, match6);
      addParseToken(['YYYYY', 'YYYYYY'], YEAR);
      addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
      }); // HELPERS

      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      } // HOOKS


      hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
      }; // MOMENTS


      var getSetYear = makeGetSet('FullYear', true);

      function getIsLeapYear() {
        return isLeapYear(this.year());
      }

      function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date; // the date constructor remaps years 0-99 to 1900-1999

        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          date = new Date(y + 400, m, d, h, M, s, ms);

          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
      }

      function createUTCDate(y) {
        var date, args; // the Date.UTC function remaps years 0-99 to 1900-1999

        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));

          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
      } // start-of-first-week - start-of-year


      function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }

        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }

      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }

        return {
          week: resWeek,
          year: resYear
        };
      }

      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      } // FORMATTING


      addFormatToken('w', ['ww', 2], 'wo', 'week');
      addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

      addUnitAlias('week', 'w');
      addUnitAlias('isoWeek', 'W'); // PRIORITIES

      addUnitPriority('week', 5);
      addUnitPriority('isoWeek', 5); // PARSING

      addRegexToken('w', match1to2);
      addRegexToken('ww', match1to2, match2);
      addRegexToken('W', match1to2);
      addRegexToken('WW', match1to2, match2);
      addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
      }); // HELPERS
      // LOCALES

      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }

      var defaultLocaleWeek = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 6th is the first week of the year.

      };

      function localeFirstDayOfWeek() {
        return this._week.dow;
      }

      function localeFirstDayOfYear() {
        return this._week.doy;
      } // MOMENTS


      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
      }

      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
      } // FORMATTING


      addFormatToken('d', 0, 'do', 'day');
      addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
      });
      addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
      });
      addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
      });
      addFormatToken('e', 0, 0, 'weekday');
      addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

      addUnitAlias('day', 'd');
      addUnitAlias('weekday', 'e');
      addUnitAlias('isoWeekday', 'E'); // PRIORITY

      addUnitPriority('day', 11);
      addUnitPriority('weekday', 11);
      addUnitPriority('isoWeekday', 11); // PARSING

      addRegexToken('d', match1to2);
      addRegexToken('e', match1to2);
      addRegexToken('E', match1to2);
      addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
      });
      addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
      });
      addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
      });
      addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });
      addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
      }); // HELPERS

      function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
          return input;
        }

        if (!isNaN(input)) {
          return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);

        if (typeof input === 'number') {
          return input;
        }

        return null;
      }

      function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
          return locale.weekdaysParse(input) % 7 || 7;
        }

        return isNaN(input) ? null : input;
      } // LOCALES


      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }

      var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          defaultWeekdaysRegex = matchWord,
          defaultWeekdaysShortRegex = matchWord,
          defaultWeekdaysMinRegex = matchWord;

      function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }

      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }

      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }

      function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();

        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];

          for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);

          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
          }

          if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
          } // test the regex


          if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      } // MOMENTS


      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, 'd');
        } else {
          return day;
        }
      }

      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
      }

      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        } // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.


        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }

      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }

          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }

      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }

          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }

      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }

          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }

      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);
          minp = regexEscape(this.weekdaysMin(mom, ''));
          shortp = regexEscape(this.weekdaysShort(mom, ''));
          longp = regexEscape(this.weekdays(mom, ''));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.


        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
      } // FORMATTING


      function hFormat() {
        return this.hours() % 12 || 12;
      }

      function kFormat() {
        return this.hours() || 24;
      }

      addFormatToken('H', ['HH', 2], 0, 'hour');
      addFormatToken('h', ['hh', 2], 0, hFormat);
      addFormatToken('k', ['kk', 2], 0, kFormat);
      addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });
      addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
      });
      addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });

      function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
      }

      meridiem('a', true);
      meridiem('A', false); // ALIASES

      addUnitAlias('hour', 'h'); // PRIORITY

      addUnitPriority('hour', 13); // PARSING

      function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
      }

      addRegexToken('a', matchMeridiem);
      addRegexToken('A', matchMeridiem);
      addRegexToken('H', match1to2);
      addRegexToken('h', match1to2);
      addRegexToken('k', match1to2);
      addRegexToken('HH', match1to2, match2);
      addRegexToken('hh', match1to2, match2);
      addRegexToken('kk', match1to2, match2);
      addRegexToken('hmm', match3to4);
      addRegexToken('hmmss', match5to6);
      addRegexToken('Hmm', match3to4);
      addRegexToken('Hmmss', match5to6);
      addParseToken(['H', 'HH'], HOUR);
      addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      }); // LOCALES

      function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
      }

      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
          // Setting the hour should keep the time, because the user explicitly
      // specified which hour they want. So trying to maintain the same hour (in
      // a new timezone) makes sense. Adding/subtracting hours does not follow
      // this rule.
      getSetHour = makeGetSet('Hours', true);

      function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? 'pm' : 'PM';
        } else {
          return isLower ? 'am' : 'AM';
        }
      }

      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      }; // internal storage for locale config files

      var locales = {},
          localeFamilies = {},
          globalLocale;

      function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);

        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i;
          }
        }

        return minl;
      }

      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
      } // pick the locale from the array
      // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
      // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


      function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
          split = normalizeLocale(names[i]).split('-');
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split('-') : null;

          while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));

            if (locale) {
              return locale;
            }

            if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
              //the next array item is better than a shallower substring of this one
              break;
            }

            j--;
          }

          i++;
        }

        return globalLocale;
      }

      function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire; // TODO: Find a better way to register and load all the locales in Node

        if (locales[name] === undefined && 'object' !== 'undefined' && module && module.exports) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = commonjsRequire;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
          }
        }

        return locales[name];
      } // This function will load locale and then set the global locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.


      function getSetGlobalLocale(key, values) {
        var data;

        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }

          if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
          } else {
            if (typeof console !== 'undefined' && console.warn) {
              //warn user if arguments are passed but the locale could not be set
              console.warn('Locale ' + key + ' not found. Did you forget to load it?');
            }
          }
        }

        return globalLocale._abbr;
      }

      function defineLocale(name, config) {
        if (config !== null) {
          var locale,
              parentConfig = baseConfig;
          config.abbr = name;

          if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale = loadLocale(config.parentLocale);

              if (locale != null) {
                parentConfig = locale._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }

                localeFamilies[config.parentLocale].push({
                  name: name,
                  config: config
                });
                return null;
              }
            }
          }

          locales[name] = new Locale(mergeConfigs(parentConfig, config));

          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
              defineLocale(x.name, x.config);
            });
          } // backwards compat for now: also set the locale
          // make sure we set the locale AFTER all child locales have been
          // created, so we won't end up with the child locale set.


          getSetGlobalLocale(name);
          return locales[name];
        } else {
          // useful for testing
          delete locales[name];
          return null;
        }
      }

      function updateLocale(name, config) {
        if (config != null) {
          var locale,
              tmpLocale,
              parentConfig = baseConfig;

          if (locales[name] != null && locales[name].parentLocale != null) {
            // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(mergeConfigs(locales[name]._config, config));
          } else {
            // MERGE
            tmpLocale = loadLocale(name);

            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }

            config = mergeConfigs(parentConfig, config);

            if (tmpLocale == null) {
              // updateLocale is called for creating a new locale
              // Set abbr so it will have a name (getters return
              // undefined otherwise).
              config.abbr = name;
            }

            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
          } // backwards compat for now: also set the locale


          getSetGlobalLocale(name);
        } else {
          // pass null for config to unupdate, useful for tests
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;

              if (name === getSetGlobalLocale()) {
                getSetGlobalLocale(name);
              }
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }

        return locales[name];
      } // returns locale data


      function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }

        if (!key) {
          return globalLocale;
        }

        if (!isArray(key)) {
          //short-circuit everything else
          locale = loadLocale(key);

          if (locale) {
            return locale;
          }

          key = [key];
        }

        return chooseLocale(key);
      }

      function listLocales() {
        return keys(locales);
      }

      function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }

          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }

          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }

          getParsingFlags(m).overflow = overflow;
        }

        return m;
      } // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
          isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/], ['YYYYMM', /\d{6}/, false], ['YYYY', /\d{4}/, false]],
          // iso time formats and regexes
      isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]],
          aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
          // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
      rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      }; // date from iso format

      function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
          getParsingFlags(config).iso = true;

          for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }

          if (dateFormat == null) {
            config._isValid = false;
            return;
          }

          if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
              }
            }

            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }

          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }

          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = 'Z';
            } else {
              config._isValid = false;
              return;
            }
          }

          config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }

      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }

        return result;
      }

      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);

        if (year <= 49) {
          return 2000 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }

        return year;
      }

      function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      }

      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
              weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }

        return true;
      }

      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          // the only allowed military tz is Z
          return 0;
        } else {
          var hm = parseInt(numOffset, 10),
              m = hm % 100,
              h = (hm - m) / 100;
          return h * 60 + m;
        }
      } // date and time from ref 2822 format


      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;

        if (match) {
          parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }

          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);

          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      } // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict


      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }

        configFromISO(config);

        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }

        configFromRFC2822(config);

        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }

        if (config._strict) {
          config._isValid = false;
        } else {
          // Final attempt, use Input Fallback
          hooks.createFromInputFallback(config);
        }
      }

      hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
      }); // Pick the first defined of two or three arguments.

      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }

        if (b != null) {
          return b;
        }

        return c;
      }

      function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());

        if (config._useUTC) {
          return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }

        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      } // convert an array to a date.
      // the array should mirror the parameters below
      // note: all values past the year are optional and will default to the lowest possible value.
      // [year, month, day , hour, minute, second, millisecond]


      function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
          return;
        }

        currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        } //if the day of the year is set, figure out what it is


        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }

          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        } // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything


        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        } // Zero out whatever was not defaulted, including time


        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        } // Check for 24:00:00.000


        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.

        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
          config._a[HOUR] = 24;
        } // check for mismatching day of week


        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }

      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;

        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
          // how we interpret now (local, utc, fixed offset). So create
          // a now version of current config (take local/utc/offset flags, and
          // create now).

          weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);

          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

          week = defaults(w.w, curWeek.week);

          if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;

            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;

            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            // default to beginning of week
            weekday = dow;
          }
        }

        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      } // constant that refers to the ISO standard


      hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


      hooks.RFC_2822 = function () {}; // date from string and format string


      function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }

        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }

        config._a = [];
        getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];

          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));

            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }

            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
          } // don't parse if it's not a known token


          if (formatTokenFunctions[token]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token);
            }

            addTimeToArrayFromToken(token, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
          }
        } // add remaining unparsed input length to the string


        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        } // clear _12h flag if hour is <= 12


        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem); // handle era

        era = getParsingFlags(config).era;

        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
      }

      function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
          // nothing to do
          return hour;
        }

        if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
          // Fallback
          isPm = locale.isPM(meridiem);

          if (isPm && hour < 12) {
            hour += 12;
          }

          if (!isPm && hour === 12) {
            hour = 0;
          }

          return hour;
        } else {
          // this is not supposed to happen
          return hour;
        }
      } // date from string and array of format strings


      function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false;

        if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }

        for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig({}, config);

          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }

          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);

          if (isValid(tempConfig)) {
            validFormatFound = true;
          } // if there is any input that was not parsed add a penalty for that format


          currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;

          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;

              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }

        extend(config, bestMoment || tempConfig);
      }

      function configFromObject(config) {
        if (config._d) {
          return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function (obj) {
          return obj && parseInt(obj, 10);
        });
        configFromArray(config);
      }

      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));

        if (res._nextDay) {
          // Adding is smart enough around DST
          res.add(1, 'd');
          res._nextDay = undefined;
        }

        return res;
      }

      function prepareConfig(config) {
        var input = config._i,
            format = config._f;
        config._locale = config._locale || getLocale(config._l);

        if (input === null || format === undefined && input === '') {
          return createInvalid({
            nullInput: true
          });
        }

        if (typeof input === 'string') {
          config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format)) {
          configFromStringAndArray(config);
        } else if (format) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }

        if (!isValid(config)) {
          config._d = null;
        }

        return config;
      }

      function configFromInput(config) {
        var input = config._i;

        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          // from milliseconds
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }

      function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
          strict = format;
          format = undefined;
        }

        if (locale === true || locale === false) {
          strict = locale;
          locale = undefined;
        }

        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = undefined;
        } // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423


        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
      }

      function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
      }

      var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);

        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      }),
          prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);

        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }); // Pick a moment m from moments so that m[fn](other) is true for all
      // other. This relies on the function fn to be transitive.
      //
      // moments should either be an array of moment objects or an array, whose
      // first element is an array of moment objects.

      function pickBy(fn, moments) {
        var res, i;

        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }

        if (!moments.length) {
          return createLocal();
        }

        res = moments[0];

        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }

        return res;
      } // TODO: Use [].sort instead?


      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
      }

      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
      }

      var now = function now() {
        return Date.now ? Date.now() : +new Date();
      };

      var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

      function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i;

        for (key in m) {
          if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }

        for (i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false; // only allow non-integers for smallest unit
            }

            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }

        return true;
      }

      function isValid$1() {
        return this._isValid;
      }

      function createInvalid$1() {
        return createDuration(NaN);
      }

      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

        this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately

        this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.

        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();

        this._bubble();
      }

      function isDuration(obj) {
        return obj instanceof Duration;
      }

      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      } // compare two arrays, return the number of differences


      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;

        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }

        return diffs + lengthDiff;
      } // FORMATTING


      function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
          var offset = this.utcOffset(),
              sign = '+';

          if (offset < 0) {
            offset = -offset;
            sign = '-';
          }

          return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
      }

      offset('Z', ':');
      offset('ZZ', ''); // PARSING

      addRegexToken('Z', matchShortOffset);
      addRegexToken('ZZ', matchShortOffset);
      addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      }); // HELPERS
      // timezone chunker
      // '+10:00' > ['10',  '00']
      // '-1530'  > ['-15', '30']

      var chunkOffset = /([\+\-]|\d\d)/gi;

      function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
          return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
      } // Return a moment from input, that is local/utc/zone equivalent to model.


      function cloneWithOffset(input, model) {
        var res, diff;

        if (model._isUTC) {
          res = model.clone();
          diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

          res._d.setTime(res._d.valueOf() + diff);

          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }

      function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
      } // HOOKS
      // This function will be called whenever a moment is mutated.
      // It is intended to keep the offset in sync with the timezone.


      hooks.updateOffset = function () {}; // MOMENTS
      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.


      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;

        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        if (input != null) {
          if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);

            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }

          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }

          this._offset = input;
          this._isUTC = true;

          if (localAdjust != null) {
            this.add(localAdjust, 'm');
          }

          if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }

          return this;
        } else {
          return this._isUTC ? offset : getDateOffset(this);
        }
      }

      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== 'string') {
            input = -input;
          }

          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }

      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }

      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;

          if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
          }
        }

        return this;
      }

      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
          var tZone = offsetFromString(matchOffset, this._i);

          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }

        return this;
      }

      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }

        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }

      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }

      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }

        var c = {},
            other;
        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
          other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }

        return this._isDSTShifted;
      }

      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }

      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }

      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      } // ASP.NET json date format regex


      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
      // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
      // and further modified to allow for strings containing both week and day
      isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
        match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {};

          if (key) {
            duration[key] = +input;
          } else {
            duration.milliseconds = +input;
          }
        } else if (match = aspNetRegex.exec(input)) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign,
            h: toInt(match[HOUR]) * sign,
            m: toInt(match[MINUTE]) * sign,
            s: toInt(match[SECOND]) * sign,
            ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

          };
        } else if (match = isoRegex.exec(input)) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign)
          };
        } else if (duration == null) {
          // checks for null or undefined
          duration = {};
        } else if (_typeof(duration) === 'object' && ('from' in duration || 'to' in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
          ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
          ret._isValid = input._isValid;
        }

        return ret;
      }

      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;

      function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

        return (isNaN(res) ? 0 : res) * sign;
      }

      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

        if (base.clone().add(res.months, 'M').isAfter(other)) {
          --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
      }

      function momentsDifference(base, other) {
        var res;

        if (!(base.isValid() && other.isValid())) {
          return {
            milliseconds: 0,
            months: 0
          };
        }

        other = cloneWithOffset(other, base);

        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }

        return res;
      } // TODO: remove 'name' arg after deprecation is removed


      function createAdder(direction, name) {
        return function (val, period) {
          var dur, tmp; //invert the arguments, but complain about it

          if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val;
            val = period;
            period = tmp;
          }

          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }

      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
          // No op
          return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
          setMonth(mom, get(mom, 'Month') + months * isAdding);
        }

        if (days) {
          set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }

        if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }

        if (updateOffset) {
          hooks.updateOffset(mom, days || months);
        }
      }

      var add = createAdder(1, 'add'),
          subtract = createAdder(-1, 'subtract');

      function isString(input) {
        return typeof input === 'string' || input instanceof String;
      } // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined


      function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
      }

      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = ['years', 'year', 'y', 'months', 'month', 'M', 'days', 'day', 'd', 'dates', 'date', 'D', 'hours', 'hour', 'h', 'minutes', 'minute', 'm', 'seconds', 'second', 's', 'milliseconds', 'millisecond', 'ms'],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
      }

      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;

        if (arrayTest) {
          dataTypeTest = input.filter(function (item) {
            return !isNumber(item) && isString(input);
          }).length === 0;
        }

        return arrayTest && dataTypeTest;
      }

      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
      }

      function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
      }

      function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time = undefined;
            formats = undefined;
          } else if (isMomentInput(arguments[0])) {
            time = arguments[0];
            formats = undefined;
          } else if (isCalendarSpec(arguments[0])) {
            formats = arguments[0];
            time = undefined;
          }
        } // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.


        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
      }

      function clone() {
        return new Moment(this);
      }

      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }

      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }

      function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);

        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }

        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }

      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }

      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }

      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }

      function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
          return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
          return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);

        switch (units) {
          case 'year':
            output = monthDiff(this, that) / 12;
            break;

          case 'month':
            output = monthDiff(this, that);
            break;

          case 'quarter':
            output = monthDiff(this, that) / 3;
            break;

          case 'second':
            output = (this - that) / 1e3;
            break;
          // 1000

          case 'minute':
            output = (this - that) / 6e4;
            break;
          // 1000 * 60

          case 'hour':
            output = (this - that) / 36e5;
            break;
          // 1000 * 60 * 60

          case 'day':
            output = (this - that - zoneDelta) / 864e5;
            break;
          // 1000 * 60 * 60 * 24, negate dst

          case 'week':
            output = (this - that - zoneDelta) / 6048e5;
            break;
          // 1000 * 60 * 60 * 24 * 7, negate dst

          default:
            output = this - that;
        }

        return asFloat ? output : absFloor(output);
      }

      function monthDiff(a, b) {
        if (a.date() < b.date()) {
          // end-of-month calculations work correct when the start month has more
          // days than the end month.
          return -monthDiff(b, a);
        } // difference in months


        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

          adjust = (b - anchor) / (anchor2 - anchor);
        } //check for negative zero, return zero if negative zero


        return -(wholeMonthDiff + adjust) || 0;
      }

      hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
      hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

      function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      }

      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }

        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;

        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }

        if (isFunction(Date.prototype.toISOString)) {
          // native implementation is ~50x faster, use it when we can
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
          }
        }

        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }
      /**
       * Return a human readable representation of a moment that can
       * also be evaluated to get a new moment which is the same
       *
       * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
       */


      function inspect() {
        if (!this.isValid()) {
          return 'moment.invalid(/* ' + this._i + ' */)';
        }

        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;

        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
          zone = 'Z';
        }

        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }

      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }

        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }

      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            to: this,
            from: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }

      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            from: this,
            to: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      } // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.


      function locale(key) {
        var newLocaleData;

        if (key === undefined) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);

          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }

          return this;
        }
      }

      var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
        if (key === undefined) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      });

      function localeData() {
        return this._locale;
      }

      var MS_PER_SECOND = 1000,
          MS_PER_MINUTE = 60 * MS_PER_SECOND,
          MS_PER_HOUR = 60 * MS_PER_MINUTE,
          MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }

      function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }

      function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }

      function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);

        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;

          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
            break;

          case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;

          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
            break;

          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;

          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;

          case 'hour':
            time = this._d.valueOf();
            time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
            break;

          case 'minute':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE);
            break;

          case 'second':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND);
            break;
        }

        this._d.setTime(time);

        hooks.updateOffset(this, true);
        return this;
      }

      function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);

        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;

          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;

          case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;

          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;

          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;

          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;

          case 'hour':
            time = this._d.valueOf();
            time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
            break;

          case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
            break;

          case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
            break;
        }

        this._d.setTime(time);

        hooks.updateOffset(this, true);
        return this;
      }

      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
      }

      function unix() {
        return Math.floor(this.valueOf() / 1000);
      }

      function toDate() {
        return new Date(this.valueOf());
      }

      function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
      }

      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }

      function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
      }

      function isValid$2() {
        return isValid(this);
      }

      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }

      function invalidAt() {
        return getParsingFlags(this).overflow;
      }

      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }

      addFormatToken('N', 0, 0, 'eraAbbr');
      addFormatToken('NN', 0, 0, 'eraAbbr');
      addFormatToken('NNN', 0, 0, 'eraAbbr');
      addFormatToken('NNNN', 0, 0, 'eraName');
      addFormatToken('NNNNN', 0, 0, 'eraNarrow');
      addFormatToken('y', ['y', 1], 'yo', 'eraYear');
      addFormatToken('y', ['yy', 2], 0, 'eraYear');
      addFormatToken('y', ['yyy', 3], 0, 'eraYear');
      addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
      addRegexToken('N', matchEraAbbr);
      addRegexToken('NN', matchEraAbbr);
      addRegexToken('NNN', matchEraAbbr);
      addRegexToken('NNNN', matchEraName);
      addRegexToken('NNNNN', matchEraNarrow);
      addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);

        if (era) {
          getParsingFlags(config).era = era;
        } else {
          getParsingFlags(config).invalidEra = input;
        }
      });
      addRegexToken('y', matchUnsigned);
      addRegexToken('yy', matchUnsigned);
      addRegexToken('yyy', matchUnsigned);
      addRegexToken('yyyy', matchUnsigned);
      addRegexToken('yo', matchEraYearOrdinal);
      addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
      addParseToken(['yo'], function (input, array, config, token) {
        var match;

        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR] = parseInt(input, 10);
        }
      });

      function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;

        for (i = 0, l = eras.length; i < l; ++i) {
          switch (_typeof(eras[i].since)) {
            case 'string':
              // truncate time
              date = hooks(eras[i].since).startOf('day');
              eras[i].since = date.valueOf();
              break;
          }

          switch (_typeof(eras[i].until)) {
            case 'undefined':
              eras[i].until = +Infinity;
              break;

            case 'string':
              // truncate time
              date = hooks(eras[i].until).startOf('day').valueOf();
              eras[i].until = date.valueOf();
              break;
          }
        }

        return eras;
      }

      function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
          name = eras[i].name.toUpperCase();
          abbr = eras[i].abbr.toUpperCase();
          narrow = eras[i].narrow.toUpperCase();

          if (strict) {
            switch (format) {
              case 'N':
              case 'NN':
              case 'NNN':
                if (abbr === eraName) {
                  return eras[i];
                }

                break;

              case 'NNNN':
                if (name === eraName) {
                  return eras[i];
                }

                break;

              case 'NNNNN':
                if (narrow === eraName) {
                  return eras[i];
                }

                break;
            }
          } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
          }
        }
      }

      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;

        if (year === undefined) {
          return hooks(era.since).year();
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir;
        }
      }

      function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          // truncate time
          val = this.clone().startOf('day').valueOf();

          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
          }

          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
          }
        }

        return '';
      }

      function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          // truncate time
          val = this.clone().startOf('day').valueOf();

          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
          }

          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
          }
        }

        return '';
      }

      function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          // truncate time
          val = this.clone().startOf('day').valueOf();

          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
          }

          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
          }
        }

        return '';
      }

      function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          dir = eras[i].since <= eras[i].until ? +1 : -1; // truncate time

          val = this.clone().startOf('day').valueOf();

          if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
            return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
          }
        }

        return this.year();
      }

      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
          computeErasParse.call(this);
        }

        return isStrict ? this._erasNameRegex : this._erasRegex;
      }

      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
          computeErasParse.call(this);
        }

        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }

      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
          computeErasParse.call(this);
        }

        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }

      function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
      }

      function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
      }

      function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
      }

      function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
      }

      function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
          namePieces.push(regexEscape(eras[i].name));
          abbrPieces.push(regexEscape(eras[i].abbr));
          narrowPieces.push(regexEscape(eras[i].narrow));
          mixedPieces.push(regexEscape(eras[i].name));
          mixedPieces.push(regexEscape(eras[i].abbr));
          mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
      } // FORMATTING


      addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
      });
      addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
      });

      function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
      }

      addWeekYearFormatToken('gggg', 'weekYear');
      addWeekYearFormatToken('ggggg', 'weekYear');
      addWeekYearFormatToken('GGGG', 'isoWeekYear');
      addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

      addUnitAlias('weekYear', 'gg');
      addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

      addUnitPriority('weekYear', 1);
      addUnitPriority('isoWeekYear', 1); // PARSING

      addRegexToken('G', matchSigned);
      addRegexToken('g', matchSigned);
      addRegexToken('GG', match1to2, match2);
      addRegexToken('gg', match1to2, match2);
      addRegexToken('GGGG', match1to4, match4);
      addRegexToken('gggg', match1to4, match4);
      addRegexToken('GGGGG', match1to6, match6);
      addRegexToken('ggggg', match1to6, match6);
      addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
      });
      addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
      }); // MOMENTS

      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }

      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
      }

      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }

      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
      }

      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;

        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }

      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;

        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }

      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;

        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);

          if (week > weeksTarget) {
            week = weeksTarget;
          }

          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }

      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      } // FORMATTING


      addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

      addUnitAlias('quarter', 'Q'); // PRIORITY

      addUnitPriority('quarter', 7); // PARSING

      addRegexToken('Q', match1);
      addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      }); // MOMENTS

      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      } // FORMATTING


      addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

      addUnitAlias('date', 'D'); // PRIORITY

      addUnitPriority('date', 9); // PARSING

      addRegexToken('D', match1to2);
      addRegexToken('DD', match1to2, match2);
      addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
      });
      addParseToken(['D', 'DD'], DATE);
      addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      }); // MOMENTS

      var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

      addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

      addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

      addUnitPriority('dayOfYear', 4); // PARSING

      addRegexToken('DDD', match1to3);
      addRegexToken('DDDD', match3);
      addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
      }); // HELPERS
      // MOMENTS

      function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
      } // FORMATTING


      addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

      addUnitAlias('minute', 'm'); // PRIORITY

      addUnitPriority('minute', 14); // PARSING

      addRegexToken('m', match1to2);
      addRegexToken('mm', match1to2, match2);
      addParseToken(['m', 'mm'], MINUTE); // MOMENTS

      var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

      addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

      addUnitAlias('second', 's'); // PRIORITY

      addUnitPriority('second', 15); // PARSING

      addRegexToken('s', match1to2);
      addRegexToken('ss', match1to2, match2);
      addParseToken(['s', 'ss'], SECOND); // MOMENTS

      var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

      addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken(0, ['SSS', 3], 0, 'millisecond');
      addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
      });
      addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
      });
      addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
      });
      addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
      }); // ALIASES

      addUnitAlias('millisecond', 'ms'); // PRIORITY

      addUnitPriority('millisecond', 16); // PARSING

      addRegexToken('S', match1to3, match1);
      addRegexToken('SS', match1to3, match2);
      addRegexToken('SSS', match1to3, match3);
      var token, getSetMillisecond;

      for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
      }

      function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
      }

      getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

      addFormatToken('z', 0, 0, 'zoneAbbr');
      addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

      function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
      }

      function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
      }

      var proto = Moment.prototype;
      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;

      if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
          return 'Moment<' + this.format() + '>';
        };
      }

      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
      proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
      proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
      proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
      proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

      function createUnix(input) {
        return createLocal(input * 1000);
      }

      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }

      function preParsePostFormat(string) {
        return string;
      }

      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;

      function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
      }

      function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';

        if (index != null) {
          return get$1(format, index, field, 'month');
        }

        var i,
            out = [];

        for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, 'month');
        }

        return out;
      } // ()
      // (5)
      // (fmt, 5)
      // (fmt)
      // (true)
      // (true, 5)
      // (true, fmt, 5)
      // (true, fmt)


      function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        } else {
          format = localeSorted;
          index = format;
          localeSorted = false;

          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
          return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }

        return out;
      }

      function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
      }

      function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
      }

      function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
      }

      function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
      }

      function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
      }

      getSetGlobalLocale('en', {
        eras: [{
          since: '0001-01-01',
          until: +Infinity,
          offset: 1,
          name: 'Anno Domini',
          narrow: 'AD',
          abbr: 'AD'
        }, {
          since: '0000-12-31',
          until: -Infinity,
          offset: 1,
          name: 'Before Christ',
          narrow: 'BC',
          abbr: 'BC'
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        }
      }); // Side effect imports

      hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
      hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
      var mathAbs = Math.abs;

      function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }

      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      } // supports only 2.0-style add(1, 's') or add(duration)


      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      } // supports only 2.0-style subtract(1, 's') or subtract(duration)


      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }

      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }

      function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays; // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166

        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
          days = 0;
          months = 0;
        } // The following code bubbles up values, see the tests for
        // examples of what that means.


        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24); // convert days to months

        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
      }

      function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
      }

      function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
      }

      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }

        var days,
            months,
            milliseconds = this._milliseconds;
        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
          days = this._days + milliseconds / 864e5;
          months = this._months + daysToMonths(days);

          switch (units) {
            case 'month':
              return months;

            case 'quarter':
              return months / 3;

            case 'year':
              return months / 12;
          }
        } else {
          // handle milliseconds separately because of floating point math errors (issue #1867)
          days = this._days + Math.round(monthsToDays(this._months));

          switch (units) {
            case 'week':
              return days / 7 + milliseconds / 6048e5;

            case 'day':
              return days + milliseconds / 864e5;

            case 'hour':
              return days * 24 + milliseconds / 36e5;

            case 'minute':
              return days * 1440 + milliseconds / 6e4;

            case 'second':
              return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here

            case 'millisecond':
              return Math.floor(days * 864e5) + milliseconds;

            default:
              throw new Error('Unknown unit ' + units);
          }
        }
      } // TODO: Use this.as('ms')?


      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }

        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }

      function makeAs(alias) {
        return function () {
          return this.as(alias);
        };
      }

      var asMilliseconds = makeAs('ms'),
          asSeconds = makeAs('s'),
          asMinutes = makeAs('m'),
          asHours = makeAs('h'),
          asDays = makeAs('d'),
          asWeeks = makeAs('w'),
          asMonths = makeAs('M'),
          asQuarters = makeAs('Q'),
          asYears = makeAs('y');

      function clone$1() {
        return createDuration(this);
      }

      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
      }

      function makeGetter(name) {
        return function () {
          return this.isValid() ? this._data[name] : NaN;
        };
      }

      var milliseconds = makeGetter('milliseconds'),
          seconds = makeGetter('seconds'),
          minutes = makeGetter('minutes'),
          hours = makeGetter('hours'),
          days = makeGetter('days'),
          months = makeGetter('months'),
          years = makeGetter('years');

      function weeks() {
        return absFloor(this.days() / 7);
      }

      var round = Math.round,
          thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month/week
        w: null,
        // weeks to month
        M: 11 // months to year

      }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }

      function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days];

        if (thresholds.w != null) {
          a = a || weeks <= 1 && ['w'] || weeks < thresholds.w && ['ww', weeks];
        }

        a = a || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
      } // This function allows you to set the rounding function for relative time strings


      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
          return round;
        }

        if (typeof roundingFunction === 'function') {
          round = roundingFunction;
          return true;
        }

        return false;
      } // This function allows you to set a threshold for relative time strings


      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
          return false;
        }

        if (limit === undefined) {
          return thresholds[threshold];
        }

        thresholds[threshold] = limit;

        if (threshold === 's') {
          thresholds.ss = limit - 1;
        }

        return true;
      }

      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (_typeof(argWithSuffix) === 'object') {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }

        if (typeof argWithSuffix === 'boolean') {
          withSuffix = argWithSuffix;
        }

        if (_typeof(argThresholds) === 'object') {
          th = Object.assign({}, thresholds, argThresholds);

          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
          output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
      }

      var abs$1 = Math.abs;

      function sign(x) {
        return (x > 0) - (x < 0) || +x;
      }

      function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
          // this is the same as C#'s (Noda) and python (isodate)...
          // but not other JS (goog.date)
          return 'P0D';
        } // 3600 seconds -> 60 minutes -> 1 hour


        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60; // 12 months -> 1 year

        years = absFloor(months / 12);
        months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
        return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
      }

      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
      proto$2.lang = lang; // FORMATTING

      addFormatToken('X', 0, 0, 'unix');
      addFormatToken('x', 0, 0, 'valueOf'); // PARSING

      addRegexToken('x', matchSigned);
      addRegexToken('X', matchTimestamp);
      addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
      });
      addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
      }); //! moment.js

      hooks.version = '2.29.1';
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

      hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',
        // <input type="date" />
        TIME: 'HH:mm',
        // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',
        // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',
        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',
        // <input type="week" />
        MONTH: 'YYYY-MM' // <input type="month" />

      };
      return hooks;
    });
  })(moment$2);

  var moment = moment$2.exports;

  var moment$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': moment
  }, [moment$2.exports]);

  var internalMetadata = {exports: {}};

  var $$b = _export;
  var uncurryThis$a = functionUncurryThis;
  var hiddenKeys = hiddenKeys$6;
  var isObject$8 = isObject$r;
  var hasOwn$4 = hasOwnProperty_1;
  var defineProperty$2 = objectDefineProperty.f;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible$1 = objectIsExtensible;
  var uid$1 = uid$5;
  var FREEZING$2 = freezing;
  var REQUIRED = false;
  var METADATA = uid$1('meta');
  var id$1 = 0;

  var setMetadata = function setMetadata(it) {
    defineProperty$2(it, METADATA, {
      value: {
        objectID: 'O' + id$1++,
        // object ID
        weakData: {} // weak collections IDs

      }
    });
  };

  var fastKey$1 = function fastKey(it, create) {
    // return a primitive with prefix
    if (!isObject$8(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

    if (!hasOwn$4(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return 'F'; // not necessary to add metadata

      if (!create) return 'E'; // add missing metadata

      setMetadata(it); // return object ID
    }

    return it[METADATA].objectID;
  };

  var getWeakData$1 = function getWeakData(it, create) {
    if (!hasOwn$4(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return true; // not necessary to add metadata

      if (!create) return false; // add missing metadata

      setMetadata(it); // return the store of weak collections IDs
    }

    return it[METADATA].weakData;
  }; // add metadata on freeze-family methods calling


  var onFreeze$2 = function onFreeze(it) {
    if (FREEZING$2 && REQUIRED && isExtensible$1(it) && !hasOwn$4(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function enable() {
    meta.enable = function () {
      /* empty */
    };

    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis$a([].splice);
    var test = {};
    test[METADATA] = 1; // prevent exposing of metadata key

    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule.f = function (it) {
        var result = getOwnPropertyNames(it);

        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        }

        return result;
      };

      $$b({
        target: 'Object',
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };

  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData$1,
    onFreeze: onFreeze$2
  };
  hiddenKeys[METADATA] = true;

  var $$a = _export;
  var isObject$7 = isObject$r;
  var onFreeze$1 = internalMetadata.exports.onFreeze;
  var FREEZING$1 = freezing;
  var fails$c = fails$W; // eslint-disable-next-line es-x/no-object-preventextensions -- safe

  var $preventExtensions = Object.preventExtensions;
  var FAILS_ON_PRIMITIVES$1 = fails$c(function () {
    $preventExtensions(1);
  }); // `Object.preventExtensions` method
  // https://tc39.es/ecma262/#sec-object.preventextensions

  $$a({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$1,
    sham: !FREEZING$1
  }, {
    preventExtensions: function preventExtensions(it) {
      return $preventExtensions && isObject$7(it) ? $preventExtensions(onFreeze$1(it)) : it;
    }
  });

  var fails$b = fails$W;
  var freezing = !fails$b(function () {
    // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$9 = _export;
  var FREEZING = freezing;
  var fails$a = fails$W;
  var isObject$6 = isObject$r;
  var onFreeze = internalMetadata.exports.onFreeze; // eslint-disable-next-line es-x/no-object-freeze -- safe

  var $freeze = Object.freeze;
  var FAILS_ON_PRIMITIVES = fails$a(function () {
    $freeze(1);
  }); // `Object.freeze` method
  // https://tc39.es/ecma262/#sec-object.freeze

  $$9({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !FREEZING
  }, {
    freeze: function freeze(it) {
      return $freeze && isObject$6(it) ? $freeze(onFreeze(it)) : it;
    }
  });

  var isRegExp = isRegexp;
  var $TypeError$3 = TypeError;

  var notARegexp = function notARegexp(it) {
    if (isRegExp(it)) {
      throw $TypeError$3("The method doesn't accept regular expressions");
    }

    return it;
  };

  var wellKnownSymbol$3 = wellKnownSymbol$b;
  var MATCH = wellKnownSymbol$3('match');

  var correctIsRegexpLogic = function correctIsRegexpLogic(METHOD_NAME) {
    var regexp = /./;

    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) {
        /* empty */
      }
    }

    return false;
  };

  var $$8 = _export;
  var uncurryThis$9 = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible = requireObjectCoercible$a;
  var toString = toString$g;
  var correctIsRegExpLogic = correctIsRegexpLogic;
  var stringIndexOf = uncurryThis$9(''.indexOf); // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes

  $$8({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic('includes')
  }, {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$7 = _export;
  var $includes$1 = arrayIncludes.includes;
  var fails$9 = fails$W;
  var addToUnscopables$4 = addToUnscopables$6; // FF99+ bug

  var BROKEN_ON_SPARSE = fails$9(function () {
    return !Array(1).includes();
  }); // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes

  $$7({
    target: 'Array',
    proto: true,
    forced: BROKEN_ON_SPARSE
  }, {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$4('includes');

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible$1(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps$1 = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible$1(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!objectValues(swalClasses).includes(className) && !objectValues(iconTypes).includes(className) && !objectValues(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput$1(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible$1 = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage$1 = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;

    range.oninput = function (e) {
      resetValidationMessage$1(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage$1(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    if (!isLoading()) {
      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  var $$6 = _export;
  var global$a = global$p;
  var uncurryThis$8 = functionUncurryThis;
  var isForced = isForced_1;
  var defineBuiltIn$2 = defineBuiltIn$j;
  var InternalMetadataModule$1 = internalMetadata.exports;
  var iterate$2 = iterate$5;
  var anInstance$3 = anInstance$8;
  var isCallable$1 = isCallable$t;
  var isObject$5 = isObject$r;
  var fails$8 = fails$W;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$3;
  var setToStringTag = setToStringTag$8;
  var inheritIfRequired$1 = inheritIfRequired$4;

  var collection$3 = function collection(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$a[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function fixMethod(KEY) {
      var uncurriedNativeMethod = uncurryThis$8(NativePrototype[KEY]);
      defineBuiltIn$2(NativePrototype, KEY, KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject$5(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      });
    };

    var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable$1(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$8(function () {
      new NativeConstructor().entries().next();
    })));

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule$1.enable();
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = fails$8(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing

      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function (iterable) {
        new NativeConstructor(iterable);
      }); // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && fails$8(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;

        while (index--) {
          $instance[ADDER](index, index);
        }

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$3(dummy, NativePrototype);
          var that = inheritIfRequired$1(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate$2(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    $$6({
      global: true,
      constructor: true,
      forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var $$5 = _export;
  var $find$1 = arrayIteration.find;
  var addToUnscopables$3 = addToUnscopables$6;
  var FIND = 'find';
  var SKIPS_HOLES$1 = true; // Shouldn't skip holes

  if (FIND in []) Array(1)[FIND](function () {
    SKIPS_HOLES$1 = false;
  }); // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find

  $$5({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES$1
  }, {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$3(FIND);

  var $$4 = _export;
  var $findIndex$1 = arrayIteration.findIndex;
  var addToUnscopables$2 = addToUnscopables$6;
  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES = true; // Shouldn't skip holes

  if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
    SKIPS_HOLES = false;
  }); // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findindex

  $$4({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
  }, {
    findIndex: function findIndex(callbackfn
    /* , that = undefined */
    ) {
      return $findIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$2(FIND_INDEX);

  var uncurryThis$7 = functionUncurryThis;
  var defineBuiltIns$2 = defineBuiltIns$5;
  var getWeakData = internalMetadata.exports.getWeakData;
  var anObject$1 = anObject$q;
  var isObject$4 = isObject$r;
  var anInstance$2 = anInstance$8;
  var iterate$1 = iterate$5;
  var ArrayIterationModule = arrayIteration;
  var hasOwn$3 = hasOwnProperty_1;
  var InternalStateModule$2 = internalState;
  var setInternalState$2 = InternalStateModule$2.set;
  var internalStateGetterFor$1 = InternalStateModule$2.getterFor;
  var find = ArrayIterationModule.find;
  var findIndex = ArrayIterationModule.findIndex;
  var splice = uncurryThis$7([].splice);
  var id = 0; // fallback for uncaught frozen keys

  var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.entries = [];
  };

  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return find(store.entries, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.entries.push([key, value]);
    },
    'delete': function _delete(key) {
      var index = findIndex(this.entries, function (it) {
        return it[0] === key;
      });
      if (~index) splice(this.entries, index, 1);
      return !!~index;
    }
  };
  var collectionWeak$1 = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance$2(that, Prototype);
        setInternalState$2(that, {
          type: CONSTRUCTOR_NAME,
          id: id++,
          frozen: undefined
        });
        if (iterable != undefined) iterate$1(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject$1(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
        return that;
      };

      defineBuiltIns$2(Prototype, {
        // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
        // https://tc39.es/ecma262/#sec-weakset.prototype.delete
        'delete': function _delete(key) {
          var state = getInternalState(this);
          if (!isObject$4(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)['delete'](key);
          return data && hasOwn$3(data, state.id) && delete data[state.id];
        },
        // `{ WeakMap, WeakSet }.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.has
        // https://tc39.es/ecma262/#sec-weakset.prototype.has
        has: function has(key) {
          var state = getInternalState(this);
          if (!isObject$4(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && hasOwn$3(data, state.id);
        }
      });
      defineBuiltIns$2(Prototype, IS_MAP ? {
        // `WeakMap.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.get
        get: function get(key) {
          var state = getInternalState(this);

          if (isObject$4(key)) {
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        // `WeakMap.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.set
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        // `WeakSet.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-weakset.prototype.add
        add: function add(value) {
          return define(this, value, true);
        }
      });
      return Constructor;
    }
  };

  var global$9 = global$p;
  var uncurryThis$6 = functionUncurryThis;
  var defineBuiltIns$1 = defineBuiltIns$5;
  var InternalMetadataModule = internalMetadata.exports;
  var collection$2 = collection$3;
  var collectionWeak = collectionWeak$1;
  var isObject$3 = isObject$r;
  var isExtensible = objectIsExtensible;
  var enforceInternalState = internalState.enforce;
  var NATIVE_WEAK_MAP = nativeWeakMap;
  var IS_IE11 = !global$9.ActiveXObject && 'ActiveXObject' in global$9;
  var InternalWeakMap;

  var wrapper = function wrapper(init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }; // `WeakMap` constructor
  // https://tc39.es/ecma262/#sec-weakmap-constructor


  var $WeakMap = collection$2('WeakMap', wrapper, collectionWeak); // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485

  if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
    InternalMetadataModule.enable();
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeDelete = uncurryThis$6(WeakMapPrototype['delete']);
    var nativeHas = uncurryThis$6(WeakMapPrototype.has);
    var nativeGet = uncurryThis$6(WeakMapPrototype.get);
    var nativeSet = uncurryThis$6(WeakMapPrototype.set);
    defineBuiltIns$1(WeakMapPrototype, {
      'delete': function _delete(key) {
        if (isObject$3(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeDelete(this, key) || state.frozen['delete'](key);
        }

        return nativeDelete(this, key);
      },
      has: function has(key) {
        if (isObject$3(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) || state.frozen.has(key);
        }

        return nativeHas(this, key);
      },
      get: function get(key) {
        if (isObject$3(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
        }

        return nativeGet(this, key);
      },
      set: function set(key, value) {
        if (isObject$3(key) && !isExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
        } else nativeSet(this, key, value);

        return this;
      }
    });
  }

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput$1(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput$1(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyCustomClass(getIcon(), params, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      adjustSuccessIconBackgoundColor(); // Custom class

      applyCustomClass(icon, params, 'icon'); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps$1();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses$1(popup, params);
  };

  var addClasses$1 = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible = function isVisible() {
    return isVisible$1(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, Object.assign({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    show(actions);
    show(confirmButton, 'inline-block');
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    onRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'footer', 'hideClass', 'html', 'icon', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'text', 'title', 'titleText'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    isVisible: isVisible,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput$1(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e.target);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
    var container = getContainer();

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast, onAfterClose) {
    if (isToast) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams);

    if (typeof resolveValue !== 'undefined') {
      resolveValue.isDismissed = typeof resolveValue.dismiss !== 'undefined';
      resolveValue.isConfirmed = typeof resolveValue.dismiss === 'undefined';
    } else {
      resolveValue = {
        isDismissed: true,
        isConfirmed: false
      };
    } // Resolve Swal promise


    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    setInnerHtml(domCache.validationMessage, error);
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };

  function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    show(popup); // Animate popup right after showing it

    addClass(popup, params.showClass.popup);
    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defineProperty$1 = objectDefineProperty.f;
  var create$1 = objectCreate;
  var defineBuiltIns = defineBuiltIns$5;
  var bind$1 = functionBindContext;
  var anInstance$1 = anInstance$8;
  var iterate = iterate$5;
  var defineIterator = defineIterator$3;
  var setSpecies$1 = setSpecies$5;
  var DESCRIPTORS$2 = descriptors;
  var fastKey = internalMetadata.exports.fastKey;
  var InternalStateModule$1 = internalState;
  var setInternalState$1 = InternalStateModule$1.set;
  var internalStateGetterFor = InternalStateModule$1.getterFor;
  var collectionStrong$2 = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance$1(that, Prototype);
        setInternalState$1(that, {
          type: CONSTRUCTOR_NAME,
          index: create$1(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS$2) that.size = 0;
        if (iterable != undefined) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index; // change existing entry

        if (entry) {
          entry.value = value; // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$2) state.size++;else that.size++; // add to index

          if (index !== 'F') state.index[index] = entry;
        }

        return that;
      };

      var getEntry = function getEntry(that, key) {
        var state = getInternalState(that); // fast case

        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index]; // frozen object case

        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      defineBuiltIns(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;

          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }

          state.first = state.last = undefined;
          if (DESCRIPTORS$2) state.size = 0;else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function _delete(key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS$2) state.size--;else that.size--;
          }

          return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          var state = getInternalState(this);
          var boundFunction = bind$1(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;

          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this); // revert to the last existing entry

            while (entry && entry.removed) {
              entry = entry.previous;
            }
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      defineBuiltIns(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$2) defineProperty$1(Prototype, 'size', {
        get: function get() {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator

      defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$1(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last; // revert to the last existing entry

        while (entry && entry.removed) {
          entry = entry.previous;
        } // get next entry


        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        } // return step by kind


        if (kind == 'keys') return {
          value: entry.key,
          done: false
        };
        if (kind == 'values') return {
          value: entry.value,
          done: false
        };
        return {
          value: [entry.key, entry.value],
          done: false
        };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species

      setSpecies$1(CONSTRUCTOR_NAME);
    }
  };

  var collection$1 = collection$3;
  var collectionStrong$1 = collectionStrong$2; // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects

  collection$1('Map', function (init) {
    return function Map() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong$1);

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.includes(e.key)) {
      handleArrows(); // ESC
    } else if (escKeys.includes(e.key)) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible$1(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible$1(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = Object.assign({}, defaultParams.showClass, userParams.showClass);
    var hideClass = Object.assign({}, defaultParams.hideClass, userParams.hideClass);
    var params = Object.assign({}, defaultParams, userParams);
    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps$1()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });
    var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy();
    }

    disposeSwal(this);
  }

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage,
    getProgressSteps: getProgressSteps,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise.finally(onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '9.17.2';

  var Swal = SweetAlert;
  Swal.default = Swal;

  var sweetalert2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Swal
  });

  var defineWellKnownSymbol = defineWellKnownSymbol$4;
  var defineSymbolToPrimitive = symbolDefineToPrimitive; // `Symbol.toPrimitive` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.toprimitive

  defineWellKnownSymbol('toPrimitive'); // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive

  defineSymbolToPrimitive();

  var anObject = anObject$q;
  var ordinaryToPrimitive = ordinaryToPrimitive$2;
  var $TypeError$2 = TypeError; // `Date.prototype[@@toPrimitive](hint)` method implementation
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

  var dateToPrimitive$1 = function dateToPrimitive(hint) {
    anObject(this);
    if (hint === 'string' || hint === 'default') hint = 'string';else if (hint !== 'number') throw $TypeError$2('Incorrect hint');
    return ordinaryToPrimitive(this, hint);
  };

  var hasOwn$2 = hasOwnProperty_1;
  var defineBuiltIn$1 = defineBuiltIn$j;
  var dateToPrimitive = dateToPrimitive$1;
  var wellKnownSymbol$2 = wellKnownSymbol$b;
  var TO_PRIMITIVE = wellKnownSymbol$2('toPrimitive');
  var DatePrototype = Date.prototype; // `Date.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

  if (!hasOwn$2(DatePrototype, TO_PRIMITIVE)) {
    defineBuiltIn$1(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
  }

  var collection = collection$3;
  var collectionStrong = collectionStrong$2; // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects

  collection('Set', function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong);

  var typedArrayConstructor = {exports: {}};

  var NATIVE_ARRAY_BUFFER = arrayBufferNative;
  var DESCRIPTORS$1 = descriptors;
  var global$8 = global$p;
  var isCallable = isCallable$t;
  var isObject$2 = isObject$r;
  var hasOwn$1 = hasOwnProperty_1;
  var classof$2 = classof$f;
  var tryToString = tryToString$7;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$b;
  var defineBuiltIn = defineBuiltIn$j;
  var defineProperty = objectDefineProperty.f;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var wellKnownSymbol$1 = wellKnownSymbol$b;
  var uid = uid$5;
  var Int8Array$4 = global$8.Int8Array;
  var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
  var Uint8ClampedArray$1 = global$8.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
  var TypedArray$1 = Int8Array$4 && getPrototypeOf(Int8Array$4);
  var TypedArrayPrototype$2 = Int8ArrayPrototype$1 && getPrototypeOf(Int8ArrayPrototype$1);
  var ObjectPrototype = Object.prototype;
  var TypeError$1 = global$8.TypeError;
  var TO_STRING_TAG = wellKnownSymbol$1('toStringTag');
  var TYPED_ARRAY_TAG$1 = uid('TYPED_ARRAY_TAG');
  var TYPED_ARRAY_CONSTRUCTOR$2 = uid('TYPED_ARRAY_CONSTRUCTOR'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

  var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$1 && classof$2(global$8.opera) !== 'Opera';
  var TYPED_ARRAY_TAG_REQUIRED = false;
  var NAME, Constructor, Prototype;
  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };
  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };

  var isView = function isView(it) {
    if (!isObject$2(it)) return false;
    var klass = classof$2(it);
    return klass === 'DataView' || hasOwn$1(TypedArrayConstructorsList, klass) || hasOwn$1(BigIntArrayConstructorsList, klass);
  };

  var isTypedArray$1 = function isTypedArray(it) {
    if (!isObject$2(it)) return false;
    var klass = classof$2(it);
    return hasOwn$1(TypedArrayConstructorsList, klass) || hasOwn$1(BigIntArrayConstructorsList, klass);
  };

  var aTypedArray$m = function aTypedArray(it) {
    if (isTypedArray$1(it)) return it;
    throw TypeError$1('Target is not a typed array');
  };

  var aTypedArrayConstructor$3 = function aTypedArrayConstructor(C) {
    if (isCallable(C) && (!setPrototypeOf$1 || isPrototypeOf$1(TypedArray$1, C))) return C;
    throw TypeError$1(tryToString(C) + ' is not a typed array constructor');
  };

  var exportTypedArrayMethod$n = function exportTypedArrayMethod(KEY, property, forced, options) {
    if (!DESCRIPTORS$1) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global$8[ARRAY];
      if (TypedArrayConstructor && hasOwn$1(TypedArrayConstructor.prototype, KEY)) try {
        delete TypedArrayConstructor.prototype[KEY];
      } catch (error) {
        // old WebKit bug - some methods are non-configurable
        try {
          TypedArrayConstructor.prototype[KEY] = property;
        } catch (error2) {
          /* empty */
        }
      }
    }

    if (!TypedArrayPrototype$2[KEY] || forced) {
      defineBuiltIn(TypedArrayPrototype$2, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
    }
  };

  var exportTypedArrayStaticMethod = function exportTypedArrayStaticMethod(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS$1) return;

    if (setPrototypeOf$1) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global$8[ARRAY];
        if (TypedArrayConstructor && hasOwn$1(TypedArrayConstructor, KEY)) try {
          delete TypedArrayConstructor[KEY];
        } catch (error) {
          /* empty */
        }
      }

      if (!TypedArray$1[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return defineBuiltIn(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
        } catch (error) {
          /* empty */
        }
      } else return;
    }

    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$8[ARRAY];

      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        defineBuiltIn(TypedArrayConstructor, KEY, property);
      }
    }
  };

  for (NAME in TypedArrayConstructorsList) {
    Constructor = global$8[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty$1(Prototype, TYPED_ARRAY_CONSTRUCTOR$2, Constructor);else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
  }

  for (NAME in BigIntArrayConstructorsList) {
    Constructor = global$8[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty$1(Prototype, TYPED_ARRAY_CONSTRUCTOR$2, Constructor);
  } // WebKit bug - typed arrays constructors prototype is Object.prototype


  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable(TypedArray$1) || TypedArray$1 === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray$1 = function TypedArray() {
      throw TypeError$1('Incorrect invocation');
    };

    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
      if (global$8[NAME]) setPrototypeOf$1(global$8[NAME], TypedArray$1);
    }
  }

  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$2 || TypedArrayPrototype$2 === ObjectPrototype) {
    TypedArrayPrototype$2 = TypedArray$1.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
      if (global$8[NAME]) setPrototypeOf$1(global$8[NAME].prototype, TypedArrayPrototype$2);
    }
  } // WebKit bug - one more object in Uint8ClampedArray prototype chain


  if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$2) {
    setPrototypeOf$1(Uint8ClampedArrayPrototype, TypedArrayPrototype$2);
  }

  if (DESCRIPTORS$1 && !hasOwn$1(TypedArrayPrototype$2, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineProperty(TypedArrayPrototype$2, TO_STRING_TAG, {
      get: function get() {
        return isObject$2(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
      }
    });

    for (NAME in TypedArrayConstructorsList) {
      if (global$8[NAME]) {
        createNonEnumerableProperty$1(global$8[NAME], TYPED_ARRAY_TAG$1, NAME);
      }
    }
  }

  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
    TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR$2,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
    aTypedArray: aTypedArray$m,
    aTypedArrayConstructor: aTypedArrayConstructor$3,
    exportTypedArrayMethod: exportTypedArrayMethod$n,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    isView: isView,
    isTypedArray: isTypedArray$1,
    TypedArray: TypedArray$1,
    TypedArrayPrototype: TypedArrayPrototype$2
  };

  /* eslint-disable no-new -- required for testing */
  var global$7 = global$p;
  var fails$7 = fails$W;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$3;
  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var ArrayBuffer$2 = global$7.ArrayBuffer;
  var Int8Array$3 = global$7.Int8Array;
  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$7(function () {
    Int8Array$3(1);
  }) || !fails$7(function () {
    new Int8Array$3(-1);
  }) || !checkCorrectnessOfIteration(function (iterable) {
    new Int8Array$3();
    new Int8Array$3(null);
    new Int8Array$3(1.5);
    new Int8Array$3(iterable);
  }, true) || fails$7(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array$3(new ArrayBuffer$2(2), 1, undefined).length !== 1;
  });

  var $$3 = _export;
  var isIntegralNumber$2 = isIntegralNumber$1; // `Number.isInteger` method
  // https://tc39.es/ecma262/#sec-number.isinteger

  $$3({
    target: 'Number',
    stat: true
  }, {
    isInteger: isIntegralNumber$2
  });

  var isObject$1 = isObject$r;
  var floor$1 = Math.floor; // `IsIntegralNumber` abstract operation
  // https://tc39.es/ecma262/#sec-isintegralnumber
  // eslint-disable-next-line es-x/no-number-isinteger -- safe

  var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
    return !isObject$1(it) && isFinite(it) && floor$1(it) === it;
  };

  var toIntegerOrInfinity$1 = toIntegerOrInfinity$b;
  var $RangeError$1 = RangeError;

  var toPositiveInteger$1 = function toPositiveInteger(it) {
    var result = toIntegerOrInfinity$1(it);
    if (result < 0) throw $RangeError$1("The argument can't be less than 0");
    return result;
  };

  var toPositiveInteger = toPositiveInteger$1;
  var $RangeError = RangeError;

  var toOffset$2 = function toOffset(it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw $RangeError('Wrong offset');
    return offset;
  };

  var bind = functionBindContext;
  var call$3 = functionCall;
  var aConstructor = aConstructor$2;
  var toObject$2 = toObject$g;
  var lengthOfArrayLike$5 = lengthOfArrayLike$g;
  var getIterator = getIterator$4;
  var getIteratorMethod = getIteratorMethod$5;
  var isArrayIteratorMethod = isArrayIteratorMethod$3;
  var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;

  var typedArrayFrom$1 = function from(source
  /* , mapfn, thisArg */
  ) {
    var C = aConstructor(this);
    var O = toObject$2(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var i, length, result, step, iterator, next;

    if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      O = [];

      while (!(step = call$3(next, iterator)).done) {
        O.push(step.value);
      }
    }

    if (mapping && argumentsLength > 2) {
      mapfn = bind(mapfn, arguments[2]);
    }

    length = lengthOfArrayLike$5(O);
    result = new (aTypedArrayConstructor$2(C))(length);

    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var $$2 = _export;
  var global$6 = global$p;
  var call$2 = functionCall;
  var DESCRIPTORS = descriptors;
  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
  var ArrayBufferViewCore$n = arrayBufferViewCore;
  var ArrayBufferModule = arrayBuffer;
  var anInstance = anInstance$8;
  var createPropertyDescriptor = createPropertyDescriptor$8;
  var createNonEnumerableProperty = createNonEnumerableProperty$b;
  var isIntegralNumber = isIntegralNumber$1;
  var toLength$1 = toLength$9;
  var toIndex = toIndex$2;
  var toOffset$1 = toOffset$2;
  var toPropertyKey = toPropertyKey$3;
  var hasOwn = hasOwnProperty_1;
  var classof$1 = classof$f;
  var isObject = isObject$r;
  var isSymbol = isSymbol$4;
  var create = objectCreate;
  var isPrototypeOf = objectIsPrototypeOf;
  var setPrototypeOf = objectSetPrototypeOf;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var typedArrayFrom = typedArrayFrom$1;
  var forEach = arrayIteration.forEach;
  var setSpecies = setSpecies$5;
  var definePropertyModule = objectDefineProperty;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var InternalStateModule = internalState;
  var inheritIfRequired = inheritIfRequired$4;
  var getInternalState = InternalStateModule.get;
  var setInternalState = InternalStateModule.set;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var round = Math.round;
  var RangeError$2 = global$6.RangeError;
  var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
  var ArrayBufferPrototype = ArrayBuffer$1.prototype;
  var DataView$1 = ArrayBufferModule.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$n.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_CONSTRUCTOR$1 = ArrayBufferViewCore$n.TYPED_ARRAY_CONSTRUCTOR;
  var TYPED_ARRAY_TAG = ArrayBufferViewCore$n.TYPED_ARRAY_TAG;
  var TypedArray = ArrayBufferViewCore$n.TypedArray;
  var TypedArrayPrototype$1 = ArrayBufferViewCore$n.TypedArrayPrototype;
  var aTypedArrayConstructor$1 = ArrayBufferViewCore$n.aTypedArrayConstructor;
  var isTypedArray = ArrayBufferViewCore$n.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function fromList(C, list) {
    aTypedArrayConstructor$1(C);
    var index = 0;
    var length = list.length;
    var result = new C(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var addGetter = function addGetter(it, key) {
    nativeDefineProperty(it, key, {
      get: function get() {
        return getInternalState(this)[key];
      }
    });
  };

  var isArrayBuffer = function isArrayBuffer(it) {
    var klass;
    return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof$1(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function isTypedArrayIndex(target, key) {
    return isTypedArray(target) && !isSymbol(key) && key in target && isIntegralNumber(+key) && key >= 0;
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    key = toPropertyKey(key);
    return isTypedArrayIndex(target, key) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    key = toPropertyKey(key);

    if (isTypedArrayIndex(target, key) && isObject(descriptor) && hasOwn(descriptor, 'value') && !hasOwn(descriptor, 'get') && !hasOwn(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable && (!hasOwn(descriptor, 'writable') || descriptor.writable) && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)) {
      target[key] = descriptor.value;
      return target;
    }

    return nativeDefineProperty(target, key, descriptor);
  };

  if (DESCRIPTORS) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
      definePropertyModule.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype$1, 'buffer');
      addGetter(TypedArrayPrototype$1, 'byteOffset');
      addGetter(TypedArrayPrototype$1, 'byteLength');
      addGetter(TypedArrayPrototype$1, 'length');
    }

    $$2({
      target: 'Object',
      stat: true,
      forced: !NATIVE_ARRAY_BUFFER_VIEWS
    }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global$6[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function getter(that, index) {
        var data = getInternalState(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function setter(that, index, value) {
        var data = getInternalState(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function addElement(that, index) {
        nativeDefineProperty(that, index, {
          get: function get() {
            return getter(this, index);
          },
          set: function set(value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance(that, TypedArrayConstructorPrototype);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;

          if (!isObject(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer$1(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset$1(offset, BYTES);
            var $len = data.byteLength;

            if ($length === undefined) {
              if ($len % BYTES) throw RangeError$2(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError$2(WRONG_LENGTH);
            } else {
              byteLength = toLength$1($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError$2(WRONG_LENGTH);
            }

            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return call$2(typedArrayFrom, TypedArrayConstructor, data);
          }

          setInternalState(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView$1(buffer)
          });

          while (index < length) {
            addElement(that, index++);
          }
        });
        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype$1);
      } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance(dummy, TypedArrayConstructorPrototype);
          return inheritIfRequired(function () {
            if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return call$2(typedArrayFrom, TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });
        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR$1, TypedArrayConstructor);

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;
      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
      $$2({
        global: true,
        constructor: true,
        forced: FORCED,
        sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies(CONSTRUCTOR_NAME);
    };
  } else typedArrayConstructor.exports = function () {
    /* empty */
  };

  var createTypedArrayConstructor$2 = typedArrayConstructor.exports; // `Uint8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$2('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var $$1 = _export;
  var copyWithin = arrayCopyWithin;
  var addToUnscopables$1 = addToUnscopables$6; // `Array.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin

  $$1({
    target: 'Array',
    proto: true
  }, {
    copyWithin: copyWithin
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$1('copyWithin');

  var toObject$1 = toObject$g;
  var toAbsoluteIndex$1 = toAbsoluteIndex$8;
  var lengthOfArrayLike$4 = lengthOfArrayLike$g;
  var deletePropertyOrThrow = deletePropertyOrThrow$3;
  var min$1 = Math.min; // `Array.prototype.copyWithin` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin
  // eslint-disable-next-line es-x/no-array-prototype-copywithin -- safe

  var arrayCopyWithin = [].copyWithin || function copyWithin(target
  /* = 0 */
  , start
  /* = 0, end = @length */
  ) {
    var O = toObject$1(this);
    var len = lengthOfArrayLike$4(O);
    var to = toAbsoluteIndex$1(target, len);
    var from = toAbsoluteIndex$1(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min$1((end === undefined ? len : toAbsoluteIndex$1(end, len)) - from, len - to);
    var inc = 1;

    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count-- > 0) {
      if (from in O) O[to] = O[from];else deletePropertyOrThrow(O, to);
      to += inc;
      from += inc;
    }

    return O;
  };

  var uncurryThis$5 = functionUncurryThis;
  var ArrayBufferViewCore$m = arrayBufferViewCore;
  var $ArrayCopyWithin = arrayCopyWithin;
  var u$ArrayCopyWithin = uncurryThis$5($ArrayCopyWithin);
  var aTypedArray$l = ArrayBufferViewCore$m.aTypedArray;
  var exportTypedArrayMethod$m = ArrayBufferViewCore$m.exportTypedArrayMethod; // `%TypedArray%.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin

  exportTypedArrayMethod$m('copyWithin', function copyWithin(target, start
  /* , end */
  ) {
    return u$ArrayCopyWithin(aTypedArray$l(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  });

  var ArrayBufferViewCore$l = arrayBufferViewCore;
  var $every = arrayIteration.every;
  var aTypedArray$k = ArrayBufferViewCore$l.aTypedArray;
  var exportTypedArrayMethod$l = ArrayBufferViewCore$l.exportTypedArrayMethod; // `%TypedArray%.prototype.every` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every

  exportTypedArrayMethod$l('every', function every(callbackfn
  /* , thisArg */
  ) {
    return $every(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $ = _export;
  var fill = arrayFill$1;
  var addToUnscopables = addToUnscopables$6; // `Array.prototype.fill` method
  // https://tc39.es/ecma262/#sec-array.prototype.fill

  $({
    target: 'Array',
    proto: true
  }, {
    fill: fill
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('fill');

  var createTypedArrayConstructor$1 = typedArrayConstructor.exports; // `Int8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor$1('Int8', function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var lengthOfArrayLike$3 = lengthOfArrayLike$g;

  var arrayFromConstructorAndList$1 = function arrayFromConstructorAndList(Constructor, list) {
    var index = 0;
    var length = lengthOfArrayLike$3(list);
    var result = new Constructor(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var ArrayBufferViewCore$k = arrayBufferViewCore;
  var speciesConstructor = speciesConstructor$5;
  var TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore$k.TYPED_ARRAY_CONSTRUCTOR;
  var aTypedArrayConstructor = ArrayBufferViewCore$k.aTypedArrayConstructor; // a part of `TypedArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#typedarray-species-create

  var typedArraySpeciesConstructor$4 = function typedArraySpeciesConstructor(originalArray) {
    return aTypedArrayConstructor(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR]));
  };

  var arrayFromConstructorAndList = arrayFromConstructorAndList$1;
  var typedArraySpeciesConstructor$3 = typedArraySpeciesConstructor$4;

  var typedArrayFromSpeciesAndList = function typedArrayFromSpeciesAndList(instance, list) {
    return arrayFromConstructorAndList(typedArraySpeciesConstructor$3(instance), list);
  };

  var ArrayBufferViewCore$j = arrayBufferViewCore;
  var $filter = arrayIteration.filter;
  var fromSpeciesAndList = typedArrayFromSpeciesAndList;
  var aTypedArray$j = ArrayBufferViewCore$j.aTypedArray;
  var exportTypedArrayMethod$k = ArrayBufferViewCore$j.exportTypedArrayMethod; // `%TypedArray%.prototype.filter` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter

  exportTypedArrayMethod$k('filter', function filter(callbackfn
  /* , thisArg */
  ) {
    var list = $filter(aTypedArray$j(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return fromSpeciesAndList(this, list);
  });

  var ArrayBufferViewCore$i = arrayBufferViewCore;
  var $find = arrayIteration.find;
  var aTypedArray$i = ArrayBufferViewCore$i.aTypedArray;
  var exportTypedArrayMethod$j = ArrayBufferViewCore$i.exportTypedArrayMethod; // `%TypedArray%.prototype.find` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find

  exportTypedArrayMethod$j('find', function find(predicate
  /* , thisArg */
  ) {
    return $find(aTypedArray$i(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$h = arrayBufferViewCore;
  var $findIndex = arrayIteration.findIndex;
  var aTypedArray$h = ArrayBufferViewCore$h.aTypedArray;
  var exportTypedArrayMethod$i = ArrayBufferViewCore$h.exportTypedArrayMethod; // `%TypedArray%.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex

  exportTypedArrayMethod$i('findIndex', function findIndex(predicate
  /* , thisArg */
  ) {
    return $findIndex(aTypedArray$h(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$g = arrayBufferViewCore;
  var $forEach = arrayIteration.forEach;
  var aTypedArray$g = ArrayBufferViewCore$g.aTypedArray;
  var exportTypedArrayMethod$h = ArrayBufferViewCore$g.exportTypedArrayMethod; // `%TypedArray%.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach

  exportTypedArrayMethod$h('forEach', function forEach(callbackfn
  /* , thisArg */
  ) {
    $forEach(aTypedArray$g(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$f = arrayBufferViewCore;
  var $includes = arrayIncludes.includes;
  var aTypedArray$f = ArrayBufferViewCore$f.aTypedArray;
  var exportTypedArrayMethod$g = ArrayBufferViewCore$f.exportTypedArrayMethod; // `%TypedArray%.prototype.includes` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes

  exportTypedArrayMethod$g('includes', function includes(searchElement
  /* , fromIndex */
  ) {
    return $includes(aTypedArray$f(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$e = arrayBufferViewCore;
  var $indexOf = arrayIncludes.indexOf;
  var aTypedArray$e = ArrayBufferViewCore$e.aTypedArray;
  var exportTypedArrayMethod$f = ArrayBufferViewCore$e.exportTypedArrayMethod; // `%TypedArray%.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof

  exportTypedArrayMethod$f('indexOf', function indexOf(searchElement
  /* , fromIndex */
  ) {
    return $indexOf(aTypedArray$e(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var global$5 = global$p;
  var fails$6 = fails$W;
  var uncurryThis$4 = functionUncurryThis;
  var ArrayBufferViewCore$d = arrayBufferViewCore;
  var ArrayIterators = es_array_iterator;
  var wellKnownSymbol = wellKnownSymbol$b;
  var ITERATOR = wellKnownSymbol('iterator');
  var Uint8Array$2 = global$5.Uint8Array;
  var arrayValues = uncurryThis$4(ArrayIterators.values);
  var arrayKeys = uncurryThis$4(ArrayIterators.keys);
  var arrayEntries = uncurryThis$4(ArrayIterators.entries);
  var aTypedArray$d = ArrayBufferViewCore$d.aTypedArray;
  var exportTypedArrayMethod$e = ArrayBufferViewCore$d.exportTypedArrayMethod;
  var TypedArrayPrototype = Uint8Array$2 && Uint8Array$2.prototype;
  var GENERIC = !fails$6(function () {
    TypedArrayPrototype[ITERATOR].call([1]);
  });
  var ITERATOR_IS_VALUES = !!TypedArrayPrototype && TypedArrayPrototype.values && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values && TypedArrayPrototype.values.name === 'values';

  var typedArrayValues = function values() {
    return arrayValues(aTypedArray$d(this));
  }; // `%TypedArray%.prototype.entries` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries


  exportTypedArrayMethod$e('entries', function entries() {
    return arrayEntries(aTypedArray$d(this));
  }, GENERIC); // `%TypedArray%.prototype.keys` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys

  exportTypedArrayMethod$e('keys', function keys() {
    return arrayKeys(aTypedArray$d(this));
  }, GENERIC); // `%TypedArray%.prototype.values` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values

  exportTypedArrayMethod$e('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
    name: 'values'
  }); // `%TypedArray%.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator

  exportTypedArrayMethod$e(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
    name: 'values'
  });

  var ArrayBufferViewCore$c = arrayBufferViewCore;
  var uncurryThis$3 = functionUncurryThis;
  var aTypedArray$c = ArrayBufferViewCore$c.aTypedArray;
  var exportTypedArrayMethod$d = ArrayBufferViewCore$c.exportTypedArrayMethod;
  var $join = uncurryThis$3([].join); // `%TypedArray%.prototype.join` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join

  exportTypedArrayMethod$d('join', function join(separator) {
    return $join(aTypedArray$c(this), separator);
  });

  /* eslint-disable es-x/no-array-prototype-lastindexof -- safe */


  var apply$2 = functionApply;
  var toIndexedObject$1 = toIndexedObject$4;
  var toIntegerOrInfinity = toIntegerOrInfinity$b;
  var lengthOfArrayLike$2 = lengthOfArrayLike$g;
  var arrayMethodIsStrict = arrayMethodIsStrict$4;
  var min = Math.min;
  var $lastIndexOf$1 = [].lastIndexOf;
  var NEGATIVE_ZERO = !!$lastIndexOf$1 && 1 / [1].lastIndexOf(1, -0) < 0;
  var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
  var FORCED$2 = NEGATIVE_ZERO || !STRICT_METHOD; // `Array.prototype.lastIndexOf` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof

  var arrayLastIndexOf = FORCED$2 ? function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return apply$2($lastIndexOf$1, this, arguments) || 0;
    var O = toIndexedObject$1(this);
    var length = lengthOfArrayLike$2(O);
    var index = length - 1;
    if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O && O[index] === searchElement) return index || 0;
    }

    return -1;
  } : $lastIndexOf$1;

  var ArrayBufferViewCore$b = arrayBufferViewCore;
  var apply$1 = functionApply;
  var $lastIndexOf = arrayLastIndexOf;
  var aTypedArray$b = ArrayBufferViewCore$b.aTypedArray;
  var exportTypedArrayMethod$c = ArrayBufferViewCore$b.exportTypedArrayMethod; // `%TypedArray%.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof

  exportTypedArrayMethod$c('lastIndexOf', function lastIndexOf(searchElement
  /* , fromIndex */
  ) {
    var length = arguments.length;
    return apply$1($lastIndexOf, aTypedArray$b(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
  });

  var ArrayBufferViewCore$a = arrayBufferViewCore;
  var $map = arrayIteration.map;
  var typedArraySpeciesConstructor$2 = typedArraySpeciesConstructor$4;
  var aTypedArray$a = ArrayBufferViewCore$a.aTypedArray;
  var exportTypedArrayMethod$b = ArrayBufferViewCore$a.exportTypedArrayMethod; // `%TypedArray%.prototype.map` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map

  exportTypedArrayMethod$b('map', function map(mapfn
  /* , thisArg */
  ) {
    return $map(aTypedArray$a(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
      return new (typedArraySpeciesConstructor$2(O))(length);
    });
  });

  var aCallable$1 = aCallable$b;
  var toObject = toObject$g;
  var IndexedObject = indexedObject;
  var lengthOfArrayLike$1 = lengthOfArrayLike$g;
  var $TypeError$1 = TypeError; // `Array.prototype.{ reduce, reduceRight }` methods implementation

  var createMethod = function createMethod(IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aCallable$1(callbackfn);
      var O = toObject(that);
      var self = IndexedObject(O);
      var length = lengthOfArrayLike$1(O);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }

        index += i;

        if (IS_RIGHT ? index < 0 : length <= index) {
          throw $TypeError$1('Reduce of empty array with no initial value');
        }
      }

      for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
        if (index in self) {
          memo = callbackfn(memo, self[index], index, O);
        }
      }

      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
  };

  var ArrayBufferViewCore$9 = arrayBufferViewCore;
  var $reduce = arrayReduce.left;
  var aTypedArray$9 = ArrayBufferViewCore$9.aTypedArray;
  var exportTypedArrayMethod$a = ArrayBufferViewCore$9.exportTypedArrayMethod; // `%TypedArray%.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce

  exportTypedArrayMethod$a('reduce', function reduce(callbackfn
  /* , initialValue */
  ) {
    var length = arguments.length;
    return $reduce(aTypedArray$9(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$8 = arrayBufferViewCore;
  var $reduceRight = arrayReduce.right;
  var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
  var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod; // `%TypedArray%.prototype.reduceRicht` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright

  exportTypedArrayMethod$9('reduceRight', function reduceRight(callbackfn
  /* , initialValue */
  ) {
    var length = arguments.length;
    return $reduceRight(aTypedArray$8(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$7 = arrayBufferViewCore;
  var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
  var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;
  var floor = Math.floor; // `%TypedArray%.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse

  exportTypedArrayMethod$8('reverse', function reverse() {
    var that = this;
    var length = aTypedArray$7(that).length;
    var middle = floor(length / 2);
    var index = 0;
    var value;

    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    }

    return that;
  });

  var createTypedArrayConstructor = typedArrayConstructor.exports; // `Uint8ClampedArray` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects

  createTypedArrayConstructor('Uint8', function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);

  var ArrayBufferViewCore$6 = arrayBufferViewCore;
  var $some = arrayIteration.some;
  var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
  var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod; // `%TypedArray%.prototype.some` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some

  exportTypedArrayMethod$7('some', function some(callbackfn
  /* , thisArg */
  ) {
    return $some(aTypedArray$6(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var global$4 = global$p;
  var uncurryThis$2 = functionUncurryThis;
  var fails$5 = fails$W;
  var aCallable = aCallable$b;
  var internalSort = arraySort$1;
  var ArrayBufferViewCore$5 = arrayBufferViewCore;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;
  var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
  var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;
  var Uint16Array = global$4.Uint16Array;
  var un$Sort = Uint16Array && uncurryThis$2(Uint16Array.prototype.sort); // WebKit

  var ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails$5(function () {
    un$Sort(new Uint16Array(2), null);
  }) && fails$5(function () {
    un$Sort(new Uint16Array(2), {});
  }));
  var STABLE_SORT = !!un$Sort && !fails$5(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 74;
    if (FF) return FF < 67;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 602;
    var array = new Uint16Array(516);
    var expected = Array(516);
    var index, mod;

    for (index = 0; index < 516; index++) {
      mod = index % 4;
      array[index] = 515 - index;
      expected[index] = index - 2 * mod + 3;
    }

    un$Sort(array, function (a, b) {
      return (a / 4 | 0) - (b / 4 | 0);
    });

    for (index = 0; index < 516; index++) {
      if (array[index] !== expected[index]) return true;
    }
  });

  var getSortCompare = function getSortCompare(comparefn) {
    return function (x, y) {
      if (comparefn !== undefined) return +comparefn(x, y) || 0; // eslint-disable-next-line no-self-compare -- NaN check

      if (y !== y) return -1; // eslint-disable-next-line no-self-compare -- NaN check

      if (x !== x) return 1;
      if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
      return x > y;
    };
  }; // `%TypedArray%.prototype.sort` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort


  exportTypedArrayMethod$6('sort', function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);
    if (STABLE_SORT) return un$Sort(this, comparefn);
    return internalSort(aTypedArray$5(this), getSortCompare(comparefn));
  }, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

  var ArrayBufferViewCore$4 = arrayBufferViewCore;
  var toLength = toLength$9;
  var toAbsoluteIndex = toAbsoluteIndex$8;
  var typedArraySpeciesConstructor$1 = typedArraySpeciesConstructor$4;
  var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
  var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod; // `%TypedArray%.prototype.subarray` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray

  exportTypedArrayMethod$5('subarray', function subarray(begin, end) {
    var O = aTypedArray$4(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex(begin, length);
    var C = typedArraySpeciesConstructor$1(O);
    return new C(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
  });

  var global$3 = global$p;
  var apply = functionApply;
  var ArrayBufferViewCore$3 = arrayBufferViewCore;
  var fails$4 = fails$W;
  var arraySlice$1 = arraySlice$8;
  var Int8Array$2 = global$3.Int8Array;
  var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
  var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod;
  var $toLocaleString = [].toLocaleString; // iOS Safari 6.x fails here

  var TO_LOCALE_STRING_BUG = !!Int8Array$2 && fails$4(function () {
    $toLocaleString.call(new Int8Array$2(1));
  });
  var FORCED$1 = fails$4(function () {
    return [1, 2].toLocaleString() != new Int8Array$2([1, 2]).toLocaleString();
  }) || !fails$4(function () {
    Int8Array$2.prototype.toLocaleString.call([1, 2]);
  }); // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring

  exportTypedArrayMethod$4('toLocaleString', function toLocaleString() {
    return apply($toLocaleString, TO_LOCALE_STRING_BUG ? arraySlice$1(aTypedArray$3(this)) : aTypedArray$3(this), arraySlice$1(arguments));
  }, FORCED$1);

  var exportTypedArrayMethod$3 = arrayBufferViewCore.exportTypedArrayMethod;
  var fails$3 = fails$W;
  var global$2 = global$p;
  var uncurryThis$1 = functionUncurryThis;
  var Uint8Array$1 = global$2.Uint8Array;
  var Uint8ArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype || {};
  var arrayToString = [].toString;
  var join = uncurryThis$1([].join);

  if (fails$3(function () {
    arrayToString.call({});
  })) {
    arrayToString = function toString() {
      return join(this);
    };
  }

  var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString; // `%TypedArray%.prototype.toString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring

  exportTypedArrayMethod$3('toString', arrayToString, IS_NOT_ARRAY_METHOD);

  var ArrayBufferViewCore$2 = arrayBufferViewCore;
  var typedArraySpeciesConstructor = typedArraySpeciesConstructor$4;
  var fails$2 = fails$W;
  var arraySlice = arraySlice$8;
  var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
  var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod;
  var FORCED = fails$2(function () {
    // eslint-disable-next-line es-x/no-typed-arrays -- required for testing
    new Int8Array(1).slice();
  }); // `%TypedArray%.prototype.slice` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice

  exportTypedArrayMethod$2('slice', function slice(start, end) {
    var list = arraySlice(aTypedArray$2(this), start, end);
    var C = typedArraySpeciesConstructor(this);
    var index = 0;
    var length = list.length;
    var result = new C(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  }, FORCED);

  var global$1 = global$p;
  var call$1 = functionCall;
  var ArrayBufferViewCore$1 = arrayBufferViewCore;
  var lengthOfArrayLike = lengthOfArrayLike$g;
  var toOffset = toOffset$2;
  var toIndexedObject = toObject$g;
  var fails$1 = fails$W;
  var RangeError$1 = global$1.RangeError;
  var Int8Array$1 = global$1.Int8Array;
  var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
  var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
  var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
  var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;
  var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails$1(function () {
    // eslint-disable-next-line es-x/no-typed-arrays -- required for testing
    var array = new Uint8ClampedArray(2);
    call$1($set, array, {
      length: 1,
      0: 3
    }, 1);
    return array[1] !== 3;
  }); // https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other

  var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$1.NATIVE_ARRAY_BUFFER_VIEWS && fails$1(function () {
    var array = new Int8Array$1(2);
    array.set(1);
    array.set('2', 1);
    return array[0] !== 0 || array[1] !== 2;
  }); // `%TypedArray%.prototype.set` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set

  exportTypedArrayMethod$1('set', function set(arrayLike
  /* , offset */
  ) {
    aTypedArray$1(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var src = toIndexedObject(arrayLike);
    if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call$1($set, this, src, offset);
    var length = this.length;
    var len = lengthOfArrayLike(src);
    var index = 0;
    if (len + offset > length) throw RangeError$1('Wrong length');

    while (index < len) {
      this[offset + index] = src[index++];
    }
  }, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

  var toPrimitive = toPrimitive$3;
  var $TypeError = TypeError; // `ToBigInt` abstract operation
  // https://tc39.es/ecma262/#sec-tobigint

  var toBigInt$1 = function toBigInt(argument) {
    var prim = toPrimitive(argument, 'number');
    if (typeof prim == 'number') throw $TypeError("Can't convert number to bigint"); // eslint-disable-next-line es-x/no-bigint -- safe

    return BigInt(prim);
  };

  var ArrayBufferViewCore = arrayBufferViewCore;
  var $fill = arrayFill$1;
  var toBigInt = toBigInt$1;
  var classof = classof$f;
  var call = functionCall;
  var uncurryThis = functionUncurryThis;
  var fails = fails$W;
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
  var slice = uncurryThis(''.slice); // V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18

  var CONVERSION_BUG = fails(function () {
    var count = 0; // eslint-disable-next-line es-x/no-typed-arrays -- safe

    new Int8Array(2).fill({
      valueOf: function valueOf() {
        return count++;
      }
    });
    return count !== 1;
  }); // `%TypedArray%.prototype.fill` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill

  exportTypedArrayMethod('fill', function fill(value
  /* , start, end */
  ) {
    var length = arguments.length;
    aTypedArray(this);
    var actualValue = slice(classof(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
    return call($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
  }, CONVERSION_BUG);

  var _Reflect = {};

  var Reflect$1;

  (function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
      var root = _typeof(commonjsGlobal) === "object" ? commonjsGlobal : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : _typeof(this) === "object" ? this : Function("return this;")();
      var exporter = makeExporter(Reflect);

      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect;
      } else {
        exporter = makeExporter(root.Reflect, exporter);
      }

      factory(exporter);

      function makeExporter(target, previous) {
        return function (key, value) {
          if (typeof target[key] !== "function") {
            Object.defineProperty(target, key, {
              configurable: true,
              writable: true,
              value: value
            });
          }

          if (previous) previous(key, value);
        };
      }
    })(function (exporter) {
      var hasOwn = Object.prototype.hasOwnProperty; // feature test for Symbol support

      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support

      var supportsProto = {
        __proto__: []
      } instanceof Array; // feature test for __proto__ support

      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate ? function () {
          return MakeDictionary(Object.create(null));
        } : supportsProto ? function () {
          return MakeDictionary({
            __proto__: null
          });
        } : function () {
          return MakeDictionary({});
        },
        has: downLevel ? function (map, key) {
          return hasOwn.call(map, key);
        } : function (map, key) {
          return key in map;
        },
        get: downLevel ? function (map, key) {
          return hasOwn.call(map, key) ? map[key] : undefined;
        } : function (map, key) {
          return map[key];
        }
      }; // Load global or shim versions of Map, Set, and WeakMap

      var functionPrototype = Object.getPrototypeOf(Function);
      var usePolyfill = (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";

      var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();

      var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();

      var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill(); // [[Metadata]] internal slot
      // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots


      var Metadata = new _WeakMap();
      /**
       * Applies a set of decorators to a property of a target object.
       * @param decorators An array of decorators.
       * @param target The target object.
       * @param propertyKey (Optional) The property key to decorate.
       * @param attributes (Optional) The property descriptor for the target key.
       * @remarks Decorators are applied in reverse order.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     Example = Reflect.decorate(decoratorsArray, Example);
       *
       *     // property (on constructor)
       *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
       *
       *     // property (on prototype)
       *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
       *
       *     // method (on constructor)
       *     Object.defineProperty(Example, "staticMethod",
       *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
       *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
       *
       *     // method (on prototype)
       *     Object.defineProperty(Example.prototype, "method",
       *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
       *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
       *
       */

      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsObject(target)) throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
          if (IsNull(attributes)) attributes = undefined;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsConstructor(target)) throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }

      exporter("decorate", decorate); // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
      // https://rbuckton.github.io/reflect-metadata/#reflect.metadata

      /**
       * A default metadata decorator factory that can be used on a class, class member, or parameter.
       * @param metadataKey The key for the metadata entry.
       * @param metadataValue The value for the metadata entry.
       * @returns A decorator function.
       * @remarks
       * If `metadataKey` is already defined for the target and target key, the
       * metadataValue for that key will be overwritten.
       * @example
       *
       *     // constructor
       *     @Reflect.metadata(key, value)
       *     class Example {
       *     }
       *
       *     // property (on constructor, TypeScript only)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         static staticProperty;
       *     }
       *
       *     // property (on prototype, TypeScript only)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         property;
       *     }
       *
       *     // method (on constructor)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         static staticMethod() { }
       *     }
       *
       *     // method (on prototype)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         method() { }
       *     }
       *
       */

      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }

        return decorator;
      }

      exporter("metadata", metadata);
      /**
       * Define a unique metadata entry on the target.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param metadataValue A value that contains attached metadata.
       * @param target The target object on which to define metadata.
       * @param propertyKey (Optional) The property key for the target.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     Reflect.defineMetadata("custom:annotation", options, Example);
       *
       *     // property (on constructor)
       *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
       *
       *     // property (on prototype)
       *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
       *
       *     // method (on constructor)
       *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
       *
       *     // method (on prototype)
       *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
       *
       *     // decorator factory as metadata-producing annotation.
       *     function MyAnnotation(options): Decorator {
       *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
       *     }
       *
       */

      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }

      exporter("defineMetadata", defineMetadata);
      /**
       * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.hasMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }

      exporter("hasMetadata", hasMetadata);
      /**
       * Gets a value indicating whether the target object has the provided metadata key defined.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }

      exporter("hasOwnMetadata", hasOwnMetadata);
      /**
       * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }

      exporter("getMetadata", getMetadata);
      /**
       * Gets the metadata value for the provided metadata key on the target object.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getOwnMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }

      exporter("getOwnMetadata", getOwnMetadata);
      /**
       * Gets the metadata keys defined on the target object or its prototype chain.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns An array of unique metadata keys.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getMetadataKeys(Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getMetadataKeys(Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getMetadataKeys(Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getMetadataKeys(Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getMetadataKeys(Example.prototype, "method");
       *
       */

      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }

      exporter("getMetadataKeys", getMetadataKeys);
      /**
       * Gets the unique metadata keys defined on the target object.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns An array of unique metadata keys.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getOwnMetadataKeys(Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
       *
       */

      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }

      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      /**
       * Deletes the metadata entry from the target object with the provided key.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata entry was found and deleted; otherwise, false.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.deleteMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return false;
        if (!metadataMap.delete(metadataKey)) return false;
        if (metadataMap.size > 0) return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0) return true;
        Metadata.delete(target);
        return true;
      }

      exporter("deleteMetadata", deleteMetadata);

      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);

          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated)) throw new TypeError();
            target = decorated;
          }
        }

        return target;
      }

      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);

          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated)) throw new TypeError();
            descriptor = decorated;
          }
        }

        return descriptor;
      }

      function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);

        if (IsUndefined(targetMetadata)) {
          if (!Create) return undefined;
          targetMetadata = new _Map();
          Metadata.set(O, targetMetadata);
        }

        var metadataMap = targetMetadata.get(P);

        if (IsUndefined(metadataMap)) {
          if (!Create) return undefined;
          metadataMap = new _Map();
          targetMetadata.set(P, metadataMap);
        }

        return metadataMap;
      } // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata


      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      } // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata


      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return false;
        return ToBoolean(metadataMap.has(MetadataKey));
      } // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata


      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
      } // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata


      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return undefined;
        return metadataMap.get(MetadataKey);
      } // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata


      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        true);
        metadataMap.set(MetadataKey, MetadataValue);
      } // 3.1.6.1 OrdinaryMetadataKeys(O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys


      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null) return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) return ownKeys;
        if (ownKeys.length <= 0) return parentKeys;
        var set = new _Set();
        var keys = [];

        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);

          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }

        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);

          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }

        return keys;
      } // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys


      function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;

        while (true) {
          var next = IteratorStep(iterator);

          if (!next) {
            keys.length = k;
            return keys;
          }

          var nextValue = IteratorValue(next);

          try {
            keys[k] = nextValue;
          } catch (e) {
            try {
              IteratorClose(iterator);
            } finally {
              throw e;
            }
          }

          k++;
        }
      } // 6 ECMAScript Data Typ0es and Values
      // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values


      function Type(x) {
        if (x === null) return 1
        /* Null */
        ;

        switch (_typeof(x)) {
          case "undefined":
            return 0
            /* Undefined */
            ;

          case "boolean":
            return 2
            /* Boolean */
            ;

          case "string":
            return 3
            /* String */
            ;

          case "symbol":
            return 4
            /* Symbol */
            ;

          case "number":
            return 5
            /* Number */
            ;

          case "object":
            return x === null ? 1
            /* Null */
            : 6
            /* Object */
            ;

          default:
            return 6
            /* Object */
            ;
        }
      } // 6.1.1 The Undefined Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type


      function IsUndefined(x) {
        return x === undefined;
      } // 6.1.2 The Null Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type


      function IsNull(x) {
        return x === null;
      } // 6.1.5 The Symbol Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type


      function IsSymbol(x) {
        return _typeof(x) === "symbol";
      } // 6.1.7 The Object Type
      // https://tc39.github.io/ecma262/#sec-object-type


      function IsObject(x) {
        return _typeof(x) === "object" ? x !== null : typeof x === "function";
      } // 7.1 Type Conversion
      // https://tc39.github.io/ecma262/#sec-type-conversion
      // 7.1.1 ToPrimitive(input [, PreferredType])
      // https://tc39.github.io/ecma262/#sec-toprimitive


      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0
          /* Undefined */
          :
            return input;

          case 1
          /* Null */
          :
            return input;

          case 2
          /* Boolean */
          :
            return input;

          case 3
          /* String */
          :
            return input;

          case 4
          /* Symbol */
          :
            return input;

          case 5
          /* Number */
          :
            return input;
        }

        var hint = PreferredType === 3
        /* String */
        ? "string" : PreferredType === 5
        /* Number */
        ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);

        if (exoticToPrim !== undefined) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result)) throw new TypeError();
          return result;
        }

        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
      } // 7.1.1.1 OrdinaryToPrimitive(O, hint)
      // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive


      function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
          var toString_1 = O.toString;

          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result)) return result;
          }

          var valueOf = O.valueOf;

          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }
        } else {
          var valueOf = O.valueOf;

          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }

          var toString_2 = O.toString;

          if (IsCallable(toString_2)) {
            var result = toString_2.call(O);
            if (!IsObject(result)) return result;
          }
        }

        throw new TypeError();
      } // 7.1.2 ToBoolean(argument)
      // https://tc39.github.io/ecma262/2016/#sec-toboolean


      function ToBoolean(argument) {
        return !!argument;
      } // 7.1.12 ToString(argument)
      // https://tc39.github.io/ecma262/#sec-tostring


      function ToString(argument) {
        return "" + argument;
      } // 7.1.14 ToPropertyKey(argument)
      // https://tc39.github.io/ecma262/#sec-topropertykey


      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3
        /* String */
        );
        if (IsSymbol(key)) return key;
        return ToString(key);
      } // 7.2 Testing and Comparison Operations
      // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
      // 7.2.2 IsArray(argument)
      // https://tc39.github.io/ecma262/#sec-isarray


      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      } // 7.2.3 IsCallable(argument)
      // https://tc39.github.io/ecma262/#sec-iscallable


      function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === "function";
      } // 7.2.4 IsConstructor(argument)
      // https://tc39.github.io/ecma262/#sec-isconstructor


      function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === "function";
      } // 7.2.7 IsPropertyKey(argument)
      // https://tc39.github.io/ecma262/#sec-ispropertykey


      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3
          /* String */
          :
            return true;

          case 4
          /* Symbol */
          :
            return true;

          default:
            return false;
        }
      } // 7.3 Operations on Objects
      // https://tc39.github.io/ecma262/#sec-operations-on-objects
      // 7.3.9 GetMethod(V, P)
      // https://tc39.github.io/ecma262/#sec-getmethod


      function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null) return undefined;
        if (!IsCallable(func)) throw new TypeError();
        return func;
      } // 7.4 Operations on Iterator Objects
      // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects


      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method)) throw new TypeError(); // from Call

        var iterator = method.call(obj);
        if (!IsObject(iterator)) throw new TypeError();
        return iterator;
      } // 7.4.4 IteratorValue(iterResult)
      // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue


      function IteratorValue(iterResult) {
        return iterResult.value;
      } // 7.4.5 IteratorStep(iterator)
      // https://tc39.github.io/ecma262/#sec-iteratorstep


      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      } // 7.4.6 IteratorClose(iterator, completion)
      // https://tc39.github.io/ecma262/#sec-iteratorclose


      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f) f.call(iterator);
      } // 9.1 Ordinary Object Internal Methods and Internal Slots
      // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
      // 9.1.1.1 OrdinaryGetPrototypeOf(O)
      // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof


      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) return proto; // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.

        if (proto !== functionPrototype) return proto; // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.

        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) return proto; // If the constructor was not a function, then we cannot determine the heritage.

        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") return proto; // If we have some kind of self-reference, then we cannot determine the heritage.

        if (constructor === O) return proto; // we have a pretty good guess at the heritage.

        return constructor;
      } // naive Map shim


      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];

        var MapIterator =
        /** @class */
        function () {
          function MapIterator(keys, values, selector) {
            this._index = 0;
            this._keys = keys;
            this._values = values;
            this._selector = selector;
          }

          MapIterator.prototype["@@iterator"] = function () {
            return this;
          };

          MapIterator.prototype[iteratorSymbol] = function () {
            return this;
          };

          MapIterator.prototype.next = function () {
            var index = this._index;

            if (index >= 0 && index < this._keys.length) {
              var result = this._selector(this._keys[index], this._values[index]);

              if (index + 1 >= this._keys.length) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              } else {
                this._index++;
              }

              return {
                value: result,
                done: false
              };
            }

            return {
              value: undefined,
              done: true
            };
          };

          MapIterator.prototype.throw = function (error) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }

            throw error;
          };

          MapIterator.prototype.return = function (value) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }

            return {
              value: value,
              done: true
            };
          };

          return MapIterator;
        }();

        return (
          /** @class */
          function () {
            function Map() {
              this._keys = [];
              this._values = [];
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }

            Object.defineProperty(Map.prototype, "size", {
              get: function get() {
                return this._keys.length;
              },
              enumerable: true,
              configurable: true
            });

            Map.prototype.has = function (key) {
              return this._find(key,
              /*insert*/
              false) >= 0;
            };

            Map.prototype.get = function (key) {
              var index = this._find(key,
              /*insert*/
              false);

              return index >= 0 ? this._values[index] : undefined;
            };

            Map.prototype.set = function (key, value) {
              var index = this._find(key,
              /*insert*/
              true);

              this._values[index] = value;
              return this;
            };

            Map.prototype.delete = function (key) {
              var index = this._find(key,
              /*insert*/
              false);

              if (index >= 0) {
                var size = this._keys.length;

                for (var i = index + 1; i < size; i++) {
                  this._keys[i - 1] = this._keys[i];
                  this._values[i - 1] = this._values[i];
                }

                this._keys.length--;
                this._values.length--;

                if (key === this._cacheKey) {
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }

                return true;
              }

              return false;
            };

            Map.prototype.clear = function () {
              this._keys.length = 0;
              this._values.length = 0;
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            };

            Map.prototype.keys = function () {
              return new MapIterator(this._keys, this._values, getKey);
            };

            Map.prototype.values = function () {
              return new MapIterator(this._keys, this._values, getValue);
            };

            Map.prototype.entries = function () {
              return new MapIterator(this._keys, this._values, getEntry);
            };

            Map.prototype["@@iterator"] = function () {
              return this.entries();
            };

            Map.prototype[iteratorSymbol] = function () {
              return this.entries();
            };

            Map.prototype._find = function (key, insert) {
              if (this._cacheKey !== key) {
                this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
              }

              if (this._cacheIndex < 0 && insert) {
                this._cacheIndex = this._keys.length;

                this._keys.push(key);

                this._values.push(undefined);
              }

              return this._cacheIndex;
            };

            return Map;
          }()
        );

        function getKey(key, _) {
          return key;
        }

        function getValue(_, value) {
          return value;
        }

        function getEntry(key, value) {
          return [key, value];
        }
      } // naive Set shim


      function CreateSetPolyfill() {
        return (
          /** @class */
          function () {
            function Set() {
              this._map = new _Map();
            }

            Object.defineProperty(Set.prototype, "size", {
              get: function get() {
                return this._map.size;
              },
              enumerable: true,
              configurable: true
            });

            Set.prototype.has = function (value) {
              return this._map.has(value);
            };

            Set.prototype.add = function (value) {
              return this._map.set(value, value), this;
            };

            Set.prototype.delete = function (value) {
              return this._map.delete(value);
            };

            Set.prototype.clear = function () {
              this._map.clear();
            };

            Set.prototype.keys = function () {
              return this._map.keys();
            };

            Set.prototype.values = function () {
              return this._map.values();
            };

            Set.prototype.entries = function () {
              return this._map.entries();
            };

            Set.prototype["@@iterator"] = function () {
              return this.keys();
            };

            Set.prototype[iteratorSymbol] = function () {
              return this.keys();
            };

            return Set;
          }()
        );
      } // naive WeakMap shim


      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (
          /** @class */
          function () {
            function WeakMap() {
              this._key = CreateUniqueKey();
            }

            WeakMap.prototype.has = function (target) {
              var table = GetOrCreateWeakMapTable(target,
              /*create*/
              false);
              return table !== undefined ? HashMap.has(table, this._key) : false;
            };

            WeakMap.prototype.get = function (target) {
              var table = GetOrCreateWeakMapTable(target,
              /*create*/
              false);
              return table !== undefined ? HashMap.get(table, this._key) : undefined;
            };

            WeakMap.prototype.set = function (target, value) {
              var table = GetOrCreateWeakMapTable(target,
              /*create*/
              true);
              table[this._key] = value;
              return this;
            };

            WeakMap.prototype.delete = function (target) {
              var table = GetOrCreateWeakMapTable(target,
              /*create*/
              false);
              return table !== undefined ? delete table[this._key] : false;
            };

            WeakMap.prototype.clear = function () {
              // NOTE: not a real clear, just makes the previous data unreachable
              this._key = CreateUniqueKey();
            };

            return WeakMap;
          }()
        );

        function CreateUniqueKey() {
          var key;

          do {
            key = "@@WeakMap@@" + CreateUUID();
          } while (HashMap.has(keys, key));

          keys[key] = true;
          return key;
        }

        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create) return undefined;
            Object.defineProperty(target, rootKey, {
              value: HashMap.create()
            });
          }

          return target[rootKey];
        }

        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i) {
            buffer[i] = Math.random() * 0xff | 0;
          }

          return buffer;
        }

        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            if (typeof crypto !== "undefined") return crypto.getRandomValues(new Uint8Array(size));
            if (typeof msCrypto !== "undefined") return msCrypto.getRandomValues(new Uint8Array(size));
            return FillRandomBytes(new Uint8Array(size), size);
          }

          return FillRandomBytes(new Array(size), size);
        }

        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE); // mark as random - RFC 4122 § 4.4

          data[6] = data[6] & 0x4f | 0x40;
          data[8] = data[8] & 0xbf | 0x80;
          var result = "";

          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8) result += "-";
            if (byte < 16) result += "0";
            result += byte.toString(16).toLowerCase();
          }

          return result;
        }
      } // uses a heuristic used by v8 and chakra to force an object into dictionary mode.


      function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect$1 || (Reflect$1 = {}));

  var Reflect$2 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    'default': _Reflect
  }, [_Reflect]);

  exports.Files = Files;
  exports.Helpers = Helpers;
  exports.KitTemplate = KitTemplate;
  exports.Logger = Logger$1;
  exports.StepsRunner = StepsRunner;
  exports.moment = moment$1;
  exports.reflect_metadata = Reflect$2;
  exports.sweetalert2 = sweetalert2;
  exports.ts_serializable = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
