import mysql.connector

host = '10.121.205.163'
database = 'sys'
user = 'JamieWise'
password = 'GoJamie123'

def put(string):
    conn = mysql.connector.connect(host=host, database=database, user=user, password=password)
    cursor = conn.cursor()
    cursor.execute(string)
    conn.commit()
    cursor.close()
    conn.close()

def putRowsAdvisees(new_data):
    insert_query = "INSERT INTO Advisees (degreeAdvisees, majorAdvisees,\
          interest1Advisees,interest2Advisees, interest3Advisees, bioAdvisees,\
            firstNameAdvisees, lastNameAdvisees, emailAdvisees, passwordAdvisees, schoolAdvisees) VALUES " + str(new_data) + ";"
    put(insert_query)

def putRowsAdvisors(new_data):
    insert_query = "INSERT INTO Advisors (departmentAdvisors,interest1Advisors,interest2Advisors,\
        interest3Advisors, openToAdvisors, bioAdvisors, firstNameAdvisors, lastNameAdvisors) VALUES " + str(new_data) + ";"
    put(insert_query)



