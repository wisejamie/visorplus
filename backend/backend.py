from flask import Flask, jsonify

app = Flask(__name__)

# Example Python function in your backend
def example_function():
    # Your logic here, this is just a simple example
    return {'message': 'Hello from Python function!'}

# Define a route that calls the Python function
@app.route('/api/data', methods=['GET'])
def get_data():
    # Call your Python function
    result = example_function()
    # Return the result as JSON
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app