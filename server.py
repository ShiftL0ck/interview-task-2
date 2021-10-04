from os import name as os_name
import sys

from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application
import json
import random
import string

# get port as argument
PORT = sys.argv[1]

class GetDataHandler(RequestHandler):
    def set_default_headers(self):
        self.set_header('Content-Type', 'application/json')

    def get(self):
        response = dict()
        response['data'] = get_names_list()
        self.write(response)

def get_names_list(): # Get random-sized array of names.
    arr = []
    n = random.randrange(10,50)
    for i in range(0, n):
        arr.append(generate_name())
    return arr

def generate_name(size=5, charsUpper=string.ascii_uppercase, charsLower=string.ascii_lowercase): # Generate names.
    return random.choice(charsUpper) + ''.join(random.choice(charsLower) for _ in range(size))

def make_app():
    return Application([
        (r"/getData", GetDataHandler)
    ])

if 1:
    app = make_app()
    app.listen(PORT)
    IOLoop.current().start()