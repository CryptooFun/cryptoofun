#!/bin/bash

docker build . -f ./Dockerfile -t gcr.io/cryptoofun/webapp:1.0.0
docker push gcr.io/cryptoofun/webapp:1.0.0
