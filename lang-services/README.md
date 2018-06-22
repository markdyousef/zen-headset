# Language Services

# Dev Environment
## Flask & Cellery

### RabbitMQ Container

**With management plugin:**

        docker run -d --hostname [HOST-NAME] --name [NAME] -p 8080:15672 -p 5672:5672 rabbitmq:3-management

* management console: `http://localhost:8080`
* communication channel: `ip 5672`
* default: `{username: "guest", password: "guest"}`

### Redis Container

        docker run --name [NAME] -p 6379:6379 -d redis

### Cellery
Run a worker

        celery -A run.celery worker --loglevel=debug

### Flask App
Run server

        python app.py

Run a worker

# Test Environment

**Nevman / Postman**:
Run app

        python app.py

Run Tests
* install newman

        newman run <**_collection.json> -e <**_environment.json>

