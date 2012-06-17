jQuery.fn.extend({

  taskStates:['task-empty', 'task-x', 'task-apostrophe', 'task-dash'],

  resetTaskStateClassNames:function() { 
    var elements = this;
    jQuery.each(jQuery.fn.taskStates, function() {
      elements.removeClass(this);
    })    
    return this;
  },

  resetTaskState:function() {
    this.resetTaskStateClassNames();
    
    return this.each(function() {
      jQuery(this).data('taskStateIndex', 0)
        .addClass(jQuery.fn.taskStates[0]);
    });
  },

  toggleTaskState:function() { 
    this.resetTaskStateClassNames();
  
    return this.each(function() {
      var element = jQuery(this);
      var taskStateIndex = element.data('taskStateIndex') || 0;
      taskStateIndex = (taskStateIndex + 1) % jQuery.fn.taskStates.length;
      
      element.data('taskStateIndex', taskStateIndex)
        .addClass(jQuery.fn.taskStates[taskStateIndex]);
    });
  },

});
jQuery(function () {
  $('#button-25').click(function(e) {
    e.preventDefault();
    CountdownTimer.start(25);
  });
  $('#button-5-break').click(function(e) {
    e.preventDefault();
    CountdownTimer.start(5, true);
  });
  $('#button-25-break').click(function(e) {
    e.preventDefault();
    CountdownTimer.start(25, true);
  });

jQuery(function () {

    $('#add').click(function(e) { 
    var taskItem = $('#tasks ul li:first').clone();
   taskItem
        .find('.completion a').resetTaskState()
      .end()
        .find('input[type="text"]').val("");

    $('#tasks ul').append(taskItem);
    taskItem.find('input[type="text"]:first').focus();
    return false;
  });
  
  $('#add').click().click();

  $('#tasks ul').sortable({handle:".handle"}).disableSelection();
  $('#task-footer').bg([0,0,10,10]);
  
  $('input[type="text"]:first').focus();
  
});
