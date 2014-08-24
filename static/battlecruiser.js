// TODO:
// * code cleanup
// * all content being hosted on a random gdrive public link, need to fix

require(["widgets/js/widget"], function(WidgetManager) {

  var BattleCruiserView = IPython.DOMWidgetView.extend({
    render : function(){
      // Called when view is rendered.

      //http://drive.google.com/uc?export=view&id=0B_zpNTA3cxZhYlVQREMzRzU5VE0
      
      //var audio = new Audio('/static/battlecruiser_operational.mp3');
        var audio = new Audio('https://drive.google.com/uc?export=view&id=0B_zpNTA3cxZhYlVQREMzRzU5VE0');
      audio.play();
        
      
        
      //http://drive.google.com/uc?export=view&id=0B_zpNTA3cxZhSHhyR0dYNlhfcVk

      // This is a single-line horizontal widget
      this.$el
        .addClass('widget-hbox-single')
        .css({
          'height': '480px',
          'width': '640px',
          //'background-image':'url(/static/starcraft.png)'});
          'background-image':'url(https://drive.google.com/uc?export=view&id=0B_zpNTA3cxZhSHhyR0dYNlhfcVk)'});
      // this.$el.style.backgroundImage = "url(/static/starcraft.png)";

      // Add a label div, which will contain the description
      this.$label = $('<div />')
        .addClass('widget-hlabel')
        .appendTo(this.$el)
        .hide();

      this.$value = $('<div />')
        .addClass('widget-hlabel')
        .appendTo(this.$el)
        .hide();

      this.$x_val = $('<div />')
        .addClass('widget-hlabel')
        .appendTo(this.$el)
        .hide();

      this.$y_val = $('<div />')
        .addClass('widget-hlabel')
        .appendTo(this.$el)
        .hide();

      this.$theta_val = $('<div />')
        .addClass('widget-hlabel')
        .appendTo(this.$el)
        .hide();


      //$('<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />').appendTo(this.$el);

      this.$antiga_prime=$('<div />')
        .appendTo(this.$el);

      this.$antiga_prime.css({
        //'position' : 'fixed',
        'height' : '480px',
        'width' : '640px',
        'top' : 0,
        'left' : 0
        // 'background-image':'url(/static/starcraft.png)'

      })
      // this.$antiga_prime.style.backgroundImage = "url(/static/starcraft.png)";

      this.$bc_image=$('<div />')
        .addClass('stuff')
        .css("position", "relative")
        .appendTo(this.$antiga_prime);

      //this.$bc_image.append("<img src=/static/bc.png> </img>");
      this.$bc_image.append("<img src=https://drive.google.com/uc?export=view&id=0B_zpNTA3cxZhalY5YmFXckZiQWs> </img>");

      console.log(this.$bc_image.offset())

      // Register an event handler with the joystick - TODO
      //onAnalogMove(this.model.get('axis_id'), $.proxy(this.handle_value, this));
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
      // Update the contents of this view
      //
      // Called when the model is changed. The model may have been
      // changed by another view or by a state update from the back-end.
      // this.$checkbox.prop('checked', this.model.get('value'));

      if (options === undefined || options.updated_view != this) {
        this.$value.text(this.model.get('value'));
        this.$x_val.text(this.model.get('x'));
        this.$y_val.text(this.model.get('y'));
        this.$theta_val.text(this.model.get('theta'));

        this.$bc_image.children('img').rotate(this.model.get('theta')+310);
        //this.$bc_image.offset({'left' : this.model.get('x'), 'top' : this.model.get('y')});
        this.$bc_image.css({'left' : this.model.get('x'), 'top' : this.model.get('y')});


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
      return BattleCruiserView.__super__.update.apply(this);
    },
  });

  
  WidgetManager.register_widget_view('BattleCruiserView', BattleCruiserView);
});
