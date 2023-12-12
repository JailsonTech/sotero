#!/bin/bash

docker run -d -p 3306:3306 -e MYSQL_DATABASE=sotero_db -e MYSQL_PASSWORD=docker -e MYSQL_ROOT_PASSWORD=docker -e MYSQL_USER=docker --name sotero-db-mysql mysql