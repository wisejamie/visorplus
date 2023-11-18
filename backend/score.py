import mysql.connector
from getFromDB import *
from putToDB import *

def convert_options(arr):
    if len(arr) == 1:  
        options = arr[0].strip('[]')  
        options_list = options.split(', ') 
        return options_list
    else:
        return []

def num_ids(table):
    return flatten_names(get("SELECT MAX(id" + table + ") FROM " + table + ";"))[0]

def make_interest_list(int1, int2, int3):
    combined_list = int1 + int2 + int3
    return flatten_names(combined_list)

def scoreAdvisors(id):
    scores = []
    print(num_ids("Advisors"))
    for i in range(1, num_ids("Advisors") + 1):
        score = 0
        interests = make_interest_list(getAttribute("interest1Advisors", "Advisors", i), getAttribute("interest2Advisors", "Advisors", i), getAttribute("interest3Advisors", "Advisors", i))
        if getAttribute("degreeAdvisees", "Advisees", id) in convert_options(getAttribute("openToAdvisors", "Advisors", i)):
           score = score + 1000
        if getAttribute("majorAdvisees", "Advisees", id) == getAttribute("departmentAdvisors", "Advisors", i):
            score = score + 500
        if getAttribute("interest1Advisees", "Advisees", id) in interests:
            score = score + 750
        if getAttribute("interest2Advisees", "Advisees", id) in interests:
            score = score + 750
        if getAttribute("interest3Advisees", "Advisees", id) in interests:
            score = score + 750
        scores.append((i, score))

    scores = sorted(scores, key=lambda x: x[1], reverse=True)
    return scores

print(scoreAdvisors(2))

        
        

           