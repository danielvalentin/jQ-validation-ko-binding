A simple KO binding for the [jQuery Validation plugin](http://jqueryvalidation.org/)

data-bind="validateForm:true" will add the validation plugin to the form.

Instead of "true/false" an object can be added with fail/success callbacks, extra rules and notes when failing.

Available arguments are:

* a bool
* a callback (success)
* An object:
    * rules (object)
    * fail (callback
    * failnote
    * success (callback)
    * successnote
