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


#getAdvisees

@app.route('/advisee/degree/<user_email>', methods=['GET'])
def get_degree_advisee(user_email):
    attribute = getAttribute("degreeAdvisees", "Advisees", user_email)
    return jsonify({'degreeAdvisees': attribute})

@app.route('/advisee/major/<user_email>', methods=['GET'])
def get_major_advisee(user_email):
    attribute = getAttribute("majorAdvisees", "Advisees", user_email)
    return jsonify({'majorAdvisees': attribute})

@app.route('/advisee/interest1/<user_email>', methods=['GET'])
def get_interest1_advisee(user_email):
    attribute = getAttribute("interest1Advisees", "Advisees", user_email)
    return jsonify({'interest1Advisees': attribute})

@app.route('/advisee/interest2/<user_email>', methods=['GET'])
def get_interest2_advisee(user_email):
    attribute = getAttribute("interest2Advisees", "Advisees", user_email)
    return jsonify({'interest2Advisees': attribute})

@app.route('/advisee/interest3/<user_email>', methods=['GET'])
def get_interest3_advisee(user_email):
    attribute = getAttribute("interest3Advisees", "Advisees", user_email)
    return jsonify({'interest3Advisees': attribute})

@app.route('/advisee/bio/<user_email>', methods=['GET'])
def get_bio_advisee(user_email):
    attribute = getAttribute("bioAdvisees", "Advisees", user_email)
    return jsonify({'bioAdvisees': attribute})

@app.route('/advisee/firstname/<user_email>', methods=['GET'])
def get_firstname_advisee(user_email):
    attribute = getAttribute("firstNameAdvisees", "Advisees", user_email)
    return jsonify({'firstNameAdvisees': attribute})

@app.route('/advisee/lastname/<user_email>', methods=['GET'])
def get_lastname_advisee(user_email):
    attribute = getAttribute("lastNameAdvisees", "Advisees", user_email)
    return jsonify({'lastNameAdvisees': attribute})

@app.route('/advisee/school/<user_email>', methods=['GET'])
def get_school_advisee(user_email):
    attribute = getAttribute("schoolAdvisees", "Advisees", user_email)
    return jsonify({'schoolAdvisees': attribute})

@app.route('/advisee/pic/<user_email>', methods=['GET'])
def get_pic_advisee(user_email):
    attribute = getAttribute("picAdvisees", "Advisees", user_email)
    return jsonify({'picAdvisees': attribute})

#get advisors

@app.route('/advisor/department/<user_email>', methods=['GET'])
def get_department_advisor(user_email):
    attribute = getAttribute("departmentAdvisors", "Advisors", user_email)
    return jsonify({'departmentAdvisors': attribute})

@app.route('/advisor/interest1/<user_email>', methods=['GET'])
def get_interest1_advisor(user_email):
    attribute = getAttribute("interest1Advisors", "Advisors", user_email)
    return jsonify({'interest1Advisors': attribute})

@app.route('/advisor/interest2/<user_email>', methods=['GET'])
def get_interest2_advisor(user_email):
    attribute = getAttribute("interest2Advisors", "Advisors", user_email)
    return jsonify({'interest2Advisors': attribute})

@app.route('/advisor/interest3/<user_email>', methods=['GET'])
def get_interest3_advisor(user_email):
    attribute = getAttribute("interest3Advisors", "Advisors", user_email)
    return jsonify({'interest3Advisors': attribute})

@app.route('/advisor/degree/<user_email>', methods=['GET'])
def get_degree_advisor(user_email):
    attribute = getAttribute("openToAdvisors", "Advisors", user_email)
    return jsonify({'openToAdvisors': attribute})

@app.route('/advisor/bio/<user_email>', methods=['GET'])
def get_bio_advisor(user_email):
    attribute = getAttribute("bioAdvisors", "Advisors", user_email)
    return jsonify({'bioAdvisors': attribute})

@app.route('/advisor/firstname/<user_email>', methods=['GET'])
def get_firstname_advisor(user_email):
    attribute = getAttribute("firstNameAdvisors", "Advisors", user_email)
    return jsonify({'firstNameAdvisors': attribute})

@app.route('/advisor/lastname/<user_email>', methods=['GET'])
def get_lastname_advisor(user_email):
    attribute = getAttribute("lastNameAdvisors", "Advisors", user_email)
    return jsonify({'lastNameAdvisors': attribute})

@app.route('/advisee/school/<user_email>', methods=['GET'])
def get_school_advisee(user_email):
    attribute = getAttribute("schoolAdvisees", "Advisees", user_email)
    return jsonify({'schoolAdvisees': attribute})

@app.route('/advisor/pic/<user_email>', methods=['GET'])
def get_pic_advisor(user_email):
    attribute = getAttribute("picAdvisors", "Advisors", user_email)
    return jsonify({'picAdvisors': attribute})




@app.route('/advisee/add_user,', methods=['POST'])
def add_advisee():
    data = request.json
    degreeAdvisees = data['degreeAdvisees']
    majorAdvisees = data['majorAdvisees']
    interest1Advisees = data['interest1Advisees']
    interest2Advisees = data['interest2Advisees']
    interest3Advisees = data['interest3Advisees']
    bioAdvisees = data['bioAdvises']
    firstNameAdvisees = data['firstNameAdvisees']
    lastNameAdvisees = data['lastNameAdvisees']
    emailAdvisees = data['emailAdvisees']
    passwordAdvisees = data['passwordAdvisees']
    schoolAdvisees = data['schoolAdvisees']
    to_add = (degreeAdvisees, majorAdvisees, interest1Advisees, interest2Advisees, interest3Advisees,\
              bioAdvisees, firstNameAdvisees,  lastNameAdvisees, emailAdvisees, passwordAdvisees, schoolAdvisees)
    putRowsAdvisees(to_add)

@app.route('/advisor/add_user,', methods=['POST'])
def add_advisor():
    data = request.json
    departmentAdvisors = data['departmentAdvisors']
    interest1Advisors = data['interest1Advisors']
    interest2Advisors = data['interest2Advisors']
    interest3Advisors = data['interest3Advisors']
    openToAdvisors = data['openToAdvisors']
    bioAdvisors = data['bioAdvisors']
    firstNameAdvisors = data['firstNameAdvisors']
    lastNameAdvisors = data['lastNameAdvisors']
    emailAdvisors = data['emailAdvisors']
    passwordAdvisors = data['passwordAdvisors']
    schoolAdvisors = data['schoolAdvisors']
    to_add = (departmentAdvisors, interest1Advisors, interest2Advisors, interest3Advisors, openToAdvisors,\
            bioAdvisors,   firstNameAdvisors, lastNameAdvisors, emailAdvisors,passwordAdvisors, schoolAdvisors )
    putRowsAdvisors(to_add)



if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app