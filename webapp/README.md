base requirements:

python2.7, virtualenv, mongodb, nodejs, bower


getting started:

```
# create the virtualenv
cd webapp
virtualenv-2.7 venv
source venv/bin/activate

# fetch frontend packages
bower update

# prep django
chmod +x manage.py
pip install -r requirements.txt
./manage.py migrate
./manage.py loaddata sites

# start the server
./manage.py runserver 0.0.0.0:8999
```
