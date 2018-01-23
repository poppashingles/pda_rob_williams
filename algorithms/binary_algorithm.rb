sorted_numbers_array = [3, 7, 12, 15, 21, 30, 34, 39, 42]

def binary_search(array, search)
  # To begin we return a false value if the array is empty
  return false if array.empty?

  # Then we begin to split the array in half, starting by finding
  # the middle index
  middle_point = array.count/2
  middle_number = array[middle_point]

  # If the number we get is what we're searching for, return true
  return true if search = middle_number

  # Otherwise establish a new part of the array to search through.
  # This will loop through, splitting the array in half until it
  # finds the correct number.

  new_array = []

  if(search < middle_number)
    new_array = array[0..middle_number-1]
  else
    new_array = array[0..middle_number+1..array.count]
  end

  return binary_search(new_array, search)

end

# It is useful for larger searches and gets more efficient the
# larger the array compared to a linear search.

# This is referred to as an O(log(N)) algorithm
