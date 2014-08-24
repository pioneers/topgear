// TODO:
// * code cleanup
// * support button mapping / more than one button
// * better handling for when gamepads disconnect/reconnect at runtime
// * refactor getting gamepads into a function

require(["widgets/js/widget"], function(WidgetManager) {

  function pollGamepads() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
    for (var i = 0; i < gamepads.length; i++) {
      var gp = gamepads[i];
      if(gp) {
        registerGamepad(i);
        clearInterval(interval);
        setInterval(pollButtons, 50);
        setInterval(pollAxes, 50);
      }
    }
  }

  var gamepad;
  function registerGamepad(i) {
    gamepad = i;
  }

  var button_cache = {};
  function pollButtons() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
    var pad = gamepads[gamepad];
    var i;
    for (i = 0; i < pad.buttons.length; ++i) {
      var value = pad.buttons[i];

      if (button_cache[i] !== value) {
        notifyButton(i, value);
      }
      button_cache[i] = value;
    }
  }

  var button_notifiers = {};
  function notifyButton(i, value) {
    if (button_notifiers[i] !== undefined) {
      for (var j in button_notifiers[i]) {
        button_notifiers[i][j](value);
      }
    }
  }

  function onButton(i, callback) {
    if (button_notifiers[i] == undefined) {
      button_notifiers[i] = []
    }
    button_notifiers[i].push(callback);
  }

  var axes_cache = {};
  function pollAxes() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
    var pad = gamepads[gamepad];
    var i;
    for (i = 0; i < pad.axes.length; ++i) {
      var value = pad.axes[i];

      if (axes_cache[i] !== value) {
        notifyAnalog(i, value);
      }
      axes_cache[i] = value;
    }
  }

  var axes_notifiers = {};
  function notifyAnalog(i, value) {
    if (axes_notifiers[i] !== undefined) {
      for (var j in axes_notifiers[i]) {
        axes_notifiers[i][j](value);
      }
    }
  }

  function onAnalogMove(i, callback) {
    if (axes_notifiers[i] == undefined) {
      axes_notifiers[i] = []
    }
    axes_notifiers[i].push(callback);
  }

  // Assume gamepad events are not available. Use polling
  var interval = setInterval(pollGamepads, 500);

  /////// begin IPython stuff
  var JoystickBoolView = IPython.DOMWidgetView.extend({
    render : function(){
      // Called when view is rendered.

      // This is a single-line horizontal widget
      this.$el
        .addClass('widget-hbox-single');

      // Add a label div, which will contain the description
      this.$label = $('<div />')
        .addClass('widget-hlabel')
        .appendTo(this.$el)
        .hide();

      // Add a checkbox representing the state
      this.$checkbox = $('<input />')
        .attr('type', 'checkbox')
        .prop('disabled', true)
        .appendTo(this.$el);

      // Register an event handler with the joystick - TODO
      onButton(this.model.get('button_id'), $.proxy(this.handle_value, this));
      //onButton(1, $.proxy(this.handle_value, this));
      //register_handler($.proxy(this.handle_value, this));
      //console.log(this.model.get('button_id'));

      this.$el_to_style = this.$checkbox; // Set default element to style
      this.update(); // Set defaults.
    },

    handle_value: function(new_value) {
      // Handles when the checkbox is clicked.

      // Calling model.set will trigger all of the other views of the
      // model to update.
      this.model.set('value', !!new_value, {updated_view: this});
      this.touch();
    },

    update : function(options){
      // Update the contents of this view
      //
      // Called when the model is changed. The model may have been
      // changed by another view or by a state update from the back-end.
      this.$checkbox.prop('checked', this.model.get('value'));


      if (options === undefined || options.updated_view != this) {
        var disabled = this.model.get('disabled');
        if (disabled) {
          // Remove the gamepad event
        } else {
          // Re-introduce the gamepad event
        }

        var description = this.model.get('description');
        if (description.trim().length === 0) {
          this.$label.hide();
        } else {
          this.$label.text(description);
          MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.$label.get(0)]);
          this.$label.show();
        }
      }
      return JoystickBoolView.__super__.update.apply(this);
    },
  });
  WidgetManager.register_widget_view('JoystickBoolView', JoystickBoolView);

  var JoystickFloatView = IPython.DOMWidgetView.extend({
    render : function(){
      // Called when view is rendered.

      // This is a single-line horizontal widget
      this.$el
        .addClass('widget-hbox-single');

      // Add a label div, which will contain the description
      this.$label = $('<div />')
        .addClass('widget-hlabel')
        .appendTo(this.$el)
        .hide();

      this.$value = $('<div />')
        .addClass('widget-hlabel')
        .appendTo(this.$el);

      // Register an event handler with the joystick - TODO
      onAnalogMove(this.model.get('axis_id'), $.proxy(this.handle_value, this));
      //onButton(1, $.proxy(this.handle_value, this));
      //register_handler($.proxy(this.handle_value, this));
      //console.log(this.model.get('button_id'));

      // this.$el_to_style = this.$checkbox; // Set default element to style
      this.update(); // Set defaults.
    },

    handle_value: function(new_value) {
      // Handles when the checkbox is clicked.

      // Calling model.set will trigger all of the other views of the
      // model to update.
      this.model.set('value', new_value, {updated_view: this});
      this.touch();
    },

    update : function(options){

      this.$value.text(this.model.get('value'));


      console.log("value=" + this.model.get('value'));

      // Update the contents of this view
      //
      // Called when the model is changed. The model may have been
      // changed by another view or by a state update from the back-end.
      // this.$checkbox.prop('checked', this.model.get('value'));

      if (options === undefined || options.updated_view != this) {
        // var disabled = this.model.get('disabled');
        // if (disabled) {
        //   // Remove the gamepad event
        // } else {
        //   // Re-introduce the gamepad event
        // }

        var description = this.model.get('description');
        if (description.trim().length === 0) {
          this.$label.hide();
        } else {
          this.$label.text(description);
          MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.$label.get(0)]);
          this.$label.show();
        }
      }
      return JoystickFloatView.__super__.update.apply(this);
    },
  });

  
  WidgetManager.register_widget_view('JoystickFloatView', JoystickFloatView);
});
