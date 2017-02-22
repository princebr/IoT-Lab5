import RPi.GPIO as GPIO

#LED1_PIN = 4    # cobbler pin 12 (GPIO18)
#LED2_PIN = 13    # cobbler pin 33 (GPIO13)
#LED3_PIN = 23    # cobbler pin 16 (GPIO23)

#LED1_PIN = 17    # cobbler pin 12 (GPIO17)
#LED2_PIN = 27    # cobbler pin 33 (GPIO27)
LED1_PIN = 19     # Moved to breadboard LEDs from CapTouch
LED2_PIN = 26     # Moved to breadboard LEDs from CapTouch
LED3_PIN = 22    # cobbler pin 16 (GPIO22)

#SWITCH_PIN = 17  # cobbler pin 7  (GPIO29)
SWITCH_PIN = 6   # cobbler pin 31  (GPIO6)

class PiGpio(object):
    """Raspberry Pi Internet 'IoT GPIO."""

    # Initialize GPIO
    def __init__(self):
        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(LED1_PIN, GPIO.OUT)
        GPIO.setup(LED2_PIN, GPIO.OUT)
        GPIO.setup(LED3_PIN, GPIO.OUT)
        GPIO.setup(SWITCH_PIN, GPIO.IN)
        GPIO.setup(SWITCH_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)

    # Read switch state
    def read_switch(self):
        """Read the switch state."""
        switch = GPIO.input(SWITCH_PIN)

        if (switch == 0):
            switch=1
        else:
            switch=0

        return switch

    # Set designated LED to ON or OFF
    def set_led(self, led, value):
        """Change the LED to the passed in value, '1' ON or '0' OFF."""
        if(led == 1):
            GPIO.output(LED1_PIN, value)
        if(led == 2):
            GPIO.output(LED2_PIN, value)
        if(led == 3):
            GPIO.output(LED3_PIN, value)

    # Get state of an LED
    def get_led(self, led):
        """Return the state value of the LED, '1' ON or '0' OFF."""
        if(led == 1):
            return GPIO.input(LED1_PIN)
        if(led == 2):
            return GPIO.input(LED2_PIN)
        if(led == 3):
            return GPIO.input(LED3_PIN)
    
        
