#     furkan.js 0.0.1

#     (c) 2014-fuckin' ever Eray Arslan
#     furkan(person) may be freely distributed under the MIT license.
#     For all details and documentation:
#     (README.md)
((root, factory) ->
  if typeof define is "function" and define.amd
    define ["exports"], (exports) ->
      root.Furkan = factory(root, exports)
      return

  else if typeof exports isnt "undefined"
    factory root, exports
  else
    root.Furkan = factory(root, {})
  return
) this, (root, Furkan) ->
  BAD_ASS = "hi"
  Furkan.VERSION = "0.0.6"
  Furkan.NAME = "Furkan"
  Furkan.ERAY = "fuckin'"
  Furkan.YES = 1
  Furkan.NO = 0
  Furkan.ARRAY = []
  Furkan.SPACE = " "
  Furkan.LIP = ":*"
  Furkan.HAPPY = 0
  Furkan.RELATIONSHIP = "Single"
  Furkan.kiss = ->
    @HAPPY++
    @LIP

  Furkan.whoami = ->
    @NAME

  Furkan.status = ->
    @RELATIONSHIP

  Furkan.mood = ->
    tempHappy = @HAPPY
    if tempHappy is 0
      @ERAY
    else if tempHappy > 0 and tempHappy < 4
      @LIP
    else
      BAD_ASS

  Furkan.say = (text) ->
    if text.toLowerCase() is BAD_ASS
      @HAPPY--  unless @HAPPY - 1 is -1
      throw new Error(@NAME + @SPACE + "dont" + @SPACE + "apply" + @SPACE + @ERAY + @SPACE + "this" + @SPACE + "text!")
    text + @SPACE + @NAME

  Furkan.amicute = ->
    @YES

  Dolly = ->
    options = undefined
    name = undefined
    src = undefined
    copy = undefined
    copyIsArray = undefined
    clone = undefined
    target = arguments[0] or {}
    i = 1
    length = arguments.length
    deep = false
    if typeof target is "boolean"
      deep = target
      target = arguments[i] or {}
      i++
    target = {}  if typeof target isnt "object" and (Object::toString.call(target) isnt "[object Function]")
    if i is length
      target = this
      i--
    while i < length
      if (options = arguments[i])?
        for name of options
          src = target[name]
          copy = options[name]
          continue  if target is copy
          if deep and copy and ((copy.toString() is "[object Object]") or (copyIsArray = (Object::toString.call(copy) is "[object Array]")))
            if copyIsArray
              copyIsArray = false
              clone = (if src and (Object::toString.call(src) is "[object Array]") then src else [])
            else
              clone = (if src and (src.toString() is "[object Object]") then src else {})
            target[name] = Dolly(deep, clone, copy)
          else target[name] = copy  if copy isnt `undefined`
      i++
    target

  Furkan.extend = (args) ->
    @HAPPY--
    Dolly true, Dolly(true, {}, Furkan), args

  Furkan
