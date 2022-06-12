# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Create a method named word_containing that takes in array of strings and a letter as its parameters
# Iterate through the array filtering out anything that is false
# Search each string for a substring of letter
# do the same for capitals in string

def word_containing array, letter
    array.select { |s| s.downcase.include? letter}
end

p word_containing(beverages_array, letter_o)
p word_containing(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# Create a method named sum_of that takes in an array of numbers
# Iterate through the array and add all nums

def sum_of array
    array.sum
end

p sum_of nums_array1
p sum_of nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize model, wheels = 2
        @model = model
        @wheels = wheels
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end
    def pedal_faster num
        @current_speed += num
    end
    def brake num
        @current_speed -= num
        @current_speed < 0 ? @current_speed = 0 : @current_speed
    end
end

trek_bike = Bike.new "Trek"
p trek_bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

my_bike = Bike.new "Yeti"

my_bike.pedal_faster(10)
p my_bike.bike_info
# Expected output example: my_bike.pedal_faster(10) => 10

my_bike.pedal_faster(18)
p my_bike.bike_info
# Expected output example: my_bike.pedal_faster(18) => 28

my_bike.brake(5)
p my_bike.bike_info
# Expected output example: my_bike.brake(5) => 23

my_bike.brake(25)
p my_bike.bike_info
# Expected output example: my_bike.brake(25) => 0