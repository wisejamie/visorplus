import mysql.connector

host = '127.0.0.1'
database = 'sys'
user = 'root'
password = 'Cslsg326$MYSQL'

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
            firstNameAdvisees, lastNameAdvisees) VALUES " + str(new_data) + ";"
    put(insert_query)

def putRowsAdvisors(new_data):
    insert_query = "INSERT INTO Advisors (departmentAdvisors,interest1Advisors,interest2Advisors,\
        interest3Advisors, openToAdvisors, bioAdvisors, firstNameAdvisors, lastNameAdvisors) VALUES " + str(new_data) + ";"
    put(insert_query)



