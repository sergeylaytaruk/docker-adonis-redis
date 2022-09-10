# docker adonis4 redis mysql8

run docker
```
sudo docker-compose build
sudo docker-compose up
```
after starting docker, enter the container
```
sudo docker exec -it adonisjs4-app-api /bin/sh
```
and perform migrations
```
adonis migration:run
```
