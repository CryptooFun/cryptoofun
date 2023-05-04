#!/bin/bash

docker build . -f ./cash-wallet/Dockerfile -t gcr.io/cryptoofun/cash-wallet:1.0-SNAPSHOT
docker push gcr.io/cryptoofun/cash-wallet:1.0-SNAPSHOT

docker build . -f ./portfolio/Dockerfile -t gcr.io/cryptoofun/portfolio:1.0-SNAPSHOT
docker push gcr.io/cryptoofun/portfolio:1.0-SNAPSHOT

docker build . -f ./profile/Dockerfile -t gcr.io/cryptoofun/profile:1.0-SNAPSHOT
docker push gcr.io/cryptoofun/profile:1.0-SNAPSHOT
