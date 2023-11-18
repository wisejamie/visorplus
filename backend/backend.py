from flask import Flask, jsonify, request
from getFromDB import *
from putToDB import *

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

@app.rout('/advisee/getDegree', methods=['POST'])
def get_degree_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("degreeAdvisees", "Advisees", email)
        return jsonify({'degreeAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.rout('/advisee/getMajor', methods=['POST'])
def get_major_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("majorAdvisees", "Advisees", email)
        return jsonify({'majorAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.rout('/advisee/interest1', methods=['POST'])
def get_interest1_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("interest1Advisees", "Advisees", email)
        return jsonify({'interest1Advisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status

@app.rout('/advisee/interest2', methods=['POST'])
def get_interest2_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("interest2Advisees", "Advisees", email)
        return jsonify({'interest2Advisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.rout('/advisee/interest3', methods=['POST'])
def get_interest3_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("interest3Advisees", "Advisees", email)
        return jsonify({'interest3Advisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.rout('/advisee/bio', methods=['POST'])
def get_bio_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("bioAdvisees", "Advisees", email)
        return jsonify({'bioAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.rout('/advisee/first_name', methods=['POST'])
def get_first_name_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("firstNameAdvisees", "Advisees", email)
        return jsonify({'fitstNameAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.rout('/advisee/last_name', methods=['POST'])
def get_last_name_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("lastNameAdvisees", "Advisees", email)
        return jsonify({'lastNameAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status




if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app