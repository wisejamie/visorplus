
import mysql.connector

host = '10.121.205.163'
database = 'sys'
user = 'JamieWise' 
password = 'GoJamie123'

#Advisees:

def flatten_names(arr):
    flattened = [name[0] for name in arr]
    return flattened

def get(string):
    conn = mysql.connector.connect(host=host, database=database, user=user, password=password)
    cursor = conn.cursor(buffered=True)
    cursor.execute(string)
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return rows

def getAttribute(column, type, id):
    return flatten_names(get("SELECT " + column + " FROM `sys`.`" + type + "` WHERE id" + type + " = " + str(id)  + ";"))

def getColumn(column, type):
     return flatten_names(get("SELECT " + column + " FROM sys." + type + ";"))

def findCharacteristic(characteristic, type, selection):
    return flatten_names(get("SELECT id" + type + " FROM " + type + " WHERE " + characteristic + type + " = \"" + selection + "\";"))


