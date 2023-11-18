import mysql.connector
from putToDB import *
from getFromDB import *

advisee1 = ("UG", "Computer Science", "cryptography", "quantum computing", "machine learning", "I am from the 6ix!", "Jamie", "Wise")

advisee2 = ("UG", "Computer Science", "web design", "reinforcement learning", "quantum computing", "Je parle anglais", "Marlo", "Anzarut")

advisee3 = ("UG", "Mathematics", "logic", "natural language processing", "digital humanities", "Marlo likes Dinosaurs", "Max", "Gross")

advisor1 = ("Chemistry", "gas laws", "stoichiometry", "ions", "[UG, M, PHD]", "I like yoga", "Angelo", "Heavenly")

advisor2 = ("English Literature", "Emily Dickinson", "Charlotte Bronte", "Colleen Hoover", "[M, PHD]", "mmmmmmm, donuts", "Homer", "Simpstein")

advisor3 = ("Computer Science", "quantum computing", "computational physics", "hardware", "[UG]", "Hit me up, dude", "Monty", "Energié")

new_advisor = ("TEST", "TEST", "TEST", "TEST", "TEST", "TEST", "TEST", "TEST");

putRowsAdvisees(new_advisor)
