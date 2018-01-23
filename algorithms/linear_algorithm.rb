numbers_array = [1, 5, 8, 12, 17, 28, 32]

def linear_search(array, search)
  for item in array
    if item == search
      return true
    end
  end
  return false
end

puts linear_search(numbers_array, 17) # Outputs true
puts linear_search(numbers_array, 31) # Outputs false

# This algorithm loops through an array and checks whether each entry in it
# is equal to the number we pass in under 'search'. If the number is present
# in the array, it returns true.

# It is useful for short or unsorted arrays, where other algorithms may rely
# on the numbers being sorted first.

# This is referred to as an O(N) algorithm
