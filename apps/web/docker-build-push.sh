#!/bin/bash

docker build . -f ./Dockerfile -t gcr.io/cryptoofun/webapp:1.0-SNAPSHOT
docker push gcr.io/cryptoofun/webapp:1.0-SNAPSHOT
