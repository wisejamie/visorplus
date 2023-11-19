from flask import Flask, jsonify, request
from getFromDB import *
from putToDB import *

from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)

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

@app.route('/advisee/getDegree', methods=['POST'])
def get_degree_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("degreeAdvisees", "Advisees", email)
        return jsonify({'degreeAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.route('/advisee/getMajor', methods=['POST'])
def get_major_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("majorAdvisees", "Advisees", email)
        return jsonify({'majorAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.route('/advisee/interest1', methods=['POST'])
def get_interest1_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("interest1Advisees", "Advisees", email)
        return jsonify({'interest1Advisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status

@app.route('/advisee/interest2', methods=['POST'])
def get_interest2_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("interest2Advisees", "Advisees", email)
        return jsonify({'interest2Advisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.route('/advisee/interest3', methods=['POST'])
def get_interest3_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("interest3Advisees", "Advisees", email)
        return jsonify({'interest3Advisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.route('/advisee/bio', methods=['POST'])
def get_bio_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("bioAdvisees", "Advisees", email)
        return jsonify({'bioAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.route('/advisee/first_name', methods=['POST'])
def get_first_name_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("firstNameAdvisees", "Advisees", email)
        return jsonify({'fitstNameAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status
    
@app.route('/advisee/last_name', methods=['POST'])
def get_last_name_advisee():
    data = request.json
    if 'email' in data:
        email = data['email']
        attribute = getAttribute("lastNameAdvisees", "Advisees", email)
        return jsonify({'lastNameAdvisees': attribute})
    else:
        return jsonify({'error': 'Invalid request'}), 400  # Bad request status

@app.route('/advisee/add_user', methods=['POST'])
def add_advisee():
    data = request.json
    degreeAdvisees = data['degreeAdvisees']
    majorAdvisees = data['majorAdvisees']
    interest1Advisees = data['interest1Advisees']
    interest2Advisees = data['interest2Advisees']
    interest3Advisees = data['interest3Advisees']
    bioAdvisees = data['bioAdvisees']
    firstNameAdvisees = data['firstNameAdvisees']
    lastNameAdvisees = data['lastNameAdvisees']
    emailAdvisees = data['emailAdvisees']
    passwordAdvisees = data['passwordAdvisees']
    schoolAdvisees = data['schoolAdvisees']

    to_add = (degreeAdvisees, majorAdvisees, interest1Advisees, interest2Advisees, interest3Advisees,\
              bioAdvisees, firstNameAdvisees,  lastNameAdvisees, emailAdvisees, passwordAdvisees, schoolAdvisees)
    

    putRowsAdvisees(to_add)

    return jsonify({"success": "Added succesfully"})



@app.route('/advisor/add_user', methods=['POST'])
def add_advisor():
    data = request.json
    departmentAdvisors = data['departmentAdvisors']
    interest1Advisors = data['interest1Advisors']
    interest2Advisors = data['interest2Advisors']
    interest3Advisors = data['interest3Advisors']
    openToAdvisors = data['openToAdvisors']
    bioAdvisors = data['bioAdvisors']
    firstNameAdvisors = data['firstNameAdvisors']
    firstNameAdvisors = data['lastNameAdvisors']
    emailAdvisors = data['emailAdvisors']
    passwordAdvisors = data['passwordAdvisors']
    schoolAdvisors = data['schoolAdvisors']
    to_add = (departmentAdvisors, interest1Advisors, interest2Advisors, interest3Advisors, openToAdvisors,\
            bioAdvisors,   firstNameAdvisors, firstNameAdvisors, emailAdvisors,passwordAdvisors, schoolAdvisors )
    putRowsAdvisors(to_add)


if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app