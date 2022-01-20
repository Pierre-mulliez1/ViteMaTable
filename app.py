from flask import Flask, render_template, request
#from flask_mysqldb import MySQL
app = Flask(__name__)
from flaskext.mysql import MySQL

# +

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'jardinB'

mysql = MySQL(app)


# +
@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/new', methods = ['POST'])
def new():
    if request.method == 'POST':
        beer_name = request.form['name']
        beer_type = request.form['type']
        cursor = mysql.connect().cursor()
        cursor.execute(''' INSERT INTO beer_schema.beers (beer_name,beer_type) VALUES(%s,%s)''',(beer_name,beer_type))
        mysql.connect().commit()
        cursor.close()
        return "success"


# -

@app.route('/beers')
def beer():
    return render_template('beers.html')


if __name__ == '__main__':
    app.run(host='localhost', port=(5000),debug = True)


@app.errorhandler(404)
def page_not_found(error):
    return 'This page does not exist', 404

# +
#json qnd auery dtb https://acloudguru.com/hands-on-labs/building-a-web-application-with-python-and-flask?utm_campaign=421055675&utm_source=bing&utm_medium=cpc&utm_content=&utm_term=b_https%3A%2F%2Facloudguru.com%2F&adgroupid=1269936676379849&msclkid=a9628684ca2819c62ce5e737e143a291
# siimple guide https://www.codementor.io/@adityamalviya/python-flask-mysql-connection-rxblpje73
# flask documentation https://flask.palletsprojects.com/en/1.1.x/api/
