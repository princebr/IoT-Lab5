    // start executing only after document has loaded...
    
    $(document).ready(function() {
      // establish global variables for LED status
      var led1;
      var led2;
      var led3;
   
      // -----------------------------------------------------
      // ---------------------- START HERE -------------------
      
    
     	//var iotSource = new EventSource("{{ url_for('myData') }}"); 
        
	    /* intercept the incoming states from SSE */
        iotSource.onmessage = function(e) {
	
          var params = e.data.split(' ');
          console.log(e.data);
          updateSwitch(params[0]);
          updateLeds(1,params[1]);
          updateLeds(2,params[2]);
          updateLeds(3,params[3]);
        }

        /* update the Switch based on its SSE state monitor */
        function updateSwitch(switchValue) {
          if (switchValue === '1') {
            $('#switch').toggleClass('label-default', false);
            $('#switch').toggleClass('label-success', true);
          } else if (switchValue === '0') {
            $('#switch').toggleClass('label-default', true);
            $('#switch').toggleClass('label-success', false);
          }
        }

        /* update the LEDs based on their SSE state monitor */
        function updateLeds(ledNum,ledValue) {
          if (ledNum === 1) {
            if (ledValue === '1') {
              $('#red_led_label').toggleClass('label-default', false);
              $('#red_led_label').toggleClass('label-danger', true);
              led1 = "ON"
            } else if (ledValue === '0') {
              $('#red_led_label').toggleClass('label-default', true);
              $('#red_led_label').toggleClass('label-danger', false);
              led1 = "OFF"
            }
          }
          else if (ledNum === 2) {
            if (ledValue === '1') {
              $('#grn_led_label').toggleClass('label-default', false);
              $('#grn_led_label').toggleClass('label-success', true);
              led2 = "ON"
            } else if (ledValue === '0') {
              $('#grn_led_label').toggleClass('label-default', true);
              $('#grn_led_label').toggleClass('label-success', false);
              led2 = "OFF"
            }
          }
          else if (ledNum === 3) {
            if (ledValue === '1') {
              $('#blu_led_label').toggleClass('label-default', false);
              $('#blu_led_label').toggleClass('label-primary', true);
              led3 = "ON"
            } else if (ledValue === '0') {
              $('#blu_led_label').toggleClass('label-primary', true);
              $('#blu_led_label').toggleClass('label-danger', false);
              led3 = "OFF"
            }
          }
        }
   
    // Click Functions ...
        $('#red_led_btn').click(function() {
        if (led1 === "OFF") {
          led1 = "ON";
        } else {
          led1 = "OFF";
        }
        var params = 'led=1&state=' + led1;
        console.log('LED Command with params:' + params);
        $.post('/ledcmd', params, function(data, status) {
          console.log("Data: " + data + "\nStatus: " + status);
        })
      })

      $('#grn_led_btn').click(function() {
        if (led2 === "OFF") {
          led2 = "ON";
        } else {
          led2 = "OFF";
        }
        var params = 'led=2&state=' + led2;
        console.log('LED Command with params:' + params);
        $.post('/ledcmd', params, function(data, status) {
          console.log("Data: " + data + "\nStatus: " + status);
        })
      })

      $('#blu_led_btn').click(function() {
        if (led3 === "OFF") {
          led3 = "ON";
        } else {
          led3 = "OFF";
        }
        var params = 'led=3&state=' + led3;
        console.log('LED Command with params:' + params);
        $.post('/ledcmd', params, function(data, status) {
          console.log("Data: " + data + "\nStatus: " + status);
        })
      })
    })